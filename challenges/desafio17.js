db.getCollection("produtos")
  .createIndex(
    { descricao: "text" },
    { default_language: "portuguese" },
  );

db.getCollection("produtos")
  .count(
    { $text:
      { $search: "\"frango\" \"hambuguer\"" },
    },
  );

/*
db.getCollection("produtos")
  .count(
    { $text:
      { $search: "\"frango\" \"hambuguer\"" },
    },
  ); */
