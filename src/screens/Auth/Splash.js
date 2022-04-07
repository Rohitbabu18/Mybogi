import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';

// import * as Font from 'expo-font';
const Splash = ({ navigation }) => {


  // const [font, setFonts] = useState(false)
  // async function loadFonts() {
  //   await Font.loadAsync({
  //     Regular: require('../../../../assets/fonts/SourceSansPro-Regular.ttf'),
  //     Bold: require('../../../../assets/fonts/SourceSansPro-Bold.ttf'),
  //     Black: require('../../../../assets/fonts/SourceSansPro-Black.ttf'),
  //   });
  //   setFonts(true)
  // }

  useEffect(() => {
    // loadFonts()
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../../../assets/ic_logo.png')}
        style={{
          height: 300,
          width: 300,
          resizeMode: 'contain'
        }}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
