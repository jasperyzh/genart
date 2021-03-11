import { createWebHistory, createRouter } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import Home from "@/views/Home.vue";
import Play from "@/views/Play.vue";
import About from "@/views/About.vue";

import TheMidi from "@/play/TheMidi.vue";
import TailwindStart from "@/play/TailwindStart.vue";
import AnchorScrolling from "@/play/AnchorScrolling.vue";
import MapTooltip from "@/play/MapTooltip.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/play",
    name: "Play",
    component: Play,
    children: [
      {
        path: "/the-midi",
        name: "TheMidi",
        component: TheMidi,
      },
      {
        path: "/tailwindstart",
        name: "TailwindStart",
        component: TailwindStart,
      },
      {
        path: "/anchorscrolling",
        name: "AnchorScrolling",
        component: AnchorScrolling,
      },
      {
        path: "/map-tooltip",
        name: "MapTooltip",
        component: MapTooltip,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
