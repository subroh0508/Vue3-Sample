import express from 'express';
import { renderToString } from '@vue/server-renderer';

import serverBundle from './build/server/server.bundle.js';

const server = express();

server.get("*", async (req, res) => {
  const app = serverBundle();
  const appContent = await renderToString(app);

  const html = `
    <html>
      <head>
        <meta charset='utf-8'>
      </head>
      <body>
        ${appContent}
      </body>
    </html>
  `;

  res.end(html);
});

server.listen(8080, () => console.log('listening port: 8080'));
