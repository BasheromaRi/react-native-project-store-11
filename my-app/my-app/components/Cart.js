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
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      price: "",
      couponVisable: false,
      coupon: "",
    };
  }

  componentDidMount() {
    let cart = this.props.navigation.getParam("cart");
    this.setState({ cart: cart });
  }

  Deletfun(item, index) {
    let cart = this.state.cart;
    item.add_to_cart = true;
    item.product_count = 0;
    cart.splice(index, 1);
    this.setState({ cart: cart });
    this.calculateTotalPrice();
    this.closemodel();
  }

  minfun(item, index) {
    let cart = this.state.cart;
    if (item.product_count > 0) {
      item.product_count -= 1;
    }
    this.setState({ cart: cart });
  }

  plusfun(item, index) {
    let cart = this.state.cart;
    item.product_count += 1;
    this.setState({ cart: cart });
  }

  closemodel() {
    let cart = this.state.cart;
    if (cart.length == 0) {
      this.props.navigation.navigate("HomeShop", {
        cart: "",
      });
    }
  }

  couponfun() {
    if (this.state.coupon == "#25DE9") {
      this.calculateTotalPrice();
      alert("You have 25% discount");
    } else if (this.state.coupon == "#1D10C") {
      this.calculateTotalPrice();
      alert("You have 10% discount");
    } else if (this.state.coupon == "") {
      alert("you didn't enter any coupon");
      this.setState({ couponVisable: false });
    } else {
      alert("This coupon has expired");
    }
  }

  calculateTotalPrice() {
    let cart = this.state.cart;
    // for (var i = 0; i < Product.length; i++) {
    //   sum += Product[i].price;
    // }
    let sum = 1;
    cart.map((item, index) => {
      sum += item.price * item.product_count;
    });

    // alert(sum);
    if (this.state.coupon == "") {
      this.setState({ price: sum });
    } else {
      if (this.state.coupon == "#25DE9") {
        let sumcoupon = sum - (sum * 25) / 100;
        this.setState({ price: sumcoupon });
      } else if (this.state.coupon == "#1D10C") {
        let sumcoupon = sum - (sum * 10) / 100;
        this.setState({ price: sumcoupon });
      } else {
        this.setState({ price: sum });
      }
    }
  }

  render() {
    return (
      <>
        <View style={{ backgroundColor: "#F2ECFF" }}>
          <View
            style={{
              width: "100%",
              height: 50,
              flexDirection: "row",
              // backgroundColor: 'blue',
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "10%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.history.goBack()
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#000",
                  marginLeft: "5%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="chevron-left" size={20} style={{ color: "#fff" }} />
              </TouchableOpacity>
              <Text
                style={{ paddingLeft: 10, fontWeight: "bold", fontSize: 15 }}
              >
                Cart
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#000",
                marginRight: "5%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="bookmark" size={20} style={{ color: "#fff" }} />
            </TouchableOpacity>
          </View>
          {/* ------------------------------------------ */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              width: "100%",
              height: 460,
            }}
          >
            <View>
              {this.state.cart.map((item, index) => {
                return (
                  <View
                    style={{
                      width: "90%",
                      height: 130,
                      marginHorizontal: "5%",
                      backgroundColor: "#fff",
                      marginTop: "5%",
                      borderRadius: 15,
                      flexDirection: "row",
                    }}
                  >
                    {/* -------------- */}
                    <View
                      style={{
                        flex: 1.3,
                        // backgroundColor: 'yellow',
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                      }}
                    >
                      <View
                        style={{
                          width: "90%",
                          height: 100,
                          // backgroundColor: 'red',
                          marginHorizontal: "5%",
                          marginTop: "5%",
                          borderRadius: 15,
                        }}
                      >
                        <Image
                          source={{ uri: item.image }}
                          style={{
                            width: null,
                            height: null,
                            flex: 1,
                            borderRadius: 15,
                          }}
                        />
                      </View>
                      <TouchableOpacity>
                        <Text
                          style={{
                            alignSelf: "center",
                            textDecorationLine: "underline",
                            color: "#E59C41",
                          }}
                        >
                          
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* ------------------ */}
                    <View
                      style={{
                        flex: 2,
                        // backgroundColor: 'green'
                      }}
                    >
                      <View style={{ marginLeft: "5%" }}>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                            Winter Clothes
                          </Text>
                          <TouchableOpacity
                            onPress={() => {
                              this.Deletfun(item, index);
                              this.setState({ add_to_cart: false });
                            }}
                            style={{
                              width: 25,
                              height: 25,
                              borderRadius: 20,
                              backgroundColor: "#F2ECFF",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: 10,
                              marginTop: 5,
                            }}
                          >
                            <Icon
                              name="trash-alt"
                              size={17}
                              style={{ color: "#DD497E" }}
                            />
                          </TouchableOpacity>
                        </View>
                        <Text>Price:${item.price}</Text>
                        <View
                          style={{
                            width: "60%",
                            flexDirection: "row",
                            // backgroundColor: 'red',
                            justifyContent: "space-between",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              this.minfun(item, index);
                              this.calculateTotalPrice();
                            }}
                            style={{
                              width: 25,
                              height: 25,
                              backgroundColor: "grey",
                              borderRadius: 15,
                              alignItems: "center",
                              justifyContent: "center",
                              flex: 1,
                            }}
                          >
                            <Icon name="minus" />
                          </TouchableOpacity>
                          <View
                            style={{
                              flex: 2,
                              // backgroundColor: 'yellow',
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text style={{ fontWeight: "bold" }}>
                              {item.product_count}
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => {
                              this.plusfun(item, index);
                              this.calculateTotalPrice();
                            }}
                            style={{
                              width: 25,
                              height: 25,
                              backgroundColor: "grey",
                              borderRadius: 15,
                              alignItems: "center",
                              justifyContent: "center",
                              flex: 1,
                            }}
                          >
                            <Icon name="plus" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
              {/* ------------------ */}
            </View>
          </ScrollView>

          {/* ------------------ */}

          {/* ------------------------------------ */}
          <View
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "#fff",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            {/* ---------- */}
            <View
              style={{
                flex: 2.5,
                marginTop: 10,
                // backgroundColor: 'yellow',
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: "5%",
                }}
              >
                <Text style={{ fontSize: 18 }}>Price</Text>
                <Text style={{ fontSize: 18 }}>${this.state.price}</Text>
              </View>
              <View>
                
                
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: "5%",
                }}
              >
                <Text style={{ fontSize: 18 }}>Delivery</Text>
                <Text style={{ fontSize: 18 }}>$20</Text>
              </View>
            </View>
            {/* -------------- */}
            <View
              style={{
                // backgroundColor: 'red',
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "row",
                width: "90%",
                marginHorizontal: "5%",
              }}
            >
              <Text style={{ color: "#ddd" }}>●</Text>

              <View
                style={{ backgroundColor: "#ddd", width: "90%", height: 3 }}
              />
              <View>
                <Text style={{ color: "#ddd" }}>●</Text>
              </View>
            </View>
            {/* -------------- */}
            <View
              style={{
                flex: 1.5,
                // backgroundColor: 'blue',
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: "5%",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>ToTal</Text>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                ${this.state.price + 20}
              </Text>
            </View>

            {/* -------------- */}
            <View
              style={{
                flex: 2,
                // backgroundColor: 'red',
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  //if (this.state.coupon == "") {
                   // this.setState({ couponVisable: true });
                //  } else {
                    this.props.navigation.navigate("PersonalInformation", {
                      price: this.state.price,
                      cart: this.state.cart,
                    });
                  }
                }
                style={{
                  width: "80%",
                  height: 50,
                  backgroundColor: "grey",
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Press To Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* ---------------Enter coupon------------------------ */}
        <Modal
          visible={this.state.couponVisable}
          onRequestClose={() => {
            this.setState({
              couponVisable: false,
            });
          }}
          transparent={true}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: "10%",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                elevation: 5,
                padding: 15,
                width: "100%",
                borderRadius: 8,
              }}
            >
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "800",
                    fontSize: 20,
                  }}
                >
                  Coupon
                </Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: "#ccc",
                  marginVertical: 20,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 100,
                  marginBottom: 15,
                  backgroundColor: "#e7e7e7",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name="money-check-alt" size={24} />
                </View>
                <TextInput
                  value={this.state.coupon}
                  autoCorrect={false}
                  placeholder="Enter Your Coupon .."
                  style={{ flex: 1 }}
                  onChangeText={(value) => {
                    this.setState({
                      coupon: value.trim(),
                    });
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ couponVisable: false });
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "red",
                    width: "35%",
                    height: 40,
                    padding: 10,
                    alignSelf: "center",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#fff" }}>Canel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ couponVisable: false });
                    this.couponfun();
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "green",
                    width: "35%",
                    height: 40,
                    padding: 10,
                    alignSelf: "center",
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                    }}
                  >
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </>
      // </Container>
    );
  }
}
