import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import style from '../screens/Auth/style';

const FbGoogleBox = ({imageUri, title, marginStart, marginEnd}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        style.fbGoogleBox,
        {
          marginStart: marginStart,
          marginEnd: marginEnd,
        },
      ]}>
      <Image
        source={{
          uri: imageUri,
        }}
        style={style.fbGoogleImage}
      />
      <Text style={style.fbGoogleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FbGoogleBox;

const styles = StyleSheet.create({});
