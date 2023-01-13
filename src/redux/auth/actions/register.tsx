import { createAsyncThunk } from "@reduxjs/toolkit";
import { moduleName } from "../reducer";
import { AccountsClient } from "../../apollo";
import { createUser } from "../../../graphql/accounts/mutations";

export const register = createAsyncThunk(
  moduleName + "/register",
  async (
    payload: { username: string; email: string; password: string },
    { dispatch }
  ) => {
    // Create a promise which will resolve a graphql query to the endpoint http://localhost:8000/accounts/graphql
    // and will dispatch the post_login reducer if the response is successful

    const REGISTER_MUTATION = createUser.request;

    var mutation = AccountsClient.mutate({
      mutation: REGISTER_MUTATION,
      variables: {
        username: payload.username,
        email: payload.email,
        password: payload.password,
      },
    });

    return mutation;
  }
);
