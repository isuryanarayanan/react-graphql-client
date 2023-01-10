import { createAsyncThunk } from "@reduxjs/toolkit";
import { moduleName } from "../reducer";
import { AccountsClient } from "../../apollo";
import gql from "graphql-tag";

export const login = createAsyncThunk(
  moduleName + "/login",
  async (payload: { email: string; password: string }, { dispatch }) => {
    // Create a promise which will resolve a graphql query to the endpoint http://localhost:8000/accounts/graphql
    // and will dispatch the post_login reducer if the response is successful

    const LOGIN_MUTATION = gql`
      mutation {
        obtainToken(email: "${payload.email}", password: "${payload.password}") {
          user {
            id
            username
          }
          accessToken
          refreshToken
        }
      }
    `;

    var mutation = AccountsClient.mutate({
      mutation: LOGIN_MUTATION,
    });

    mutation
      .then((response) => {
        // If the response is successful, dispatch the post_login reducer
        console.log("success");
        dispatch({
          type: moduleName + "/post_login",
          payload: {
            user: {
              id: 1,
              email: "test",
              username: "test",
              createdAt: "test",
            },
            token: "test",
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });

    return mutation;
  }
);
