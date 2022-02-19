// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import HomeShop from "./components/HomeShop";

// export default function App() {
//   return (
//     <>
//       <HomeShop />
//     </>
//   );
// }
// --------------------

import * as React from "react";

import HomeShop from "./components/HomeShop";
import Cart from "./components/Cart";
import PersonalInformation from "./components/PersonalInformation";
import Success from "./components/Success";
import Delivery from "./components/Delivery";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

class App extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate("HomeStack");
  }

  render() {
    return <></>;
  }
}

const HomeStack = createStackNavigator(
  {
    HomeShop: { screen: HomeShop },
    Cart: { screen: Cart },
    PersonalInformation: { screen: PersonalInformation },
    Success: { screen: Success },
    Delivery: { screen: Delivery },
  },
  {
    headerMode: "none",
  }
);

// const AuthStack = createStackNavigator({

// }, {
//   headerMode: 'none'
// })

export default createAppContainer(
  createSwitchNavigator(
    {
      AppStack: App,
      HomeStack: HomeStack,
      // AuthStack: AuthStack
    },
    {
      initialRouteParams: "AppStack",
      headerMode: "none",
    }
  )
);
