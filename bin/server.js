const fs = require("fs");
const path = require("path");
const faker = require("faker");

const users = new Array(Number(process.env.FAKE_USER) || 101)
  .fill()
  .map((_, idx) => ({
    id: faker.random.uuid(),
    avatar: idx % 2 === 0 ? faker.image.avatar() : "",
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    status: faker.random.number({ min: -1, max: 1 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }));

const me = {
  id: faker.random.uuid(),
  avatar:
    "https://media.tenor.com/images/e2124d9fbffd3ea55014f16fd7c50d3f/tenor.gif",
  email: "tuan.nguyen@example.com",
  firstName: "Tuan",
  lastName: "Nguyen",
  status: 1,
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
  notifications: [
    {
      category: "account",
      message: "New account is registered",
      createdAt: faker.date.recent()
    },
    {
      category: "account",
      message: "Sent forgot password email",
      createdAt: faker.date.recent()
    },
    {
      category: "account",
      message: "Deactivated an account",
      createdAt: faker.date.recent()
    }
  ]
};

fs.writeFileSync(
  path.resolve(__dirname, "../server/db.json"),
  JSON.stringify({ users, me }, null, 2)
);
