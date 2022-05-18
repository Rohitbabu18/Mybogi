import {
  FlatList,
  Image, SafeAreaView, StyleSheet,
  TouchableOpacity, View
} from 'react-native';
import React, { useState } from 'react';
import { BoldText, horizScale, MediumText, vertScale, Text } from '../../utils/Layout';
import { AppColor } from '../../utils/AppColor';
import Font from '../../utils/Fonts';
import CustomImage from '../../utils/Images';
import GloableStyle from '../GloableStyle';

const MyTeam = ({ navigation }) => {

  const [data, setData] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);

  return (
    <SafeAreaView style={GloableStyle.container}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            height: 45,
            marginTop: vertScale(12),
            alignItems: "center"
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
          <View style={{ flex: 0.7 }}>
            <BoldText style={{ fontSize: Font.h4, color: AppColor.black }}>My Team</BoldText>
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
      </View>
      <View style={{ marginBottom: vertScale(65) }}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View
                style={styles.flexcontainer}>
                <View style={{
                  flexDirection: "row",
                  flex: 1,
                  alignItems: 'center',
                  marginVertical: vertScale(10)
                }}>
                  <View style={{
                    flex: 0.2, justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Image source={CustomImage.user} style={styles.profile} />
                  </View>
                  <BoldText style={{
                    fontSize: Font.input,
                    color: AppColor.black, flex: 0.6
                  }}>Pavan Jat</BoldText>
                  <View style={{
                    flex: 0.2,
                    backgroundColor: AppColor.pink,
                    borderRadius: horizScale(15),
                    marginRight: horizScale(10),
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: vertScale(8)
                  }}>
                    <MediumText style={{

                      fontSize: Font.tiny,
                      color: AppColor.white,

                    }}>See All</MediumText>
                  </View>
                </View>
                <View style={{
                  flexDirection: "row",
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginVertical: vertScale(10)
                }}>
                  <Text style={{ flex: 0.4, fontSize: Font.small, textAlign: 'center' }}>Last Shoping Saving{"\n"}₹ 120</Text>
                  <Text style={{ flex: 0.4, fontSize: Font.small }}> With Discount 30%</Text>
                </View>
                <View style={{
                  flexDirection: "row",
                  flex: 1,
                  alignItems: 'center',
                  marginVertical: vertScale(10),
                  marginHorizontal: horizScale(20),
                  justifyContent: 'space-around',
                }}>
                  <Text style={{
                    flex: 0.6, color: AppColor.black,
                    fontSize: Font.medium
                  }}>Buy Date : 22-03-2022</Text>
                  <View style={{
                    flex: 0.3,
                    backgroundColor: AppColor.blue,
                    borderRadius: horizScale(25),

                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: vertScale(8)
                  }}>
                    <BoldText style={{

                      fontSize: Font.medium,
                      color: AppColor.white,

                    }}>Re Buy</BoldText>
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyTeam;

const styles = StyleSheet.create({
  profile: {
    height: horizScale(50),
    width: horizScale(50)
  },
  flexcontainer: {

    marginVertical: 10,
    width: "95%",
    height: 200,
    backgroundColor: AppColor.white,
    alignSelf: "center",
    elevation: 10,
    borderRadius: 10,
    shadowColor: AppColor.pink,
    shadowOpacity: 0.5,
    // shadowRadius: 8,
    shadowOffset: {
      height: 2,
      width: 0
    },
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
