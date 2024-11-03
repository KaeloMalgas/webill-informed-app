import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'YOUR_REGION', // e.g., 'us-east-1'
    userPoolId: 'YOUR_USER_POOL_ID',
    userPoolWebClientId: 'YOUR_USER_POOL_CLIENT_ID',
  }
});