const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern ('Marvin', '3', 'marvin@email', 'USC');

    expect(intern.name).toBe('Marvin');
    expect(intern.id).toBe('3');
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toBe('USC')
})

test("get intern's school", () => {
    const intern = new Intern ('Marvin', '3', 'marvin@email', 'USC');
    expect(intern.getSchool()).toBe('USC');
})

test("get inter's role", () => {
    const intern = new Intern ('Marvin', '3', 'marvin@email', 'USC');
    expect(intern.getRole()).toBe('Intern')
})