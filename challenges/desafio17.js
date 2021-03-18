db.getCollection("produtos")
  .createIndex(
    { descricao: "text" },
    { default_language: "pt" },
  );

db.getCollection("produtos")
  .count(
    { $text:
      { $search: "\"frango\" \"hambuguer\"" },
    },
  );
