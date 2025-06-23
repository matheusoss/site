import type { Person, WithContext } from 'schema-dts';
import { env } from '@/lib/env';
import { social } from '@/lib/social';

const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
const baseUrl = `${protocol}://${env.PROJECT_URL}`;

const person: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Matheus Oliveira',
  description: 'Software & Data Engineer',
  gender: 'male',
  nationality: 'Brazilian',
  url: baseUrl,
  image: new URL('/profile.jpg', baseUrl).toString(),
  sameAs: Object.values(social).map(({ href }) => href),
};

export const JsonLd = () => (
  <script type="application/ld+json">{JSON.stringify(person)}</script>
);
