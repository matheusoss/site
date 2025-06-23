import { createI18nMiddleware } from 'next-international/middleware';

const middleware = createI18nMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'pt',
  urlMappingStrategy: 'rewrite',
});

export default middleware;

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // ignora assets, API e arquivos estáticos
};
