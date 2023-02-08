const Intern = require('../lib/Intern')

// Intern name test
test('test setting name in constructor', () => {
  const intern = new Intern('lindsey', '1', 'gaughanln@yahoo.com', 'sfasu')

  expect(intern.name).toBe('lindsey');
});

// Intern id test
test('test setting id in constructor', () => {
  const intern = new Intern('lindsey', '1', 'gaughanln@yahoo.com', 'sfasu')

  expect(intern.id).toBe('1');
});

// Intern email test
test('test setting email in constructor', () => {
  const intern = new Intern('lindsey', '1', 'gaughanln@yahoo.com', 'sfasu')

  expect(intern.email).toBe('gaughanln@yahoo.com');
});

// Intern school test
test('test setting school in constructor', () => {
  const intern = new Intern('lindsey', '1', 'gaughanln@yahoo.com', 'sfasu')

  expect(intern.school).toBe('sfasu');
});