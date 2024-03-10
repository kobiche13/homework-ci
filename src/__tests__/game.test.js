import healthBar from '../game.js';

const listChar = [
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Воин', health: 50 }, 'wounded'],
  [{ name: 'Шаман', health: 15 }, 'critical'],
];

const check = test.each(listChar);
check('testing healthbar', (character, expected) => {
  const result = healthBar(character);
  expect(result).toBe(expected);
});
