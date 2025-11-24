/**
 * Edge Function: Redirect www.sakshi.com to sakshi.com
 * 
 * Examples:
 *   www.sakshi.com              → sakshi.com
 *   www.sakshi.com/about        → sakshi.com/about
 *   www.sakshi.com/page?id=123  → sakshi.com/page?id=123
 */

export default function handler(request, context) {
  const currentUrl = new URL(request.url);

  // Redirect www.sakshi.com to sakshi.com
  if (currentUrl.hostname === 'www.sakshi.com') {
    const redirectUrl = `${currentUrl.protocol}//sakshi.com${currentUrl.pathname}${currentUrl.search}`;
    
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

