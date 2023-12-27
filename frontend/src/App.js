import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import TourManager from "./pages/tourManagement/TourManager";
import Home from "./Home/Home";
import AddTour from "./component/add_tour/AddTour";

import TourDetail from "./pages/tourDetail/TourDetail";
import Manage from "./pages/manage/Manage";
import AddUpdateLocation from "./component/add_update_location/AddUpdateLocation";
import "./index.css";
import LocationDetail from "./pages/locationDetail/LocationDetail";
import AllLocations from "./pages/locationManagement/AllLocations";
import { Login } from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/profile/Profile";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "addTour",
      element: <AddTour />,
    },
    {
      path: "editTour/:id",
      element: <AddTour />,
    },
    {
      path: "editLocation/:id",
      element: <AddUpdateLocation />,
    },
    {
      path: "tours/:id",
      element: <TourDetail />,
    },
    {
      path: "manage",
      element: <Manage />,
    },
    {
      path: "addLocation",
      element: <AddUpdateLocation />,
    },
    {
      path: "/locations/:id",
      element: <LocationDetail />,
    },
    {
      path: "/all-locations",
      element: <AllLocations />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
