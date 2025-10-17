addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});


/**
 * Add Cross-Origin-Resource-Policy headers.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
    const url = new URL(request.url);
    url.host = 'giscus.app';
    const response = await fetch(url);
    const headers = new Headers(response.headers);
    headers.delete('Content-Security-Policy')
    headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: headers
    });
}
