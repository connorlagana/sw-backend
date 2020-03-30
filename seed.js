const { User, Post, Comment } = require("./models");

const seed = async () => {
  await User.destroy({ where: {} });
  await Post.destroy({ where: {} });
  await Comment.destroy({ where: {} });

  const admin = await User.create({
    firstName: "Connor",
    lastName: "Lagana",
    password_digest: "password",
    email: "connor.lagana@gmail.com@gmail.com"
  });

  const post2 = await Post.create({
    gender: "women",
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
  const post3 = await Post.create({
    gender: "women",
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
  const post4 = await Post.create({
    gender: "women",
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
  const post5 = await Post.create({
    gender: "women",
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
  const post6 = await Post.create({
    gender: "women",
    title: "BE BRAVE AND KIND LOOSE TEE - BLACK",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/NEW3.jpg?v=1575660715",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-429_BLK.BE.BRAVE.BE.KIND-1_1.jpg?v=1575660715",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 38,
    sale: null
  });
  const post7 = await Post.create({
    gender: "women",
    title: "FAVORITE DAUGHTER FITTED VANESSA TEE - WHITE",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3043-4_WHT.jpg?v=1550689257",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3043-4.FAVORITE.DAUGHTER.VANESSA_WHT-3.jpg?v=1550689257",
    colors: ["white"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 45,
    sale: null
  });
  const post8 = await Post.create({
    gender: "women",
    title: "THE TRINITY POPPY TEE",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/ezgif.com-optimize_2.gif?v=1532121925",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/TRINITY-POPPY.jpg?v=1532121925",
    colors: ["black", "white", "gray"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 114,
    sale: 72
  });
  const post9 = await Post.create({
    gender: "women",
    title: "FAVORITE DAUGHTER FITTED VANESSA TEE - HTHR",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3043-5.FAVORITE.DAUGHTER_HGR-17.jpg?v=1536608853",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3043-5.FAVORITE.DAUGHTER_HGR-11.jpg?v=1536608853",
    colors: ["gray"],
    sizes: ["xs", "s", "m", "xl"],
    type: "tee",
    price: 45,
    sale: null
  });
  const post10 = await Post.create({
    gender: "women",
    title: "CAMO STRIPE CAMBRIDGE SWEATS",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W7013-18_CAMO.CAMO.STRIPE.CAMBRIDGE-1.jpg?v=1570140724",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-613_WHT.HOTTER.THAN.I.SHOULD.BE.W7013-18_CAMO.CAMO.STRIPE.CAMBRIDGE-1.jpg?v=1570140724",
    colors: ["black", "green"],
    sizes: ["xs", "s", "l"],
    type: "pants",
    price: 78,
    sale: null
  });
  const post11 = await Post.create({
    gender: "women",
    title: "FAVORITE DAUGHTER LOOSE TEE - HTHR",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-549_HGR.FAVORITE.DAUGHTER.LOOSE.TEE-1.jpg?v=1574277470",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-549_HGR_1.jpg?v=1574277470",
    colors: ["gray"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 45,
    sale: null
  });
  const post12 = await Post.create({
    gender: "women",
    title: "HEART EMB TEDDY ZIP UP JACKET",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W4071-1_BLK.HEART.EMB.TEDDY.JACKET-12.jpg?v=1562951505",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W4071-1_BLK.HEART.EMB.TEDDY.ZIP.UP-10_1.jpg?v=1563315255",
    colors: ["black"],
    sizes: ["m"],
    type: "sweatshirt",
    price: 98,
    sale: null
  });
  const post13 = await Post.create({
    gender: "women",
    title: "INDOORSY LOOSE TEE",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/Uqh2Xl7g_1.jpg?v=1574202339",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-481_HGR.INDOORSY-12.jpg?v=1581719290",
    colors: ["gray"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 38,
    sale: null
  });
  const post14 = await Post.create({
    gender: "women",
    title: "GOOD VIBES LOOSE TEE - HTHR",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-9_GOOD.VIBES_HGR-2.jpg?v=1574198090",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/0WknE7wg_1.jpg?v=1574203930",
    colors: ["gray"],
    sizes: ["xs", "s", "l"],
    type: "tee",
    price: 38,
    sale: null
  });
  const post15 = await Post.create({
    gender: "women",
    title: "POPPY TEE - BLACK",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3019_BLK.POPPY.TEE-5.jpg?v=1580238734",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3019_BLK.POPPY.TEE-1_1.jpg?v=1580238857",
    colors: ["black"],
    sizes: ["s", "m"],
    type: "tee",
    price: 38,
    sale: null
  });
  const post16 = await Post.create({
    gender: "women",
    title: "POPPY TEE - WHITE",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3019_WHT.jpg?v=1583174640",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3019-1.POPPY.TEE_WHT-2.jpg?v=1583174640",
    colors: ["white"],
    sizes: ["xs", "s", "m", "l"],
    type: "tee",
    price: 38,
    sale: null
  });
  const post17 = await Post.create({
    gender: "women",
    title: "ICONIC LOOSE TEE",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-341.ICONIC.10.jpg?v=1519426785",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-341.ICONIC-BLK-3.jpg?v=1519426785",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 38,
    sale: null
  });
  const post18 = await Post.create({
    gender: "women",
    title: "KALE UNISEX SWEATSHIRT - HTHR",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/w6009A_KALE_Swetshirt_Hthr.jpg?v=1518832702",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/U2010-4.KALE.Crew.Hthr-1.jpg?v=1518832702",
    colors: ["gray"],
    sizes: ["xs", "s", "m"],
    type: "tee",
    price: 64,
    sale: null
  });
  const post19 = await Post.create({
    gender: "women",
    title: "HEART EMB CAMP TEE - BLACK",
    firstPic:
      "https://www.suburbanriot.com/products/w4051-14-blk?variant=16073632514119",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-14.HEART.EMB.CAMP.TEE_BLK-12.jpg?v=1537825401",
    colors: ["black"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 52,
    sale: null
  });
  const post20 = await Post.create({
    gender: "women",
    title: "HEART EMB LOOSE TEE - HTHR",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-417.HEART.EMB_HGR-24.jpg?v=1532045140",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W3018-417.HEART.EMB_HGR-7.jpg?v=1532045140",
    colors: ["gray"],
    sizes: ["xs", "s", "m", "l"],
    type: "tee",
    price: 38,
    sale: null
  });
  const post21 = await Post.create({
    gender: "women",
    title: "HEART EMB CAMP TEE - NAVY",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-15.HEART.EMB.CAMP_NVY-2_1.jpg?v=1537825318",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W4051-15.HEART.EMB.CAMP_NVY-2.jpg?v=1537825318",
    colors: ["blue"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "tee",
    price: 52,
    sale: null
  });
  const post22 = await Post.create({
    gender: "women",
    title: "CAMBRIDGE SWEATS - CHERRY",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W7013_CHERR.jpg?v=1559865487",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W7013_CHERR.2.jpg?v=1559865487",
    colors: ["red"],
    sizes: ["s", "m", "l", "xl"],
    type: "pants",
    price: 72,
    sale: null
  });
  const post23 = await Post.create({
    gender: "women",
    title: "KALE WILLOW SWEATSHIRT - HTHR",
    firstPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W4049-10.KALE.HGR-2.jpg?v=1514242297",
    secondPic:
      "https://cdn.shopify.com/s/files/1/0863/0656/products/W4049-10.KALE.HGR-1.jpg?v=1514242297",
    colors: ["gray", "green"],
    sizes: ["xs", "s", "m", "l", "xl"],
    type: "sweatshirt",
    price: 38,
    sale: null
  });
  // await admin.addPost(post1);
  await admin.addPost(post2);
  await admin.addPost(post3);
  await admin.addPost(post4);
  await admin.addPost(post5);
  await admin.addPost(post6);
  await admin.addPost(post7);
  await admin.addPost(post8);
  await admin.addPost(post9);
  await admin.addPost(post10);
  await admin.addPost(post11);
  await admin.addPost(post12);
  await admin.addPost(post13);
  await admin.addPost(post14);
  await admin.addPost(post15);
  await admin.addPost(post16);
  await admin.addPost(post17);
  await admin.addPost(post18);
  await admin.addPost(post19);
  await admin.addPost(post20);
  await admin.addPost(post21);
  await admin.addPost(post22);
  await admin.addPost(post23);

  // await post1.addComment(comment1);
  // await connor.addComment(comment1);
  // await post2.addComment(comment2);
  // await Braam.addComment(comment2);

  process.exit();
};

seed();
