import { gql, useQuery } from "@apollo/client";

const GET_USER_CHATS = gql`
query getUserChats($include: [Int] = 10) {
  users(where: {include: $include}) {
    edges {
      node {
        user_fields {
          chats {
            ... on Chat {
              chat_fields {
                nombre
                registro
              }
            }
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
  