import Koa from 'koa';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new Koa();

app.use(async (ctx) => {
  const number = parseInt(ctx.query.number as string);
  let result = '';

  if (number % 3 === 0) {
    result += 'Fizz';
  }
  if (number % 5 === 0) {
    result += 'Buzz';
  }
  if (result === '') {
    result = number.toString();
  }

  ctx.body = result;
});

const port = process.env.PORT || 3000;
export const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
