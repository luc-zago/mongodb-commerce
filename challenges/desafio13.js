db.getCollection("produtos")
  .updateMany(
    { valoresNutricionais:
      { $elemMatch:
        {
          tipo: "sódio",
          percentual: { $gte: 40 },
        },
      },
    },
    { $push: { tags: "muito sódio" } },
  );

db.getCollection("produtos")
  .find({}, { _id: 0, nome: 1, tags: 1 });
