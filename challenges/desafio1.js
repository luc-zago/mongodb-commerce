db.getCollection("produtos")
  .updateMany(
    {},
    { $set:
    { criadoPor: "Ronald McDonald" },
    },
  );

db.getCollection("produtos")
  .find(
    {},
    { nome: 1, _id: 0, criadoPor: 1 },
  );
