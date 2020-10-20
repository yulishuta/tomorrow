const { echo } = require('../src')

test('should echo', () => {
  expect(echo('World')).toEqual('Hello World')
})
