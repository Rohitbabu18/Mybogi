import { StyleSheet, Dimensions } from 'react-native';
import { AppColor } from '../../utils/AppColor';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  logoImage: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    alignSelf: "center"

  },
  fbGoogleBox: {
    flexDirection: 'row',
    width: '40%',
    height: 45,
    borderColor: AppColor.grey,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
  fbGoogleText: {
    fontSize: 14,
    color: AppColor.black,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginStart: 5,
  },
  fbGoogleImage: {
    width: 30,
    height: 30,
    marginStart: -20,
    alignSelf: 'center',
  },
  alreadyReg: {
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 50,
    color: AppColor.black,
  },
  loginRegMobile: {
    width: '85%',
    height: 45,
    borderColor: AppColor.grey,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: AppColor.white,
    justifyContent: 'center',
  },
});
