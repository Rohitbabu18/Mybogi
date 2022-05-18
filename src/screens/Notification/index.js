import React, { useState } from "react";
import { Image, SafeAreaView, View, TouchableOpacity, StyleSheet, FlatList, StatusBar } from "react-native";
import CustomImage from "../../utils/Images";
import Font from "../../utils/Fonts";
import { AppColor } from "../../utils/AppColor";
import GloableStyle from "../GloableStyle";
import { BoldText, horizScale, MediumText, Text, vertScale } from "../../utils/Layout";
export default function NotificationMessages(props) {
    const [message, setMessage] = useState([
        {
            tital: `Offer`,
            time: `12:36PM 12-04-2022`,
            msg: `Hello Rahul,Today your Offer for shopping to save 30% by UPI payment.Hello Rahul,Today your Offer for shopping to save 30% by UPI payment.Hello Rahul, Today your Offer for shopping to save 30% by UPI payment.`
        },
        {
            tital: `Your Order`,
            time: `12:36PM 12-04-2022`,
            msg: 'Hello Rahul,Today your Offer for shopping to save 30% by UPI payment.'
        },
        {
            tital: `Cashback`,
            time: `12:36PM 12-04-2022`,
            msg: 'Hello Rahul 30 Rupay Cashback for you'
        },
        {
            tital: `Flat Discount`,
            time: `12:36PM 12-04-2022`,
            msg: `Hello Rahul,Today your Offer for shopping to save 30% by UPI payment.Hello Rahul,Today your Offer for shopping to save 30% by UPI payment.Hello Rahul, Today your Offer for shopping to save 30% by UPI payment.`
        },
        {
            tital: `Offer`,
            time: `12:36PM 12-04-2022`,
            msg: 'Hello Rahul,Today your Offer for shopping to save 30% by UPI payment.'
        },
        {
            tital: `Discount`,
            time: `12:36PM 12-04-2022`,
            msg: 'Hello Rahul,Today your Offer for shopping to save 30% by UPI payment.'
        },
        {
            tital: `Offer`,
            time: `12:36PM 12-04-2022`,
            msg: 'Hello Rahul'
        },
    ])
    return (
        <SafeAreaView style={GloableStyle.container}>
            <StatusBar backgroundColor={AppColor.whitelight} barStyle={'dark-content'} />
            <TouchableOpacity
                onPress={() => {
                    props.navigation.goBack();
                }}
                style={GloableStyle.backView}>
                <Image source={CustomImage.back} style={GloableStyle.smallIcon} />
                <MediumText
                    style={GloableStyle.backText}>
                    Notifications
                </MediumText>
            </TouchableOpacity>
            <View>
                <FlatList
                    style={{ marginBottom: vertScale(30) }}
                    data={message}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.messageview}>
                                <View style={styles.header}>
                                    <BoldText style={styles.headerTitle}>
                                        {item.tital}
                                    </BoldText>
                                    <Text style={styles.headerTime}>
                                        {item.time}
                                    </Text>
                                </View>
                                <Text style={styles.textstyle}>{item.msg}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    headerTitle: {
        flex: 0.6,
        color: AppColor.black
    },
    headerTime: {
        flex: 0.3,
        textAlign: "right",
        fontSize: Font.tiny
    },
    header: {
        flexDirection: 'row',
        flex: 1,
        margin: horizScale(10),
        justifyContent: 'space-between'
    },
    messageview: {
        alignSelf: 'center',
        backgroundColor: AppColor.white,
        borderRadius: horizScale(15),
        width: '90%',
        elevation: 10,
        marginVertical: vertScale(10)
    },
    textstyle: {
        paddingVertical: vertScale(10),
        paddingHorizontal: horizScale(10),

    }
})