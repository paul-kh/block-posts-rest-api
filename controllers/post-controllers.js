exports.getPosts = (req, res, next) => {
  res.json([
    {
      id: "1",
      title: "post 1",
      description: "Post 1 Desc",
    },
    {
      id: "2",
      title: "post 2",
      description: "Post 2 Desc",
    },
  ]);
};
