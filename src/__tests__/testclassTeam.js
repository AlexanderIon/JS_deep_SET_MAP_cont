import Team from '../set/classTeam.js';

test('test classTeam and method toArray ', () => {
  const testUserOne = {
    name: 'Alex',
    type: 'Лучник',
  };
  const testTeam = new Team();
  testTeam.add(testUserOne);
  expect(testTeam.toArray()).toEqual([testUserOne]);
});

test(' method add', () => {
  const testUserOne = {
    name: 'Alex',
    type: 'Лучник',
  };
  const testTeam = new Team();
  testTeam.add(testUserOne);

  expect(() => testTeam.add(testUserOne)).toThrow(new Error(`${testUserOne.name} is in the Team`));
  // expect(() => testTeam.add(testUserOne)).toThrow(new Error('is in the Team'))
});

test('test method AddAll', () => {
  const UserOne = {
    name: 'name1',
    type: 'type1',
  };

  const UserTwo = {
    name: 'name2',
    type: 'type2',
  };

  const testUsersList = [
    {
      name: 'name1',
      type: 'type1',
    },
    {
      name: 'name2',
      type: 'type2',
    },

  ];
  const testTeam = new Team();

  testTeam.addAll(UserOne, UserTwo);
  expect(testTeam.toArray()).toEqual(testUsersList);
});
