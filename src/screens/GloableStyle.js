import { StyleSheet } from "react-native"
import { AppColor } from "../utils/AppColor";
import Font from "../utils/Fonts";
import { horizScale, vertScale } from "../utils/Layout";
const GloableStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.whitelight
    },
    backView: {
        flexDirection: 'row',
        marginLeft: horizScale(20),
        marginTop: vertScale(10),
        alignItems: 'center',
    },
    backText: {
        color: AppColor.darkgrey,
        marginLeft: horizScale(10),
        fontSize: Font.medium,
    },
    setView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    headingView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: AppColor.grey,
        paddingVertical: 10
    },
    button: {
        backgroundColor: AppColor.pink,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        alignSelf: 'center',
        paddingVertical: 8,
        borderRadius: 10,
        elevation: horizScale(10),
    },
    buttonText: {
        color: AppColor.white,
        fontSize: Font.h6
    },
    smallIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    productImage: {
        height: 90,
        width: 90,
        resizeMode: 'contain'
    },
    profileImg: {
        height: horizScale(45),
        width: horizScale(45),
        borderRadius: horizScale(22.5),
        resizeMode: "cover"
    }
});
export default GloableStyle