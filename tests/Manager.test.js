const Manager = require("../lib/Manager");

describe('engineer', () => {

it("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("John", 1, "John@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

it("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("John", 1, "John@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

it("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("John", 1, "John@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
});