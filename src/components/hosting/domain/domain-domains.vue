<template>
  <div>
    <div class="main-wrap">
      <v-data-table
        v-model="selected"
        :loading="loading"
        :show-select="list.length > 0"
        item-key="domainId"
        :headers="headers"
        :items="list"
        no-data-text=""
        loading-text=""
        hide-default-footer
        :checkbox-color="$color1"
        @click:row="onRow"
      >
        <template v-slot:item.domain="{ item }">
          <v-btn
            text
            x-small
            class="e-btn-text"
            :color="item.valid ? 'success' : 'error'"
            :to="getPath(item)"
          >
            <b>{{ item.domain }}</b>
            <v-tooltip bottom v-if="!item.valid">
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="ml-2"
                  small
                  color="#6C7789"
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-alert-circle
                </v-icon>
              </template>
              <span>Invalid Configuration</span>
            </v-tooltip>
          </v-btn>
        </template>
        <template v-slot:item.type="{ item }">
          {{ isA(item.domain) ? "A" : "CNAME" }}
        </template>
        <template v-slot:item.value="{ item }">
          {{ isA(item.domain) ? item.ip : item.cname }}
          <v-btn icon>
            <v-icon
              small
              color="#999"
              @click.stop
              v-clipboard="isA(item.domain) ? item.ip : item.cname"
              @success="$toast('Copied to clipboard !')"
              >mdi-content-copy</v-icon
            >
          </v-btn>
        </template>
      </v-data-table>
      <div class="mt-8" v-if="!list.length">
        <e-empty :loading="loading">
          {{ loading ? "Loading domains..." : "No domains" }}
        </e-empty>
      </div>

      <div class="mt-6" v-if="pageLen > 1">
        <v-pagination
          @input="onPage"
          v-model="page"
          :length="pageLen"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          :total-visible="7"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Domain", value: "domain" },
        {
          text: "Project Name",
          value: "projectName",
        },
        {
          text: "Type",
          value: "type",
          sortable: false,
        },
        {
          text: "Value",
          value: "value",
          sortable: false,
        },
        { text: "CreateAt", value: "createTime" },
      ],
      list: [],
      page: 1,
      pageLen: 1,
      total: 0,
      selected: [],
      loading: false,
      curStep: 0,
      chooseProj: {},
      projects: null,
      adding: false,
      domain: "",
      deleting: false,
      keyword: "",
    };
  },
  computed: {
    noticeMsg() {
      return this.$store.state.noticeMsg;
    },
    projList() {
      return this.projects.filter((it) => {
        if (!this.keyword.trim()) return true;
        return new RegExp(this.keyword, "i").test(it.name);
      });
    },
  },
  watch: {
    selected(val) {
      this.$setMsg({
        name: "domains-selected",
        data: { type: "domains", val },
      });
    },
    noticeMsg({ name, data }) {
      if (name == "domains-delete" && data.type == "domains") {
        this.getList();
      }
    },
  },
  mounted() {
    this.getList();
  },
  methods: {
    getPath(item) {
      return `/hosting/project/${item.projectName || "project"}/${
        item.projectId
      }?tab=settings&sub=domains`;
    },
    onRow(it) {
      const url = this.getPath(it);
      this.$router.push(url);
    },
    onPage() {
      this.getList();
    },
    async getList() {
      try {
        this.loading = true;
        const params = {
          page: this.page - 1,
          size: 10,
        };
        const { data } = await this.$http2.get("/domain/list", {
          params,
        });
        this.list = data.content.map((it) => {
          it.createTime = new Date(it.createAt * 1e3).format();
          return it;
        });
        this.pageLen = Math.max(
          1,
          Math.ceil(data.numberOfElements / params.size)
        );
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    isA(domain) {
      const arr = domain.split(".");
      arr.pop();
      arr.pop();
      let isA = !arr.length;
      return isA;
    },
  },
};
</script>
