import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColor } from "../../utils/AppColor";
import Font from "../../utils/Fonts";
import CustomImage from "../../utils/Images";
import { BoldText, horizScale, vertScale } from "../../utils/Layout";
import GloableStyle from "../GloableStyle";
export default function ViewAll({ navigation, route }) {
    const { data } = route.params
    const renderProductItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.listproduct}
                onPress={() => {
                    setVisible(!visible)
                }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    marginTop: vertScale(10)
                }}>
                    <View style={{
                        backgroundColor: AppColor.yellow, flex: 0.6,
                        borderTopRightRadius: horizScale(20),
                        borderBottomRightRadius: horizScale(20),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: AppColor.black, fontSize: Font.small }}>Team By 15% Off</Text>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <Image source={CustomImage.heart} style={{ ...styles.icon, tintColor: AppColor.darkgrey }} />
                    </View>
                </View>
                <View style={{ marginTop: vertScale(10) }}>
                    <Image source={{ uri: "https://media.baamboozle.com/uploads/images/389277/1625233312_288659.png" }}
                        style={styles.img} />
                </View>
                <View style={{ marginHorizontal: horizScale(10), marginTop: vertScale(5) }}>
                    <Text style={{ color: AppColor.black }}>
                        Stack of men's clothing</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    marginTop: vertScale(5), alignItems: 'center'
                }}>
                    <View style={{
                        marginHorizontal: horizScale(10), backgroundColor: AppColor.blue,
                        borderRadius: horizScale(8), paddingHorizontal: horizScale(10), height: vertScale(40), justifyContent: 'center'
                    }}>
                        <BoldText style={{ color: AppColor.white, fontSize: Font.tiny, textAlign: 'center' }}>Currant Price{"\n"}₹ 400</BoldText>
                    </View>
                    <View style={{ marginHorizontal: horizScale(10), marginTop: vertScale(5) }}>
                        <BoldText style={{ color: AppColor.darkgrey, textDecorationLine: 'line-through', textAlign: 'right', marginRight: horizScale(5) }}>₹ 550</BoldText>
                        <View style={{
                            borderWidth: 1, borderColor: AppColor.darkgrey,
                            paddingVertical: vertScale(2),
                            paddingHorizontal: horizScale(10),
                            borderRadius: horizScale(5)
                        }}>
                            <Text style={{ fontSize: Font.tiny, textAlign: 'center' }}>
                                Add to{'\n'}Card
                            </Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}
                style={{
                    ...GloableStyle.headingView,
                    paddingVertical: 18, backgroundColor: AppColor.whitelight
                }}>
                <Image source={CustomImage.back} style={GloableStyle.smallIcon} />
                <Text style={{
                    fontSize: Font.medium
                }}>View All Products</Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={renderProductItem}
                nestedScrollEnabled={true}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    listproduct: {
        width: '48.5%',
        backgroundColor: AppColor.white,
        elevation: horizScale(15),
        margin: horizScale(3),
        borderRadius: horizScale(8),
        paddingVertical: vertScale(10)
    },
    icon: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    img: {
        height: horizScale(130),
        width: horizScale(130),
        alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: horizScale(10),
    },
})