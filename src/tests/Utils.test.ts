import { Utils } from '../app/Utils';

describe('Utils test suit', () => {

  beforeAll(() => {console.log('before all')});

  beforeEach(() => {console.log('before each')});

  afterAll(() => {console.log('after all')});

  afterEach(() => {console.log('after each')});

  it('first test', () => {
    const result = Utils.toUpperCase('abc');
    expect(result).toBe('ABC');
  });

  it('first parse url', () => {
    const parsedUrl = Utils.parseString('https://localhost:3000/auth');
    expect(parsedUrl.host).toBe('localhost:3000');
    expect(parsedUrl.port).toBe('3000');
    expect(parsedUrl.protocol).toBe('https:');
    expect(parsedUrl.query).toEqual({});
  })  

  test('parse url with query', () => {
    const xxx = 222;
    const parsedUrlWithQuery = Utils.parseString('https://localhost:3000/auth?login=user&password=pass');
    expect(parsedUrlWithQuery.query).toEqual({
      login: 'user', 
      password: 'pass',
    })
  })

  test('test invalid url', () => {
    function expectError() {
      Utils.parseString('')
    }
    expect(expectError).toThrowError('empty url resieved');
  })

  test('test invalid url with arrow function', () => {
    expect(() => {
      Utils.parseString('')
    }).toThrowError('empty url resieved');
  })

  test.only('test invalid url with try catch', () => {
    try {
      Utils.parseString('')
    } catch(e) {
      expect(e).toBeInstanceOf(Error);
      expect(e).toHaveProperty('message', 'empty url resieved')
    }
  })

});