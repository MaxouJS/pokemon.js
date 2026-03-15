import { defineConfig } from 'vite';
import { resolve } from 'path';
import { existsSync, createReadStream } from 'fs';
import { extname, join } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'pokemon.js/data': resolve(__dirname, '../src/data/index.ts'),
      'pokemon.js/engine': resolve(__dirname, '../src/engine/index.ts'),
      'pokemon.js/assets': resolve(__dirname, '../src/assets/index.ts'),
      'pokemon.js/core': resolve(__dirname, '../src/core/index.ts'),
      'pokemon.js/utils': resolve(__dirname, '../src/utils/index.ts'),
      'pokemon.js': resolve(__dirname, '../src/index.ts'),
    },
  },
  server: {
    port: 5174,
  },
  plugins: [
    {
      name: 'serve-sprites',
      configureServer(server) {
        server.middlewares.use('/sprites', (req, res, next) => {
          const filePath = join(__dirname, '../src/assets/sprites', req.url || '');
          if (existsSync(filePath)) {
            const ext = extname(filePath);
            const mime: Record<string, string> = { '.gif': 'image/gif', '.png': 'image/png', '.ogg': 'audio/ogg' };
            res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
            createReadStream(filePath).pipe(res);
          } else {
            next();
          }
        });
      },
    },
  ],
});
