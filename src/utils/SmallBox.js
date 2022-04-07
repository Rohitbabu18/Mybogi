import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';
import { AppColor } from './AppColor';

const SmallBox = ({ title, image }) => {
  return (
    <View
      style={styles.container}>
      <View
        style={styles.nameview}>
        <Text
          style={{
            color: AppColor.white,
            fontSize: 13,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </View>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: '90%',
          height: 65,
          margin: 5,
        }}
      />
    </View>
  );
};

export default SmallBox;

const styles = StyleSheet.create({
  nameview: {
    width: '95%',
    backgroundColor: AppColor.green,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderTopLeftRadius: 5,
    margin: 3,
    borderTopRightRadius: 5,
    alignItems: 'center',
  },
  container: {
    height: 105,
    width: 110,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: AppColor.red,
    // margin: 10,
    marginBottom: 5,
    alignItems: 'center',
    backgroundColor: AppColor.white,
  },
});
