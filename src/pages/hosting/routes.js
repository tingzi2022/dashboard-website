import New from "./new";
import Projects from "./projects";
import Project from "./project";
import Build from "./build";
import Domains from "./domains";
import Statistics from "./statis-list";
import StatisDetail from "./statistics-detail";

export default [
  {
    path: "/new",
    component: New,
    meta: {
      title: "New Project",
      subTitle: "3 easy steps to get your projects live",
      isTab: 1,
      links: [
        {
          text: "Projects",
          to: "/hosting/projects",
        },
        {
          text: "New Project",
        },
      ],
    },
  },
  {
    path: "/projects",
    components: {
      cache: Projects,
    },
    meta: {
      title: "Projects",
      isTab: 1,
    },
  },
  {
    path: "/project/:projName/:id",
    component: Project,
    meta: {
      title: `{projName}`,
      isTab: 1,
      links: [
        {
          text: "Projects",
          to: "/hosting/projects",
        },
        {
          text: `{projName}`,
        },
      ],
    },
  },
  {
    path: "/build/:projName/:id/:taskId",
    component: Build,
    meta: {
      title: `{projName} - Build`,
      isTab: 1,
      links: [
        {
          text: "Projects",
          to: "/hosting/projects",
        },
        {
          text: `{projName}`,
          to: "/hosting/project/{projName}/{id}",
        },
        {
          text: "Build",
        },
      ],
    },
  },
  {
    path: "/domains",
    component: Domains,
    meta: {
      title: "Domains",
      isTab: 1,
    },
  },
  {
    path: "/statistics",
    component: Statistics,
    meta: {
      title: "Statistics",
    },
  },
  {
    path: "/statistics/:projName/:id",
    component: StatisDetail,
    meta: {
      title: "{projName} - Statistic",
      isTab: 1,
      links: [
        {
          text: "Statistics",
          to: "/hosting/statistics",
        },
        {
          text: "{projName}",
        },
      ],
    },
  },
].map((it) => {
  it.path = "/hosting" + it.path;
  it.meta.group = "Hosting";
  return it;
});
