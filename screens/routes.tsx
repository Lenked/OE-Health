import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpScreen from './auth/signUpScreen';
import WelcomeScreen from './auth/welcomeScreen';
import SignInScreen from './auth/signInScreen';
import { ProfileScreen } from './utilities/profileScreen';


const stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <stack.Navigator initialRouteName='profile'>
      <stack.Screen name='welcome' component={WelcomeScreen} options={{headerShown: false}}/>
      <stack.Screen name='signUp' component={SignUpScreen} options={{headerShown: false}} />
      <stack.Screen name='login' component={SignInScreen} options={{headerShown: false}} />
      <stack.Screen name='profile' component={ProfileScreen} options={{headerShown: false}} />
    </stack.Navigator>
  )
}
