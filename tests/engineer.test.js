const Engineer = require('../lib/Engineer')

// Engineer name test
test('test setting name in constructor', () => {
  const engineer = new Engineer('lindsey', '1', 'gaughanln@yahoo.com', 'gaughanln')

  expect(engineer.name).toBe('lindsey');
});
// Engineer id test
test('test setting id in constructor', () => {
  const engineer = new Engineer('lindsey', '1', 'gaughanln@yahoo.com', 'gaughanln')

  expect(engineer.id).toBe('1');
});

// Engineer email test
test('test setting email in constructor', () => {
  const engineer = new Engineer('lindsey', '1', 'gaughanln@yahoo.com', 'gaughanln')

  expect(engineer.email).toBe('gaughanln@yahoo.com');
});

// Engineer github test
test('test setting github in constructor', () => {
  const engineer = new Engineer('lindsey', '1', 'gaughanln@yahoo.com', 'gaughanln', 'gaughanln')

  expect(engineer.github).toBe('gaughanln');
});