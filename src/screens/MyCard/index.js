import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import CustomImage from "../../utils/Images";
import GloableStyle from "../GloableStyle";
import { Text, horizScale, vertScale, MediumText, BoldText } from "../../utils/Layout";
import Font from "../../utils/Fonts";
import { AppColor } from "../../utils/AppColor";
export default function MyCard({ navigation }) {
    const [address, setAddress] = useState()
    const [product, setProduct] = useState([
        {
            about: "Arhar Dal - 1 Kg",
            price: 102,
            originalPrice: 150,
            uri: "https://www.jiomart.com/images/product/original/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-1-202203170610.jpg",
            count: 0
        },
        {
            about: "Meggi Noodles Double Pack - 140 gm",
            price: 23,
            originalPrice: 24,
            uri: "https://m.media-amazon.com/images/I/81RW3B40z0S._SX522_.jpg",
            count: 0
        }
    ])
    const productRender = ({ item, index }) => {
        return (
            <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 0.3 }}>
                        <Image source={{ uri: item.uri }} style={GloableStyle.productImage} />
                    </View>
                    <View style={{ flex: 0.7 }}>
                        <Text style={{ fontSize: 12 }}>{item.about}</Text>
                        <Text style={{ fontSize: 13, color: AppColor.blue }}>Current Price: ₹ {item.price}</Text>

                        <Text style={{ fontSize: 14, color: AppColor.pink }}>Total Product Amount: ₹XXX </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, alignItems
                        : 'center'
                }}>
                    <Text style={{ color: AppColor.black, textDecorationLine: "line-through", }}>₹{item.originalPrice}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { alert("Coming Soon") }}>
                            <Text style={{ fontSize: Font.h4 }}> - </Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: Font.h4 }}>{item.count}</Text>
                        <TouchableOpacity onPress={() => { alert("Coming Soon") }}>
                            <Text style={{ fontSize: Font.h4 }}> + </Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={CustomImage.delete} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={GloableStyle.container}>
            <TouchableOpacity
                onPress={() => {
                    alert("Coming Soon")
                }}
                style={{
                    ...GloableStyle.headingView,
                    paddingVertical: 18, backgroundColor: AppColor.whitelight
                }}>
                <Image source={CustomImage.back} style={GloableStyle.smallIcon} />
                <Text style={{
                    fontSize: Font.medium
                }}>My Card</Text>
            </TouchableOpacity>
            <ScrollView>
                <View>

                    <View style={GloableStyle.headingView}>
                        <Image source={CustomImage.location} style={GloableStyle.smallIcon} />
                        <Text style={{
                            fontSize: Font.medium
                        }}>Delivery Address</Text>
                    </View>

                    <TextInput
                        style={{ marginLeft: 20 }}
                        placeholder="+ Delivery Address"
                        placeholderTextColor={AppColor.blue}
                        onChangeText={(value) => { setAddress(value) }} />

                    <View style={GloableStyle.headingView}>
                        <Image source={CustomImage.card} style={GloableStyle.smallIcon} />
                        <Text style={{
                            fontSize: Font.medium,
                            color: AppColor.black
                        }}>  Cart Summary <Text style={{ color: AppColor.grey }}>(1 Item)</Text></Text>
                    </View>

                    <View>
                        <FlatList
                            data={product}
                            renderItem={productRender}
                            ItemSeparatorComponent={() => (
                                <View style={{
                                    width: "80%", height: 1,
                                    backgroundColor: AppColor.pink, alignSelf: 'center'
                                }} />
                            )}
                        />
                    </View>

                    <View style={GloableStyle.headingView}>
                        <BoldText style={{ color: AppColor.black }}>Price Detail</BoldText>
                    </View>

                    <View>
                        <View style={{ ...GloableStyle.setView, marginTop: 10 }}>
                            <Text>MRP</Text>
                            <Text>₹ 1997.00</Text>
                        </View>
                        <View style={{ ...GloableStyle.setView, marginTop: 10 }}>
                            <Text style={{ color: AppColor.blue }}>Total Saving</Text>
                            <Text style={{ color: AppColor.blue }}>₹ 746.00</Text>
                        </View>
                        <View style={{ ...GloableStyle.setView, marginTop: 10 }}>
                            <MediumText style={{ color: AppColor.blue }}>Saving Percentage</MediumText>
                            <MediumText style={{ color: AppColor.blue }}>37%</MediumText>
                        </View>
                        <View style={{ ...GloableStyle.setView, marginTop: 10 }}>
                            <Text>Total Product Amount</Text>
                            <Text>₹ 1251.00</Text>
                        </View>
                        <View style={{ ...GloableStyle.setView, marginTop: 10 }}>
                            <Text>Delivery Charge</Text>
                            <Text>Free</Text>
                        </View>
                        <View style={{ ...GloableStyle.setView, marginTop: 10 }}>
                            <BoldText style={{ color: AppColor.red }}>Total Payable Amount</BoldText>
                            <BoldText style={{ color: AppColor.red }}>₹ 1251.00</BoldText>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => { alert("Coming Soon") }}
                        style={GloableStyle.button}
                    >
                        <Text style={GloableStyle.buttonText}>Confirm To Pay</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}