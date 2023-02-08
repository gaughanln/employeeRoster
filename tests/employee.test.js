const Employee = require('../lib/Employee')
 
// Employee name test
 test('test setting name in constructor', () => {
  const employee = new Employee('lindsey', '1', 'gaughanln@yahoo.com')

  expect(employee.name).toBe('lindsey');
});
// Employee id test
test('test setting id in constructor', () => {
  const employee = new Employee('lindsey', '1', 'gaughanln@yahoo.com')

  expect(employee.id).toBe('1');
});

// Employee email test
test('test setting email in constructor', () => {
  const employee = new Employee('lindsey', '1', 'gaughanln@yahoo.com')

  expect(employee.email).toBe('gaughanln@yahoo.com');
});

