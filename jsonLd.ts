import { type WithContext, type Person } from 'schema-dts'

const jsonLd:WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lefteris Loizides',
  jobTitle: 'Software Developer',
  url: 'https://lefterisloizides.com/',
  sameAs: [
    'https://github.com/lefteris-l',
    'https://instagram.com/lefteris.lz',
    'https://www.linkedin.com/in/lefterisl/'
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Aylo'
  },
  email: 'loizides.lef@gmail.com',
  birthDate: '1994-06-21',
  birthPlace: {
    '@type': 'Place',
    address: 'Nicosia'
  },
  nationality: 'Cypriot',  
  knowsLanguage: [
    {
      '@type': 'Language',
      name: 'English'
    },
    {
      '@type': 'Language',
      name: 'Greek'
    },
    {
      '@type': 'Language',
      name: 'Spanish'
    }
  ],
}

export default jsonLd