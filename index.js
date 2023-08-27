import { AppRegistry } from 'react-native';
import codePush from 'react-native-code-push';
import App from './App';
import { name as appName } from './app.json';

// Wrap the App component with codePush
const CodePushedApp = codePush({
  // Options for codePush
})(App);

AppRegistry.registerComponent(appName, () => CodePushedApp);
