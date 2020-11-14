const findPairWithGivenSum = require('./index');
test('findPairWithGivenSum function is defined', () => {
  expect(findPairWithGivenSum).toBeDefined();
});

it('returns the expected sum', () => {
  findPairWithGivenSum([8, 7, 2, 5, 3, 1], 10);
  expect(console.log.mock.calls.length).toEqual(1);
  expect(console.log.mock.calls[0][0]).toEqual(`[0, 2]`);
});

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});
