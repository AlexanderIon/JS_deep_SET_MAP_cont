import ErrorRepository from '../map/classErrorRep.js';

const dataListErrors = [
  ['add new', 100, 'Continue', true],
  ['add new', 200, 'Ok', true],
  ['add new', 201, 'Created', true],
  [' try to add created error', 500, 'Server Error', false],

];
const handl = test.each(dataListErrors);
handl('Test of the method ADD: %s ', (nameTest, errorInt, descriptErro, res) => {
  const testErrors = new ErrorRepository();
  testErrors.listError.set(500, 'Server Error');
  expect(testErrors.add(errorInt, descriptErro)).toBe(res);
});

test('Test of the method showkyes', () => {
  const testErrors = new ErrorRepository();
  testErrors.listError.set(500, 'Server Error');
  testErrors.listError.set(200, 'OK');
  testErrors.listError.set(501, 'Created');
  expect(testErrors.showkyes()).toEqual([500, 200, 501]);
});

const dataFoTranslate = [
  [200, 'OK'],
  [500, '500 is unknown error'],
];

const handlForTranslate = test.each(dataFoTranslate);
handlForTranslate('test of the method translate: ', (numderErr, descriptionErr) => {
  const testlistErr = new ErrorRepository();
  testlistErr.listError.set(200, 'OK');
  expect(testlistErr.translate(numderErr)).toBe(descriptionErr);
});
