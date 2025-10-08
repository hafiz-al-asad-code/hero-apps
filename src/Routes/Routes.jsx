import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AppDetails from "../pages/AppDetails/AppDetails";
import AllApps from "../pages/AllApps/AllApps";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('/appsData.json'),
        Component: Home
      },
      {
        path: 'appDetails/:id',
        loader: () => fetch('/appsData.json'),
        Component: AppDetails
      },
      {
        path: 'allApps',
        loader: () => fetch('/appsData.json'),
        Component: AllApps
      }
    ]
  }
])