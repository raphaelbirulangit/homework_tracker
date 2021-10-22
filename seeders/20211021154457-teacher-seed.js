"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Teachers", [
      {
        name: "Alba",
        subjects: "Science",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Base",
        subjects: "Arts",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charlie",
        subjects: "Literature",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Delta",
        subjects: "Sports",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Echo",
        subjects: "Math",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Teachers", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
