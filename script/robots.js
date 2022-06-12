const fs = require('fs');

const generatedSitemap = `
User-agent: *
Disallow:

Sitemap: http://thehillpaycam.com/sitemap.xml
Sitemap: http://www.thehillpaycam.com/sitemap.xml
`;

fs.writeFileSync('../public/robots.txt', generatedSitemap, 'utf8');
