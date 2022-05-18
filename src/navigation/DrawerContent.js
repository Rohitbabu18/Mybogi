// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { AppColor } from '../utils/AppColor';
// import GloableStyle from '../screens/GloableStyle';

// const DrawerContent = props => {
//   return (
//     <SafeAreaView style={GloableStyle.container}>

//       <View
//         style={{
//           height: 45,
//           width: '100%',
//           backgroundColor: AppColor.blue,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text
//           style={{
//             fontWeight: 'bold',
//             fontSize: 18,
//             color: AppColor.white,
//           }}>
//           Sign up / Sign In
//         </Text>
//       </View>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           fontSize: 16,
//           marginTop: 20,
//           color: AppColor.black,
//           marginStart: 15,
//           padding: 5,
//         }}>
//         Home
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           fontSize: 16,
//           marginTop: 10,
//           color: AppColor.black,
//           padding: 5,
//           marginStart: 15,
//         }}>
//         Shop by category
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           fontSize: 16,
//           marginTop: 10,
//           color: AppColor.black,
//           padding: 5,
//           marginStart: 15,
//         }}>
//         mybogi wallet
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           fontSize: 16,
//           marginTop: 10,
//           color: AppColor.black,
//           padding: 5,
//           marginStart: 15,
//         }}>
//         My Orders
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           fontSize: 16,
//           padding: 5,
//           marginTop: 10,
//           color: AppColor.black,
//           marginStart: 15,
//         }}>
//         My Team
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           fontSize: 16,
//           padding: 5,
//           marginTop: 10,
//           color: AppColor.black,
//           marginStart: 15,
//         }}>
//         My Account
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           padding: 5,
//           fontSize: 16,
//           marginTop: 10,
//           color: AppColor.black,
//           marginStart: 15,
//         }}
//         onPress={() => {
//           props.navigation.navigate('MyBogiPrime');
//         }}>
//         My Prime Subscription
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           padding: 5,
//           fontSize: 16,
//           marginTop: 10,
//           color: AppColor.black,
//           marginStart: 15,
//         }}>
//         All Offers
//       </Text>
//       <View
//         style={{
//           backgroundColor: AppColor.darkgrey,
//           height: 1,
//           width: '100%',
//           marginTop: 10,
//         }}
//       />
//       <Text
//         style={{
//           fontWeight: 'normal',
//           padding: 5,
//           fontSize: 16,
//           marginTop: 10,
//           color: AppColor.darkgrey,
//           marginStart: 15,
//         }}>
//         Help and Settings
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           padding: 5,
//           fontSize: 16,
//           marginTop: 10,
//           color: AppColor.black,
//           marginStart: 15,
//         }}>
//         Customer Service
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           padding: 5,
//           fontSize: 16,
//           marginTop: 10,
//           color: AppColor.black,
//           marginStart: 15,
//         }}>
//         Guide
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           padding: 5,
//           fontSize: 16,
//           marginTop: 10,
//           color: AppColor.black,
//           marginStart: 15,
//         }}>
//         Sign In
//       </Text>
//       <Text
//         style={{
//           fontWeight: 'normal',
//           padding: 5,
//           fontSize: 16,
//           marginTop: 10,
//           color: AppColor.darkgrey,
//           marginStart: 15,
//           position: 'absolute',
//           bottom: 15,
//         }}>
//         Version 1.0.0
//       </Text>
//     </SafeAreaView>
//   );
// };

// export default DrawerContent;

// const styles = StyleSheet.create({});

import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ToastAndroid
} from 'react-native';
import { DrawerContentScrollView, DrawerItem, getDrawerStatusFromState } from '@react-navigation/drawer';
import CustomImage from '../utils/Images';
import Font from '../utils/Fonts';
import { horizScale, vertScale } from '../utils/Layout';
import { AppColor } from '../utils/AppColor';

export default function DrawerContent(props) {
  const [state, setState] = useState({
    profile: Image.resolveAssetSource(CustomImage.user).uri,

  })


  return (

    <ImageBackground
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      }}
      source={CustomImage.drawer}>

      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: horizScale(15),
            marginTop: vertScale(40),
            marginBottom: vertScale(10),
            alignItems: 'center',
          }}
          onPress={() => {
            props.navigation.navigate('Account')
          }}>

          <Image
            style={{
              height: horizScale(70),
              width: horizScale(70),
              borderRadius: horizScale(35),
              resizeMode: 'cover'
            }}
            source={{ uri: state.profile }} />

          <View style={{ marginLeft: horizScale(20) }}>
            <Text style={{ color: 'white', }}>
              Rohit Sharma
            </Text>
            <Text style={{ color: 'gray', fontSize: Font.small }}>
              895940XXXX
            </Text>
          </View>
        </TouchableOpacity>
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="Home"
          icon={() => <Image style={styles.image} source={CustomImage.home} />}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="Shop By Category"
          icon={() => <Image style={styles.image} source={CustomImage.Categories} />}
          onPress={() => props.navigation.navigate('Categories')}

        />
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="My Bogi Wallet"
          icon={() => <Image style={styles.image} source={CustomImage.card} />}
          onPress={() => props.navigation.navigate('Wallet')}

        />
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="My Orders"
          icon={() => <Image style={styles.image} source={CustomImage.order} />}
          onPress={() => props.navigation.navigate('MyOrder')}

        />

        <DrawerItem
          labelStyle={styles.labelStyle}
          label="My Team"
          icon={() => <Image style={styles.image} source={CustomImage.MyTeam} />}
          onPress={() => {
            props.navigation.navigate('MyTeam');
          }}
        />
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="My Account"
          icon={() => <Image style={styles.image} source={CustomImage.account} />}
          onPress={() => props.navigation.navigate('Account')}

        />
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="My Prime Subscription"
          icon={() => <Image style={styles.image} source={CustomImage.subscription} />}
          onPress={() => props.navigation.navigate('MyBogiPrime')}

        />

        <DrawerItem
          labelStyle={styles.labelStyle}
          label="All Offers"
          icon={() => <Image style={styles.image} source={CustomImage.allOffers} />}
          onPress={() => props.navigation.navigate('AllOffers')}
        />
        <View
          style={{
            backgroundColor: AppColor.darkgrey,
            height: 1,
            width: '100%',
            marginTop: 10,
          }}
        />
        <Text
          style={{
            fontWeight: 'normal',
            padding: 5,
            fontSize: Font.medium,
            marginTop: 10,
            color: AppColor.darkgrey,
            marginStart: 15,
          }}>
          Help and Settings
        </Text>
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="Customer Service"
          icon={() => <Image style={styles.image} source={CustomImage.customer} />}
          onPress={() => props.navigation.navigate('CustomerService')}
        />
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="Guide"
          icon={() => <Image style={styles.image} source={CustomImage.guide} />}
          onPress={() => props.navigation.navigate('Guide')}
        />
        <DrawerItem
          labelStyle={styles.labelStyle}
          label="Login/Logout"
          icon={() => <Image style={styles.image} source={CustomImage.logout} />}
          onPress={() => props.navigation.replace('Auth')}
        />

      </DrawerContentScrollView>

    </ImageBackground>

  );
}
const styles = StyleSheet.create({
  image: {
    width: horizScale(24),
    height: vertScale(25),
    resizeMode: 'contain',
  },
  labelStyle: {
    color: AppColor.white,
    fontSize: Font.small,
  },
})