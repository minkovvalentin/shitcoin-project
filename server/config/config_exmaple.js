const config = {
  port : 0,
  db:"",
  dbUser: "",
  dbPassword:"",
  jwtAccessTokenSecret: "",
  jwtRefreshTokenSecret: "",
  userAgent: '',
  clientId: '',
  clientSecret: '',
  refreshToken: '',
  acessToken: ''
}

/*  `mongodb+srv://<user>:<password>@ex...` 
    turns to
    `mongodb+srv://${dbUser}:${dbPassword}@ex...`
*/
const mongorURI = (dbUser,dbPassword) => `mongodb+srv://${dbUser}:${dbPassword}@ex...`;

module.exports = config;