// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '22vqgmrkp8'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-kunkkpy7w7n1w4ug.us.auth0.com',            // Auth0 domain
  clientId: 'luTwT6xKZbe1UNlkP6jwBDBIFsBYMx3C',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
