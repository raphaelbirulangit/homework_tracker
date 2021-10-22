"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Tasks", [
      {
        taskName: "cuci baju",
        taskDescription: "bajunya dicuci",
        taskSubject: "Sports",
        deadline: new Date("2021-12-23 22:47:56.056 +0700"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskName: "kerjain mat",
        taskDescription: "banyak hitungan",
        taskSubject: "Math",
        deadline: new Date("2021-12-25 22:47:56.056 +0700"),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskName: "baca buku",
        taskDescription: "buku perlu dibaca",
        taskSubject: "Literature",
        deadline: new Date("2021-12-30 22:47:56.056 +0700"),
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
