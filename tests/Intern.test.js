const Intern = require("../lib/Intern");

describe('intern', () => {

it("Set school via constructor", () => {
  const testValue = "ISU";
  const e = new Intern("Jane", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

it("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jane", 1, "Jane@test.com", "ISU");
  expect(e.getRole()).toBe(testValue);
});

it("Get school via getSchool()", () => {
  const testValue = "ISU";
  const e = new Intern("Jane", 1, "Jane@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
});