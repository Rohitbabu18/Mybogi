import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';

const DrawerContent = props => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: 45,
          width: '100%',
          backgroundColor: AppColor.blue,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: AppColor.white,
          }}>
          Sign up / Sign In
        </Text>
      </View>
      <Text
        style={{
          fontWeight: 'normal',
          fontSize: 16,
          marginTop: 20,
          color: AppColor.black,
          marginStart: 15,
          padding: 5,
        }}>
        Home
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          fontSize: 16,
          marginTop: 10,
          color: AppColor.black,
          padding: 5,
          marginStart: 15,
        }}>
        Shop by category
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          fontSize: 16,
          marginTop: 10,
          color: AppColor.black,
          padding: 5,
          marginStart: 15,
        }}>
        mybogi wallet
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          fontSize: 16,
          marginTop: 10,
          color: AppColor.black,
          padding: 5,
          marginStart: 15,
        }}>
        My Orders
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          fontSize: 16,
          padding: 5,
          marginTop: 10,
          color: AppColor.black,
          marginStart: 15,
        }}>
        My Team
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          fontSize: 16,
          padding: 5,
          marginTop: 10,
          color: AppColor.black,
          marginStart: 15,
        }}>
        My Account
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          padding: 5,
          fontSize: 16,
          marginTop: 10,
          color: AppColor.black,
          marginStart: 15,
        }}
        onPress={() => {
          props.navigation.navigate('MyBogiPrime');
        }}>
        My Prime Subscription
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          padding: 5,
          fontSize: 16,
          marginTop: 10,
          color: AppColor.black,
          marginStart: 15,
        }}>
        All Offers
      </Text>
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
          fontSize: 16,
          marginTop: 10,
          color: AppColor.darkgrey,
          marginStart: 15,
        }}>
        Help and Settings
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          padding: 5,
          fontSize: 16,
          marginTop: 10,
          color: AppColor.black,
          marginStart: 15,
        }}>
        Customer Service
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          padding: 5,
          fontSize: 16,
          marginTop: 10,
          color: AppColor.black,
          marginStart: 15,
        }}>
        Guide
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          padding: 5,
          fontSize: 16,
          marginTop: 10,
          color: AppColor.black,
          marginStart: 15,
        }}>
        Sign In
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          padding: 5,
          fontSize: 16,
          marginTop: 10,
          color: AppColor.darkgrey,
          marginStart: 15,
          position: 'absolute',
          bottom: 15,
        }}>
        Version 1.0.0
      </Text>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
