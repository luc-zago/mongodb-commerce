db.getCollection("produtos")
  .update(
    { nome: "Big Mac" },
    { $currentDate:
      { ultimaModificacao: true },
    },
  );

db.getCollection("produtos")
  .find(
    { ultimaModificacao: { $exists: true } },
    { _id: 0, nome: 1 },
  );
