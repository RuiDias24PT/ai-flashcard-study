import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import Paths from "app/routes/paths";

export default [
  layout("routes/withNavbarLayout.tsx", [
    index("routes/home.tsx"),
    route(Paths.AI_GENERATOR, "routes/aiGenerator.tsx"),
  ]),
  route(Paths.AUTH, "routes/auth.tsx"),
  route("*", "routes/NotFound.tsx"),
] satisfies RouteConfig;
