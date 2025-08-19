import { Route, Routes } from "react-router";

import { NoMatch } from "./routes/no-match";

import { Layout } from "./routes/layout";

// import Login from "./routes/login";
// import DebugRoute from "./routes/debug";

import Home from "./routes/home";

type CustomRoute = {
  path?: string;
  element?: React.ReactNode;
  children?: CustomRoute[];
};

export function AppRoutes() {
  return <Routes>{renderRoutes(routesConfig)}</Routes>;
}

function renderRoutes(routes: CustomRoute[]) {
  return routes.map(({ children, ...route }, index: number) => (
    <Route key={index} {...route}>
      {children && renderRoutes(children)}
    </Route>
  ));
}

const routesConfig = [
  // { path: "login", element: <Login /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "debug", element: <DebugRoute /> },
    ],
  },
  { path: "*", element: <NoMatch /> },
];
