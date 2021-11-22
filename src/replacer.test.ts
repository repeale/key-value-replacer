import {replacer} from './replacer'

describe('replacer()', () => {
  it('should replace first level keys references', () => {
    expect(
      replacer({
        key1: 'value1',
        key2: '${key1}',
      })
    ).toStrictEqual({
      key1: 'value1',
      key2: 'value1',
    })
  })

  it('should replace first level keys references without any order restriction', () => {
    expect(
      replacer({
        key1: '${key2}',
        key2: 'value2',
      })
    ).toStrictEqual({
      key1: 'value2',
      key2: 'value2',
    })
  })

  it('should replace key references with nested objects references', () => {
    expect(
      replacer({
        key1: {
          key11: 'value11',
        },
        key2: '${key1.key11}',
      })
    ).toStrictEqual({
      key1: {
        key11: 'value11',
      },
      key2: 'value11',
    })
  })

  it('should keep nested objects', () => {
    expect(
      replacer({
        key1: {
          key11: 'value11',
          key12: {
            key121: 'value121',
          },
        },
      })
    ).toStrictEqual({
      key1: {
        key11: 'value11',
        key12: {
          key121: 'value121',
        },
      },
    })
  })

  it('should support key referencing from nested objects', () => {
    expect(
      replacer({
        key1: {
          key11: 'value11',
          key12: {
            key121: '${key1.key11}',
          },
        },
      })
    ).toStrictEqual({
      key1: {
        key11: 'value11',
        key12: {
          key121: 'value11',
        },
      },
    })
  })

  it('should support key referencing from multiple nested objects', () => {
    expect(
      replacer({
        key1: {
          key11: 'value11',
          key12: {
            key121: {
              key1211: '${key1.key11}',
            },
          },
        },
      })
    ).toStrictEqual({
      key1: {
        key11: 'value11',
        key12: {
          key121: {
            key1211: 'value11',
          },
        },
      },
    })
  })

  it('should support replacing values keeping other string chars', () => {
    expect(
      replacer({
        key1: 'value1',
        key2: '${key1} asd',
      })
    ).toStrictEqual({
      key1: 'value1',
      key2: 'value1 asd',
    })
  })

  it('should support multiple replacement in the same key', () => {
    expect(
      replacer({
        key1: 'value1',
        key2: 'value2',
        key3: '${key1} ${key1} ${key2} ${key2}',
      })
    ).toStrictEqual({
      key1: 'value1',
      key2: 'value2',
      key3: 'value1 value1 value2 value2',
    })
  })
})
