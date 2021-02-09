const Employee = require("../lib/Employee");

describe('employee', () => {

it("Instantiate Employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

it("Set name for employee", () => {
  const name = "Binaya";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

it("Set name for employee", () => {
  const testValue = 1;
  const e = new Employee("Binaya", testValue);
  expect(e.id).toBe(testValue);
});

it("Set email for employee", () => {
  const testValue = "test@test.com";
  const e = new Employee("Binaya", 1, testValue);
  expect(e.email).toBe(testValue);
});

it("Get name of employee()", () => {
  const testValue = "Binaya";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

it("Get id of employee", () => {
  const testValue = 1;
  const e = new Employee("Binaya", testValue);
  expect(e.getId()).toBe(testValue);
});

it("Get email of employee", () => {
  const testValue = "test@test.com";
  const e = new Employee("Binaya", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

it("Get role of Employee", () => {
  const testValue = "Employee";
  const e = new Employee("Binaya", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
});