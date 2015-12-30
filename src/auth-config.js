var config = {

  // Our Node API is being served from localhost:3001
  baseUrl: 'https://127.0.0.1:5555',
  // The API specifies that new users register at the POST /users enpoint.
  signupUrl: 'api/user',
  // Logins happen at the POST /sessions/create endpoint.
  loginUrl: 'api/auth',
  // The API serves its tokens with a key of id_token which differs from
  // aureliauth's standard.
  tokenName: 'token',
  // Once logged in, we want to redirect the user to the welcome view.
  loginRedirect: '#/welcome',

}

export default config;