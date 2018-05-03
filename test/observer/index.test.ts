import Observer from '../../src/observer/index'

describe('testing src/observer/index', () => {
  const data = {
    a: 1,
    b: [0, 1],
    c: {
      a: 1
    },
  }

  it('should be', () => {
    new Observer(data)
    expect((data as any).__ob__).toBeInstanceOf(Observer)
    expect((data.b as any).__ob__).toBeInstanceOf(Observer)
    expect((data.c as any).__ob__).toBeInstanceOf(Observer)
  })
})