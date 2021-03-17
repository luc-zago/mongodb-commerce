db.getCollection("produtos")
  .updateMany(
    {},
    { $rename: { descricao: "descricaoSite" } },
  );

db.getCollection("produtos")
  .find(
    {},
    { _id: 0, descricao: 1, descricaoSite: 1 },
  );
