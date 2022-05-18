import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { BoldText, horizScale, MediumText, vertScale } from '../../utils/Layout';
import Font from '../../utils/Fonts';
import GloableStyle from '../GloableStyle';
import { AppColor } from '../../utils/AppColor';
import CustomImage from '../../utils/Images';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const MyOffer = () => {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var day = new Date().getDay()
  const [slider, setSlider] = useState([
    {
      id: 1,
      uri: Image.resolveAssetSource(CustomImage.b1).uri
    },
    {
      id: 2,
      uri: Image.resolveAssetSource(CustomImage.b2).uri
    },
    {
      id: 3,
      uri: Image.resolveAssetSource(CustomImage.b3).uri
    },
    {
      id: 4,
      uri: Image.resolveAssetSource(CustomImage.b4).uri
    },

  ])
  const [activeSlider, setActiveSlider] = useState(0)
  const [other, setOther] = useState([
    {
      id: 1,
      off: "30%", time: '03 Apr to 21 Apr',
      uri: "https://rukminim1.flixcart.com/image/332/398/kyvvtzk0/shoe/5/q/w/9-500-corsac-black-original-imagbyzezm5vkhyf.jpeg?q=50"
    },
    {
      id: 2, off: "40%", time: '03 Apr to 21 Apr',
      uri: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2164373/2017/11/15/11510749192975-Roadster-Men-Brown--Black-Regular-Fit-Checked-Casual-Shirt-8071510749192783-1.jpg"
    },
    {
      id: 3, off: "25%", time: '03 Apr to 21 Apr',
      uri: "https://static.langimg.com/thumb/msid-86755841,imgsize-180812,width-700,height-525,resizemode-75/navbharat-times.jpg"
    },
    {
      id: 4, off: "35%", time: '03 Apr to 21 Apr',
      uri: "https://image.made-in-china.com/202f0j00baGYIFftjCzE/Spectacles-Business-Frames-Optical-Eyeglasses-Men.jpg"
    }, {
      id: 5, off: "25%", time: '03 Apr to 21 Apr',
      uri: "https://static.langimg.com/thumb/msid-86755841,imgsize-180812,width-700,height-525,resizemode-75/navbharat-times.jpg"
    },
    {
      id: 6, off: "35%", time: '03 Apr to 21 Apr',
      uri: "https://image.made-in-china.com/202f0j00baGYIFftjCzE/Spectacles-Business-Frames-Optical-Eyeglasses-Men.jpg"
    },


  ])
  const [activeSlider2, setActiveSlider2] = useState(0)
  return (
    <SafeAreaView style={{ ...GloableStyle.container }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between', marginHorizontal: horizScale(20)
      }}>
        <View>
          <BoldText style={styles.name}>Hey Rohit!</BoldText>
          <MediumText>{`Today ${days[day]}, ${date} ${months[month]}`}</MediumText>
        </View>
        <Image source={CustomImage.user} style={GloableStyle.profileImg} />
      </View>
      <ScrollView>
        <View style={{ marginVertical: 10 }}>
          <BoldText style={{
            marginLeft: horizScale(20),
            fontSize: Font.regular,
            color: AppColor.black
          }}>{`Todays Offers Only`}</BoldText>
          <View style={{
            height: vertScale(170),
            marginTop: vertScale(10)
          }}>
            <Carousel
              data={slider}
              renderItem={({ item }) => (
                <View style={{ flex: 1 }}>
                  <Image source={{ uri: item.uri }} style={{
                    alignSelf: 'center',
                    width: horizScale(355),
                    height: vertScale(150),
                    resizeMode: 'cover',
                    borderRadius: horizScale(15),
                  }} />
                </View>
              )}
              sliderWidth={horizScale(415)}
              itemWidth={horizScale(350)}
              loop={true}
              autoplay={true}
              autoplayDelay={1000}
              autoplayInterval={5000}
              loopClonesPerSide={6}
              layout='default'
              enableMomentum={false}
              lockScrollWhileSnapping={true}
              onSnapToItem={(index) => setActiveSlider(index)}

            />
          </View>
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
          <BoldText style={{ ...styles.name, fontSize: Font.h5, marginLeft: horizScale(20) }}>
            Other
          </BoldText>
          <View style={{
            height: vertScale(350),
            marginVertical: vertScale(10)
          }}>
            <Carousel
              data={other}
              renderItem={({ item }) => (
                <View style={{
                  flex: 1, padding: horizScale(20),
                  elevation: 10,
                  backgroundColor: AppColor.white,
                  borderRadius: horizScale(15)
                }}>
                  <Image source={{ uri: item.uri }} style={{
                    alignSelf: 'center',
                    width: horizScale(355),
                    height: vertScale(250),
                    resizeMode: 'cover',
                    borderRadius: horizScale(15),
                  }} />
                  <View style={{
                    height: vertScale(25),
                    width: horizScale(50),
                    backgroundColor: "rgba(210,210,210,0.9)",
                    position: 'absolute',
                    margin: vertScale(30),
                    borderRadius: horizScale(10),
                    justifyContent: 'center'
                  }}>
                    <Text style={{
                      textAlign: 'center', color: AppColor.pink,
                    }}>{item.off}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: vertScale(20) }}>
                    <BoldText style={{
                      marginTop: vertScale(10),
                      color: AppColor.pink
                    }}>{item.time}</BoldText>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{
                        borderWidth: 1, borderColor: AppColor.darkgrey,
                        paddingVertical: vertScale(2),
                        paddingHorizontal: horizScale(10),
                        borderRadius: horizScale(5)
                      }}>
                        <Text style={{ fontSize: Font.tiny, textAlign: 'center' }}>
                          Add to{'\n'}Card
                        </Text>
                      </View>
                      <View style={{

                        backgroundColor: AppColor.blue,
                        borderRadius: horizScale(25),

                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: vertScale(8),
                        marginLeft: horizScale(10)
                      }}>
                        <BoldText style={{

                          fontSize: Font.medium,
                          color: AppColor.white,
                          paddingHorizontal: horizScale(10)

                        }}>Buy Now</BoldText>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              sliderWidth={horizScale(415)}
              itemWidth={horizScale(390)}
              loop={true}
              autoplay={true}
              autoplayDelay={1500}
              autoplayInterval={7500}
              loopClonesPerSide={10}
              layout='stack'
              enableMomentum={false}
              lockScrollWhileSnapping={true}
              onSnapToItem={(index) => setActiveSlider2(index)}

            />
          </View>
          <Pagination
            dotsLength={other.length}
            activeDotIndex={activeSlider2}
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
              backgroundColor: AppColor.blue
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
        <View style={{}}>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOffer;

const styles = StyleSheet.create({
  name: {
    fontSize: Font.h4,
    marginTop: vertScale(5),
    color: AppColor.black
  }
});
