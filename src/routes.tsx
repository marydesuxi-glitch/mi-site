import { createHashRouter } from "react-router";
import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/HomePage";
import CasePage from "@/pages/CasePage";

export const router = createHashRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/case/home-planner", Component: CasePage },
      { path: "*", Component: HomePage },
    ],
  },
]);
