import React, { Suspense, useCallback, useEffect } from "react";
import WOW from 'wowjs';
import { Route, Routes } from "react-router-dom";
import { publicFlattenedRoutes } from "./routes";
import DefaultLayout from "./layouts/defaultLayout";



const loading = () => <div className="">loading...</div>;

export default function App(props) {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  const getRoutesMapper = useCallback(
    (routeData) => (
      <Route
        key={routeData.path}
        path={routeData.path}
        exact={routeData.exact}
        name={routeData.Name}
        element={<routeData.element {...props}/>}
      />
    ),
    [props]
  );

  const getMappedRoutes = useCallback(
    (routeData) => {
      let routes = routeData.map(getRoutesMapper);
      return routes;
    },
    [getRoutesMapper]
  );

  return (
    <div>
      <Suspense fallback={loading()}>
        <DefaultLayout>
          <Routes>{getMappedRoutes(publicFlattenedRoutes)}</Routes>
        </DefaultLayout>
      </Suspense>
    </div>
  );
}
