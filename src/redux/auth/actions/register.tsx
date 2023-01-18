import { createAsyncThunk } from "@reduxjs/toolkit";
import { moduleName } from "../reducer";
import { createUser } from "../../../graphql/accounts/mutations";
import { AccountsClient } from "../../../graphql/accounts/client";
import { prepMutation } from "../../utils";
import { toast } from "react-toastify";
import { login } from "./login";

export const register = createAsyncThunk(
  moduleName + "/register",
  async (
    payload: { username: string; email: string; password: string },
    { dispatch }
  ) => {
    // Create a promise which will resolve a graphql query to the endpoint http://localhost:8000/accounts/graphql
    // and will dispatch the post_login reducer if the response is successful

    const REGISTER_MUTATION = prepMutation(createUser, null);

    var mutation = AccountsClient.mutate({
      mutation: REGISTER_MUTATION,
      variables: {
        username: payload.username,
        email: payload.email,
        password: payload.password,
      },
    });

    mutation
      .then((response) => {
        // If the response is successful show a toast message to the user
        toast.success("Registration successful");
        // Dispatch asyncThunk action login to login the user
        dispatch(
          login({
            email: payload.email,
            password: payload.password,
          })
        );
      })
      .catch((error) => {
        // Show only the relevant error message
        toast.error(" " + error.graphQLErrors[0].message);
      });

    return mutation;
  }
);
