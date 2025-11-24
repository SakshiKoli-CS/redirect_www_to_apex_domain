/**
 * Edge Function: Redirect www to apex domain
 * 
 * Redirects:
 *   www.redirectwwwtoapexdomain.com → redirectwwwtoapexdomain.devcontentstackapps.com
 *   www.redirectwwwtoapexdomain.com/about.html → redirectwwwtoapexdomain.devcontentstackapps.com/about.html
 */

export default function handler(request, context) {
  const currentUrl = new URL(request.url);

  // Redirect www custom domain to Contentstack apex domain
  if (currentUrl.hostname === 'www.redirectwwwtoapexdomain.com') {
    const redirectUrl = `${currentUrl.protocol}//redirectwwwtoapexdomain.devcontentstackapps.com${currentUrl.pathname}${currentUrl.search}`;
    
    return new Response(null, {
      status: 301,
      headers: {
        'Location': redirectUrl
      }
    });
  }

  // Forward all other requests to origin server
  return fetch(request);
}

