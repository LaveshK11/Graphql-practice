import userData from "../../fakeData";
import { BadRequest } from "../../utils/CustomErrors";

const resolvers = {
  Query: {
    users: async () => {
      // return userData
      throw new BadRequest("BAD REQUEST");
    },
  },
};

export { resolvers };
