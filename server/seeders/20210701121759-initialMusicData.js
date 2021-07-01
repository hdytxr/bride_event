"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Music",
      [
        {
          title: "Kekeyi bukan boneka",
          genre: "pop",
          artist: "Kekeyi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pujaan Hati",
          genre: "pop",
          artist: "Kangen Band",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
