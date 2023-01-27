const Count = require('../models/Count');

module.exports = {
    Query: {
        getCount: async (_, {code}) => {
          const count = await Count.findOne({code});
          return count;
        },
      },
    Mutation: {
        updateCount: async (_, { code }) => {
            
          const count = await Count.findOneAndUpdate({ code }, { $inc: { count: 1 } }, { new: true });
          return count;
        },
        createCode: async(_, { code }) => {
            const createCode = new Count({
                code: code,
                count: 0
            })
            const res = await createCode;
            res.save();
            return res
        }
      },
}