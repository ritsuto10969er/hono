import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default app;

app.get('/api/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello Hano!',
  });
});

app.get('/posts/:id', (c) => {
  const page = c.req.query('page');
  const id = c.req.param('id');
  c.header('X-Message', 'Hi!');
  return c.text(`You want to see ${page} of ${id}`);
});

app.post('posts', (c) => c.text('Created', 201));
app.delete('posts/:id', (c) => {
  c.text(`${c.req.param('id')} is deleted`);
});

const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  );
};

app.get('/page', (c) => {
  return c.html(<View />);
});
