// define top level mutation type that represents all possible mutations
const rootMutations = [`
  # Root Mutation: Allow clients to create, update, and delete records
  type RootMutation {
    # create a user
    createUser(
      firstName: String
      lastName: String
      email: String!
      password: String!
      reputation: Int
    ): User!

    # update a user
    updateUser(
      _id: ID!
      is_online: Boolean
      firstName: String
      lastName: String
      email: String
      reputation: Int
    ): User!

    # delete a user
    deleteUser(_id: ID!, email: String): User!
  }
`]

export default rootMutations
