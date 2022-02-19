import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  StatusBar,
  AsyncStorage,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Hoshi } from "react-native-textinput-effects";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      phone: "",
      cart: [],
    };
  }

  componentDidMount() {
    let cart = this.props.navigation.getParam("cart");
    let name = this.props.navigation.getParam("name");
    let price = this.props.navigation.getParam("price");
    let phone = this.props.navigation.getParam("phone");

    this.setState({ name: name, price: price, cart: cart, phone: phone });
  }

  render() {
    return (
      <>
        <View
          style={{
            width: 230,
            height: 230,
            borderRadius: 115,
            backgroundColor: "#5EC2B7",
            position: "absolute",
            left: 10,
            top: -50,
          }}
        ></View>
        <View
          style={{
            width: 230,
            height: 230,
            borderRadius: 115,
            backgroundColor: "#13A090",
            position: "absolute",
            left: -45,
            top: -25,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ marginLeft: 60, fontWeight: "bold", fontSize: 18 }}>
            Dear,{this.state.name}{" "}
          </Text>
          <Text style={{ marginLeft: 60, fontSize: 18 }}>
            successful operation
          </Text>
          <Text style={{ marginLeft: 60, fontSize: 18 }}>
            Total: ${this.state.price + 10}
          </Text>
        </View>
        {/* ---- */}
        <ScrollView showsVerticalScrollIndicator>
          <View
            style={{
              width: "90%",
              height: 200,
              marginHorizontal: "5%",
              // backgroundColor: 'yellow',
              marginTop: 250,
            }}
          >
            <Image
              source={require("./suc.png")}
              style={{ width: "100%", height: 200, resizeMode: "contain" }}
            />
          </View>
          {/* -----------delivery---------------- */}
          
          
          {/* --------finish-------- */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("HomeShop", {
                cart: "",
              });
            }}
            style={{
              width: "90%",
              height: 60,
              marginHorizontal: "5%",
              backgroundColor: "#5EC2B7",
              borderRadius: 30,
              marginTop: 10,
              marginBottom: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#FFFFFF",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              Countinue shopping at the store
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}
