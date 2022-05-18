import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { BoldText, horizScale, MediumText, vertScale } from '../../utils/Layout';
import Font from '../../utils/Fonts';
import GloableStyle from '../GloableStyle';
import { AppColor } from '../../utils/AppColor';
import CustomImage from '../../utils/Images';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const AllOffers = () => {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var day = new Date().getDay()
    const [slider, setSlider] = useState([
        {
            id: 1,
            uri: Image.resolveAssetSource(CustomImage.b1).uri
        },
        {
            id: 2,
            uri: Image.resolveAssetSource(CustomImage.b2).uri
        },
        {
            id: 3,
            uri: Image.resolveAssetSource(CustomImage.b3).uri
        },
        {
            id: 4,
            uri: Image.resolveAssetSource(CustomImage.b4).uri
        },

    ])
    const [activeSlider, setActiveSlider] = useState(0)
    const [Other, setOther] = useState([
        {
            id: 1, uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4xcVVhVUwt4GlIB2gCafHvNx0Vox4fZqDw&usqp=CAU",
            title: "Sugar", about: "5 Kg sugar from Ajay Kirana Store", date: "14-04-2022", off: "12%", op: 40, dp: 36
        },
        {
            id: 2, uri: "https://staticimg.titan.co.in/Titan/Catalog/1825KM01_1.jpg?pView=pdp",
            title: "Watch", about: "titan watch with 2year warranty", date: "14-04-2022", off: "14%", op: 600, dp: 540
        },
        {
            id: 3, uri: "https://i.pinimg.com/originals/18/ed/1a/18ed1ad1a8dfe101afd4cbb8829b909e.jpg",
            title: "Shirt", about: "Raymond brand shirt", date: "14-04-2022", off: "5%", op: 350, dp: 310
        },
        {
            id: 4, uri: "https://m.media-amazon.com/images/I/71KpCon2yxL._UX500_.jpg",
            title: "Shoes", about: "Puma shoes with white and black", date: "14-04-2022", off: "10%", op: 460, dp: 400
        }
    ])
    return (
        <SafeAreaView style={{ ...GloableStyle.container }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between', marginHorizontal: horizScale(20)
            }}>
                <View>
                    <BoldText style={styles.name}>Hey Rohit!</BoldText>
                    <MediumText>{`Today ${days[day]}, ${date} ${months[month]}`}</MediumText>
                </View>
                <Image source={CustomImage.user} style={GloableStyle.profileImg} />
            </View>
            <ScrollView>
                <View style={{ marginVertical: 10 }}>
                    <BoldText style={{
                        marginLeft: horizScale(20),
                        fontSize: Font.regular,
                        color: AppColor.black
                    }}>{`Todays Big Offers`}</BoldText>
                    <View style={{
                        height: vertScale(170),
                        marginTop: vertScale(10)
                    }}>
                        <Carousel
                            data={slider}
                            renderItem={({ item }) => (
                                <View style={{ flex: 1 }}>
                                    <Image source={{ uri: item.uri }} style={{
                                        alignSelf: 'center',
                                        width: horizScale(355),
                                        height: vertScale(150),
                                        resizeMode: 'cover',
                                        borderRadius: horizScale(15),
                                    }} />
                                </View>
                            )}
                            sliderWidth={horizScale(415)}
                            itemWidth={horizScale(350)}
                            loop={true}
                            autoplay={true}
                            autoplayDelay={1000}
                            autoplayInterval={5000}
                            loopClonesPerSide={6}
                            layout='default'
                            enableMomentum={false}
                            lockScrollWhileSnapping={true}
                            onSnapToItem={(index) => setActiveSlider(index)}

                        />
                    </View>
                    <Pagination
                        dotsLength={slider.length}
                        activeDotIndex={activeSlider}
                        containerStyle={{
                            alignSelf: "flex-start",
                            height: 30,
                            paddingTop: 0,
                            paddingBottom: 0
                        }}
                        dotStyle={{
                            width: 20,
                            height: 8,
                            borderRadius: 5,
                            backgroundColor: AppColor.blue
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
                <View >
                    <BoldText style={{ ...styles.name, fontSize: Font.h5, marginLeft: horizScale(20) }}>
                        Other Discounts
                    </BoldText>

                    <FlatList
                        data={Other}
                        renderItem={({ item }) => (
                            <View style={styles.box}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={styles.icon} source={{ uri: item.uri }} />
                                        <View style={{ marginLeft: horizScale(10) }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <BoldText
                                                    style={{
                                                        fontSize: Font.input,
                                                        color: AppColor.black,
                                                        marginLeft: horizScale(2),
                                                    }}>
                                                    {item.title}
                                                </BoldText>



                                            </View>
                                            <Text style={{
                                                width: horizScale(210),
                                                fontSize: Font.small,
                                            }}>
                                                {item.about}
                                            </Text>
                                        </View>

                                    </View>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                                    <View style={{
                                        flex: 0.2,
                                        backgroundColor: AppColor.yellow,
                                        borderTopRightRadius: horizScale(20),
                                        borderBottomRightRadius: horizScale(20),
                                        paddingVertical: vertScale(2),
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ color: AppColor.black, fontSize: Font.small }}>{item.off}</Text>
                                    </View>
                                    <View style={{
                                        flex: 0.3,
                                        marginHorizontal: horizScale(10),
                                        borderRadius: horizScale(8),
                                        height: vertScale(40), justifyContent: 'center'
                                    }}>
                                        <BoldText style={{ color: AppColor.black, fontSize: Font.tiny, textAlign: 'center' }}>Currant Price{"\n"}<BoldText style={{ textDecorationLine: 'line-through', color: AppColor.darkgrey }}>₹{item.op}</BoldText>{`     ₹${item.dp}`}</BoldText>
                                    </View>
                                    <View style={{
                                        flex: 0.2,
                                        borderWidth: 1, borderColor: AppColor.darkgrey,
                                        paddingVertical: vertScale(2),
                                        paddingHorizontal: horizScale(10),
                                        borderRadius: horizScale(5), justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontSize: Font.tiny, textAlign: 'center' }}>
                                            Add to{'\n'}Card
                                        </Text>
                                    </View>
                                    <View style={{
                                        flex: 0.25,
                                        backgroundColor: AppColor.pink,
                                        borderRadius: horizScale(15),
                                        marginRight: horizScale(10),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: vertScale(30)

                                    }}>
                                        <Text style={{

                                            fontSize: Font.tiny,
                                            color: AppColor.white,

                                        }}>Buy Now</Text>
                                    </View>
                                    {/* <View style={{ marginHorizontal: horizScale(10), marginTop: vertScale(5) }}></View> */}
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={{}}>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AllOffers;

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
        justifyContent: 'space-between',
        flex: 1,
        borderRadius: horizScale(15),
        paddingHorizontal: horizScale(20),
        backgroundColor: AppColor.white,
        paddingVertical: horizScale(10),
        marginHorizontal: horizScale(15),
        marginVertical: horizScale(5)
    },
    name: {
        fontSize: Font.h4,
        marginTop: vertScale(5),
        color: AppColor.black
    }
});
