import { gql, useQuery } from "@apollo/client";

const GET_USER_CHATS = gql`
query getUserChats($include: [Int] = 10) {
  users(where: {include: $include}) {
    edges {
      node {
        name
        databaseId
        user_fields {
          chats {
            ... on Chat {
              databaseId
              chat_fields {
                nombre
                registro
              }
            }
          }
        }
      }
    }
    nodes {
      mensajes(where: {}) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
}
`;

export default function ListadoChats() {
  const { loading, error, data } = useQuery(GET_USER_CHATS);
};
  