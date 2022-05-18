import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColor } from "../../utils/AppColor";
import Font from "../../utils/Fonts";
import CustomImage from "../../utils/Images";
import { horizScale, vertScale } from "../../utils/Layout";
import GloableStyle from "../GloableStyle";
import { Pagination } from 'react-native-snap-carousel';
export default function Guide({ navigation }) {
    const [active, setactive] = useState(0)
    return (
        <SafeAreaView style={{ ...GloableStyle.container, backgroundColor: active == 0 || active == 3 || active == 4 ? '#f7f7f7' : AppColor.whitelight }}>
            <View style={styles.imgView}>
                <Image source={
                    active == 0 ? CustomImage.findproduct
                        : active == 1 ? CustomImage.store
                            : active == 2 ? CustomImage.address
                                : active == 3 ? CustomImage.payment
                                    : CustomImage.start
                } style={styles.headerImg} />
            </View>
            <View style={{ flex: 0.2 }}>
                {
                    active == 0 ?
                        <Text style={styles.headText}>Find Your Product</Text>
                        : active == 1 ?
                            <Text style={styles.headText}>Add To Card</Text>
                            : active == 2 ? <Text style={styles.headText}>Update Your Address</Text>
                                : active == 3 ? <Text style={styles.headText}>Online Payment Or Case On Delevery </Text>
                                    : <Text style={styles.headText}>Let's Get Start</Text>

                }
            </View>
            <View >
                <Pagination
                    dotsLength={5}//total
                    activeDotIndex={active}//active
                    containerStyle={{
                        alignSelf: "center",
                        height: 30,
                        paddingTop: 0,
                        paddingBottom: 0
                    }}
                    dotStyle={{
                        width: 20,
                        height: 8,
                        borderRadius: 5,
                        backgroundColor: AppColor.pink
                    }}
                    inactiveDotStyle={{
                        width: 8,
                        height: 8,
                        borderRadius: 5,
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
            <View style={styles.buttonsView}>
                <TouchableOpacity
                    onPress={() => {
                        if (active == 0) {
                            navigation.goBack()
                        }
                        else {
                            setactive(active - 1)
                        }

                    }}
                    style={{ ...GloableStyle.button, width: '40%', backgroundColor: AppColor.darkgrey }}>
                    <Text style={GloableStyle.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        if (active == 4) {
                            navigation.goBack()
                        }
                        else {
                            setactive(active + 1)
                        }

                    }}

                    style={{ ...GloableStyle.button, width: '40%' }}>
                    <Text style={GloableStyle.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    buttonsView: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        flex: 0.2
    },
    headText: {
        fontWeight: 'bold',
        marginHorizontal: horizScale(20),
        fontSize: Font.h4,
        textAlign: 'center',
        color: AppColor.black
    },
    imgView: {
        flex: 0.6,
        marginHorizontal: horizScale(20),
        marginVertical: vertScale(20),
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerImg: {
        flex: 0.7,
        width: '90%',
        resizeMode: 'contain',
    }
})

