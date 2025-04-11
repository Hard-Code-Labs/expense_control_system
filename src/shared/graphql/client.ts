import { createClient } from "./index";
import config from "../config/config";

export const client = () =>
  createClient({
    url: config.graphqlUrl,
    headers: () => ({
      authorization: `Bearer ${sessionStorage.getItem("token") || ""}`,
    }),
  });
