import http from 'node:http'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(here, 'dist')
const PORT = Number(process.env.PORT) || 3001
const HOST = process.env.HOST || '0.0.0.0'

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
}

async function readSafe(filePath) {
  try {
    return await readFile(filePath)
  } catch {
    return null
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname)
    const normalized = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, '')
    let filePath = path.join(dist, normalized === '/' ? 'index.html' : normalized.slice(1))

    // Block path traversal outside dist/
    if (!filePath.startsWith(dist)) {
      res.writeHead(403, { 'content-type': 'text/plain' })
      res.end('Forbidden')
      return
    }

    let body = await readSafe(filePath)

    // SPA fallback: unknown routes serve index.html (but real missing files 404)
    if (body === null && path.extname(filePath) === '') {
      filePath = path.join(dist, 'index.html')
      body = await readSafe(filePath)
    }

    if (body === null) {
      if (filePath.endsWith('index.html')) {
        res.writeHead(500, { 'content-type': 'text/plain' })
        res.end('dist/index.html not found — run "npm run build" first.\n')
      } else {
        res.writeHead(404, { 'content-type': 'text/plain' })
        res.end('Not found\n')
      }
      return
    }

    const ext = path.extname(filePath).toLowerCase()
    const headers = { 'content-type': MIME[ext] || 'application/octet-stream' }
    if (filePath.endsWith('index.html')) {
      headers['cache-control'] = 'no-cache'
    } else if (normalized.startsWith('/assets/')) {
      headers['cache-control'] = 'public, max-age=31536000, immutable'
    }
    res.writeHead(200, headers)
    res.end(body)
  } catch (err) {
    res.writeHead(500, { 'content-type': 'text/plain' })
    res.end('Internal server error\n')
  }
})

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Stop the other process or run with another port: PORT=${PORT + 1} npm run start`)
    process.exit(1)
  }
  throw err
})

server.listen(PORT, HOST, () => {
  console.log(`Serving dist/ at http://${HOST}:${PORT}`)
  console.log(`Expose it with: cloudflared tunnel --url http://localhost:${PORT}`)
})
