db.getCollection("produtos")
  .update(
    { nome: "Quarteirão com Queijo" },
    { $pop: { ingredientes: -1 } },
  );

db.getCollection("produtos")
  .find(
    {},
    { nome: 1, ingredientes: 1, _id: 0 },
  );
