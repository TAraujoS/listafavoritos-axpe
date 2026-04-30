import React from 'react';
import Api from 'services';

import DreamPages from 'pages/Dream/data.json';

const renderXml = ({ buildings, landings }) => {
  const siteUrl = `https://www.axpe.com.br`;
  const pages = [
    `<url><loc>${siteUrl}/sobre</loc><priority>0.80</priority></url>`,
    `<url><loc>${siteUrl}/contato</loc><priority>0.80</priority></url>`,
    `<url><loc>${siteUrl}/so-quero-sonhar</loc><priority>0.60</priority></url>`,
    `<url><loc>${siteUrl}/politica-de-privacidade</loc><priority>0.60</priority></url>`,
    `<url><loc>${siteUrl}/termos-de-uso</loc><priority>0.60</priority></url>`,
  ];

  if(landings && landings.length) {
    landings.forEach(item => {
      pages.push(`<url><loc>${siteUrl}/landing/${item.slug}</loc><priority>0.60</priority></url>`);
    })
  }

  if(DreamPages['data'] && DreamPages['data'].length) {
    DreamPages['data'].forEach(item => {
      pages.push(`<url><loc>${siteUrl}/so-quero-sonhar/${item.slug}</loc><priority>0.60</priority></url>`);
    })
  }

  if(buildings['all'] && buildings['all'].length) {
    buildings['all'].forEach(item => {
      pages.push(`<url><loc>${siteUrl}/${item.slug}</loc><priority>0.80</priority></url>`);
    })
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="//www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${siteUrl}</loc>
      <priority>1.00</priority>
    </url>
    ${pages.join('')}
  </urlset>`;
};

export default class SiteMapFile extends React.Component {
  static async getInitialProps({ res }) {
    const response = await Api.SiteMap.getPage();

    res.setHeader('Content-Type', 'text/xml');
    res.write(renderXml(response));
    res.end();
  }
}
