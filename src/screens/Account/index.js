import React, { useEffect, useRef, useState } from "react";
import {
    Image, PermissionsAndroid, SafeAreaView, ScrollView, StatusBar, StyleSheet,
    Text, TouchableOpacity, View,
    Permission,
    TextInput
} from "react-native";
import { AppColor } from "../../utils/AppColor";
import Font from "../../utils/Fonts";
import CustomImage from "../../utils/Images";
import { BoldText, horizScale, MediumText, Spacer, vertScale } from "../../utils/Layout";
import GloableStyle from "../GloableStyle";

import Modal from "react-native-modal";
import * as ImagePicker from 'react-native-image-picker';
export default function Account({ navigation }) {
    // profileImage: Image.resolveAssetSource(CustomImage.Group2508).uri,
    const [profileImage, setProfileImage] = useState()
    const [name, setname] = useState("Rohit Sharma")
    const [birth, setbirth] = useState("10-12-2000")
    const [mail, setmail] = useState("rohtsharma@gmail.com")
    const [number, setnumber] = useState("+91 895940XXXX")
    const [nameedit, setnameedit] = useState(false)
    const [birthedit, setbirthedit] = useState(false)
    const [mailedit, setmailedit] = useState(false)
    const [numberedit, setnumberedit] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const ref1 = useRef(null)
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const cameraLaunch = () => {
        console.log('came');
        let options = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
        };


        ImagePicker.launchCamera(options, res => {
            console.log('in image');
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.errorCode || res.errorMessage) {
                console.log(
                    'ImagePicker Error: ',
                    res.errorCode + ' ' + res.errorMessage,
                );
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);

                alert(res.customButton);
            } else if (res.assets) {
                console.log('came get image');
                const source = res.assets[0].uri;
                console.log(source)
                setProfileImage(source)
                setModalVisible(false)
                // setState({ ...state, profileImage: source, modalVisible: false });
            }
        });
    };

    const imageGalleryLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, res => {
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.errorCode || res.errorMessage) {
                console.log(
                    'ImagePicker Error: ',
                    res.errorCode + ' ' + res.errorMessage,
                );
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);

                alert(res.customButton);
            } else if (res.assets) {
                const source = res.assets[0].uri;
                setProfileImage(source)
                setModalVisible(false)
                //  setState({ ...state, profileImage: source, modalVisible: false });

            }
        });
    };
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "My Bogi App Camera Permission",
                    message:
                        "My Bogi App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                cameraLaunch()
                console.log("You can use the camera");
            } else {
                console.log("Camera permission denied==");
            }
        }
        //     const granted = await PermissionsAndroid.request(
        //         PermissionsAndroid.PERMISSIONS.CAMERA,
        //         {
        //             title: 'Doctor Register App Camera Permission',
        //             message:
        //                 'Doctor Register App needs access to your camera ' +
        //                 'so you can take pictures.',
        //             buttonNeutral: 'Ask Me Later',
        //             buttonNegative: 'Cancel',
        //             buttonPositive: 'OK',
        //         },
        //     );
        //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //         cameraLaunch()
        //     } else {
        //         console.log('Camera permission denied');
        //     }
        // } 
        catch (err) {
            console.warn(err);
        }
    };
    const focusFunc = focusOn => {
        focusOn.current.focus()
    }
    useEffect(() => {

    }, [nameedit, birthedit, mailedit, numberedit])
    return (
        <SafeAreaView style={GloableStyle.container}>
            <ScrollView>
                <StatusBar barStyle="light-content" backgroundColor={AppColor.blue} />
                <View style={styles.header}>
                    <View style={{ margin: horizScale(30), marginBottom: horizScale(10) }}>
                        <BoldText style={styles.name}>Welcome !</BoldText>
                        <MediumText style={{ color: AppColor.white, fontSize: Font.h6, }}>Virat Sharma</MediumText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                        <TouchableOpacity
                            onPress={() => {
                                imageGalleryLaunch()
                            }}
                            style={styles.headercameradeleteimage}>
                            <Image style={{ ...GloableStyle.smallIcon, tintColor: AppColor.white }} source={CustomImage.camera} />
                        </TouchableOpacity>
                        <View style={styles.profileImgview}>
                            <Image source={{ uri: profileImage ? profileImage : Image.resolveAssetSource(CustomImage.user).uri }} style={styles.profileImg} />
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                // setModalVisible(!modalVisible)
                                setProfileImage("")
                            }} style={styles.headercameradeleteimage}>
                            <Image style={{ ...GloableStyle.smallIcon, tintColor: AppColor.white }} source={CustomImage.delete} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ ...styles.box, marginTop: vertScale(30) }}>
                    <Image style={GloableStyle.smallIcon} source={CustomImage.user2} />
                    <View style={{ marginLeft: horizScale(20), flex: 0.85 }}>
                        <Text style={{
                            width: horizScale(210),
                            fontSize: Font.small,
                        }}>
                            Name
                        </Text>
                        <TextInput
                            ref={ref1}
                            autoFocus={true}
                            editable={nameedit}
                            style={{
                                fontSize: Font.medium,
                                color: AppColor.black,
                                marginLeft: horizScale(2),
                                fontWeight: 'bold'
                            }}
                            value={name}
                            placeholder={"Name"}
                            onChangeText={(value) => {
                                setname(value)
                            }}
                            onEndEditing={() => {
                                setnameedit(false)
                            }}

                        >

                        </TextInput>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setnameedit(!nameedit)
                            if (nameedit)
                                focusFunc(ref1)
                        }}
                        style={styles.editview}>
                        <Image style={styles.editIcon} source={CustomImage.edit} />
                        <Text style={styles.editText}>{nameedit ? "Done" : "Edit"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <Image style={GloableStyle.smallIcon} source={CustomImage.birthday} />
                    <View style={{ marginLeft: horizScale(20), flex: 0.85 }}>
                        <Text style={{
                            width: horizScale(210),
                            fontSize: Font.small,
                        }}>
                            Date of burth
                        </Text>
                        <TextInput
                            ref={ref2}
                            autoFocus={true}
                            editable={birthedit}
                            style={{
                                fontSize: Font.medium,
                                color: AppColor.black,
                                marginLeft: horizScale(2),
                                fontWeight: 'bold'
                            }}
                            value={birth}
                            placeholder={"Date of Birth"}
                            onChangeText={(value) => {
                                setbirth(value)
                            }}
                            onEndEditing={() => {
                                setbirthedit(false)
                            }}

                        >

                        </TextInput>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setbirthedit(!birthedit)
                            if (birthedit)
                                focusFunc(ref2)
                        }}
                        style={styles.editview}>
                        <Image style={styles.editIcon} source={CustomImage.edit} />
                        <Text style={styles.editText}>{birthedit ? "Done" : "Edit"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <Image style={GloableStyle.smallIcon} source={CustomImage.email} />
                    <View style={{ marginLeft: horizScale(20), flex: 0.85 }}>
                        <Text style={{
                            width: horizScale(210),
                            fontSize: Font.small,
                        }}>
                            Mail ID
                        </Text>
                        <TextInput
                            ref={ref3}
                            autoFocus={true}
                            editable={mailedit}
                            style={{
                                fontSize: Font.medium,
                                color: AppColor.black,
                                marginLeft: horizScale(2),
                                fontWeight: 'bold'
                            }}
                            value={mail}
                            placeholder={"Mail ID"}
                            onChangeText={(value) => {
                                setmail(value)
                            }}
                            onEndEditing={() => {
                                setmailedit(false)
                            }}

                        >

                        </TextInput>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setmailedit(!mailedit)
                            if (mailedit)
                                focusFunc(ref3)
                        }}
                        style={styles.editview}>
                        <Image style={styles.editIcon} source={CustomImage.edit} />
                        <Text style={styles.editText}>{mailedit ? "Done" : "Edit"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <Image style={GloableStyle.smallIcon} source={CustomImage.call} />
                    <View style={{ marginLeft: horizScale(20), flex: 0.85 }}>
                        <Text style={{
                            width: horizScale(210),
                            fontSize: Font.small,
                        }}>
                            Mobile Number
                        </Text>
                        <TextInput
                            ref={ref4}
                            autoFocus={true}
                            editable={numberedit}
                            style={{
                                fontSize: Font.medium,
                                color: AppColor.black,
                                marginLeft: horizScale(2),
                                fontWeight: 'bold'
                            }}
                            value={number}
                            placeholder={"Number"}
                            onChangeText={(value) => {
                                setnumber(value)
                            }}
                            onEndEditing={() => {
                                setnumberedit(false)
                            }}

                        >

                        </TextInput>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setnumberedit(!numberedit)
                            if (numberedit)
                                focusFunc(ref4)
                        }}
                        style={styles.editview}>
                        <Image style={styles.editIcon} source={CustomImage.edit} />
                        <Text style={styles.editText}>{numberedit ? "Done" : "Edit"}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={GloableStyle.button}>
                    <Text style={GloableStyle.buttonText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
            <Modal
                style={{ margin: 0, justifyContent: 'flex-end' }}
                animationType="slide"
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(!modalVisible)}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}>
                <StatusBar backgroundColor={'rgba(52,52,52,0.88)'} />
                <View
                    style={{
                        flex: 0.2,
                        backgroundColor: AppColor.white,
                    }}>
                    <Text style={styles.mprofieText}>Profile Image</Text>
                    <Spacer height={30} />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={() => {
                                console.log("camera permision")
                                requestCameraPermission()
                            }}>
                            <Image
                                source={CustomImage.camera}
                                style={{
                                    height: horizScale(40),
                                    width: horizScale(40),
                                }}
                            />
                            <Text>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={() => {
                                imageGalleryLaunch();
                            }}>
                            <Image
                                source={CustomImage.gallery}
                                style={{
                                    height: horizScale(40),
                                    width: horizScale(40),
                                    tintColor: AppColor.gray,
                                }}
                            />
                            <Text>Gallery</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    editIcon: {
        height: horizScale(15),
        width: horizScale(15),
        resizeMode: 'contain',
        tintColor: AppColor.blue
    },
    editText: {
        color: AppColor.blue,
        fontSize: Font.small
    },
    editview: {
        //  backgroundColor: '#cbe1f7',
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: horizScale(15),
        paddingHorizontal: horizScale(20),
        backgroundColor: AppColor.white,
        paddingVertical: horizScale(10),
        marginHorizontal: horizScale(15),
        marginVertical: horizScale(5),
        flex: 1
    },
    mprofieText: {
        marginLeft: horizScale(15),
        fontSize: Font.regular,
        color: AppColor.black,
        lineHeight: vertScale(30),
    },
    headercameradeleteimage: {
        backgroundColor: AppColor.grey,
        padding: horizScale(10),
        borderRadius: horizScale(20),
        elevation: horizScale(8)
    },
    profileImgview: {
        borderColor: AppColor.grey,
        borderWidth: horizScale(2),
        padding: horizScale(5),
        borderRadius: horizScale(70),
    },
    profileImg: {
        height: horizScale(95),
        width: horizScale(95),
        borderRadius: horizScale(47.5),
        resizeMode: "cover",

    },
    name: {
        fontSize: Font.h2,
        color: AppColor.white,
    },
    header: {
        backgroundColor: AppColor.blue,
        height: vertScale(230),
        borderBottomRightRadius: horizScale(40),
        borderBottomLeftRadius: horizScale(40),
        elevation: horizScale(5)
    }
})







