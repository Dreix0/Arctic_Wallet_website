import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Used to make the default lang as root
  localePrefix: "as-needed",
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/([a-z]{2})/:path*']
};