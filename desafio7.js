db.getCollection("produtos")
  .updateMany(
    {},
    { $pull: { ingredientes: "cebola" } },
  );

db.getCollection("produtos")
  .find(
    {},
    { nome: 1, ingredientes: 1, _id: 0 },
  );
