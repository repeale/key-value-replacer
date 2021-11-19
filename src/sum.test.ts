import {sum} from './sum'

describe('sum()', () => {
  test('sum two mumbers', () => {
    expect(sum(1, 1)).toBe(2)
  })
})
