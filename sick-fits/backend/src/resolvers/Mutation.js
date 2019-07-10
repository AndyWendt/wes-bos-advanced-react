const Mutations = {
  async createItem(parent, args, context, info) {
    // passing info makes sure that the actual item is passed back to us
    const item = await context.db.mutation.createItem({
      data: {
        ...args
      }
    }, info)

    return item;
  }
};

module.exports = Mutations;
