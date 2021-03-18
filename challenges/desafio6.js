db.getCollection("produtos")
  .updateMany(
    { $or:
      [
        { nome: "Big Mac" },
        { nome: "Quarteirão com Queijo" },
      ],
    },
    { $push:
      { ingredientes: "bacon" },
    },
  );

db.getCollection("produtos")
  .find(
    {},
    { nome: 1, ingredientes: 1, _id: 0 },
  );
