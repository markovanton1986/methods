import Deamon from '../deamon';

test('Must correctly create Daemon character object', () => {
  const expected = {
    name: 'Test',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defens: 40,
  };
  expect(new Deamon('Test')).toEqual(expected);
});