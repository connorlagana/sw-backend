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
    title: "I'm sexy and I know it",
    firstPic: "firstpichere",
    secondPic:
      "I'm feeling great today. I'm holding my national flag and just ran the fastest sprint in my life. Also, I think Connor should give me a call. I can't wait to meet him.",
    colors: ["red", "gray", "black"],
    sizes: ["s", "m", "l"],
    type: "tee"
  });

  const post2 = await Post.create({
    title: "I'm Freaking Bad-Ass Ray Donovan!",
    firstPic: "firstpichere",
    secondPic: "If you need a fixer for your problems, give me a call...",
    colors: ["red", "white"],
    sizes: ["l", "xl"],
    type: "pants"
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
