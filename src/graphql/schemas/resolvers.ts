import userData from "../../fakeData";

const resolvers = {
  Query: {
    users: async () => {
      return userData;
    },
  },
};

export { resolvers };
