// 'whatwg-fetch' is
// "what working group fetch". A polyfill to ensure 'fetch' works in browsers
// not yet having native support.
import 'whatwg-fetch';

export function getUsers() {
    return get('users');
}

function get(url) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error);  // eslint-disable-line no-console
}
