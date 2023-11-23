import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../Assets/GlobalColors';

const CatogoreTiles = () => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Sneakers',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Watch',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png'

        },
        {
            id: '58694a0f-3da1-4ss71f-bd96-145571e29d72',
            title: 'Backpack',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png'

        },
        {
            id: '58694a0f-3da1-471f-sfsfsffsbd96-145571e29d72',
            title: 'Backpack',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png'

        },
        {
            id: '58694a0ffssf-3da1-471f-bd96-145571e29d72',
            title: 'Backpack',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png'

        },
    ];
    const Item = ({ item }) => (
        <ScrollView style={styles.tiles} >
            <TouchableOpacity style={{
                flexDirection: 'row', elevation: 5,
                backgroundColor: GlobalColors.white,
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 10,
                alignItems: 'center'
            }}>

                <Image style={{ width: 60, height: 40, resizeMode: 'contain' }} source={{ uri: item.image }} />
                <Text style={styles.tilesText}>{item.title}</Text>
            </TouchableOpacity>
        </ScrollView>
    );



    return (
        <FlatList
            data={DATA}
            renderItem={Item}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}

        />
    )
}

export default CatogoreTiles

const styles = StyleSheet.create({
    tiles: {
        marginHorizontal: 10,
        marginVertical: 20,
    },
    tilesText: {
        fontWeight: '600',
        color: GlobalColors.black,
        letterSpacing: 1
    }
})