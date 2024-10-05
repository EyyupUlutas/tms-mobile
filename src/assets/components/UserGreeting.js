import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import User2 from '../images/user-2.png';
import BubbleCard from './BubbleCard';
import { TradesFilledIcon } from '../icons';
import LinearGradient from 'react-native-linear-gradient';


export default class UserGreeting extends Component {
    render() {
        return (
            <LinearGradient
            colors={['#4c669f', '#3b5998', '#000']}
                style={{
                    borderRadius: 28,
                    backgroundColor: '#01f6c94d',
                    backgroundImage: 'linear-gradient(to bottom, #FFFFFF 50%, #01f6c94d)',
                 
                }}
            >
                <View style={{display:"flex", flexDirection: 'row', paddingLeft:10, paddingTop:10 }}>
                    <View
                        style={{
                            display:"flex",
                            justifyContent: 'center',
                            width: 60,
                            height: 60,
                            paddingTop: 2,
                            borderRadius: 30,
                            overflow: 'hidden',
                            backgroundColor: '#FFCE22',
                        }}
                    >
                        <Image
                            source={User2} // Placeholder image
                            style={{ width: 50, height: 65 }}
                        />
                    </View>

                    <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ fontFamily: 'Gilroy', fontWeight: '500', fontSize: 16, color: '#9FADC7' }}>
                            Good morning,
                        </Text>
                        <Text style={{ fontFamily: 'Gilroy', fontWeight: '600', fontSize: 20, color: '#69789F' }}>
                            Vishwanath
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'column', marginTop: 30, gap: 11 }}>
                    <BubbleCard
                        width="200px"
                        height="185px"
                        IconComponent={TradesFilledIcon}
                        number="12"
                        status="NEW REQUIREMENTS"
                    />

                    <BubbleCard
                        width="200px"
                        height="185px"
                        IconComponent={TradesFilledIcon}
                        number="02"
                        status="INITIATED"
                    />

                    <BubbleCard
                        width="200px"
                        height="185px"
                        IconComponent={TradesFilledIcon}
                        number="03"
                        status="Upcoming"
                    />
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 28,
        backgroundColor: '#01f6c94d',
        padding: 10,
    },
    userInfo: {

        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
    },
    imageWrapper: {
        justifyContent: 'center',
        width: 60,
        height: 60,
        paddingTop: 2,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#FFCE22',
    },
    image: {
        width: 50,
        height: 65,
    },
    textWrapper: {
        justifyContent: 'center',
        paddingLeft: 10,
    },
    greeting: {
        fontFamily: 'Gilroy',
        fontWeight: '500',
        fontSize: 16,
        color: '#9FADC7',
    },
    userName: {
        fontFamily: 'Gilroy',
        fontWeight: '600',
        fontSize: 20,
        color: '#69789F',
    },
    dashboardCards: {
        flexDirection: 'row',
        gap: 11,
        marginTop: 30,
    },
    bubbleCard: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
    },
});