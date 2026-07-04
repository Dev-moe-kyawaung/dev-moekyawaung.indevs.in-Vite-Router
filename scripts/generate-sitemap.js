import fs from 'node:fs'

const siteUrl = 'https://dev-moekyawaung.indevs.in'
const today = new Date().toISOString().slice(0, 10)
const routes = ['/', '/projects', '/about', '/contact']

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const priority = route === '/' ? '1.0' : '0.8'
    return `  <url>
    <loc>${siteUrl}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority}</priority>
  </url>`
  })
  .join('
')}
</urlset>
`

fs.writeFileSync('public/sitemap.xml', xml)
console.log('sitemap.xml generated')
