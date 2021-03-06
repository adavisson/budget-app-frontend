import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddBillScreen } from './src/screens/AddBillScreen';
import { AddCategoryScreen } from './src/screens/AddCategoryScreen';
import { CreateBudgetScreen } from './src/screens/CreateBudgetScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name='Sign Up'
          component={SignUpScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name='Create Budget'
          component={CreateBudgetScreen}
          options={{ title: 'Create Budget' }}
        />
        <Stack.Screen
          name='Add Bill'
          component={AddBillScreen}
          options={{ title: 'Add Bill' }}
        />
        <Stack.Screen
          name='Add Category'
          component={AddCategoryScreen}
          options={{ title: 'Add Category' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
