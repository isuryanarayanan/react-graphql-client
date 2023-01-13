import { createAsyncThunk } from "@reduxjs/toolkit";
import { moduleName } from "../reducer";
import { AccountsClient } from "../../../graphql/accounts/client";
import { toast } from "react-toastify";
import { obtainToken } from "../../../graphql/accounts/mutations";
import { prepMutation } from "../../utils";

export const login = createAsyncThunk(
  moduleName + "/login",
  async (payload: { email: string; password: string }, { dispatch }) => {
    // Create a promise which will resolve a graphql query to the endpoint http://localhost:8000/accounts/graphql
    // and will dispatch the post_login reducer if the response is successful

    var LOGIN_MUTATION = prepMutation(
      obtainToken,
      `
        user {
          email
        }
        accessToken
        refreshToken
      `
    );

    var mutation = AccountsClient.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        email: payload.email,
        password: payload.password,
      },
    });

    mutation
      .then((response) => {
        // If the response is successful, dispatch the post_login reducer
        toast.success("Login successful");
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
        // Show only the relevant error message
        console.log(error.graphQLErrors);
        toast.error(" " + error.graphQLErrors[0].message);
      });

    return mutation;
  }
);
