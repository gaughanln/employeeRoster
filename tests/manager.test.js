const Manager = require('../lib/Manager')

// Manager name test
test('test setting name in constructor', () => {
  const manager = new Manager('lindsey', '1', 'gaughanln@yahoo.com', '123.456.7890')

  expect(manager.name).toBe('lindsey');
});

// Manager id test
test('test setting id in constructor', () => {
  const manager = new Manager('lindsey', '1', 'gaughanln@yahoo.com', '123.456.7890')

  expect(manager.id).toBe('1');
});

// Manager email test
test('test setting email in constructor', () => {
  const manager = new Manager('lindsey', '1', 'gaughanln@yahoo.com', '123.456.7890')

  expect(manager.email).toBe('gaughanln@yahoo.com');
});

// Manager office number test
test('test setting office number in constructor', () => {
  const manager = new Manager('lindsey', '1', 'gaughanln@yahoo.com', '123.456.7890')

  expect(manager.officeNumber).toBe('123.456.7890');
});