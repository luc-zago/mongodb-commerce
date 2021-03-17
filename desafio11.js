db.getCollection("produtos")
  .updateMany(
    {},
    { $push:
      {
        tags:
          {
            $each: ["combo", "tasty"],
            $sort: 1,
          },
      },
    },
  );

db.getCollection("produtos")
  .find({}, { tags: 1 });
