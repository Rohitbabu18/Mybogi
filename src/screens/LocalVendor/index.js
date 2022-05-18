
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import styles from './style';
import { AppColor } from '../../utils/AppColor';
import GloableStyle from '../GloableStyle';
import { horizScale, Text, vertScale } from "../../utils/Layout"
import CustomImage from '../../utils/Images';
import Carousel, { Pagination } from 'react-native-snap-carousel';
function LocalVendor({ navigation }) {
  const [data, setData] = useState([
    {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/three3.jpg',
      id: 1
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpdPK-b68VjLoPiHyzk8EoFaTW8hKhSeDXm48E-cYlXc5cce2GtLu8cT14dyL8xYXYS0&usqp=CAU',
      id: 2
    },
    {
      uri: 'https://www.ttkprestige.com/media/images/html/prestigeonam2020.png',
      id: 3
    },
    {
      uri: 'https://www.jio.com/maha-cashback_jiocom-mob-768x800.png',
      id: 4
    },
    {
      uri: 'https://www.ttkprestige.com/media/images/html/Banner(5).jpg',
      id: 5
    },
    {
      uri: 'https://thumbs.dreamstime.com/b/super-offer-special-offers-discount-price-ad-red-tag-advertising-campaign-retail-day-purchase-vector-184091227.jpg',
      id: 6
    },
    {
      uri: 'https://media.istockphoto.com/vectors/off-discount-creative-vector-banner-illustration-abstract-promotion-vector-id686174214?k=20&m=686174214&s=170667a&w=0&h=QIT16CXL_1ud7RE8Qh8Soawqw2WHq4_La_bnyW7pzWM=',
      id: 7
    },
    {
      uri: 'https://thumbs.dreamstime.com/b/big-sale-vector-creative-banner-illustration-abstract-concept-discount-promotion-layout-white-background-special-offer-big-sale-125736395.jpg',
      id: 8
    },
    {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/three3.jpg',
      id: 9
    },
    {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/three3.jpg',
      id: 10
    },
    {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/three3.jpg',
      id: 11
    },
    {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/three3.jpg',
      id: 12
    },
    {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/three3.jpg',
      id: 13
    },
    {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/three3.jpg',
      id: 14
    },
    {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/three3.jpg',
      id: 15
    },

  ])
  const [slider, setSlider] = useState([
    {
      id: 1,
      uri: Image.resolveAssetSource(CustomImage.MBOffer).uri
    },
    {
      id: 2,
      uri: Image.resolveAssetSource(CustomImage.MBOffer2).uri
    },
    {
      id: 3,
      uri: Image.resolveAssetSource(CustomImage.MBOffer3).uri
    },

  ])
  const [activeSlider, setActiveSlider] = useState()
  const renderBanner = ({ item, index }) => {
    return (
      <View>
        <Image
          source={{ uri: item.uri }}
          style={{
            height: 180,
            resizeMode: 'stretch',
            width: '95%',
          }}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={GloableStyle.container}>

      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 5,
          height: 50
        }}>
        <TouchableOpacity
          style={{ flex: 0.2 }}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={require('../../../assets/menu.png')}
            style={{ ...styles.icon, tintColor: AppColor.blue }}
          />
        </TouchableOpacity>
        <View style={{ flex: 0.6 }}>
          <Image
            source={require('../../../assets/ic_logo.png')}
            style={{ width: horizScale(200), height: vertScale(55), resizeMode: 'contain' }}
          />
        </View>
        <TouchableOpacity
          onPress={() => { navigation.navigate("MyCard") }}
          style={{ flex: 0.2 }}>
          <Image
            source={require('../../../assets/cart.png')}
            style={{ ...styles.icon, tintColor: AppColor.pink }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate("Notification") }}
          style={{ flex: 0.2 }}>
          <Image
            source={require('../../../assets/bell.png')}
            style={{ ...styles.icon, tintColor: AppColor.pink }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Carousel
          data={slider}
          onSnapToItem={(index) => setActiveSlider(index)}
          renderItem={renderBanner}
          sliderWidth={horizScale(436)}
          itemWidth={horizScale(436)}
          loop={true}
          autoplay={true}
          autoplayDelay={1000}
          layout='default'
          enableMomentum={false}
          lockScrollWhileSnapping={true}
        />
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
      <View >
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: AppColor.blue, height: 1, marginHorizontal: 20 }} />
          )}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: 10 }}>
                <Image source={{ uri: item.uri }}
                  style={{ height: 200, width: '100%', resizeMode: 'cover', borderRadius: 5 }}
                />
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LocalVendor;