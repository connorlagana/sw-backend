const { Sequelize } = require("sequelize");

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: "sw",
    dialect: "postgres",
    define: {
      underscored: true
    }
  });
}

class Post extends Sequelize.Model {}

Post.init(
  {
    title: Sequelize.STRING,
    firstPic: Sequelize.TEXT,
    secondPic: Sequelize.TEXT,
    colors: Sequelize.ARRAY(Sequelize.TEXT),
    sizes: Sequelize.ARRAY(Sequelize.TEXT),
    type: Sequelize.TEXT
  },
  {
    sequelize,
    modelName: "post"
  }
);

class User extends Sequelize.Model {}

User.init(
  {
    password: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.TEXT
  },
  {
    sequelize,
    modelName: "user"
  }
);

class Comment extends Sequelize.Model {}

Comment.init(
  {
    comment: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "comment"
  }
);

User.hasMany(Post, { onDelete: "cascade" });
Post.belongsTo(User);
User.hasMany(Comment, { onDelete: "cascade" });
Post.hasMany(Comment, { onDelete: "cascade" });
Comment.belongsTo(Post);
Comment.belongsTo(User);

module.exports = {
  Post,
  User,
  Comment,
  sequelize
};
