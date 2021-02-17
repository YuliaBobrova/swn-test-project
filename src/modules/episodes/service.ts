import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query($page: Int!, $filter: String!) {
    episodes(page: $page, filter: { episode: $filter }) {
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

export const GET_EPISODE_BY_ID = gql`
  query($id: ID!) {
    episode(id: $id) {
      id
      characters {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`;
