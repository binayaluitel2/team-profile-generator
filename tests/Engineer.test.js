const Engineer = require("../lib/Engineer");

describe('employee', () => {
    
it("Set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("John", 1, "John@test.com", testValue);
  expect(e.github).toBe(testValue);
});

it("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("John", 1, "John@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

it("Get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("John", 1, "John@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
});