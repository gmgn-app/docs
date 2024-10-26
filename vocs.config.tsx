import { defineConfig } from 'vocs'

export default defineConfig({
  head: (
    <>
      <script defer data-domain="docs.gmgn.app" src="https://analytics.pyhash.com/js/script.js"></script>
      <meta property="og:url" content="https://docs.gmgn.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="GM GN Wallet Docs"/>
      <meta property="og:description" content="vox populi - voice of the people"/>
      <meta property="og:image" content="https://docs.gmgn.app/gmgn-tbn.png"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="docs.gmgn.app"/>
      <meta property="twitter:url" content="https://docs.gmgn.app"/>
      <meta name="twitter:title" content="GM GN Wallet Docs"/>
      <meta name="twitter:description" content="vox populi - voice of the people"/>
      <meta name="twitter:image" content="https://docs.gmgn.app/gmgn-tbn.png"/>
    </>
  ),
  title: 'GM GN Wallet Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
  iconUrl: '/favicon.ico',
  logoUrl: '/gmgn-logo.svg',
  ogImageUrl: 'https://docs.gmgn.app/gmgn-tbn.png',
  search: { 
    boostDocument(documentId) { 
      return documentId === '/core' ? 2 : 1
    } 
  },
  editLink: { 
    pattern: 'https://github.com/gmgn-app/docs/edit/main/site/pages/:path', 
    text: 'Edit on GitHub'
  },
  font: { 
    google: 'Inter'
  },
})
