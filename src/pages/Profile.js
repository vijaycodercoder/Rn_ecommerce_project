import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Animated, { SlideInDown } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'
import { GlobalColors } from '../Assets/GlobalColors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ZoomIn, PinwheelIn, RollInRight, RollInLeft, StretchInX } from 'react-native-reanimated';

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
                        <Icon name='arrow-back' size={32} color={GlobalColors.black} />
                    </Animated.View>
                </TouchableOpacity>

                <Animated.View entering={RollInRight.delay(1000)}>
                    <Icon name='heart-circle' size={32} color='red' />
                </Animated.View>
            </View>
            <Animated.Text entering={StretchInX.delay(500)} style={{ fontWeight: '600', backgroundColor: GlobalColors.blue, padding: 5, borderRadius: 4, marginVertical: 20 }}>
                {item.off}
            </Animated.Text>

            <Animated.View entering={ZoomIn.springify()}>

                <View style={{ width: 260, height: 260, borderRadius: 130, backgroundColor: GlobalColors.accentColor, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 160, height: 160, borderRadius: 80, backgroundColor: GlobalColors.accentColor2, justifyContent: 'center', alignItems: 'center' }}>
                        <Animated.Image entering={PinwheelIn.duration(500)} style={{ width: 1000, height: '80%', resizeMode: 'contain', zIndex: 100, position: 'absolute', }} source={item.image} />
                    </View>

                </View>
            </Animated.View>

            {/* details */}
            <Animated.View entering={SlideInDown.delay(500).springify().damping(10)} style={styles.details}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 27, fontWeight: 500, color: GlobalColors.black }}>
                            {item.title}
                        </Text>
                    </View>
                    <Text style={{ verticalAlign: 'middle' }}>
                        <Icon name='star' size={20} color='orange' />
                        ({item.rating})
                    </Text>

                </View>
                <Text style={{ fontSize: 17, fontWeight: 400, color: GlobalColors.black }}>
                    {item.description}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ color: GlobalColors.black, fontSize: 17, fontWeight: 500, borderRadius: 3, color: GlobalColors.black }}>
                        Size:
                    </Text>
                    <Text style={{ backgroundColor: GlobalColors.blue, fontSize: 22, fontWeight: 500, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3, marginHorizontal: 20, color: GlobalColors.black }}>
                        S
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: 500, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3, marginHorizontal: 20, color: GlobalColors.black }}>
                        M
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: 500, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3, marginHorizontal: 20, color: GlobalColors.black }}>
                        L
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: 500, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3, marginHorizontal: 20, color: GlobalColors.black }}>
                        XL
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ color: GlobalColors.black, fontSize: 17, fontWeight: 500, borderRadius: 3, color: GlobalColors.black }}>
                        Available Color:
                    </Text>
                    <View style={{ width: 30, height: 30, backgroundColor: 'orange', borderRadius: 15, marginHorizontal: 20 }} ></View>
                    <View style={{
                        width: 30, height: 30, backgroundColor: 'red', borderRadius: 15, marginHorizontal: 20,
                        justifyContent: 'center', alignItems: 'center',


                    }} >
                        <View style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20, marginHorizontal: 20, position: 'absolute', zIndex: 100, opacity: .2, }} >


                        </View>

                    </View>

                    <View style={{ width: 30, height: 30, backgroundColor: 'lightblue', borderRadius: 15, marginHorizontal: 20 }} ></View>
                </View>

            </Animated.View>

            <Animated.View entering={StretchInX.delay(500)} style={{
                justifyContent: 'flex-end', backgroundColor: GlobalColors.white,
                width: '100%',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                flexDirection: 'row',
                paddingHorizontal: 20,
                paddingVertical: 20,
                justifyContent: 'space-between',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 32, fontWeight: 700, color: GlobalColors.black, paddingVertical: 10 }}>
                    ${item.price}.00
                </Text>
                <TouchableOpacity onPress={() => Navigation.navigate('Cart', { item })} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: GlobalColors.blue, paddingHorizontal: 4, borderRadius: 10 }}>
                    <Icon name='cart' size={32} color={GlobalColors.black} />
                    <Text style={{ fontSize: 17, fontWeight: 500, color: GlobalColors.black, paddingVertical: 10, textAlign: 'center', marginHorizontal: 5 }}>
                        Add To Cart
                    </Text>
                </TouchableOpacity>

            </Animated.View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: GlobalColors.white
    },
    details: {
        backgroundColor: GlobalColors.gray,
        width: '100%',
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingTop: 30,
        marginTop: 25

    }
});

export default Profile;
