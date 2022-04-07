import React from 'react';
import { Dimensions, View, Text as RNText } from 'react-native';

const REFERENCE_WIDTH = 414;
const REFERENCE_HEIGHT = 736;

const { height, width } = Dimensions.get('window');

const horizScale = (val) => width * (val / REFERENCE_WIDTH);

const vertScale = (val) => height * (val / REFERENCE_HEIGHT);

const Text = (props) => (
    <RNText
        style={[props.style, { fontFamily: 'SourceSansPro-Regular' }]}
        allowTextFontScaling={true}>
        {props.children}
    </RNText>
);

const MediumText = (props) => (
    <RNText
        style={[props.style, { fontFamily: 'SourceSansPro-Medium' }]}
        allowTextFontScaling={true}>
        {props.children}
    </RNText>
);

const BoldText = (props) => (
    <RNText
        style={[props.style, { fontFamily: 'SourceSansPro-Bold' }]}
        allowTextFontScaling={true}>
        {props.children}
    </RNText>
);

export {
    horizScale,
    vertScale,
    Text,
    MediumText,
    BoldText,

}