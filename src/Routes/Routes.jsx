import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AppDetails from "../pages/AppDetails/AppDetails";
import AllApps from "../pages/AllApps/AllApps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
        path: '*',
        Component: ErrorPage
      }
    ]
  }
])