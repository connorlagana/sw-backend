const { User, Post, Comment } = require("./models");

const seed = async () => {
  await User.destroy({ where: {} });
  await Post.destroy({ where: {} });
  await Comment.destroy({ where: {} });

  const admin = await User.create({
    password: "password",
    email: "connor.lagana@gmail.com",
    firstName: "Connor",
    lastName: "Lagana"
  });

  const post1 = await Post.create({
    title: "FAVORITE DAUGHTER LOOSE TEE - WHITE",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018.FAVORITE.DAUGHTER.LOOSE.TEE-2.jpg?v=1558568473",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-549_WHT.FAVORITE.DAUGHTER.LOOSE.TEE-1.jpg?v=1582162766",
    colors: ["white"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 45,
    sale: null
  });

  const post1 = await Post.create({
    title: "WORK HARD LOOSE TEE",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-116_WHT.WORK.HARD.AND.BE.NICE.LOOSE.TEE-4_1.jpg?v=1585249787",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/cXQ4cQjQ_1.jpg?v=1585249787",
    colors: ["white"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 38,
    sale: null
  });

  const post1 = await Post.create({
    title: "HOMEBODY WILLOW SWEATSHIRT",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W4049-79_BLK_1.BIG.jpg?v=1571440150",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W7013-17_BLK.BIG.CATS.CAMBRIDGE.SWEATS-4_1.jpg?v=1571440714",
    colors: ["black"],
    sizes: ["xs"],
    type: "sweatshirt",
    price: 64,
    sale: null
  });

  const post1 = await Post.create({
    title: "BE A NICE HUMAN LOOSE TEE - WHITE",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-XX.BE.A.NICE.HUMAN.LOOSE.TEE.WHT-1-2.jpg?v=1574198127",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-333_WHT.NICE.HUMAN-11.jpg?v=1574379759",
    colors: ["white", "red"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 38,
    sale: null
  });

  const post1 = await Post.create({
    title: "THE TRINITY LOOSE TEE",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/THE.TRINITY.gif?v=1521591301",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018.TRINITY.jpg?v=1521591301",
    colors: ["black", "white", "gray"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 114,
    sale: 72
  });

  const post1 = await Post.create({
    title: "BE BRAVE AND KIND LOOSE TEE - BLACK",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/NEW3.jpg?v=1575660715",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-429_BLK.BE.BRAVE.BE.KIND-1_1.jpg?v=1575660715",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  const post1 = await Post.create({
    title: "",
    firstPic: "",
    secondPic: "",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee"
  });

  await admin.addPost(post1);
  await admin.addPost(post2);

  const comment1 = await Comment.create({
    comment:
      "Hi Connor here! I adore you! I think you're the best! Please accept my friend invite on Foodstagram!"
  });

  const comment2 = await Comment.create({
    comment: "You're a bloody legend mate!"
  });

  await post1.addComment(comment1);
  await connor.addComment(comment1);
  await post2.addComment(comment2);
  await Braam.addComment(comment2);

  process.exit();
};

seed();
