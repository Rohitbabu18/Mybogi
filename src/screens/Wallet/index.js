import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, StatusBar, FlatList } from "react-native";
import {
    // LineChart,
    BarChart,
    // ProgressChart,
} from "react-native-chart-kit";
import { AppColor } from "../../utils/AppColor";
import Font from "../../utils/Fonts";
import CustomImage from "../../utils/Images";
import { BoldText, horizScale, MediumText, vertScale } from "../../utils/Layout";
import GloableStyle from "../GloableStyle";
export default function Wallet({ navigation }) {

    const [paymentHistory, setPaymentHistory] = useState([
        {
            id: 1, uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4xcVVhVUwt4GlIB2gCafHvNx0Vox4fZqDw&usqp=CAU",
            title: "Sugar", about: "5 Kg sugar from Ajay Kirana Store", date: "14-04-2022", amount: 238
        },
        {
            id: 2, uri: "https://staticimg.titan.co.in/Titan/Catalog/1825KM01_1.jpg?pView=pdp",
            title: "Watch", about: "titan watch with 2year warranty", date: "14-04-2022", amount: 270
        },
        {
            id: 3, uri: "https://i.pinimg.com/originals/18/ed/1a/18ed1ad1a8dfe101afd4cbb8829b909e.jpg",
            title: "Shirt", about: "Raymond brand shirt", date: "14-04-2022", amount: 340
        },
        {
            id: 4, uri: "https://m.media-amazon.com/images/I/71KpCon2yxL._UX500_.jpg",
            title: "Shoes", about: "Puma shoes with white and black", date: "14-04-2022", amount: 370
        }
    ])
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr"],//, "June", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        datasets: [
            {
                data: [500, 1050, 1800, 1580],// 0, 0, 0, 0, 0, 0, 0, 0

            }
        ]
    };
    const chartConfig = {
        backgroundColor: AppColor.pink,
        backgroundGradientFrom: AppColor.pink,
        backgroundGradientTo: AppColor.blue,
        decimalPlaces: 0, // optional, defaults to 2dp

        color: (opacity = 1) => "#ffa726",
        labelColor: (opacity = 1) => AppColor.white,
        style: {
            marginHorizontal: horizScale(20),

        },
        propsForDots: {
            r: 0,
            strokeWidth: 0,
            stroke: "#ffa726"
        }

    }
    return (
        <SafeAreaView style={GloableStyle.container}>
            <ScrollView>
                <StatusBar barStyle="light-content" backgroundColor={AppColor.pink} />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: horizScale(20),
                    backgroundColor: AppColor.pink,
                    height: horizScale(120),
                    borderBottomRightRadius: horizScale(30),
                    borderBottomLeftRadius: horizScale(30),
                    elevation: horizScale(15)
                }}>
                    <View>
                        <BoldText style={styles.name}>Your Wallet!</BoldText>
                        <MediumText style={{ color: AppColor.white }}>Statistical Data</MediumText>
                    </View>
                    <Image source={CustomImage.user} style={GloableStyle.profileImg} />
                </View>
                <View style={{ height: vertScale(335), backgroundColor: AppColor.whitelight, marginVertical: horizScale(20) }}>
                    <ScrollView horizontal >
                        <BarChart

                            style={{
                                borderRadius: 15, marginHorizontal: horizScale(10),
                                width: data.labels.length > 4 ? horizScale(200 + data.labels.length * 50) : horizScale(400)
                            }}
                            data={data}
                            width={data.labels.length > 4 ? horizScale(200 + data.labels.length * 50) : horizScale(400)}
                            height={vertScale(330)}
                            yAxisLabel="₹"
                            chartConfig={chartConfig}

                        //  verticalLabelRotation={vertScale(0)}
                        />

                    </ScrollView>
                </View>
                <View style={{
                    marginLeft: horizScale(20),
                    height: horizScale(2), width: horizScale(90),
                    borderRadius: horizScale(15), backgroundColor: AppColor.blue
                }} />
                <View style={{
                    marginLeft: horizScale(20),
                    height: horizScale(2), width: horizScale(70),
                    borderRadius: horizScale(15), backgroundColor: "#9383fb",
                    marginTop: horizScale(5)
                }} />
                <View style={{
                    marginLeft: horizScale(20),
                    height: horizScale(2), width: horizScale(50),
                    borderRadius: horizScale(15), backgroundColor: "#f89f5f",
                    marginTop: horizScale(5)
                }} />

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    backgroundColor: AppColor.whitelight,
                    marginVertical: horizScale(10)
                }}>
                    <View style={styles.viewBox}>
                        <BoldText style={{
                            textAlign: "center",
                            color: AppColor.blue,
                        }}>Buy Amount{"\n"}₹ 7445/-</BoldText>
                    </View>
                    <View style={{ ...styles.viewBox, backgroundColor: "#e2e9fc" }}>
                        <BoldText style={{
                            textAlign: "center",
                            color: AppColor.blue,
                        }}>Saving Amount{"\n"}₹ 1245/-</BoldText>
                    </View>
                    <View style={{ ...styles.viewBox, backgroundColor: "#eee9fe" }}>
                        <BoldText style={{
                            textAlign: 'center',
                            color: AppColor.blue,
                        }}>Cashback{"\n"}₹ 480/-</BoldText>
                    </View>
                </View>
                <View>
                    <BoldText style={styles.historyText}>History</BoldText>
                </View>

                <FlatList
                    data={paymentHistory}
                    renderItem={({ item }) => (
                        <View style={styles.box}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.icon} source={{ uri: item.uri }} />
                                <View style={{ marginLeft: horizScale(10) }}>
                                    <BoldText
                                        style={{
                                            fontSize: Font.input,
                                            color: AppColor.black,
                                            marginLeft: horizScale(2),
                                        }}>
                                        {item.title}
                                    </BoldText>
                                    <Text style={{
                                        width: horizScale(210),
                                        fontSize: Font.small,
                                    }}>
                                        {item.about}
                                    </Text>
                                </View>
                            </View>
                            <View >
                                <Text style={styles.date}>{item.date}</Text>
                                <BoldText
                                    style={{
                                        fontSize: Font.input,
                                        color: AppColor.darkgrey,
                                        margin: horizScale(12),
                                        textAlignVertical: 'center'
                                    }}>
                                    ₹ {item.amount}
                                </BoldText>


                            </View>
                        </View>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    date: {
        fontSize: Font.das,
        marginRight: horizScale(20)
    },
    icon: {
        marginLeft: horizScale(5),
        height: horizScale(80),
        width: horizScale(60),
        resizeMode: 'contain',
        tintColor: AppColor.gray,
        borderRadius: horizScale(10)
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        borderRadius: horizScale(15),
        paddingHorizontal: horizScale(20),
        backgroundColor: AppColor.white,
        paddingVertical: horizScale(10),
        marginHorizontal: horizScale(15),
        marginVertical: horizScale(5)
    },
    historyText: {
        fontSize: Font.h5,
        marginTop: vertScale(20),
        marginLeft: horizScale(20),
        color: AppColor.black
    },
    viewBox: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f0eff2",
        height: horizScale(100),
        width: horizScale(120),
        elevation: horizScale(10),
        borderRadius: horizScale(30)
    },

    name: {
        fontSize: Font.h4,
        marginTop: vertScale(5),
        color: AppColor.white
    }
});


