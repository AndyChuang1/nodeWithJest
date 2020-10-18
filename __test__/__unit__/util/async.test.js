import { getDataCallback, getDataPromise } from '../../../util/async';

describe('async test', () => {
  it('test callback', () => {
    getDataCallback((data) => {
      expect(data).toEqual({ msg: 'This is callback' });
    });
  });
  it('test promise', () => {
    return getDataPromise().then((data) => {
      expect(data).toEqual({ msg: 'This is promise' });
    });
  });

  it('test async promise', async () => {
    const data = await getDataPromise();
    expect(data).toEqual({ msg: 'This is promise' });
  });
});
