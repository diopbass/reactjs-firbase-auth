import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      expires_in
      refresh_token
      token
      user {
        id
        name
        updated_at
        email_verified_at
        email
        created_at
      }
    }
  }
`;
