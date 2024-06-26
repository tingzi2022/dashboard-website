import Vue from "vue";
import Vuex from "vuex";
import { http2 } from "../api";

Vue.use(Vuex);

const SET_DATA = "setData";

const store = new Vuex.Store({
  state: {
    nowDate: new Date(),
    pageLoaded: false,
    ...getWH(),
    isTouch: "ontouchstart" in window,
    scrollTop: 0,
    isFocus: true,
    appInfo: {
      title: "",
    },
    token: () => {
      return localStorage.token;
    },
    loginSta: 0,
    userInfo: JSON.parse(localStorage.userInfo || "{}"),
    noticeMsg: {},
    alertInfo: {},
    navItems: [],
    // bucket
    s3: null,
    s3m: null,
    searchKey: "",
    usageInfo: {},
    // hosting
    connectAddr: "",
    netType: "",
    chainId: 0,
    buildInfo: {},
    projectInfo: {},
    worldMapJson: null,
    payBy: localStorage.payBy || "Polygon",
    orderInfo: JSON.parse(localStorage.orderInfo || "{}"),
  },
  mutations: {
    [SET_DATA](state, data) {
      for (const key in data) {
        state[key] = data[key];
      }
    },
    setProject(_, info) {
      const data = { ...info };
      const { repo = {} } = data;
      repo.pathPre = `${repo.namespace}/${repo.name}`;
      data.repo = repo;
      const { name, projectId } = (data.config = data.buildConfig);
      delete data.buildConfig;
      data.name = name;
      data.id = projectId;
      Object.assign(data, {
        state: "unknown",
        ...data.latest,
      });
      const [row] = data.domains || [];
      if (row) {
        data.mainLink = "//" + row.domain;
      }
      setState({
        projectInfo: data,
      });
    },
  },
  actions: {
    async getProjectInfo({ commit }, id) {
      const { data } = await http2.get("/project/" + id);
      if (data.platform == "IC") {
        let index = data.domains.findIndex((it) =>
          /foreverland\.xyz$/.test(it.domain)
        );
        data.domains.splice(index, 1);
      }
      commit("setProject", data);
      return data;
    },
  },
});

export const setState = (Vue.prototype.$setState = (data) => {
  store.commit(SET_DATA, data);
});
Vue.prototype.$setMsg = (noticeMsg) => {
  setState({
    noticeMsg,
  });
};

function getWH() {
  const { clientWidth, clientHeight } = document.documentElement;
  return {
    clientWidth,
    clientHeight,
  };
}
window.onresize = () => {
  setState({
    ...getWH(),
  });
};
window.onblur = () => {
  setState({
    isFocus: false,
  });
};
window.onfocus = () => {
  const isTouch = "ontouchstart" in window;
  setState({
    isFocus: true,
    isTouch,
  });
};

setInterval(() => {
  setState({
    nowDate: new Date(),
  });
}, 1e3);

window.onload = () => {
  // console.log("onload", window.jdenticon);
  setState({
    pageLoaded: true,
  });
};

window.onscroll = () => {
  setState({
    scrollTop: window.scrollY,
  });
};

export default store;
