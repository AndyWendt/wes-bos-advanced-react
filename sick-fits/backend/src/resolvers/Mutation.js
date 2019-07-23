const Mutations = {
  async createItem(parent, args, context, info) {
    // passing info makes sure that the actual item is passed back to us
    const item = await context.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    return item;
  },
  updateItem(parent, args, context, info) {
    const updates = { ...args };
    delete updates.id;
    return context.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      },
    }, info);
  }
};

module.exports = Mutations;
