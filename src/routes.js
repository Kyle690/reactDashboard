// @material-ui/icons
import {Dashboard,Person,List,LibraryBooks,BubbleChart, LocationOn,Notifications,Pages} from "@material-ui/icons";

// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
import TableList from "./views/TableList/TableList.js";
import Typography from "./views/Typography/Typography.js";
import Icons from "./views/Icons/Icons.js";
import Maps from "./views/Maps/Maps.js";
import NotificationsPage from "./views/Notifications/Notifications.js";
import LoginPage from "./views/LoginPage/LoginPage";
import LandingPage from "./views/LandingPage/LandingPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    Icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    Icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    Icon: List,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    Icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path:'/Pages',
    name:'Pages',
    Icon:Pages,
    items:[
      {
        name:'Login Page',
        path:'/login',
        layout:'/admin/pages',
        component:LoginPage
      },
      {
        name:'Landing Page',
        path:'/landing',
        layout:'/admin/pages',
        component: LandingPage
      },
      {
        name:'Profile Page',
        path:'/profile',
        layout:'/admin/pages',
        component: ProfilePage
      }
    ],
    layout:'/admin'
  },
  {
    path: "/icons",
    name: "Icons",
    Icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    Icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    Icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },

];

export default dashboardRoutes;
