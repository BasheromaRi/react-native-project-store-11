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

export default class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      cart: [],
      name: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      card: "",
      idcard: "",
      cardnum: "",
      validity: "",
      cvv: "",
    };
  }

  componentDidMount() {
    let cart = this.props.navigation.getParam("cart");

    let price = this.props.navigation.getParam("price");
    this.setState({ price: price, cart: cart });
  }

  checkconfirm() {
    if (
      this.state.name == "" ||
      this.state.lastname == "" ||
      this.state.email == "" ||
      this.state.phone == "" ||
      this.state.country == "" ||
      this.state.city == "" ||
      this.state.address == "" ||
      this.state.card == "" ||
      this.state.idcard == "" ||
      this.state.cardnum == "" ||
      this.state.validity == "" ||
      this.state.cvv == ""
    ) {
      alert("Complet your information please");
    } else {
      this.props.navigation.navigate("Success", {
        name: this.state.name,
        price: this.state.price,
        phone: this.state.phone,
        cart: this.state.cart,
      });
    }
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
            //   alignContent: 'center',
            justifyContent: "center",
          }}
        ></View>
        {/* ----- */}
        <ScrollView showsVerticalScrollIndicator>
          <View
            style={{
              width: "100%",
              height: 50,
              marginTop: 10,
              // backgroundColor: 'green',
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10%",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Enter Your Information
            </Text>
          </View>
          {/* ------------------Textinput----------------- */}
          <View
            style={{
              width: "90%",
              marginTop: 10,
              marginHorizontal: "5%",
              // backgroundColor: 'yellow',
            }}
          >
            {/* --first name-- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"first name"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                borderHeight={2}
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.name}
                onChangeText={(value) => {
                  this.setState({ name: value });
                }}
              />
            </View>
            {/* --------last name--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"last name"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                borderHeight={2}
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.lastname}
                onChangeText={(value) => {
                  this.setState({ lastname: value });
                }}
              />
            </View>
            {/* --------email--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"email"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                keyboardType="email-address"
                borderHeight={2}
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.email}
                onChangeText={(value) => {
                  this.setState({ email: value });
                }}
              />
            </View>
            {/* --------phone--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"phone"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                maxLength={11}
                keyboardType="phone-pad"
                borderHeight={2}
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.phone}
                onChangeText={(value) => {
                  this.setState({ phone: value });
                }}
              />
            </View>
            {/* --------country--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"country"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                borderHeight={2}
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.country}
                onChangeText={(value) => {
                  this.setState({ country: value });
                }}
              />
            </View>
            {/* --------city--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"city"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                borderHeight={2}
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.city}
                onChangeText={(value) => {
                  this.setState({ city: value });
                }}
              />
            </View>
            {/* --------adress--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"adress"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                borderHeight={2}
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.address}
                onChangeText={(value) => {
                  this.setState({ address: value });
                }}
              />
            </View>
            {/* --------card--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"card hold's name"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                borderHeight={2}
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.card}
                onChangeText={(value) => {
                  this.setState({ card: value });
                }}
              />
            </View>
            {/* --------id card--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"id card"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                borderHeight={2}
                keyboardType="numeric"
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.idcard}
                onChangeText={(value) => {
                  this.setState({ idcard: value });
                }}
              />
            </View>
            {/* --------card num--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"credit card number"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                borderHeight={2}
                keyboardType="numeric"
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.cardnum}
                onChangeText={(value) => {
                  this.setState({ cardnum: value });
                }}
              />
            </View>
            {/* --------validity--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"validity"}
                borderColor={"#5EC2B7"}
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                borderHeight={2}
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.validity}
                onChangeText={(value) => {
                  this.setState({ validity: value });
                }}
              />
            </View>
            {/* --------cvv--------- */}
            <View
              style={{
                width: "100%",
                height: 60,
                marginBottom: 10,
                // backgroundColor: 'green',
              }}
            >
              <Hoshi
                label={"cvv"}
                borderColor={"#5EC2B7"}
                keyboardType="numeric"
                style={{
                  width: "100%",
                  paddingLeft: 15,
                }}
                borderHeight={2}
                labelStyle={{
                  color: "#C9CCCC",
                }}
                inputStyle={{ color: "#000" }}
                value={this.state.cvv}
                onChangeText={(value) => {
                  this.setState({ cvv: value });
                }}
              />
            </View>
            {/* -------------------- */}
          </View>
          {/* --------confirm-------- */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Success", {
                name: this.state.name,
                price: this.state.price,
                phone: this.state.phone,
                cart: this.state.cart,
              });
              this.checkconfirm();
            }}
            style={{
              width: "90%",
              height: 60,
              marginHorizontal: "5%",
              backgroundColor: "#5EC2B7",
              borderRadius: 30,
              marginTop: 15,
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
              Confirm
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}
