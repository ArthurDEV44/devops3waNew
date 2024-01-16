import Koa from 'koa';

export default class Message {
  private array: number[] = [];
  private lang: string = 'fr';
  private translates: Record<string, string> = {
    'fr': 'Bonjour tout le monde!',
    'en': 'Hello World!'
  };

  constructor() {
    // Ne démarrez le serveur Koa que si le fichier est exécuté en tant que script principal
    if (require.main === module) {
      const app = new Koa();

      app.use(async (ctx) => {
        ctx.body = this.get();
      });

      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
    }
  }

  public get(): string {
    return this.translates[this.lang];
  }

  public setLang(lang: string): void {
    this.lang = lang;
  }

  public getArray(): number[] {
    return this.array;
  }

  public add(number: number): void {
    this.array.push(number);
  }
}