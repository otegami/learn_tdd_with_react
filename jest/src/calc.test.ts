import { add } from './calc'

describe('calculator', () => {
  it('basic usage', () => {
    expect(add(1, 2)).not.toEqual(2)
  })

  it('add two numbers', () => {
    expect(add(1, 2)).toEqual(3)
  })

  it('compare numbers', () => {
    expect(add(1, 2)).toBeGreaterThan(2)
    expect(add(1, 2)).toBeGreaterThanOrEqual(3)

    expect(add(1, 2)).toBeLessThan(4)
    expect(add(1, 2)).toBeLessThanOrEqual(3)
  })
})

describe('Matchers for Array and Object', () => {
  const users = ['Juntao', 'Abruzzi', 'Alex']

  it('match arrays', () => {
    expect(users).toContainEqual('Juntao')
    expect(users).toContain(users[0])
  })

  it('object in array', () => {
    const users = [
      { name: 'Juntao' },
      { name: 'Alex' }
    ]

    expect(users).toContainEqual({ name: 'Juntao' })
    // expect(users).toContain({ name: 'Juntao' })
  })

  it('match object', () => {
    const user = {
      name: 'Juntao',
      address: 'Xian, Shaanxi, China'
    }

    expect(user.name).toBeDefined()
  })

  it('string contains', () => {
    const givenName = expect.stringContaining('Juntao')
    expect('Juntao Qiu').toEqual(givenName)
  })

  it('array containing', () => {
    const userSet = expect.arrayContaining(['Juntao', 'Abruzzi'])
    expect(users).toEqual(userSet)
  })

  const user = {
    name: 'Juntao Qiu',
    address: 'Xian, Shaanxi, China',
    projects: [
      { name: 'ThoughtWorks University' },
      { name: 'ThoughtWorks Core Business Beach' }
    ]
  }

  it('family containing functions', () => {
    const matcher = expect.objectContaining({
      name: expect.stringContaining('Juntao'),
      projects: expect.arrayContaining([{
        name: expect.stringContaining('ThoughtWorks')
      }])
    })

    expect(user).toEqual(matcher)
  })
})
