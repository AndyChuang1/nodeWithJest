import { getTodo } from '../../../service/jsonHolder';

describe('Test GetTodo', () => {
  it('test getTodo All tata ', async () => {
    const data = await getTodo();
    const expected = {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };
    expect(data).toEqual(expected);
  });
  it('test id : 1', async () => {
    const data = await getTodo();
    expect(data).toEqual(
      expect.objectContaining({
        id: 1,
      })
    );
  });
});
