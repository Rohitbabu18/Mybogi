import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import { AppColor } from './AppColor';

const HalfScreenBox = ({ title, image }) => {
  return (
    <View
      style={styles.container}>
      <View
        style={styles.textview}>
        <Text
          style={styles.text}>
          {title}
        </Text>
      </View>
      <Image
        style={styles.img}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default HalfScreenBox;

const styles = StyleSheet.create({
  img: {
    height: '75%',
    width: '95%',
    alignSelf: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 5,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: AppColor.white,
    fontSize: 14,
  },
  textview: {
    backgroundColor: AppColor.blue,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 5,
  },
  container: {
    width: '47%',
    height: 150,
    borderColor: AppColor.blue,
    borderWidth: 1,
    alignSelf: 'center',
    margin: 5,
    borderRadius: 15,
  }
});
