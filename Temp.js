import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    SafeAreaView,
    TextInput,
    Text,
    FlatList,
    ScrollView,
    StatusBar
} from 'react-native';
import { AppColor } from './src/utils/AppColor';
import Font from './src/utils/Fonts';
import CustomImage from './src/utils/Images';
import { horizScale, vertScale, } from './src/utils/Layout';
import Modal from "react-native-modal";
export default function RegisterTeachur(props) {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [mobile, setmobile] = useState()
    const [location, setlocation] = useState()
    const [youtube, setyoutube] = useState()
    const [selectedGender, setselectedGender] = useState('')
    const [genders, setgenders] = useState([
        { gender: 'M', id: 1, name: 'Male' },
        { gender: 'F', id: 2, name: 'Female' },
        { gender: 'O', id: 3, name: 'Other' },
    ])
    const [teaching, setteaching] = useState([
        {
            id: 1,
            name: 'Hindi',
            selected: false,
        },
        {
            id: 2,
            name: 'English',
            selected: false,
        },
        {
            id: 3,
            name: 'Gujrati',
            selected: false,
        },
        {
            id: 4,
            name: 'Rajisthani',
            selected: false,
        },
        {
            id: 5,
            name: 'Telgu',
            selected: false,
        },
    ])
    const [category, setcategory] = useState([
        {
            id: 1,
            name: 'Arrow',
            selected: false,
        },
        {
            id: 2,
            name: 'V Neck',
            selected: false,
        },
        {
            id: 3,
            name: 'Simple',
            selected: false,
        },
        {
            id: 4,
            name: 'Round',
            selected: false,
        },
        {
            id: 5,
            name: 'Telgu',
            selected: false,
        },
    ])
    const [modalVisible, setModalVisible] = useState(false)
    const UpdateArrayObjectValue = (arr, id, newValue) => {
        return arr.map(item => {
            var temp = Object.assign({}, item);
            if (temp.id === id) { //newValue replase with your key name
                temp.selected = newValue;
            }
            return temp;
        });
    }
    useEffect(() => {

    }, [teaching])
    return (

        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                onPress={() => {
                    //  navigation.goBack()
                }}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: horizScale(20),
                    paddingVertical: horizScale(10),
                    paddingVertical: horizScale(18),
                }}>
                <Image source={CustomImage.back} style={styles.smallIcon} />
                <Text style={{
                    fontSize: Font.medium
                }}>Back</Text>
            </TouchableOpacity>
            <ScrollView>
                <Text style={styles.headerText1}>Enter Your Details For</Text>
                <Text style={styles.headerText2}>Registration</Text>

                <Text style={styles.inputHeader}>Name</Text>
                <TextInput
                    style={styles.inputstyle}
                    placeholder='Name'
                    onChangeText={(value) => { setname(value) }}
                />
                <Text style={styles.inputHeader}>Gender</Text>
                <FlatList
                    style={{ marginLeft: horizScale(20) }}
                    data={genders}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            setselectedGender(item.gender)
                        }}
                            style={{
                                ...styles.multiChoiceBox, backgroundColor: selectedGender === item.gender ? "#333c4b" : AppColor.white,
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}  >
                                {selectedGender === item.gender ? (
                                    <Image source={CustomImage.right} style={{
                                        height: horizScale(15),
                                        width: horizScale(15),
                                        resizeMode: 'contain',
                                        tintColor: AppColor.white,
                                    }} />
                                ) : null}
                                <Text style={{
                                    ...styles.multiChoiceBoxText,
                                    color: selectedGender === item.gender ? AppColor.white : AppColor.black,

                                }}>
                                    {item.name}
                                </Text>
                            </View>
                        </TouchableOpacity>

                    )}
                />
                <Text style={styles.inputHeader}>Mobile Number</Text>
                <TextInput
                    style={styles.inputstyle}
                    placeholder='Mobile Number'
                    onChangeText={(value) => { setmobile(value) }}
                />
                <Text style={styles.inputHeader}>Email ID</Text>
                <TextInput
                    style={styles.inputstyle}
                    placeholder='Email'
                    onChangeText={(value) => { setemail(value) }}
                />
                <Text style={styles.inputHeader}>Location</Text>
                <TextInput
                    style={styles.inputstyle}
                    placeholder='Location'
                    onChangeText={(value) => { setlocation(value) }}
                />
                <Text style={styles.inputHeader}>Teaching</Text>
                <FlatList
                    style={{ marginLeft: horizScale(20) }}
                    data={teaching}
                    horizontal={true}
                    renderItem={({ item, index }) => {
                        console.log(item)
                        return (
                            <TouchableOpacity onPress={() => {
                                var updatedvalue = UpdateArrayObjectValue(teaching, item.id, !item.selected)

                                setteaching(updatedvalue)
                            }}
                                style={{
                                    ...styles.multiChoiceBox, backgroundColor: item.selected === true ? "#333c4b" : AppColor.white,
                                }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}  >
                                    {item.selected === true ? (
                                        <Image source={CustomImage.right} style={{
                                            height: horizScale(15),
                                            width: horizScale(15),
                                            resizeMode: 'contain',
                                            tintColor: AppColor.white,
                                        }} />
                                    ) : null}
                                    <Text style={{
                                        ...styles.multiChoiceBoxText,
                                        color: item.selected === true ? AppColor.white : AppColor.black,

                                    }}>
                                        {item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }


                    }
                />
                <Text style={styles.inputHeader}>Category</Text>
                <FlatList
                    style={{ marginLeft: horizScale(20) }}
                    data={category}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            var updatedvalue = UpdateArrayObjectValue(category, item.id, !item.selected)
                            setcategory(updatedvalue)
                        }}
                            style={{
                                ...styles.multiChoiceBox, backgroundColor: item.selected === true ? "#333c4b" : AppColor.white,
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}  >
                                {item.selected === true ? (
                                    <Image source={CustomImage.right} style={{
                                        height: horizScale(15),
                                        width: horizScale(15),
                                        resizeMode: 'contain',
                                        tintColor: AppColor.white,
                                    }} />
                                ) : null}
                                <Text style={{
                                    ...styles.multiChoiceBoxText,
                                    color: item.selected === true ? AppColor.white : AppColor.black,

                                }}>
                                    {item.name}
                                </Text>
                            </View>
                        </TouchableOpacity>

                    )}
                />
                <Text style={styles.inputHeader}>Social Media Link</Text>
                <TextInput
                    style={styles.inputstyle}
                    placeholder='Social Media Link'
                    onChangeText={(value) => { setyoutube(value) }}
                />

                <TouchableOpacity style={styles.button} onPress={() => {
                    setModalVisible(!modalVisible)
                }}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

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
                    <Text style={styles.mprofieText}>Thank You for your intrest and support, Team will connect you soon.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        setModalVisible(!modalVisible)
                    }}>
                        <Text style={styles.buttonText}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>

    );
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
    button: {
        marginVertical: vertScale(30),
        paddingVertical: vertScale(15),
        width: '80%',
        backgroundColor: "#333c4b",
        borderRadius: horizScale(40),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: AppColor.white,
        fontSize: Font.regular
    },
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1'
    },

    inputHeader: {
        fontWeight: 'bold',
        marginTop: horizScale(10),
        marginHorizontal: horizScale(15),
    },
    inputstyle: {
        borderWidth: horizScale(1.5),
        marginTop: horizScale(10),
        marginHorizontal: horizScale(15),
        paddingHorizontal: horizScale(10),
        borderRadius: horizScale(15)
    },
    headerText1: {
        color: AppColor.black,
        fontSize: Font.h5,
        marginLeft: horizScale(20),
        marginTop: vertScale(5),
        lineHeight: vertScale(30)
    },
    headerText2: {
        color: "#333c4b",
        fontSize: Font.h3,
        marginLeft: horizScale(20),
        lineHeight: vertScale(40),
        fontWeight: 'bold'
    },

    smallIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
});