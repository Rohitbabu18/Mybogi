import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { AppColor } from '../../utils/AppColor';
import { BoldText, horizScale, vertScale, Text, MediumText } from '../../utils/Layout';
import GloableStyle from '../GloableStyle';
import Font from '../../utils/Fonts';
import CustomImage from '../../utils/Images';
const MyBogiPrime = ({ navigation }) => {
  return (
    <SafeAreaView style={GloableStyle.container}>
      <StatusBar backgroundColor={AppColor.pink} barStyle={"light-content"} />
      <View style={{ height: vertScale(200), backgroundColor: AppColor.pink }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              paddingVertical: 5
            }}>
            <TouchableOpacity
              style={{
                flex: 0.2,
              }}
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Image
                source={require('../../../assets/menu.png')}
                style={{ ...styles.icon, tintColor: AppColor.blue }}
              />
            </TouchableOpacity>
            <View style={{ flex: 0.7, }}>

              <View style={{ backgroundColor: AppColor.whitelight, height: vertScale(50), width: horizScale(150), borderRadius: 30 }}>
                <Image
                  source={require('../../../assets/ic_logo.png')}
                  style={{ resizeMode: 'contain', height: vertScale(45), width: horizScale(135) }}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => { navigation.navigate("MyCard") }}
              style={{
                backgroundColor: AppColor.white,
                height: horizScale(50),
                width: horizScale(50),
                borderRadius: horizScale(25)
              }}>
              <Image
                source={require('../../../assets/bell.png')}
                style={{ ...styles.icon, tintColor: AppColor.pink }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={styles.MyBogiPrimeView}
      >
        <BoldText style={styles.MyBogiPrimeText}>My Bogi Prime{'\n'}Membership</BoldText>
        <MediumText style={styles.bigSavingText}>Big Offer Big Saving</MediumText>
        <View style={{ marginHorizontal: horizScale(10), flex: 1, marginTop: vertScale(20) }}>
          <View style={{
            flexDirection: 'row', flex: 0.2,
            justifyContent: 'space-around', alignItems: 'center'
          }}>
            <View style={{ flex: 0.2, justifyContent: "center", alignItems: 'center' }}>
              <Image source={CustomImage.truck} style={styles.truck} />
            </View>
            <View style={{ flex: 0.7 }}>
              <MediumText style={{ fontSize: Font.regular, color: AppColor.pink }}>No Delivery Charge</MediumText>
              <Text style={{ fontSize: Font.small }}>On Orders Above Rs.600</Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row', flex: 0.2,
            justifyContent: 'space-around', alignItems: 'center'
          }}>
            <View style={{ flex: 0.2, justifyContent: "center", alignItems: 'center' }}>
              <Image source={CustomImage.refund} style={styles.truck} />
            </View>
            <View style={{ flex: 0.7 }}>
              <MediumText style={{ fontSize: Font.regular, color: AppColor.pink }}>Rs 300 Cashback</MediumText>
              <Text style={{ fontSize: Font.small }}>Rs 100 Cashback on first order of any 3 month</Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row', flex: 0.2,
            justifyContent: 'space-around', alignItems: 'center'
          }}>
            <View style={{ flex: 0.2, justifyContent: "center", alignItems: 'center' }}>
              <Image source={CustomImage.priority} style={styles.truck} />
            </View>
            <View style={{ flex: 0.7 }}>
              <MediumText style={{ fontSize: Font.regular, color: AppColor.pink }}>Access to Priority Slots</MediumText>
              <Text style={{ fontSize: Font.small }}>Prime Members always get preference</Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row', flex: 0.2,
            justifyContent: 'space-around', alignItems: 'center'
          }}>
            <View style={{ flex: 0.2, justifyContent: "center", alignItems: 'center' }}>
              <Image source={CustomImage.exclusive} style={styles.truck} />
            </View>
            <View style={{ flex: 0.7 }}>
              <MediumText style={{ fontSize: Font.regular, color: AppColor.pink }}>Exclusive Deals</MediumText>
              <Text style={{ fontSize: Font.small }}>We offer deals just for our Prime Members</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', flex: 0.2 }}>
            <MediumText >Join at a special price of just</MediumText>
            <BoldText style={{ color: AppColor.pink }}>999/- only for 12 months</BoldText>
          </View>
        </View>

      </View>
      <View style={{ height: vertScale(400) }} />
      <TouchableOpacity
        style={GloableStyle.button}
      >
        <Text style={GloableStyle.buttonText}>Subscribe Now</Text>
      </TouchableOpacity>
      <View>
        {/* 
      <ScrollView showsVerticalScrollIndicator={false}>

        <LinearGradient
          colors={['#5CF4FF', '#4dAEFE']}
          style={{
            width: '95%',
            alignItems: 'center',
            alignSelf: 'center',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: AppColor.black,
              marginTop: 10,
            }}>
            mybogi prime Membership
          </Text>
          <Image
            source={require('../../../assets/ic_logo.png')}
            style={{
              height: 80,
              width: 250,
              alignSelf: 'center',
              resizeMode: 'cover',
              backgroundColor: AppColor.white,
              paddingHorizontal: 50,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: AppColor.black,
              marginTop: 10,
            }}>
            Big Saving Big offer
          </Text>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              //   height: 70,
              backgroundColor: AppColor.green,
              borderRadius: 10,
              margin: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: AppColor.white,
                marginTop: 10,
                textAlign: 'center',
              }}>
              Join at a special price of just
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: AppColor.white,
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}>
              999/- for only 12 month
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: AppColor.white,
              height: 60,
              //   marginBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/truck.png')}
                style={{
                  height: 40,
                  width: 40,
                  padding: 10,
                  marginStart: 20,
                  marginTop: 10,
                  resizeMode: 'cover',
                }}
              />
              <View
                style={{
                  marginStart: 15,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: AppColor.green,
                    textAlign: 'center',
                    marginTop: 10,
                    // marginBottom: 10,
                  }}>
                  No Delivery Charge
                </Text>
                <Text
                  style={{
                    // fontWeight: 'bold',
                    fontSize: 14,
                    color: AppColor.black,
                    // textAlign: 'center',
                    // marginTop: 10,
                  }}>
                  On orders above Rs. 600
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: AppColor.white,
              height: 70,
              //   marginBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/truck.png')}
                style={{
                  height: 40,
                  width: 40,
                  padding: 10,
                  marginStart: 20,
                  marginTop: 10,
                  resizeMode: 'cover',
                }}
              />
              <View
                style={{
                  marginStart: 15,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: AppColor.green,
                    // textAlign: 'center',
                    marginTop: 10,
                    // marginBottom: 10,
                  }}>
                  Rs 300 Cashback
                </Text>
                <Text
                  style={{
                    // fontWeight: 'bold',
                    fontSize: 14,
                    color: AppColor.black,
                    // textAlign: 'center',
                    marginBottom: 5,
                    marginEnd: 10,
                  }}>
                  Rs 100 Cashback on first order of any {'\n'}3 month
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: AppColor.white,
              height: 60,
              //   marginBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/truck.png')}
                style={{
                  height: 40,
                  width: 40,
                  padding: 10,
                  marginStart: 20,
                  marginTop: 10,
                  resizeMode: 'cover',
                }}
              />
              <View
                style={{
                  marginStart: 15,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: AppColor.green,
                    // textAlign: 'center',
                    marginTop: 10,
                    // marginBottom: 10,
                  }}>
                  Access to Priority Slots
                </Text>
                <Text
                  style={{
                    // fontWeight: 'bold',
                    fontSize: 14,
                    color: AppColor.black,
                    // textAlign: 'center',
                    // marginTop: 10,
                  }}>
                  bbstar members always get preference
                </Text>
              </View>
            </View>
          </View>
          <LinearGradient
            colors={['#FCCACA', '#C80000']}
            style={{
              borderRadius: 100,
              width: 120,
              height: 120,
              margin: 10,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 100,
                //   backgroundColor: AppColor.red,
                width: 120,
                height: 120,
                margin: 10,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: AppColor.white,
                  fontSize: 25,
                }}>
                JOIN NOW
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </LinearGradient>
        <View
          style={{
            height: 150,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: '#E7F0B7',
            margin: 10,
            flexDirection: 'row',
            borderRadius: 10,
          }}>
          <Image
            source={require('../../../assets/ic_logo.png')}
            style={{
              width: 150,
              height: 100,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: AppColor.black,
                textAlign: 'center',
                marginEnd: 10,
                marginTop: 10,
                marginBottom: 10,

              }}>
              Enjoy 20% Extra Savings {'\n'}Just For Members
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 12,
                color: AppColor.black,
                // marginTop: 10,
                textAlign: 'center',
                marginEnd: 10,
              }}>
              Look out for Star price on products
            </Text>
          </View>
        </View>

        <View
          style={{
            elevation: 10,
            backgroundColor: AppColor.white,
            width: '95%',
            alignSelf: 'center',
            borderRadius: 10,
            margin: 10,
            padding: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: AppColor.black,
              textAlign: 'center',
              marginEnd: 10,
              marginTop: 15,
              marginBottom: 10,
            }}>
            About Mybogi Prime Membership
          </Text>
          <View style={styles.stroke} />
          <TouchableOpacity style={styles.header}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.headerText}>
                Cashback on successful delivery
              </Text>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/2x/expand-arrow--v2.png',
                }}
                style={{
                  height: 18,
                  width: 18,
                  marginEnd: 10,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.stroke} />
          <TouchableOpacity style={styles.header}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.headerText}>No Delivery Charge</Text>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/2x/expand-arrow--v2.png',
                }}
                style={{
                  height: 18,
                  width: 18,
                  marginEnd: 10,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.stroke} />
          <TouchableOpacity style={styles.header}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.headerText}>Reserved Delivery Slots</Text>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/2x/expand-arrow--v2.png',
                }}
                style={{
                  height: 18,
                  width: 18,
                  marginEnd: 10,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.stroke} />
          <TouchableOpacity style={styles.header}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.headerText}>Exclusive bbstar Offers</Text>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/2x/expand-arrow--v2.png',
                }}
                style={{
                  height: 18,
                  width: 18,
                  marginEnd: 10,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.stroke} />
          <TouchableOpacity style={styles.header}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.headerText}>Cancellation policy</Text>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/2x/expand-arrow--v2.png',
                }}
                style={{
                  height: 18,
                  width: 18,
                  marginEnd: 10,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default MyBogiPrime;

const styles = StyleSheet.create({
  truck: {
    height: horizScale(40), width: horizScale(40)
  },
  bigSavingText: {
    alignSelf: 'center',
    fontSize: Font.regular,
    color: AppColor.pink
  },
  MyBogiPrimeView: {
    marginHorizontal: horizScale(30),
    backgroundColor: AppColor.white,
    height: vertScale(500),
    width: horizScale(310),
    position: 'absolute',
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 100,
    elevation: horizScale(20),
  },
  MyBogiPrimeText: {
    margin: 10,
    fontSize: Font.h6,
    color: AppColor.black
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 10,
  },
});
