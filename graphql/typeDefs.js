const { gql } = require('apollo-server');

module.exports = gql`
type Count{
    code: String
    count: Int
}

type Query {
    getCount(code: String): Count
  }
  
type Mutation {
    updateCount(code: String): Count
    createCode(code: String): Count
  }

schema {
    query: Query
    mutation: Mutation
  }

`
