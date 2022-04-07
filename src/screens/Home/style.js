import { StyleSheet } from "react-native";
import { AppColor } from "../../utils/AppColor";
import { vertScale } from "../../utils/Layout";
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  searchbox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: AppColor.blue,
    marginHorizontal: 20,
    borderRadius: 5,
    height: vertScale(50),
    flex: 1
  },
  list1: {
    height: 60,

    marginHorizontal: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  list1text: {
    color: AppColor.black,
    fontFamily: 'SourceSansPro-Medium',
    fontSize: 12,
    marginTop: 5,
    paddingHorizontal: 5,
    width: 70,
    textAlign: 'center'
  },
  exclusivedeal: {
    borderRadius: 50,
    backgroundColor: AppColor.pink,
    width: '60%',
    paddingVertical: 7,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exclusivedealtext: {
    color: AppColor.white,
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular'
  },
  listproduct: {
    height: 250,
    width: '50%',
    borderWidth: 0.5,
    borderColor: AppColor.darkgrey,
  },
  teambymsg: {
    backgroundColor: AppColor.blue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  productname: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    marginHorizontal: 5,
    color: AppColor.black,
    textAlign: 'center'
  },
  buynowmsg: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    marginStart: 5,
    color: AppColor.black,
    marginTop: 10,
  },
  addItemBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    position: 'absolute',
    right: 25,
  },
  addplusminusView: {
    fontSize: 25,
    color: AppColor.pink,
    fontFamily: 'SourceSansPro-Bold',
    alignSelf: 'center'

  },
  countText: {
    backgroundColor: '#F4F2FF',
    borderRadius: 5
  },
  bigIcon: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
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
  dailymandi: {
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 5,
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 22,
    color: AppColor.white,
  },
  stockmsg: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 16,
    color: AppColor.black,
    marginStart: 15,
    marginTop: 5,
  },
  img: {
    height: '75%',
    width: '95%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'SourceSansPro-Bold',
    color: AppColor.white,
    fontSize: 14,
    marginHorizontal: 5
  },
  textview: {
    backgroundColor: AppColor.blue,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 5,
  },
  flatlistcontainer: {
    height: 150,
    width: 150,
    borderColor: AppColor.blue,
    borderWidth: 1,
    alignSelf: 'center',
    margin: 5,
    borderRadius: 15,
  },
  flatlistcontainer2: {
    height: 320,
    width: 150,
    borderColor: AppColor.black,
    backgroundColor: AppColor.white,
    borderWidth: 1,
    alignSelf: 'center',
    margin: 8,
    borderRadius: 15,
    flex: 1,
  }

})
export default styles;