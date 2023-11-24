import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { GlobalColors } from '../Assets/GlobalColors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const Cards = () => {
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

        <TouchableOpacity onPress={() => Navigation.navigate('Profile', { item })} style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Text style={{ fontWeight: '600', backgroundColor: GlobalColors.blue, padding: 5, borderRadius: 4 }}>
                    {item.off}
                </Text>
                <Icon name="heart-outline" size={25} color={GlobalColors.gray} />
            </View>

            <View style={{
                width: 140, height: 140, backgroundColor: GlobalColors.blue, borderRadius: 70,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    width: 100, height: 100, backgroundColor: GlobalColors.blue, borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'white'
                }}>

                </View>
                <Image style={{ width: 170, height: '80%', resizeMode: 'contain', position: 'absolute' }} source={item.image} />

            </View>
            <View>
                <Text style={{ fontSize: 17, fontWeight: '500', color: GlobalColors.black, marginTop: 5, textAlign: 'center' }}>
                    {item.title}
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '600', color: GlobalColors.black }}>
                    $ {item.price}
                </Text>
            </View>

        </TouchableOpacity >
    );

    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        width: '48%',
        height: 280,
        margin: 5,
        backgroundColor: GlobalColors.white,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,

    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Cards;
