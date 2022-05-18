import React, { useState } from 'react';
import { Image, Modal, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { BoldText, horizScale, MediumText, vertScale, Text } from '../../utils/Layout';
import { AppColor } from '../../utils/AppColor';
import Font from '../../utils/Fonts';
import { FlatList } from 'react-native-gesture-handler';
import CustomImage from '../../utils/Images';
import GloableStyle from '../GloableStyle';

const Categories = ({ navigation }) => {

  const [itemCount, setItemCount] = useState(1);
  const [cdata, setCData] = useState([
    {
      id: 1, name: "Fashion",
      uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/16/online-clothes-shops-hero.jpg"
    },
    {
      id: 2, name: "Fruit",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMolnWUrXZIv3WsnrY-tL5VOLczGKld6XLJXNJemkGuNA2Lq-2K0n4FZK7CBohbSEFNEE&usqp=CAU"
    },
    {
      id: 3, name: "vegetables",
      uri: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2018/12/vegetables.jpg"
    },
    {
      id: 4, name: "Kirana",
      uri: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-03/Kirana_1.jpg"
    }
  ]);
  const [data, setData] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]);
  const [visible, setVisible] = useState(false)
  const renderProductItem = () => {
    return (
      <TouchableOpacity
        style={styles.listproduct}
        onPress={() => {
          setVisible(!visible)
        }}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          marginTop: vertScale(10)
        }}>
          <View style={{
            backgroundColor: AppColor.yellow, flex: 0.6,
            borderTopRightRadius: horizScale(20),
            borderBottomRightRadius: horizScale(20),
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ color: AppColor.black, fontSize: Font.small }}>Team By 15% Off</Text>
          </View>
          <View style={{ flex: 0.2 }}>
            <Image source={CustomImage.heart} style={{ ...styles.icon, tintColor: AppColor.darkgrey }} />
          </View>
        </View>
        <View style={{ marginTop: vertScale(10) }}>
          <Image source={{ uri: "https://media.baamboozle.com/uploads/images/389277/1625233312_288659.png" }}
            style={styles.img} />
        </View>
        <View style={{ marginHorizontal: horizScale(10), marginTop: vertScale(5) }}>
          <Text style={{ color: AppColor.black }}>
            Stack of men's clothing</Text>
        </View>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          marginTop: vertScale(5), alignItems: 'center'
        }}>
          <View style={{
            marginHorizontal: horizScale(10), backgroundColor: AppColor.blue,
            borderRadius: horizScale(8), paddingHorizontal: horizScale(10), height: vertScale(40), justifyContent: 'center'
          }}>
            <BoldText style={{ color: AppColor.white, fontSize: Font.tiny, textAlign: 'center' }}>Currant Price{"\n"}₹ 400</BoldText>
          </View>
          <View style={{ marginHorizontal: horizScale(10), marginTop: vertScale(5) }}>
            <BoldText style={{ color: AppColor.darkgrey, textDecorationLine: 'line-through', textAlign: 'right', marginRight: horizScale(5) }}>₹ 550</BoldText>
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
          </View>
        </View>

      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
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
              <BoldText style={{ fontSize: Font.h4, color: AppColor.black }}>Categories</BoldText>
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

          <FlatList
            horizontal={true}
            data={cdata}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <View style={{
                marginVertical: 20,
                marginHorizontal: 8,
                elevation: 10,
                height: 90,
                width: 90,
              }}>
                <Image

                  source={{ uri: item.uri }}
                  style={{ height: 90, width: 90, borderRadius: 10 }}
                />
                <View style={{
                  position: 'absolute',
                  backgroundColor: "rgba(52,52,52,0.7)",
                  height: 90, width: 90,
                  justifyContent: 'flex-end',
                  borderRadius: 10
                }}>
                  <BoldText style={{
                    color: AppColor.white,
                    textAlign: 'center',
                    paddingBottom: 10,
                    fontSize: Font.regular
                  }}>{item.name}</BoldText>
                </View>
              </View>
            )}
          />

          <View style={{
            flexDirection: 'row', marginHorizontal: horizScale(20),
            justifyContent: 'space-between'
          }}>
            <BoldText style={{
              fontSize: Font.h5,
              color: AppColor.black
            }}>Fashion</BoldText>
            <TouchableOpacity
              onPress={() => { navigation.navigate("ViewAll", { data: data }) }}
            >
              <MediumText>View All</MediumText>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginVertical: 10,
              alignItems: 'center'
            }}>
            <FlatList
              data={data}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={renderProductItem}
              nestedScrollEnabled={true}
            />
          </View>

        </View>

      </ScrollView>
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        statusBarTranslucent
        onRequestClose={() => setVisible(!visible)}
        style={{ flexGrow: 1 }}>
        <View
          style={{
            backgroundColor: 'rgba(52,52,52,0.8)',
            flexGrow: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setVisible(!visible)}
            style={{ flex: 1 }}></TouchableOpacity>

          <View style={{ backgroundColor: AppColor.white, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}
                style={{
                  height: 150,
                  width: 150,
                  resizeMode: 'contain',
                  margin: 10
                }}
              />
              <View style={{ justifyContent: 'center' }}>
                <Text
                  style={{
                    fontFamily: 'SourceSansPro-Bold',
                    fontSize: 30,
                    color: AppColor.blue,
                    textAlign: 'right',

                  }}>₹ 45 </Text>
                <Text
                  style={{
                    fontFamily: 'SourceSansPro-Regular',
                    fontSize: 16,
                    color: AppColor.pink,
                  }}> (Team buy price) </Text>
              </View>
            </View>
            <Text
              style={{
                fontFamily: 'SourceSansPro-Regular',
                fontSize: 16,
                color: AppColor.black, textAlign: 'center'
              }}>
              Vim bar 85 gm - Pack of 10 (Team buy)
            </Text>
            <View
              style={GloableStyle.setView}>
              <Text
                style={{
                  fontSize: 14,
                  color: AppColor.black,
                  fontFamily: 'SourceSansPro-Regular',
                }}>
                Product No.
              </Text>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 30 }}
                  onPress={() => { if (itemCount > 1) { setItemCount(itemCount - 1) } }}>
                  <Text style={styles.addplusminusView}>-</Text>
                </TouchableOpacity>
                <Text style={styles.countText}>{" "}{itemCount}{" "}</Text>
                <TouchableOpacity style={{ width: 30 }}
                  onPress={() => { setItemCount(itemCount + 1) }}>
                  <Text style={styles.addplusminusView}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={GloableStyle.setView}>
              <View>
                <Text
                  style={{
                    fontFamily: 'SourceSansPro-Bold',
                    fontSize: 18,
                    color: AppColor.black,
                  }}>
                  Add 1 more team {'\n'}member
                </Text>
                <Text
                  style={{
                    fontFamily: 'SourceSansPro-Bold',
                    fontSize: 12,
                    color: AppColor.black,
                  }}>
                  Max team size - 2
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginRight: 20 }} >
                  <Image
                    source={{
                      uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEPEBASEBAVExAPEA8XFw8QEBAREBAVFRIWFxgRFRUYHSggGBonGxUTITEhJSkrOi4uFx81ODMsNygtLi0BCgoKDQ0NDw0NDi0ZFRk3NystLSs3LTcrKy0tKysrKy0rLS0rLS0rNysrKysrNysrKys3KysrLisrKy0rLSsrLf/AABEIAMsA+AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EAEYQAAIBAgEIBgYFCgUFAAAAAAABAgMRBAUGEiExQVFhIjJxgZGxE0JSocHRFDNjgpIjU2Jyc5Oys8LwB3SD0uEVFiQ0VP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7UAAAAAAAAAAAAAAAADRxmV8PRuqlaMWvVvpT7dCN5e4ia+eeGj1Y1J84xil29Jp+4CyAptTPn2cNq4yq2felH4nx/3zP/54/vX/ALQLqCm08+faw2rjGrd9ycfib1DPTDy60akOcoxa7ejJu3cBZAaGDyxh61lTrRbeyLejN/dlZ+43wAAAAAAAAAAAAAAAAAAAAAAAAAAAHzUqKKcpNRildyk0klxbexEblrLdLCx6T0qjXRpRa0nzfsx1PXydrvUUDK2WK2KlepK0U9VOLahHg7b3zfO1k7AWvKueNOF40I+kl7bvGmuzfL3J7mVXH5bxFfr1Xov1IdCHY0usv1rkcegeJHoAAAAAAB40SGAy1iKH1dV6K9SfTh2JPq91jQAF5yXnlTnaNePo5e2rum+3fH382WenUUkpRalFq6lFpprimtpx83slZXrYV3py6Ld3Sld05cXbc+atsW7UB1QEVkTLtLFro9GoleVKT6S5p+sta1rir2uSoAAAAAAAAAAAAAAAAAAACAzkzhWGWhTtKs1seuNNe1L4IyZzZcWFglGzrVF0U9ait9SXLgt75Jtc5qVHKTlJtyk23Ju7be9sD2tVlOTlOTlKTu5Sd23x8vA+QAAAAAAADJSoyn1Iyl+rFvyM/wD0yv8AmKn7uXyA1AZauGqQ69OUf1oyXmYgAAAAAD6pVJQkpQk4yi01KLs01/b8ToGbWcSxK0Klo10tmxVEvWjz4r+1z0+qdRxalFuMotNSW1NbwOwAhc2cuLFU7Ssq0F0o7pL248uK3Pk1eaAAAAAAAAAAAAAABrZQxkaFKdSfVgti2ybdlFc22l3myUPPjKfpKqoxfQpa5c5teSi7dspX2ICBx+MnXqSqTfSm92yK3RXJLV/y2a4AAAAAAlw2sDLhcPOrJQhG8nu+L4It+TM26VNJ1Uqk+fUXYt/ebOQslrD01dflJJOUv6VyRJgeRikrJWS3LUj0AAReUcg0ayfR0J+3BJeK2MlABznKOT54eejNdkl1ZLivkap0PK2AjiKTg9u2MvZluOezi4tpqzi2muDWpoDwAAAABsZPxk6FSNSm7Si9m6S3xfJ/3rsdSwGMjXpwqQ6s1eztdPfF23p3T5o5KWfMfKehUdCT6FXXH9GaS1djS8VFbwL2AAAAAAAAAAAAA1so4tUKVSo9ehFu17aT9WPa3Zd5yipNyblJ3lJtuT2ybd3J829feXbP/F6NKnS31Ztvg4wtq8ZRf3SjgAAAAAAkMgUlPE0k9mlf8KbXvRHm/kGpo4mi/wBK3imviB0EAAAAAAAAoudFFQxM7bJqMu9qz96L0UfOud8TJezGC91/iBDgAAAAB9UpuMoyi2nFpqS2pp3TXPefIA6zk7FqvSp1Erekgno7dF749zuu42Sr5hYvSo1KW+lNNfqzu/G8ZvvLQAAAAAAAAAAAHPM+MRpYtxT1U6dOLXCT0p+U4kAb2X6uni8S/tpr8HQ/pNEAAAAAAGfAtqrStt9JT/iRgNzJEksRRb2ekj56vfYDogAAAAAAABz/ADgv9JrX9peGire46AUTOeSeKqW3KCfaooCKAAAAAAABYcxq+jinHdUpzWzbJWl5RkdBOXZuVdDF4d/aJfjTh/UzqIAAAAAAAAAAAckyk/y+I/zOJ/nTMBt5Zp6OJxC+3rP8U3Je5mogAAAAAAE7a1tQAHR8nYpVqUJr1oq/J7GvG5slazLxF41Kb9VqS79T8l4llAAAAAAMOMxCpU5zlshFvt4I5xWqOcpSltk232t3LhnhW0aCjvnNeC1+dimAAAAAAAAAbWSf/Yw/7eh/MidYOVZDhpYrDr7ak/CSfwOqgAAAAAAAAAABzbPChoYyo/zihPbu0VHzhIhi3/4g4bXRqrY9KEnxfWgv5hUAAAAAAAAAJPN3F+hxEW+rPovv2PxsX05eXvNvHOtQWk7ypvRb42Safg0BKgAAAaOW8Y6NCc49bUo9r1X+PcBWM7MZ6StoJ9Gkrfee34LuIQ9bvre17zwAAAAAAAACazNpaeMp/ZxqTfYo6K984nSCmf4fYbXXqvYtCC7etLzplzAAAAAAAAAAACLzkwPp8NVileaWlFLa5R16K7VeP3jmCZ2M5jnLk76NiJxStTn0ocLPbFdjurblo8QIsAAAAAAAAtuZX1dX9ov4UVnC4OpVdqcHJ8lqXa9iLvkHJzw9LRk05SlpO2xakrLwAkgAAIbO1f8AjPlOHxJk1Mq4P09GdO9nJKzexNO68gOdA3MbkutR68Hb2l0o+K2d5pgAAAAAANglc2cnfSMRBNdCm1OfC0WrR73ZW4X4AXjNnA+gwtKLVpyWnJPapT1tPsuo9xKgAAAAAAAAAAAAIjObJP0qi0vrYdKD2XdtcHyfmk9xLgDjrVtTVmnZpppprc09gLdnpkOzeJpLU/rIrd9olw4+O9tVGEW2kldvYlrbIB9Uqcpu0YuTe6KbZYsl5ruVpV3or83Hrd73FlwuEp0lanBRXJa32vayip4LNitOzqNU48H0peCJ3CZu4enrcdN8Zu6/DsJYAeRikrJJJbkrI9AAAAAAABHYzIdCrrcNGT9aHRfgtT70SIAqGNzVqRu6UlNey+jL5P3EFXoTpu04uL4STR0wx4jDwqLRnFSXCSuBzMFpynmttlQf+nJ+Uvn4lZq05Qk4yTjJbU1ZoD47Nb4JXb5JHS82clfRaKUl+VnaU+TtqhfgvO73kDmXkTSaxFRdFfVxe9/nOxbuevcm7qAAAAAAAAAAAAAAAAB41fbse5kFh836WHqTqQXW2Rev0XHR5E8AIw9Nmrh/Z8DWaAAAAAAAAAAAAAAAAAGtisiU8TKEqkeo92rTXsPlckaWH3y8PmbKARSSSSsluWpLkegAAAAAAAAAAAAAAAAAAAAMdSkpbfHeZABozoNc+z5GMkj4nTT2r5gaANmWF4Px1mN4eXJ9j+YGIH26Ulufn5Hmg+D8APkH2qUuD8vM+lh5cl2v5AYgbMcLxfhqM0KSWxfMDUhQb5dvyNqnRUe3iZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=',
                    }}
                    style={styles.bigIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                >
                  <Image
                    source={{
                      uri: 'data:image/png;base64,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',
                    }}
                    style={styles.bigIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.shareview}>
              <Text
                style={styles.sharetext}>
                Share on whatsapp to create team
              </Text>
              <Image
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}
                style={styles.bigIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  shareview: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: AppColor.blue,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 5
  },
  sharetext: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 16,
    color: AppColor.white,
    paddingHorizontal: 10
  },
  addplusminusView: {
    fontSize: 25,
    color: AppColor.pink,
    fontFamily: 'SourceSansPro-Bold',
    alignSelf: 'center'

  },
  bigIcon: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
  countText: {
    backgroundColor: '#F4F2FF',
    borderRadius: 5
  },
  listproduct: {
    height: 270,
    width: '48.5%',
    backgroundColor: AppColor.white,
    elevation: horizScale(15),
    margin: horizScale(3),
    borderRadius: horizScale(8)
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  img: {
    height: vertScale(130),
    width: horizScale(110),
    alignSelf: 'center',
    resizeMode: 'cover',
  },
});
