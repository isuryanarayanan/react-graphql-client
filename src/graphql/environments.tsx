import { Environment } from "./interfaces";

export const environments: Environment[] = [
  {
    name: "local",
    server: "http://localhost:8000/",
  },
  {
    name: "development",
    server: "https://development.glitchh.in/",
  },
  {
    name: "staging",
    server: "https://staging.glitchh.in/",
  },
  {
    name: "production",
    server: "https://api.glitchh.in/",
  },
];
