import Message from '../src/message-node'; // Assurez-vous d'importer correctement votre classe

describe('Message', () => {
  it('should return the correct message in the default language', () => {
    const message = new Message();
    expect(message.get()).toBe('Bonjour tout le monde!');
  });

  it('should set and return the correct language', () => {
    const message = new Message();
    message.setLang('en');
    expect(message.get()).toBe('Hello World!');
  });

  it('should add numbers to the array', () => {
    const message = new Message();
    message.add(1);
    message.add(2);
    expect(message.getArray()).toEqual([1, 2]);
  });
});
