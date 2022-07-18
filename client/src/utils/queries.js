import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      actions [{
        actionId
        platform
        createdAt
        link
      }]
      isBand
      bandDetails [{
          bandName 
          spotifyUri
      }]
    }
  }
`;

export const QUERY_BANDS = gql`
  query getBands {
    users {
      _id
      bandDetails {
        bandName
        members[
        ]

      }
      
      createdAt
    }
  }
`;

export const QUERY_SINGLE_BAND = gql`
  query getSingleBand($bandId: ID!) {
    bandName(bandName: $bandName) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      actions {
        _id
        action
        profile
        link
        createdAt
      }
    }
  }
`;

export default gql;
