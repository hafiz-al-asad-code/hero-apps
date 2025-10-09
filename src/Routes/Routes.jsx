import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AppDetails from "../pages/AppDetails/AppDetails";
import AllApps from "../pages/AllApps/AllApps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyInstallation from "../pages/MyInstallation/MyInstallation";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: 'myInstallation',
        loader: () => fetch('/appsData.json'),
        Component: MyInstallation
      },
      {
        path: '*',
        Component: ErrorPage
      }
    ]
  }
])