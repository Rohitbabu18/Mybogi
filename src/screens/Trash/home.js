import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Modal,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppColor } from '../../utils/AppColor';
import SmallBox from '../../utils/SmallBox';
import HalfScreenBox from '../../utils/HalfScreenBox';
import FlatBox from '../../utils/FlatBox';
import { Icon } from 'react-native-elements';
import GloableStyle from '../GloableStyle';
const Home = ({ navigation }) => {
    const [categories, setCategories] = useState([
        {
            image: 'https://cdn-icons-png.flaticon.com/128/3843/3843517.png',
            title: 'Categories',
        },
        {
            image:
                'https://cdn-icons.flaticon.com/png/128/3211/premium/3211391.png?token=exp=1647331874~hmac=24ad6064fba1abea27e88d55fda52501',
            title: 'Fashion',
        },
        {
            image:
                'https://cdn-icons.flaticon.com/png/128/869/premium/869457.png?token=exp=1647332081~hmac=3081517d705387fbeb8311e916d124ba',
            title: 'Grocery',
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/716/716429.png',
            title: 'TVs',
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/3843/3843517.png',
            title: 'Categories',
        },
        {
            image:
                'https://cdn-icons.flaticon.com/png/128/3211/premium/3211391.png?token=exp=1647331874~hmac=24ad6064fba1abea27e88d55fda52501',
            title: 'Fashion',
        },
        {
            image:
                'https://cdn-icons.flaticon.com/png/128/869/premium/869457.png?token=exp=1647332081~hmac=3081517d705387fbeb8311e916d124ba',
            title: 'Grocery',
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/716/716429.png',
            title: 'TVs',
        },
    ]);

    const [visible, setVisible] = useState(false);
    const [itemCount, setItemCount] = useState(1);

    const [data, setData] = useState([{}, {}, {}, {}]);
    const renderCategoryItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={{
                    height: 60,
                    width: 60,
                    marginStart: index === 0 ? 10 : 5,
                    marginTop: 10,
                    alignItems: 'center',
                }}>
                <View>
                    <Image
                        style={{
                            height: 25,
                            width: 25,
                            alignSelf: 'center',
                        }}
                        source={{
                            uri: item.image,
                        }}
                    />
                    <Text
                        style={{
                            color: AppColor.black,
                            fontWeight: 'bold',
                            fontSize: 12,
                            marginTop: 5,
                        }}>
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };
    const closeMenu = () => {
        setVisible(!visible);
    };

    const addItem = () => {
        let _tempitem = itemCount + 1;
        setItemCount(_tempitem);
    };
    const removeItem = () => {
        if (itemCount <= 1) return;
        let _tempitem = itemCount - 1;
        setItemCount(_tempitem);
    };

    const renderProductModal = () => {
        return (
            <Modal
                visible={visible}
                animationType="fade"
                transparent={true}
                statusBarTranslucent
                onRequestClose={() => closeMenu()}
                style={{ flexGrow: 1 }}>
                <View
                    style={{
                        backgroundColor: '#E1E1E190',
                        flexGrow: 1,
                        // justifyContent: 'flex-end',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => closeMenu()}
                        style={{ flex: 1 }}></TouchableOpacity>

                    <View style={{ backgroundColor: AppColor.white, borderRadius: 10 }}>
                        <Image
                            source={{
                                uri: 'data:image/jpeg;base64,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',
                            }}
                            style={{
                                height: 150,
                                width: 150,
                                marginStart: 20,
                                overflow: 'visible',
                                position: 'relative',
                                // bottom: 60,
                                // direction: 'inherit',
                            }}
                        />

                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                                color: AppColor.blue,
                                textAlign: 'right',
                                marginEnd: 20,
                                marginTop: 10,
                                marginBottom: 10,
                            }}>
                            ₹ 45
                            <Text
                                style={{
                                    // fontWeight: 'bold',
                                    fontSize: 12,
                                    color: AppColor.grey,
                                    // marginTop: 10,
                                    textAlign: 'center',
                                    marginEnd: 10,
                                }}>
                                {'  '}
                                (Team buy price)
                            </Text>
                        </Text>
                        <Text
                            style={{
                                // fontWeight: 'bold',
                                fontSize: 16,
                                color: AppColor.black,
                                // marginTop: 10,
                                // textAlign: 'center',
                                marginEnd: 10,
                                marginStart: 15,
                            }}>
                            Vim bar 85 gm - Pack of 10 (Team buy)
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                height: 56,
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    // fontWeight: 'bold',
                                    fontSize: 14,
                                    color: AppColor.black,
                                    // marginTop: 10,
                                    // textAlign: 'center',
                                    marginEnd: 10,
                                    marginStart: 15,
                                }}>
                                Product No.
                            </Text>

                            <View style={style.addItemBottom}>
                                <View style={style.addminusView}>
                                    <Icon
                                        onPress={() => {
                                            removeItem();
                                        }}
                                        name="add"
                                        color={'#C8171D'}
                                        size={15}
                                        style={{ paddingHorizontal: 10, paddingVertical: 10 }}
                                    />
                                    <Text style={style.countText}>{itemCount}</Text>
                                    <Icon
                                        onPress={() => {
                                            addItem();
                                        }}
                                        name="add"
                                        color={'#C8171D'}
                                        size={15}
                                    // style={{paddingHorizontal: 10, paddingVertical: 10}}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 18,
                                        color: AppColor.black,
                                        // textAlign: 'center',
                                        marginStart: 15,
                                        marginEnd: 10,
                                        marginTop: 10,
                                        marginBottom: 5,
                                    }}>
                                    Add 1 more team {'\n'}member
                                </Text>
                                <Text
                                    style={{
                                        // fontWeight: 'bold',
                                        fontSize: 12,
                                        color: AppColor.black,
                                        // textAlign: 'center',
                                        marginStart: 15,
                                        marginEnd: 10,
                                        // marginTop: 10,
                                        // marginBottom: 10,
                                        fontStyle: 'italic',
                                    }}>
                                    Max team size - 2
                                </Text>
                            </View>
                            <TouchableOpacity style={{ position: 'absolute', right: 70 }}>
                                <Image
                                    source={{
                                        uri: 'data:image/jpeg;base64,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',
                                    }}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        alignSelf: 'center',
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 20,
                                }}>
                                <Image
                                    source={{
                                        uri: 'data:image/png;base64,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',
                                    }}
                                    style={{
                                        width: 35,
                                        alignSelf: 'center',
                                        height: 35,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={{
                                width: '100%',
                                alignItems: 'center',
                                height: 45,
                                backgroundColor: AppColor.blue,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: 5,
                            }}>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: AppColor.white,
                                    // textAlign: 'center',
                                    marginStart: 15,
                                    marginEnd: 10,
                                    marginTop: 10,
                                    marginBottom: 5,
                                }}>
                                Share on whatsapp to create team
                            </Text>
                            <Image
                                source={{
                                    uri: 'data:image/jpeg;base64,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',
                                }}
                                style={{
                                    width: 35,
                                    alignSelf: 'center',
                                    height: 35,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };

    const renderProductItem = () => {
        return (
            <TouchableOpacity
                style={style.listproduct}
                onPress={() => {
                    closeMenu();
                }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'space-between'
                }}>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/128/535/535285.png',
                        }}
                        style={{
                            height: 20,
                            width: 20,
                            margin: 10,
                        }}
                    />
                    <View
                        style={style.teambymsg}>
                        <Text
                            style={{
                                fontSize: 12,
                                color: AppColor.black,
                                fontWeight: 'bold',
                            }}>
                            Team buy to save 50%
                        </Text>
                    </View>

                </View>
                <Image
                    source={{
                        uri: 'data:image/jpeg;base64,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',
                    }}
                    style={{
                        height: 120,
                        width: 120,
                        alignSelf: 'center',
                    }}
                />
                <Text
                    style={style.productname}>
                    Amul Taaza toned milk {'\n'}200 ml - pack of 5 (Team)
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text
                        style={style.buynowmsg}>
                        Buy now @ {'\n'} ₹ 70
                    </Text>
                    <View
                        style={style.teambymsg}>
                        <Text
                            style={{
                                fontSize: 12,
                                color: AppColor.black,
                                fontWeight: 'bold',
                            }}>
                            Team buy@ {'\n'} ₹ 64
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={GloableStyle.container}>
            <ScrollView>
                <View
                    style={{
                        width: '100%',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.openDrawer();
                            }}>
                            <Image
                                source={require('../../../assets/menu.png')}
                                style={style.menu}
                            />
                        </TouchableOpacity>
                        <Image
                            source={require('../../../assets/ic_logo.png')}
                            style={style.ic_logo}
                        />
                        <TouchableOpacity>
                            <Image
                                source={require('../../../assets/bell.png')}
                                style={style.bell}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../../assets/cart.png')}
                                style={style.cart}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity activeOpacity={0.5} style={style.loginRegMobile}>
                            <Image
                                source={require('../../../assets/search.png')}
                                style={style.search}
                            />
                            <Text style={[style.alreadyReg, { margin: 5, fontWeight: 'bold' }]}>
                                Search Product Here
                            </Text>
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 10,
                                }}>
                                <Image
                                    source={require('../../../assets/camera.png')}
                                    style={style.camera}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../../assets/google_voice.png')}
                                style={style.google_voice}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.stroke} />
                </View>
                <View
                    style={{
                        width: '100%',
                        backgroundColor: AppColor.grey,
                        flexDirection: 'row',
                    }}>
                    <Image
                        source={require('../../../assets/location.png')}
                        style={{
                            width: 18,
                            height: 18,
                            margin: 5,
                            tintColor: AppColor.darkgrey,
                            marginStart: 10,
                        }}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                        }}>
                        Deliver to
                        <Text
                            style={{
                                fontWeight: 'bold',
                            }}>
                            {' '}
                            441904
                        </Text>
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={categories}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.title}
                        renderItem={renderCategoryItem}
                        style={{
                            width: '100%',
                        }}
                    />
                </View>
                <Image
                    source={{
                        uri: 'https://image.shutterstock.com/image-vector/gift-coupon-template-50-percent-600w-1966689436.jpg',
                    }}
                    style={{
                        height: 50,
                        resizeMode: 'stretch',
                        width: '100%',
                    }}
                />
                <Image
                    source={{
                        uri: 'https://image.shutterstock.com/image-vector/sale-banner-template-design-geometric-600w-2006512574.jpg',
                    }}
                    style={{
                        height: 150,
                        resizeMode: 'stretch',
                        width: '100%',
                        marginTop: 5,
                    }}
                />

                <Image
                    source={{
                        uri: 'https://image.shutterstock.com/image-vector/sale-banner-template-design-geometric-600w-2006512574.jpg',
                    }}
                    style={{
                        borderTopLeftRadius: 30,
                        height: 40,
                        width: '98%',
                        alignSelf: 'center',
                        borderBottomRightRadius: 30,
                        borderRadius: 10,
                    }}
                />
                <Image
                    source={{
                        uri: 'https://image.shutterstock.com/image-vector/sale-banner-template-design-geometric-600w-2006512574.jpg',
                    }}
                    style={{
                        height: 150,
                        resizeMode: 'stretch',
                        width: '98%',
                        alignSelf: 'center',
                        marginTop: 5,
                    }}
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={style.exclusivedeal}>
                    <Text
                        style={style.exclusivedealtext}>
                        Exclusive deal
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        marginBottom: 10,
                        marginTop: 10,
                    }}>
                    <FlatList
                        data={data}
                        numColumns={2}
                        keyExtractor={item => item.title}
                        renderItem={renderProductItem}
                        nestedScrollEnabled={true}
                    />
                </View>

                <View
                    style={{
                        width: '100%',
                        backgroundColor: AppColor.green,
                    }}>
                    <Text
                        style={style.dailymandi}>
                        DAILY MANDI
                    </Text>
                    <ScrollView
                        horizontal={true}
                        style={{
                            flexDirection: 'row',
                        }}>
                        <SmallBox
                            title={'VEGETABLES'}
                            image={
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqNkXIGWqd03XmyeMfwCzlDgscFd7MH-hsg&usqp=CAU'
                            }
                        />
                        <SmallBox
                            title="FRUITS"
                            image={
                                'data:image/jpeg;base64,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'
                            }
                        />
                        <SmallBox
                            title={'EXOTICA'}
                            image={
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqNkXIGWqd03XmyeMfwCzlDgscFd7MH-hsg&usqp=CAU'
                            }
                        />
                        <SmallBox
                            title="FRESH"
                            image={
                                'data:image/jpeg;base64,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'
                            }
                        />
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <HalfScreenBox
                        image={
                            'data:image/jpeg;base64,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'
                        }
                        title={'Oral & Personal Care'}
                    />
                    <HalfScreenBox
                        image={
                            'data:image/jpeg;base64,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'
                        }
                        title={'Hair & Skin Care'}
                    />
                </View>
                <Text
                    style={style.stockmsg}>
                    Stock up for June this {'\n'}Housefull Sale
                </Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginEnd: 15,
                    }}>
                    <FlatBox />
                    <FlatBox />
                    <FlatBox />
                    <FlatBox />
                </ScrollView>
                {renderProductModal()}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const style = StyleSheet.create({
    // import { StyleSheet, Dimensions } from 'react-native';
    // import { AppColor } from '../../utils/AppColor';
    // const { height, width } = Dimensions.get('window');
    // import React from 'react';

    // export default StyleSheet.create({

    loginRegMobile: {
        width: '85%',
        height: 35,
        borderColor: AppColor.pink,
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: AppColor.white,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginStart: 10,
    },
    menu: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        tintColor: AppColor.blue,
        left: 15,
        marginTop: 10,
    },
    ic_logo: {
        width: 150,
        height: 30,
        tintColor: AppColor.blue,
        marginStart: 'auto',
        marginEnd: 'auto',
        marginTop: 10,
    },
    bell: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        tintColor: AppColor.blue,
        right: 30,
        marginTop: 10,
    },
    cart: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        tintColor: AppColor.blue,
        right: 15,
        marginTop: 10,
    },
    search: {
        height: 25,
        width: 25,
        marginStart: 5,
    },
    google_voice: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        marginTop: 10,
        marginStart: 5,
    },
    stroke: {
        width: '100%',
        backgroundColor: AppColor.blue,
        height: 1,
        marginTop: 10,
    },
    camera: {
        height: 25,
        width: 25,
    },
    addminusView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    countText: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#F4F2FF',
    },
    addItemBottom: {
        // backgroundColor: '#11074C',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
        // alignSelf: 'flex-end',
        position: 'absolute',
        right: 25,
    },
    exclusivedeal: {
        borderRadius: 50,
        backgroundColor: AppColor.pink,
        width: '60%',
        height: 30,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    exclusivedealtext: {
        color: AppColor.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    listproduct: {
        height: 250,
        width: '50%',
        borderWidth: 0.5,
        borderColor: AppColor.darkgrey,
    },
    teambymsg: {
        backgroundColor: AppColor.blue,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    productname: {
        fontWeight: 'bold',
        fontSize: 14,
        marginHorizontal: 5,
        color: AppColor.black,
        textAlign: 'center'
    },
    buynowmsg: {
        fontWeight: 'bold',
        fontSize: 14,
        marginStart: 5,
        color: AppColor.black,
        marginTop: 10,
    },
    dailymandi: {
        textAlignVertical: 'center',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold',
        fontSize: 22,
        color: AppColor.white,
    },
    stockmsg: {
        fontWeight: 'bold',
        fontSize: 16,
        color: AppColor.black,
        marginStart: 15,
        marginTop: 5,
    },
});