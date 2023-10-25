import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Chagas1 = lazy(() => import("../views/ui/Chagas1"));
const Chagas2 = lazy(() => import("../views/ui/Chagas2"));
const Chagas3 = lazy(() => import("../views/ui/Chagas3"));
const Chagas4 = lazy(() => import("../views/ui/Chagas4"));
const Chagas5 = lazy(() => import("../views/ui/Chagas5"));
const Chagas6 = lazy(() => import("../views/ui/Chagas6"));
const Calazar1 = lazy(() => import("../views/ui/Calazar1"));
const Calazar2 = lazy(() => import("../views/ui/Calazar2"));
const Calazar3 = lazy(() => import("../views/ui/Calazar3"));
const Calazar4 = lazy(() => import("../views/ui/Calazar4"));
const Calazar5 = lazy(() => import("../views/ui/Calazar5"));
const Asis = lazy(() => import("../views/ui/Asis"));
const Hans0 = lazy(() => import("../views/ui/hanseniase0"));
const Hans1 = lazy(() => import("../views/ui/hanseniase1"));
const Hans2 = lazy(() => import("../views/ui/hanseniase2"));
const Hans3 = lazy(() => import("../views/ui/hanseniase3"));
const Leish1 = lazy(() => import("../views/ui/Leish1"));
const Leish2 = lazy(() => import("../views/ui/Leish2"));
const Leish3 = lazy(() => import("../views/ui/Leish3"));
const Turb1 = lazy(() => import("../views/ui/Turb1"));
const Turb2 = lazy(() => import("../views/ui/Turb2"));
const Turb3 = lazy(() => import("../views/ui/Turb3"));
const IDTNP = lazy(() => import("../views/ui/IDTNP"));
const Transito = lazy(() => import("../views/ui/Transito"));
const HansChart = lazy(() => import("../views/ui/HansChart.js"));
const Mapas = lazy(() => import("../views/ui/Mapas.js"));
const Boletins = lazy(() => import("../views/ui/Boletins.js"));
const BTurb = lazy(() => import("../views/ui/b_turb.js"));
const BTrans = lazy(() => import("../views/ui/b_trans.js"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/chagas1", exact: true, element: <Chagas1 /> },
      { path: "/chagas2", exact: true, element: <Chagas2 /> },
      { path: "/chagas3", exact: true, element: <Chagas3 /> },
      { path: "/chagas4", exact: true, element: <Chagas4 /> },
      { path: "/chagas5", exact: true, element: <Chagas5 /> },
      { path: "/chagas6", exact: true, element: <Chagas6 /> },
      { path: "/calazar1", exact: true, element: <Calazar1 /> },
      { path: "/calazar2", exact: true, element: <Calazar2 /> },
      { path: "/calazar3", exact: true, element: <Calazar3 /> },
      { path: "/calazar4", exact: true, element: <Calazar4 /> },
      { path: "/calazar5", exact: true, element: <Calazar5 /> },
      { path: "/asis", exact: true, element: <Asis /> },
      { path: "/hans0", exact: true, element: <Hans0 /> },
      { path: "/hans1", exact: true, element: <Hans1 /> },
      { path: "/hans2", exact: true, element: <Hans2 /> },
      { path: "/hans3", exact: true, element: <Hans3 /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/leish1", exact: true, element: <Leish1 /> },
      { path: "/Leish2", exact: true, element: <Leish2 /> },
      { path: "/Leish3", exact: true, element: <Leish3 /> },
      { path: "/Turb1", exact: true, element: <Turb1 /> },
      { path: "/Turb2", exact: true, element: <Turb2 /> },
      { path: "/Turb3", exact: true, element: <Turb3 /> },
      { path: "/idtnp", exact: true, element: <IDTNP /> },
      { path: "/transito", exact: true, element: <Transito /> },
      { path: "/hanschart", exact: true, element: <HansChart /> },
      { path: "/mapas", exact: true, element: <Mapas /> },
      { path: "/boletins", exact: true, element: <Boletins /> },
      { path: "/b_turb", exact: true, element: <BTurb /> },
      { path: "/b_trans", exact: true, element: <BTrans /> },
    ],
  },
];

export default ThemeRoutes;
