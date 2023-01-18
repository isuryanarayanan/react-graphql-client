// Mutations for the accounts app are defined here
import { Mutation } from "../interfaces";

export const createUser: Mutation = {
  name: "createUser",
  request: `
    mutation CreateUser($email: String!, $username: String!, $password: String!) {
      createUser(email:$email, username: $username, password: $password) {
        ---query---
      }
    }
  `,
  body: `
    user {
      id
      username
      email
    }
  `,
  args: ["email", "username", "password"],
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
