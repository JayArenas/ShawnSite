import publicRoutes from "./publicRoutes";

//flatten all nested routes
const flattenRoutes = (routes) => {
  console.log("routes", routes);
  let flatRoutes = [];

  routes = routes || [];
  routes.forEach((item) => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });

  return flatRoutes;
};

const publicFlattenedRoutes = flattenRoutes([...publicRoutes]);
console.log("flattened routes in public routes", publicFlattenedRoutes);

export { publicFlattenedRoutes };
