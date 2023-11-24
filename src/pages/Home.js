import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Animated from 'react-native-reanimated'

import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalColors } from '../Assets/GlobalColors';
import CatogoreTiles from '../Components/CatogoreTiles';
import Cards from '../Components/Cards';
// import redshoe from '../images/redShoes'


const Home = () => {
    const navigation = useNavigation()
    const { navigate, push } = navigation
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={GlobalColors.bgColor} barStyle="dark-content" />
            {/* navbar */}
            <View style={styles.navbar}>
                <Icon name="apps" size={25} color={GlobalColors.black} />
                <Icon name="search" size={25} color={GlobalColors.black} />
            </View>

            <View style={styles.header}>
                <Text style={{ fontSize: 27, fontWeight: '500', color: GlobalColors.black }}>
                    Our Product
                </Text>
                <Text style={{ fontSize: 18, color: GlobalColors.gray, }}>
                    Sort by <Icon style={{ marginTop: 20 }} name="chevron-down-sharp" size={20} color={GlobalColors.gray} />
                </Text>
            </View>
            {/* CatogoreTiles */}
            <View style={styles.catogore}>
                <CatogoreTiles />
            </View>

            {/* Cards */}
            <ScrollView style={{ alignContent: 'center', width: '100%' }}>

                <View style={{
                    // width: '100%',
                    // minHeight: '50%',

                    // flexDirection: 'row',
                    // flexWrap: 'wrap',
                    // justifyContent: 'space-between',
                }} >
                    <Cards />
                </View>
            </ScrollView>
        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: GlobalColors.bgColor,

    },
    navbar: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    header: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center'
    },
    catogore: {
        width: '100%'
    }
});