import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'YOUR_REGION', // e.g., 'us-east-1'
    userPoolId: 'YOUR_USER_POOL_ID',
    userPoolWebClientId: 'YOUR_USER_POOL_CLIENT_ID',
    oauth: {
      domain: 'your-cognito-domain.auth.region.amazoncognito.com',
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'http://localhost:5173/',
      redirectSignOut: 'http://localhost:5173/',
      responseType: 'code'
    }
  }
});