import React, { useState } from 'react'
import { Easing, Linking, StatusBar, TextInput } from 'react-native';
import {
    StyleSheet, Text, View,
    SafeAreaView, Image, TouchableOpacity,
    ScrollView, Alert,
    Animated
} from 'react-native'
import { AppColor } from '../../utils/AppColor';
import Font from '../../utils/Fonts';
import CustomImage from '../../utils/Images';
import { horizScale, Spacer, vertScale } from '../../utils/Layout';
import GloableStyle from '../GloableStyle';

import Modal from "react-native-modal";

export default function CustomerService({ navigation }) {
    const [number, setNumber] = useState(895940)
    const [showIn, setshowIn] = useState(0)
    const [query, setquery] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)


    // First set up animation 


    // Next, interpolate beginning and end values (in this case 0 and 1)

    return (
        <SafeAreaView style={GloableStyle.container}>
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
                }}>Customer Service</Text>
            </TouchableOpacity>
            <ScrollView nestedScrollEnabled={true}>
                <Spacer height={20} />
                <View style={styles.contactstyle}>
                    <Text style={{
                        fontSize: Font.regular,
                        color: AppColor.black,
                        fontWeight: "bold"
                    }}>Contact Us </Text>
                    <TouchableOpacity onPress={() => { Linking.openURL(`tel:${number}`) }}>
                        <Image source={CustomImage.call}
                            resizeMode='contain'
                            style={{
                                height: vertScale(25),
                                width: horizScale(25),
                                tintColor: AppColor.green
                            }} />
                    </TouchableOpacity>
                </View>
                <Spacer height={20} />
                <Text style={styles.textstyle}>I have a issue with </Text>
                <View style={styles.button} >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: vertScale(20) }}>
                        <Text style={styles.header}>On Order</Text>
                        <TouchableOpacity
                            style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => { setshowIn(showIn == 0 ? 1 : 0) }}>

                            <Image
                                style={{ ...styles.arrowimg, transform: showIn == 1 ? [{ rotate: '90 deg' }] : [{ rotate: '0 deg' }] }}
                                source={CustomImage.go} />
                        </TouchableOpacity>
                    </View>
                    {
                        showIn == 1 ?
                            <View>
                                <Text>How Can We Help You</Text>
                                <TextInput
                                    placeholder='Insert You Query Here...'
                                    style={{ ...styles.inputbox, borderColor: query ? AppColor.blue : AppColor.darkgrey }}
                                    onChangeText={(value) => { setquery(value) }}
                                />
                                <TouchableOpacity
                                    onPress={() => { setModalVisible(!modalVisible) }}
                                    style={GloableStyle.button}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                            : null
                    }
                </View>
                <View style={styles.button} >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: vertScale(20) }}>
                        <Text style={styles.header}>Add to Card</Text>
                        <TouchableOpacity
                            style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => { setshowIn(showIn == 0 ? 2 : 0) }}>

                            <Image
                                style={{ ...styles.arrowimg, transform: showIn == 2 ? [{ rotate: '90 deg' }] : [{ rotate: '0 deg' }] }}
                                source={CustomImage.go} />
                        </TouchableOpacity>
                    </View>
                    {
                        showIn == 2 ?
                            <View>
                                <Text>How Can We Help You</Text>
                                <TextInput
                                    placeholder='Insert You Query Here...'
                                    style={{ ...styles.inputbox, borderColor: query ? AppColor.blue : AppColor.darkgrey }}
                                    onChangeText={(value) => { setquery(value) }}
                                />
                                <TouchableOpacity
                                    onPress={() => { setModalVisible(!modalVisible) }}
                                    style={GloableStyle.button}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                            : null
                    }
                </View>
                <View style={styles.button} >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: vertScale(20) }}>
                        <Text style={styles.header}>Payment</Text>
                        <TouchableOpacity
                            style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => { setshowIn(showIn == 0 ? 3 : 0) }}>

                            <Image
                                style={{ ...styles.arrowimg, transform: showIn == 3 ? [{ rotate: '90 deg' }] : [{ rotate: '0 deg' }] }}
                                source={CustomImage.go} />
                        </TouchableOpacity>
                    </View>
                    {
                        showIn == 3 ?
                            <View>
                                <Text>How Can We Help You</Text>
                                <TextInput
                                    placeholder='Insert You Query Here...'
                                    style={{ ...styles.inputbox, borderColor: query ? AppColor.blue : AppColor.darkgrey }}
                                    onChangeText={(value) => { setquery(value) }}
                                />
                                <TouchableOpacity
                                    onPress={() => { setModalVisible(!modalVisible) }}
                                    style={GloableStyle.button}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                            : null
                    }
                </View>
                <View style={styles.button} >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: vertScale(20) }}>
                        <Text style={styles.header}>In Product Find</Text>
                        <TouchableOpacity
                            style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => { setshowIn(showIn == 0 ? 4 : 0) }}>

                            <Image
                                style={{ ...styles.arrowimg, transform: showIn == 4 ? [{ rotate: '90 deg' }] : [{ rotate: '0 deg' }] }}
                                source={CustomImage.go} />
                        </TouchableOpacity>
                    </View>
                    {
                        showIn == 4 ?
                            <View>
                                <Text>How Can We Help You</Text>
                                <TextInput
                                    placeholder='Insert You Query Here...'
                                    style={{ ...styles.inputbox, borderColor: query ? AppColor.blue : AppColor.darkgrey }}
                                    onChangeText={(value) => { setquery(value) }}
                                />
                                <TouchableOpacity
                                    onPress={() => { setModalVisible(!modalVisible) }}
                                    style={GloableStyle.button}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                            : null
                    }
                </View>
                <View style={styles.button} >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: vertScale(20) }}>
                        <Text style={styles.header}>Other</Text>
                        <TouchableOpacity
                            style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => { setshowIn(showIn == 0 ? 5 : 0) }}>

                            <Image
                                style={{ ...styles.arrowimg, transform: showIn == 5 ? [{ rotate: '90 deg' }] : [{ rotate: '0 deg' }] }}
                                source={CustomImage.go} />
                        </TouchableOpacity>
                    </View>
                    {
                        showIn == 5 ?
                            <View>
                                <Text>How Can We Help You</Text>
                                <TextInput
                                    placeholder='Insert You Query Here...'
                                    style={{ ...styles.inputbox, borderColor: query ? AppColor.blue : AppColor.darkgrey }}
                                    onChangeText={(value) => { setquery(value) }}
                                />
                                <TouchableOpacity
                                    onPress={() => { setModalVisible(!modalVisible) }}
                                    style={GloableStyle.button}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                            : null
                    }
                </View>

            </ScrollView>
            <Modal
                style={{ margin: 0, justifyContent: 'center' }}
                animationType="slide"
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(!modalVisible)}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}>
                <StatusBar backgroundColor={'rgba(52,52,52,0.88)'} />
                <View
                    style={styles.modalView}>
                    <Text style={styles.mprofieText}>We got your issue don't worry, Team will connect you soon.</Text>
                    <TouchableOpacity style={GloableStyle.button} onPress={() => {
                        setshowIn(0)
                        setModalVisible(!modalVisible)
                    }}>
                        <Text style={styles.buttonText}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modalView: {
        flex: 0.4,
        backgroundColor: AppColor.white,
        marginHorizontal: horizScale(30),
        borderRadius: horizScale(15),
        elevation: horizScale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    mprofieText: {
        fontSize: Font.regular,
        color: AppColor.black,
        lineHeight: vertScale(30),
        fontWeight: 'bold',
        width: '70%',
        textAlign: 'center'
    },
    buttonText: {
        color: AppColor.white,
        fontSize: Font.regular
    },
    inputbox: {
        borderBottomWidth: horizScale(1.5),
    },
    header: {
        fontWeight: 'bold',
        color: AppColor.black,
        fontSize: Font.regular
    },
    textstyle: {
        color: AppColor.pink,
        fontSize: Font.input,
        marginLeft: horizScale(25),
        fontWeight: 'bold'
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        // backgroundColor: AppColor.green,
        borderRadius: 10,

        marginVertical: vertScale(7),
        paddingHorizontal: horizScale(15),
        backgroundColor: AppColor.white,
        elevation: horizScale(8)
    },
    contactstyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: horizScale(40),


    },
    arrowimg: {
        height: vertScale(20),
        width: horizScale(20),
        tintColor: AppColor.darkgrey
    }
})