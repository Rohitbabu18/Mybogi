import React, { useState } from "react";
import {
    Image, SafeAreaView, View, TouchableOpacity,
    StyleSheet, FlatList, StatusBar,
    Text,
    TextInput,

} from "react-native";
import CustomImage from "../../utils/Images";
import Font from "../../utils/Fonts";
import Modal from "react-native-modal";
import { AppColor } from "../../utils/AppColor";
import GloableStyle from "../GloableStyle";
import { BoldText, horizScale, MediumText, vertScale } from "../../utils/Layout";
export default function MyOrders({ navigation }) {
    const [orders, setOrders] = useState([
        {
            tital: `When Long Title OfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOfferOffer`,
            time: `12:36PM 12-04-2022`,

        },
        {
            tital: `Past Order Title Here`,
            time: `12:36PM 12-04-2022`,
        },
        {
            tital: `Past Order Title Here`,
            time: `12:36PM 12-04-2022`,
        },
        {
            tital: `Past Order Title Here`,
            time: `12:36PM 12-04-2022`,

        },
        {
            tital: `Past Order Title Here`,
            time: `12:36PM 12-04-2022`,
        },
        {
            tital: `Past Order Title Here`,
            time: `12:36PM 12-04-2022`,
        },
        {
            tital: `Past Order Title Here`,
            time: `12:36PM 12-04-2022`,

        },
        {
            tital: `Past Order Title Here`,
            time: `12:36PM 12-04-2022`,
        },
        {
            tital: `Past Order Title Here`,
            time: `12:36PM 12-04-2022`,
        },
    ])
    const [visible, setVisible] = useState(false)
    const [itemCount, setItemCount] = useState(1);
    return (
        <SafeAreaView style={GloableStyle.container}>
            <StatusBar backgroundColor={AppColor.whitelight} barStyle={'dark-content'} />
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={GloableStyle.backView}>
                <Image source={CustomImage.back} style={GloableStyle.smallIcon} />
                <BoldText
                    style={{ ...GloableStyle.backText, fontSize: Font.regular, color: AppColor.black }}>
                    My Orders
                </BoldText>
            </TouchableOpacity>
            <View style={{
                height: vertScale(55),
                marginTop: vertScale(20),
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View
                    style={styles.searchbox}>

                    <TextInput
                        style={{
                            fontFamily: 'SourceSansPro-Regular', flex: 0.85,
                            paddingLeft: horizScale(15)
                        }}
                        placeholder={"Search Product Here"}
                        onChangeText={(value) => { setSearch(value) }}
                    />

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => { alert("Coming Soon") }}
                        style={{
                            flex: 0.15, alignItems: 'center',
                            justifyContent: "center",
                        }}>
                        <Image
                            source={require('../../../assets/search.png')}
                            style={{ ...styles.icon }}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={{ flex: 0.1 }}>
                    <Image style={styles.icon} source={CustomImage.filter} />
                </TouchableOpacity >
            </View>

            <View>
                <BoldText style={{
                    margin: horizScale(20),
                    fontSize: Font.regular,
                }}>From Last 6 Months</BoldText>
                <FlatList
                    style={{ marginBottom: vertScale(50) }}
                    data={orders}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    setVisible(!visible)
                                }}
                                style={styles.container}>
                                <View style={styles.imgView}>
                                    <Image
                                        style={styles.img}
                                        source={{ uri: "https://media.baamboozle.com/uploads/images/389277/1625233312_288659.png" }} />
                                </View>
                                <View style={styles.titleView}>
                                    <Text numberOfLines={2} style={{
                                        fontSize: Font.medium,
                                        fontFamily: 'SourceSansPro-Bold'
                                    }}>{item.tital}</Text>
                                    <Text style={{ fontSize: Font.small }}>{item.time}</Text>
                                </View>
                                <View style={{
                                    flex: 0.1, justifyContent: 'center',
                                    alignItems: "center"
                                }}>
                                    <Image style={GloableStyle.smallIcon}
                                        source={CustomImage.go}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <Modal
                isVisible={visible}
                animationType="fade"
                transparent={true}
                statusBarTranslucent
                onRequestClose={() => setVisible(!visible)}
                onBackdropPress={() => setVisible(!visible)}
                style={{ flex: 1, margin: 0, padding: 0 }}
            >


                <View

                    style={{
                        backgroundColor: AppColor.white,
                        borderRadius: 10,
                        marginHorizontal: horizScale(10),
                        paddingBottom: 20
                    }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Image
                            source={{
                                uri: "https://media.baamboozle.com/uploads/images/389277/1625233312_288659.png",
                            }}
                            style={{
                                height: 150,
                                width: 150,
                                resizeMode: 'contain',
                                margin: 10
                            }}
                        />
                        <View style={{ justifyContent: 'center' }}>
                            <Text
                                style={{
                                    fontFamily: 'SourceSansPro-Bold',
                                    fontSize: 20,
                                    color: AppColor.black,
                                    textAlign: 'right',

                                }}>Re Buy </Text>
                            <Text
                                style={{
                                    fontFamily: 'SourceSansPro-Bold',
                                    fontSize: 30,
                                    color: AppColor.blue,
                                    textAlign: 'right',

                                }}>₹ 450 </Text>
                            <Text
                                style={{
                                    fontFamily: 'SourceSansPro-Regular',
                                    fontSize: 16,
                                    color: AppColor.pink,
                                }}> (Team buy price) </Text>
                        </View>
                    </View>
                    <Text
                        style={{
                            fontFamily: 'SourceSansPro-Regular',
                            fontSize: 16,
                            color: AppColor.black, textAlign: 'center'
                        }}>
                        Red Jacket Menswear (Team buy)
                    </Text>
                    <View
                        style={GloableStyle.setView}>
                        <Text
                            style={{
                                fontSize: 14,
                                color: AppColor.black,
                                fontFamily: 'SourceSansPro-Regular',
                            }}>
                            Product No.
                        </Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 30 }}
                                onPress={() => { if (itemCount > 1) { setItemCount(itemCount - 1) } }}>
                                <Text style={styles.addplusminusView}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.countText}>{" "}{itemCount}{" "}</Text>
                            <TouchableOpacity style={{ width: 30 }}
                                onPress={() => { setItemCount(itemCount + 1) }}>
                                <Text style={styles.addplusminusView}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={GloableStyle.setView}>
                        <View>
                            <Text
                                style={{
                                    fontFamily: 'SourceSansPro-Bold',
                                    fontSize: 18,
                                    color: AppColor.black,
                                }}>
                                Add 1 more team {'\n'}member
                            </Text>
                            <Text
                                style={{
                                    fontFamily: 'SourceSansPro-Bold',
                                    fontSize: 12,
                                    color: AppColor.black,
                                }}>
                                Max team size - 2
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ marginRight: 20 }} >
                                <Image
                                    source={{
                                        uri: 'data:image/jpeg;base64,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',
                                    }}
                                    style={styles.bigIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                            >
                                <Image
                                    source={{
                                        uri: 'data:image/png;base64,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',
                                    }}
                                    style={styles.bigIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={GloableStyle.button}>
                        <Text
                            style={GloableStyle.buttonText}>
                            Add To Card
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.shareview}>
                        <Text
                            style={styles.sharetext}>
                            Share on whatsapp to create team
                        </Text>
                        <Image
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
                            }}
                            style={styles.bigIcon}
                        />
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    shareview: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: AppColor.blue,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 5
    },
    sharetext: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 16,
        color: AppColor.white,
        paddingHorizontal: 10
    },
    addplusminusView: {
        fontSize: 25,
        color: AppColor.pink,
        fontFamily: 'SourceSansPro-Bold',
        alignSelf: 'center'

    },
    bigIcon: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },
    countText: {
        backgroundColor: '#F4F2FF',
        borderRadius: 5
    },
    titleView: {
        flex: 0.6,
    },
    imgView: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: horizScale(80),
        width: horizScale(80),
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    container: {
        alignSelf: 'center',
        backgroundColor: AppColor.white,
        borderRadius: horizScale(15),
        width: '97%',
        height: vertScale(110),
        elevation: 10,
        marginVertical: vertScale(6),
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    searchbox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.9,
        borderColor: AppColor.blue,
        marginHorizontal: 20,
        borderRadius: 30,
        height: vertScale(45),
        flex: 0.8,
        backgroundColor: AppColor.white,
        elevation: 10
    },
})