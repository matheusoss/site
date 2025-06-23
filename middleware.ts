import { type NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'pt-BR'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
    // Verificar se já existe um locale na URL
    const requestPathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every(
        (loc) => !requestPathname.startsWith(`/${loc}/`) && requestPathname !== `/${loc}`
    );

    if (pathnameIsMissingLocale) {
        // Detectar país baseado no header Accept-Language
        const acceptLanguage = request.headers.get('accept-language') || '';

        // Verificar se o usuário tem preferência por português
        if (acceptLanguage.includes('pt') || acceptLanguage.includes('pt-BR')) {
            return 'pt-BR';
        }

        // Padrão para inglês
        return defaultLocale;
    }

    // Extrair locale da URL se já existir
    const locale = requestPathname.split('/')[1];
    return locales.includes(locale) ? locale : defaultLocale;
}

export function middleware(request: NextRequest) {
    const currentPathname = request.nextUrl.pathname;

    // Verificar se o pathname já tem um locale
    const pathnameIsMissingLocale = locales.every(
        (loc) => !currentPathname.startsWith(`/${loc}/`) && currentPathname !== `/${loc}`
    );

    // Redirecionar se não há locale na URL
    if (pathnameIsMissingLocale) {
        const detectedLocale = getLocale(request);
        const newUrl = new URL(`/${detectedLocale}${currentPathname}`, request.url);
        return NextResponse.redirect(newUrl);
    }
}

export const config = {
    matcher: [
        // Pular todos os arquivos internos do Next.js (_next)
        '/((?!_next|api|favicon.ico).*)',
    ],
};
