import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import React, { useState } from "react";
import Hamburger from "./components/elements/hamburgermenu";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutus";
import Family from "./components/pages/family";
import SignUp from "./components/pages/signup";
import AdvMode from "./components/pages/advancedMode";
import 'react-native-gesture-handler';
import {
    Appbar, Portal,
    MD3DarkTheme,
    MD3LightTheme,
    Provider as PaperProvider,
} from 'react-native-paper';

import Agreement from "./components/elements/agreement";

const Drawer = createDrawerNavigator();

const theme = {
    ...MD3LightTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object

};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

function CustomNavigationBar({ navigation, route, options }) {
  const title = getHeaderTitle(options, route.name);
  return (
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => {navigation.openDrawer()}} />
        <Appbar.Content title={title}/>
      </Appbar.Header>
  );
}

const handleSignupSubmit = ({navigation}) => {
    props.navigation.navigate("home");
}

export default function App() {
  const DrawerContent = Hamburger;
  const [active, setActive] = useState('signup');
  const handlePress = (menuOptions) => {
    setActive(menuOptions);
  }
    const [visible, setVisible] = React.useState(true);
    const dismiss = false;
    const [disable, setDisable] = React.useState(true);
    const [checked, setChecked] = React.useState(false);
    const [filled, setFilled] = React.useState('outlined');
    const hideModal = () => setVisible(false);


    const handleCheck = () => {
        setChecked(!checked);
        if (checked) {
            setDisable(false);
            setFilled('flat');
        }
        else {
            setDisable(true);
            setFilled('outlined');
        }
    }

    const handleAgreeSubmit = () => {
        hideModal();
    }

  return (
      <>
        <PaperProvider theme={theme}>
            <StatusBar style={"auto"} />
            <SafeAreaView style={{flex:1}}>
                <Portal>
                    <Agreement
                        title={"User Agreements"}
                        visible={visible}
                        dismiss={dismiss}
                        handleCheck={() => handleCheck()}
                        filled={filled}
                        onPress={() => handleAgreeSubmit()}
                        disable={disable}

                    />
                </Portal>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="Sign Up"
                                      useLegacyImplementation={true}
                                      drawerContent={({navigation}) => <DrawerContent
                                          active={active}
                                          handlePressHome={() => {
                                              navigation.navigate('Home');
                                              handlePress('home');
                                          }}
                                          handlePressAbout={() => {
                                              navigation.navigate('About Us');
                                              handlePress('about');
                                          }}
                                          handlePressFamily={() => {
                                              navigation.navigate('Family');
                                              handlePress('family');
                                          }}
                                          handlePressSignUp={() => {
                                              navigation.navigate('Sign Up');
                                              handlePress('signup');
                                          }}
                                          handlePressAdv={() => {
                                              navigation.navigate('Advanced');
                                              handlePress('advanced');
                                          }}
                                      />}
                                      screenOptions={{
                                          header: (props) => <CustomNavigationBar {...props} />,
                                      }}>

                        <Drawer.Screen name="Home" component={Home} />
                        <Drawer.Screen name="Advanced" component={AdvMode} />
                        <Drawer.Screen name="Family" component={Family} />
                        <Drawer.Screen name="Sign Up" component={SignUp} />
                        <Drawer.Screen name="About Us" component={AboutUs} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </PaperProvider>
      </>
  );
}