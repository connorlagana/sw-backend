const { User, Post, Comment } = require("./models");

const seed = async () => {
  await User.destroy({ where: {} });
  await Post.destroy({ where: {} });
  await Comment.destroy({ where: {} });

  const admin = await User.create({
    username: "admin",
    password_digest:
      "$2b$11$XMmtqpO0QIrgOdGcIwr0UOVPueNHUbPAhVRwSNdx0FTao6L4pI15.",
    email: "connor.lagana@gmail.com",
    description: "I am the admin, and you will do as I say",
    image_url:
      "https://townsquare.media/site/555/files/2012/11/bill-gates.jpg?w=980&q=75",
    usertag: "@admin",
  });

  admin


  // const post1 = await Post.create({
  //   title: "I'm sexy and I know it",
  //   image_url:
  //     "https://images3.persgroep.net/rcs/Dt5HE3-2-L_njPjDgI20vMWf4vw/diocontent/155924555/_fitwidth/1240?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.9",
  //   description:
  //     "I'm feeling great today. I'm holding my national flag and just ran the fastest sprint in my life. Also, I think Connor should give me a call. I can't wait to meet him.",
  //   location: "New York, US"
  // });


  process.exit();
};

seed();
