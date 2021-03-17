db.getCollection("produtos")
  .updateMany(
    {},
    { $set:
      { valorUnitario: NumberDecimal("0.00") },
    },
  );

db.getCollection("produtos")
  .find(
    {},
    { _id: 0, nome: 1, valorUnitario: 1 },
  );
