db.getCollection("produtos")
  .updateMany(
    {},
    { $set:
      { avaliacao: NumberInt("0") },
    },
  );

db.getCollection("produtos")
  .updateMany(
    { tags: { $in: ["bovino"] } },
    { $inc: { avaliacao: 5 } },
  );

db.getCollection("produtos")
  .updateMany(
    { tags: { $in: ["ave"] } },
    { $inc: { avaliacao: 3 } },
  );

db.getCollection("produtos")
  .find(
    {},
    { nome: 1, avaliacao: 1, _id: 0 },
  );
