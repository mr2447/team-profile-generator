const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Marvin', '2', 'marvin@email.com', 'mr2447');

    expect(engineer.name).toBe('Marvin');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toBe('mr2447');
})

test("get engineer's role", () => {
    const engineer = new Engineer('Marvin', '2', 'marvin@email.com', 'mr2447');

    expect(engineer.getRole()).toBe('Engineer');
})