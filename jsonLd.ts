import { type WithContext, type WebSite } from 'schema-dts'

const jsonLd:WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lefteris Loizides',
  url: 'https://lefterisloizides.com/',
  alternateName: 'Lefteris\' Portfolio',
  sameAs: [
    'https://github.com/lefteris-l',
    'https://instagram.com/lefteris.lz',
    'https://www.linkedin.com/in/lefterisl/'
  ],
}

export default jsonLd