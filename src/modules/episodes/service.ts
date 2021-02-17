import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
query($page: Int!,$filter: String!) {
  episodes(page: $page, filter: {
    episode: $filter
  }) {
    info {
      count
      pages
    }
    results {
      id
      name
      episode
      created
    }
  }
}
`;
