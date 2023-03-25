import { lazy } from "react";

// const About = lazy(() => import("../components/about"));
const Landing = lazy(() => import("../components/landing/landingPage"));
// const Services = lazy(() => import("../components/services"));

const routes = [
  {
    path: "/",
    name: "Landing",
    exact: true,
    element: Landing,
    roles: [],
    isAnonymous: true,
  },
  // {
  //   path: "/services",
  //   name: "Services",
  //   element: Services,
  //   roles: [],
  //   isAnonymous: true,
  // },
  // {
  //   path: "/about", 
  //   name: "About", 
  //   element: About, 
  //   roles: [], 
  //   isAnonymous: true,
  // }
];

var allRoutes = [...routes];

export default allRoutes;
