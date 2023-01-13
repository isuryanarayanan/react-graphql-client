// Mutations for the accounts app are defined here

import { gql } from "@apollo/client";
import { Mutation } from "../interfaces";

export const createUser: Mutation = {
  name: "createUser",
  request: `
    mutation CreateUser($username: String!, $password: String!) {
      createUser(username: $username, password: $password) {
        ---query---
      }
    }
  `,
  body: `
    user {
      id
      username
    }
  `,
  args: ["username", "password"],
};

export const obtainToken: Mutation = {
  name: "obtainToken",

  request: `
    mutation ObtainToken($email: String!, $password: String!) {
      obtainToken(email: $email, password: $password) {
        ---query---
      }
    }
  `,
  body: `
    user {
      id
      username
    }
    accessToken
    refreshToken
  `,
  args: ["username", "password"],
};
