db.getCollection("produtos")
  .updateMany(
    { nome: { $ne: "McChicken" } },
    { $addToSet: { ingredientes: "ketchup" } },
  );

db.getCollection("produtos")
  .find(
    {},
    { nome: 1, ingredientes: 1, _id: 0 },
  );
