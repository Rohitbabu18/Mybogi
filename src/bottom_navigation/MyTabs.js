import React from 'react';
import { View, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';
import { AppColor } from '../utils/AppColor';
import Font from '../utils/Fonts';
import { horizScale, vertScale } from '../utils/Layout';

export default function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: AppColor.transparent }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const icon = options.tabBarIcon;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1, alignItems: 'center',
                            paddingVertical: vertScale(8),
                            backgroundColor: AppColor.transparent,
                            margin: 0, borderTopWidth: 0,
                        }}
                    >
                        <Image source={icon} style={{
                            height: horizScale(25),
                            width: horizScale(25),
                            resizeMode: 'contain',
                            tintColor: isFocused ? AppColor.pink : AppColor.darkgrey
                        }} />
                        <Text style={{
                            color: isFocused ? AppColor.pink : AppColor.darkgrey,
                            marginTop: vertScale(2),
                            fontSize: Font.small
                        }}>
                            {label}
                        </Text>
                    </TouchableOpacity>

                );
            })}
        </View>
    );
}