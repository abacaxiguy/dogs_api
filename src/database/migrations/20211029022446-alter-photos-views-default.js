module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("photos", "views", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    });
  },

  down: async () => {},
};
