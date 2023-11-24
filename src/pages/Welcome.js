import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { GlobalColors } from '../Assets/GlobalColors'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const Navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => Navigation.navigate('Home')} style={styles.container}>
            <ActivityIndicator style={{ position: 'absolute' }} size={100} color={GlobalColors.blue} />
        </TouchableOpacity>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalColors.bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        position: 'relative'
    }
})