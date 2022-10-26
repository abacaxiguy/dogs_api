module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("comments", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      comment_author: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "users",
          key: "username",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      comment_photo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "photos",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      comment_content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comment_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async () => {},
};
