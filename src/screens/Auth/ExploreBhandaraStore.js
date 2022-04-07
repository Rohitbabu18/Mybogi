import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {AppColor} from '../../utils/AppColor';
import FbGoogleBox from '../../utils/FbGoogleBox';
const ExploreBhandaraStore = ({navigation}) => {
  return (
    <View style={style.container}>
      <Image
        style={style.logoImage}
        source={require('../../../assets/ic_logo.png')}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          style.loginRegMobile,
          {
            backgroundColor: AppColor.pink,
            borderRadius: 0,
            borderWidth: 0,
            width: '100%',
          },
        ]}>
        <Text
          style={[
            style.alreadyReg,
            {
              margin: 5,
              color: AppColor.white,
              fontWeight: 'bold',
              fontSize: 18,
            },
          ]}>
          YOUR SAFETY IS OUR PRIORITY
        </Text>
      </TouchableOpacity>
      <Text
        style={[
          style.alreadyReg,
          {
            margin: 0,
            marginTop: 25,
            color: AppColor.darkgrey,
            marginBottom: 10,
          },
        ]}>
        Product catalogue and offers are Location specific
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          style.loginRegMobile,
          {
            backgroundColor: AppColor.darkgrey,
          },
        ]}>
        <Text
          style={[
            style.alreadyReg,
            {margin: 5, fontWeight: 'bold', color: AppColor.white},
          ]}>
          CHOOSE LOCATION
        </Text>
      </TouchableOpacity>
      <Text
        style={[
          style.alreadyReg,
          {
            margin: 0,
            marginTop: 25,
            color: AppColor.darkgrey,
            marginBottom: 10,
          },
        ]}>
        Existing customer?
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Drawer');
        }}
        activeOpacity={0.8}
        style={[
          style.loginRegMobile,
          {
            backgroundColor: AppColor.white,
            borderRadius: 5,
            borderWidth: 1,
          },
        ]}>
        <Text
          style={[
            style.alreadyReg,
            {
              margin: 5,
              color: AppColor.darkgrey,
              fontWeight: 'bold',
              fontSize: 16,
            },
          ]}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text
        style={[
          style.alreadyReg,
          {
            margin: 5,
            color: AppColor.blue,

            fontSize: 14,
            marginTop: 'auto',
            marginBottom: 15,
          },
        ]}>
        Explore Bhandara Store
      </Text>
    </View>
  );
};

export default ExploreBhandaraStore;

const styles = StyleSheet.create({});
