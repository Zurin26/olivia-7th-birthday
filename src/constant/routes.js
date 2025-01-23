import React from "react";

const Home = React.lazy(() => import("../pages/Home"));

const About = React.lazy(() => import("../pages/About"));

const Invitation = React.lazy(() => import("../pages/Invitation"));

const Photo = React.lazy(() => import("../pages/Photo"));

export const routes = {
  HOME: {
    link: "olivia-7th-birthday",
    name: "Home",
    element: Home,
  },
  ABOUT: {
    link: "olivia-7th-birthday/about",
    name: "About",
    element: About,
  },
  INVITATION: {
    link: "olivia-7th-birthday/invitation",
    name: "Invitation",
    element: Invitation,
  },
  PHOTO: {
    link: "olivia-7th-birthday/photo",
    name: "Photo",
    element: Photo,
  },
};
