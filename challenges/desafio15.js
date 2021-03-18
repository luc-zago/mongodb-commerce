db.getCollection("produtos")
  .count(
    { nome:
      { $regex: /Mc/i },
    },
  );
