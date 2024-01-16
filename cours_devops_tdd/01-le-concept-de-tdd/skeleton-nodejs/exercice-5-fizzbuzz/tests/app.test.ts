import request from 'supertest';
import { server } from '../src/app';

describe('GET /', () => {
  it('should return "Fizz" for a multiple of 3', async () => {
    const response = await request(server).get('/?number=9'); // Ne pas utiliser .callback()
    expect(response.status).toBe(200);
    expect(response.text).toBe('Fizz');
  });

  it('should return "Buzz" for a multiple of 5', async () => {
    const response = await request(server).get('/?number=10'); // Ne pas utiliser .callback()
    expect(response.status).toBe(200);
    expect(response.text).toBe('Buzz');
  });

  it('should return the number for a non-multiple of 3 or 5', async () => {
    const response = await request(server).get('/?number=7'); // Ne pas utiliser .callback()
    expect(response.status).toBe(200);
    expect(response.text).toBe('7');
  });
});

afterAll(async () => {
  // Fermez le serveur Koa après les tests
  await server.close();
});
