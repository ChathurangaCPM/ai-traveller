import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import HotelDetails from './screens/Hotels/HotelDetails';
import { LeftContent, RightContent } from './components/Headers/MainHeader';
import BackButton from './components/Headers/BackButton';
import CustomDrawerContent from './components/CustomDrawerContent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';
import AttractionDetails from './screens/Attractions/AttractionDetails';

// Create Stack Navigator
const Stack = createNativeStackNavigator();
// Create Drawer Navigator
const Drawer = createDrawerNavigator();


// Drawer Navigator for HomeScreen only
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerLeft: () => <LeftContent />,
        headerRight: () => <RightContent />,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      />
    </Drawer.Navigator>
  );
};

// Main Stack Navigator that includes the Drawer Navigator for the first screen
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeDrawer">
      <Stack.Screen
        name="HomeDrawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}  // Hide Stack header for the Drawer screen
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="Details"
          component={HotelDetails}
          options={{
            title: 'Hotel Details',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="AttractionDetails"
          component={AttractionDetails}
          options={{
            title: 'Attractions Details',
            headerLeft: () => <BackButton />,
            headerShown: false
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Host>
        <AppStack />
      </Host>
    </NavigationContainer>
  );
};

export default () => (
  <ThemeProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
    </GestureHandlerRootView>
  </ThemeProvider>
);
