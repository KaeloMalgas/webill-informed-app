import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_example',
      userPoolClientId: 'your-client-id'
    }
  }
});