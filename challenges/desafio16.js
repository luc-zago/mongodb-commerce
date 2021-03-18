db.getCollection("produtos")
  .count(
    { ingredientes: { $size: 4 } },
  );
