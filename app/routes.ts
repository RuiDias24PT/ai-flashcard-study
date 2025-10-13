import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/withNavbarLayout.tsx", [index("routes/home.tsx")]),
  route("/auth", "routes/auth.tsx"),
  route("*", "routes/NotFound.tsx"),
] satisfies RouteConfig;
