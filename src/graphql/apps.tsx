// All apps which are being used should be registered here
import { App } from "./interfaces";

export const apps: App[] = [
  {
    name: "accounts",
    endpoint: "accounts/graphql/",
    mutations: ["createUser", "obtainToken", "refreshToken", "verifyToken"],
    queries: ["fetchUsers"],
  },
];
