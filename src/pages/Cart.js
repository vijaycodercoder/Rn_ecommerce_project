import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { GlobalColors } from '../Assets/GlobalColors';
import Animated, { BounceInRight, RollInLeft, RollInRight, StretchInX } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'


const Cart = () => {
    const Navigation = useNavigation()
    const DATA = [
        {
            id: '1',
            title: 'Adidas Running Shoes',
            image: require('../images/redShoes.png'),
            price: 150,
            off: '20%',
            rating: 4.9,
            description: 'High-performance running shoes from Adidas suitable for all types of runners.',
        },
        {
            id: '2',
            title: 'Smartwatch Pro',
            image: require('../images/SmartwatchPro.png'),
            price: 300,
            off: '15%',
            rating: 4.7,
            description: 'Advanced smartwatch with fitness tracking, heart rate monitoring, and more.',
        },
        {
            id: '3',
            title: 'Travel Backpack XL',
            image: require('../images/TravelBackpack.png'),
            price: 180,
            off: '10%',
            rating: 4.1,
            description: 'Spacious and durable backpack, perfect for travel and outdoor activities.',
        },
        {
            id: '4',
            title: 'Casual Sneakers',
            image: require('../images/CasualSneakers.png'),
            price: 120,
            off: '25%',
            rating: 4.5,
            description: 'Comfortable and stylish casual sneakers for everyday wear.',
        },
        {
            id: '5',
            title: 'Leather Wallet',
            image: require('../images/LeatherWallet.png'),
            price: 50,
            off: '30%',
            rating: 3.3,
            description: 'Genuine leather wallet with multiple card slots and a sleek design.',
        },
        {
            id: '6',
            title: 'Wireless Earbuds',
            image: require('../images/WirelessEarbuds.png'),
            price: 80,
            off: '12%',
            rating: 4,
            description: 'High-quality wireless earbuds with noise cancellation and long battery life.',
        },
        {
            id: '7',
            title: 'Running Shorts',
            image: require('../images/RunningShorts.png'),
            price: 40,
            off: '18%',
            rating: 5,
            description: 'Breathable and lightweight running shorts for a comfortable workout.',
        },
        {
            id: '8',
            title: 'Gym Duffel Bag',
            image: require('../images/GymDuffelBag.png'),
            price: 90,
            off: '22%',
            rating: 3,
            description: 'Spacious gym duffel bag with compartments for all your workout essentials.',
        },
        {
            id: '9',
            title: 'Designer Sunglasses',
            image: require('../images/DesignerSunglasses.png'),
            price: 200,
            off: '8%',
            rating: 5,
            description: 'Fashionable designer sunglasses with UV protection for a stylish look.',
        },
        {
            id: '10',
            title: 'Slim Fit Jeans',
            image: require('../images/SlimFitJeans.png'),
            price: 60,
            off: '15%',
            rating: 3,
            description: 'Comfortable and trendy slim fit jeans for a modern and stylish appearance.',
        },
    ];

    const Card = ({ item }) => (
        <Animated.View entering={BounceInRight.delay(500)}>

            <TouchableOpacity style={styles.card}>

                <View style={{ width: '30%' }}>
                    <View style={{
                        width: 100, height: 100, backgroundColor: GlobalColors.blue, borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 80, height: 80, backgroundColor: GlobalColors.blue, borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: 'white'
                        }}>

                        </View>
                        <Image style={{ width: 110, height: '80%', resizeMode: 'contain', position: 'absolute', }} source={item.image} />

                    </View>
                </View>
                <View style={{ width: '40%', textAlign: 'right', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 30 }}>
                    <Text style={{ fontSize: 17, fontWeight: 400, color: GlobalColors.black }} >
                        {item.title}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 600, color: GlobalColors.black }} >
                        ${item.price}.00
                    </Text>
                </View>
                <View style={{ width: '20%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 400, color: GlobalColors.black }}>-</Text>
                    <Text style={{ fontSize: 17, fontWeight: 400, color: GlobalColors.black }}>1</Text>

                    <View style={{ backgroundColor: GlobalColors.blue, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 10, flex: 1 }}>

                        <Text style={{ fontSize: 20, fontWeight: 400, color: GlobalColors.black, }}>+</Text>
                    </View>
                </View>
            </TouchableOpacity >
        </Animated.View>
    )



    return (
        <View style={styles.container}>
            <View style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                alignItems: 'center',
                marginBottom: 20
            }}>
                <TouchableOpacity onPress={() => Navigation.goBack()}>
                    <Animated.View entering={RollInLeft.delay(500)}>

                        <Icon name='arrow-back' size={32} color={GlobalColors.black} />
                    </Animated.View>
                </TouchableOpacity>
                <Animated.Text entering={StretchInX.delay(500)} style={{ fontSize: 27, fontWeight: 600, color: GlobalColors.black }}>My Cart</Animated.Text>
                <Animated.View entering={RollInRight.delay(500)}>
                    <Icon name='trash' size={32} color={GlobalColors.bgColor} />
                </Animated.View>

            </View>

            {/* listcontainer */}
            {/* <ScrollView style={{ backgroundColor: GlobalColors.gray, width: '100%', paddingTop: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}> */}
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={item => item.id}
                numColumns={1}
                scrollEnabled
            />
            {/* </ScrollView> */}

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
                    $1200.00
                </Text>
                <TouchableOpacity onPress={() => Navigation.navigate('Welcome')} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: GlobalColors.blue, paddingHorizontal: 4, borderRadius: 10 }}>
                    <Icon name='paper-plane' size={32} color={GlobalColors.black} />
                    <Text style={{ fontSize: 17, fontWeight: 500, color: GlobalColors.black, paddingVertical: 10, textAlign: 'center', marginHorizontal: 5 }}>
                        Check Out
                    </Text>
                </TouchableOpacity>

            </Animated.View>

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: GlobalColors.white,

    },
    card: {
        backgroundColor: GlobalColors.white,
        marginHorizontal: 20,
        marginVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 5
    }
})