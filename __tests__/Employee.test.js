const Employee = require('../lib/Employee.js');
test('creates a employee object', () => {
    const employee = new Employee('Marvin', '12', 'marvin@email.com');

    expect(employee.name).toBe('Marvin');
    expect(employee.id).toBe('12');
    expect(employee.email).toEqual(expect.any(String));
})

test("gets employee's name", () => {
    const employee = new Employee('Marvin', '12', 'marvin@email.com');

    expect(employee.getName()).toBe('Marvin');
})

test("gets employee's Id", () => {
    const employee = new Employee('Marvin', '12', 'marvin@email.com');

    expect(employee.getId()).toBe('12');
})

test("get employee's email", () => {
    const employee = new Employee('Marvin', '12', 'marvin@email.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test("get employee's role", () => {
    const employee = new Employee('Marvin', '12', 'marvin@email.com');

    expect(employee.getRole()).toBe('Employee')
})
