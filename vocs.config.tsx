import { defineConfig } from 'vocs'

export default defineConfig({
  head() {
    return (
      <>
        <script defer data-domain="docs.gmgn.app" src="https://analytics.pyhash.com/js/script.js"></script>
      </>
    )
  },
  title: 'GM GN Wallet Docs',
  description: 'vox populi - voice of the people',
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
  ogImageUrl: '/gmgn-tbn.png',
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
