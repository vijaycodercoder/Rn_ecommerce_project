import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import { FadeInLeft, FadeOut, BounceInUp, BounceInDown, FlipInEasyX } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'
import { GlobalColors } from '../Assets/GlobalColors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ZoomIn, PinwheelIn, LightSpeedInRight, LightSpeedInLeft, RollInRight, RollInLeft, StretchInX } from 'react-native-reanimated';

const Profile = () => {
    const Navigation = useNavigation()
    const route = useRoute()
    const { item } = route.params
    return (
        <View style={styles.container}>
            <View style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={() => Navigation.goBack()}>
                    <Animated.View entering={RollInLeft.delay(1000)}>

                        <Icon name='arrow-back' size={40} color={GlobalColors.black} />
                    </Animated.View>
                </TouchableOpacity>
                <Animated.View entering={RollInRight.delay(1000)}>
                    <Icon name='heart-circle' size={40} color='red' />
                </Animated.View>
            </View>
            <Animated.Text entering={StretchInX.delay(500)} style={{ fontWeight: '600', backgroundColor: GlobalColors.blue, padding: 5, borderRadius: 4, marginVertical: 20 }}>
                {item.off}
            </Animated.Text>

            <Animated.ScrollView entering={ZoomIn.springify()}>

                <View style={{ width: 260, height: 260, borderRadius: 130, backgroundColor: GlobalColors.accentColor, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 160, height: 160, borderRadius: 80, backgroundColor: GlobalColors.accentColor2, justifyContent: 'center', alignItems: 'center' }}>
                        <Animated.Image entering={PinwheelIn.duration(500)} style={{ width: 1000, height: '80%', resizeMode: 'contain', zIndex: 100, position: 'absolute', }} source={item.image} />
                    </View>

                </View>
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
});

export default Profile;
