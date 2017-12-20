import fetch from 'isomorphic-fetch';
const apiUrl = 'http://api.stage.meepcloud.com'
// const isClient = window !== void 0;

// const env = process.env.NODE_ENV || 'development';
console.log('NODE_ENV: ', process.env.NODE_ENV)
const Token = 'x-meepshop-authorization-token';

const Domain = 'barrytest.stage.meepcloud.com';

// if (typeof XMeepshopDomain === 'undefined') {
//   // admin
//   Domain = env === 'production'
//     ? location.host
//     : 'admin.stage.meepcloud.com';
// } else {
//   // store
//   Domain = XMeepshopDomain;
// }

export async function postGraphql(query, variables) {
  return await fetchApi({
    body: JSON.stringify({
      query: `${variables.type}(${variables.keys}) {
                ${query}
              } ${variables.fragments !== void 0 ? variables.fragments : ''}`,
      variables: variables.values
    })
  });
}

export async function fetchApi({ body, route = '/graphql', method = 'post' }) {
  let data;
  let options = {
    method: method,
    headers: {
      'content-type': 'application/json',
      'x-meepshop-domain': Domain
    },
    credentials: 'include',
    body: body
  };
  // if (localStorage.hasOwnProperty(Token)) {
  //   options.headers[Token] = localStorage.getItem(Token);
  // }
  const res = await fetch(`${apiUrl}${route}`, options);
  // let xMeepshopAuthorizationToken = res.headers.get(Token);
  // if (isClient && xMeepshopAuthorizationToken) {
  //   localStorage.setItem(Token, xMeepshopAuthorizationToken);
  // } else if (xMeepshopAuthorizationToken === '') {
  //   localStorage.removeItem(Token);
  // }
  console.log('STATUS: ', res.status)
  if (res.status < 400) {
    try {
      data = await res.json();
    } catch (error) {
      console.log('ERROR: ', error)
      data = {};
    }
  } else if (res.status === 403) {
    console.log('err: 403')
  } else if (res.status === 401) {
    console.log('err: 401')
  }
  return data;
}
