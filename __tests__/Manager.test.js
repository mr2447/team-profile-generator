const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Marvin', 'marvin@email', '3', 344);

    expect(manager.name).toBe('Marvin');
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test("get manager's role", () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe('Manager')
})

test("get manager's office number", () => {
    const manager = new Manager('Marvin', 'marvin@email', '3', 344);
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()))
})