// import React, { Component } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// export default class HomeShop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           this.props.navigation.navigate("Cart");
//         }}
//         style={{marginTop:50}}
//       >
//         <Text > HomeShop </Text>
//       </TouchableOpacity>
//     );
//   }
// }

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
import shopData from "./ShopData";

export default class HomeShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [],
      collection: [
        {
          type: "All",
        },
        {
          type: "Hoddie",
        },
        {
          type: "Jacket",
        },
        {
          type: "Pants",
        },
        {
          type: "T-shirt",
        },
        {
          type: "shose",
        },
        {
          type: "Socks",
        },
      ],
      modalvisiable: false,
      showsearch: false,
      details: {},
      detailscolor: true,
      reviewcolor: false,
      showtext: true,
      cart: [],
    };
  }
  

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let Products = shopData;

    // ------------------add view to objects for searchfun----------------
    for (var i = 0; i < Products.length; i++) {
      Products[i].view = true;
    }
    // ---------------------------
    this.setState({ Products: Products });
  }

  makesearchfun(value) {
    let Products = this.state.Products;
    for (var i = 0; i < Products.length; i++) {
      if (Products[i].name.toUpperCase().includes(value.toUpperCase())) {
        Products[i].view = true;
      } else {
        Products[i].view = false;
      }
    }
    this.setState({ Products: Products });
  }

  makesearchfun2(item, index) {
    let Products = this.state.Products;
    for (var i = 0; i < Products.length; i++) {
      if (Products[i].name.toUpperCase().includes(item.toUpperCase())) {
        Products[i].view = true;
      } else if (item == "All") {
        Products[i].view = true;
      } else {
        Products[i].view = false;
      }
    }
    this.setState({ Products: Products });
  }

  heartfun(value, index) {
    let Products = this.state.Products;
    Products[index].heart_active = !value;
    // alert(Products[index].heart_active);
    // alert(value);
    this.setState({ Products: Products });
  }

  renderproductlist() {
    return this.state.Products.map((item, index) => {
      return (
        <>
          {item.view ? (
            <TouchableOpacity
              onPress={() => {
                this.setState({ modalvisiable: true, details: item });
                // alert(index);
                // alert(JSON.stringify(item));
              }}
            >
              <View
                key={index}
                style={{
                  // backgroundColor: 'yellow',
                  width: 150,
                  height: 180,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
              >
                  <Image
                    source={item.image}
                    source={{ uri: item.image }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 15,
                      resizeMode: "center",
                    }}
                  />
                <View
                  style={{
                    flexDirection: "row",
                    // backgroundColor: 'blue',
                    flex: 0.5,
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{item.name}</Text>
                  <Text>${item.price}</Text>
                </View>
               
              </View>
            </TouchableOpacity>
          ) : null}
        </>
      );
    });
  }

  renderCatgory() {
    return (
      <View
        style={{
          width: "95%",
          height: 100,
          marginLeft: "5%",
          //   backgroundColor: "yellow",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          style={{ flexDirection: "row" }}
        >
          {this.state.collection.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.makesearchfun2(item.type, index);
                }}
                style={{
                  width: 60,
                  height: 35,
                  backgroundColor: "gray",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  alignSelf: "center",
                  marginHorizontal: 5,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "#9EA2A2" }}
                >
                  {item.type}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
  rendermodel1() {
    return (
      <Modal
        visible={this.state.modalvisiable}
        onRequestClose={() => {
          this.setState({ modalvisiable: false });
        }}
      >
        <>
              {/* ---------------Details&&Review-------------- */}

                <View
                  style={{
                    flexDirection: "row",
                    width: "60%",
                    height: 30,
                    // backgroundColor: 'red',
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >

              
                {/* ----- */}
                <View
                  style={{
                    width: "60%",
                    height: 3,
                    backgroundColor: "#fff",
                    flexDirection: "row",
                  }}
                >
                  {this.state.detailscolor ? (
                    <View
                      style={{
                        width: "50%",
                        height: 3,
                        backgroundColor: "yellow",
                      }}
                    ></View>
                  ) : null}
                  {this.state.reviewcolor ? (
                    <View
                      style={{
                        width: "100%",
                        height: 3,
                        flexDirection: "row",
                      }}
                    >
                   
                     
                    </View>
                  ) : null}
                  {/* ----- */}
                </View>
                {/* ----- */}
              </View>
              {/* ----- */}
              {this.state.details.add_to_cart ? (
                <TouchableOpacity
                  onPress={() => {
                    let details = this.state.details;
                    
                  }}
                  style={{
                    width: "85%",
                    height: 50,
                    marginHorizontal: "7.5%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#E7A94C",
                    borderRadius: 15,
                    marginTop: 10,
                    flexDirection: "row",
                  }}
                >
                </TouchableOpacity>
              ) : null}

           
            {/* ---------------------- */}
         
        </>
      </Modal>
    );
  }

  render() {
    return (
      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* ---------------------- */}
          <View style={{ marginTop: "10%" }}>
            <View
              style={{
                width: "90%",
                height: 50,
                marginHorizontal: "5%",
                marginTop: 5,
                //   backgroundColor: "green",
                flexDirection: "row",
              }}
            >
              {/* ---- */}
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'red',
                  alignItems: "center",
                }}
              >
              </View>
              {/* ---- */}
              <View
                style={{
                  flex: 3,
                  // backgroundColor: 'grey',
                  alignItems: "center",
                }}
              >
                {this.state.showsearch ? (
                  <View
                    style={{
                      // backgroundColor: 'blue',
                      width: "90%",
                      height: 40,
                      borderRadius: 25,
                      borderWidth: 0.5,
                    }}
                  >
                    <TextInput
                      placeholder="Search"
                      onChangeText={(value) => {
                        this.makesearchfun(value);
                      }}
                    />
                  </View>
                ) : null}
              </View>
              {/* ---- */}
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'red',
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    let x = this.state.showsearch;
                    this.setState({ showsearch: !x });
                  }}
                  style={{
                    // backgroundColor: 'red',
                    width: 40,
                    height: 40,
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 0.5,
                  }}
                >
                  <Icon name="search" size={17} />
                </TouchableOpacity>
              </View>
              {/* ---- */}
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'yellow',
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    // alert(JSON.stringify(this.state.cart));
                    {
                      this.state.cart.length == 0
                        ? alert(
                            "Your Cart is empty choose any thing to full it"
                          )
                        : this.props.navigation.navigate("Cart", {
                            cart: this.state.cart,
                          });
                    }
                  }}
                  style={{
                    // backgroundColor: 'blue',
                    width: 40,
                    height: 40,
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 0.5,
                  }}
                >
                  <Icon name="shopping-cart" size={17} />
                </TouchableOpacity>
              </View>
              {/* ---- */}
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#E7A94C",
                borderRadius: 10,
                position: "absolute",
                right: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{this.state.cart.length}</Text>
            </View>
            {/* ---------------------- */}
            {this.renderCatgory()}
            {/* ---------------------- */}
            <View style={{ marginHorizontal: "5%" }}>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                Recommanded for you
              </Text>
              <Text>Based on Search</Text>
            </View>
            {/* ---------------------- */}
            <ScrollView showsVerticalScrollIndicator>
              <View
                style={{
                  // backgroundColor: 'yellow',
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  marginTop: 10,
                }}
              >
                {/* ----------------- */}
                {this.renderproductlist()}
                {/* ----------------- */}
              </View>
              <View style={{ width: 50, height: 50 }}></View>
            </ScrollView>
          </View>
        </ScrollView>
        {/* ----------------- */}
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#252060",
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
           // marginHorizontal: '5%',
          }}
        >
          <TouchableOpacity>
            <Icon name="home" size={24} style={{ color: "#fff" }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="shopping-cart" size={24} style={{ color: "#fff" }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="heart" size={24} style={{ color: "#fff" }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="user" size={24} style={{ color: "#fff" }} />
          </TouchableOpacity>
        </View>
        {/* -------------------------------------------------- */}
        {/* ---------------------modal------------------------ */}
        {this.rendermodel1()}
        {/* -------------------------------------------------- */}
      </>
    );
  }
}
