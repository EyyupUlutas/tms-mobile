import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import PieChart from 'react-native-pie-chart'
import { UpArrowIcon, UpArrowThinIcon } from '../icons/index'


export default class DivisionStats extends Component {
    render() {
        const widthAndHeight = 250
        const series = [23, 12, 4]
        const sliceColor = ['#3AA345', '#DDB834', '#42AEEB']
        return (
            <LinearGradient colors={['#00A8E1', '#572AD8']} style={styles.container}>
                <Text style={styles.title}>DIVISIONS</Text>

                <View style={styles.selectorContainer}>
                    <Text style={styles.activeSelector}>Metals</Text>
                    <Text style={styles.selector}>Minerals</Text>
                </View>

                <View style={styles.chartContainer}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.80}
                        coverFill={'#000'}
                        style={{
                            transform: [{ rotate: '-120deg' }],
                        }}
                    />
                    <View style={styles.centerTextContainer}>
                        <Text style={styles.centerText}>COAL</Text>
                        <View style={styles.centerValueContainer}>
                            <Text style={styles.currencySymbol}>$</Text>
                            <Text style={styles.amount}>2,303.72</Text>
                            <View style={styles.centerIcon}>
                                <UpArrowIcon></UpArrowIcon>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.container1}>
                    <View style={styles.headerContainer}>
                        <View style={styles.header}>
                            <Text style={styles.amountText}>Amount</Text>
                            <Text style={styles.volumeText}>Volume</Text>
                        </View>
                        <View style={styles.selectedUnderline}></View>
                    </View>

                    <View style={styles.itemContainer}>
                        <View style={styles.itemRow}>
                            <View style={styles.circle}></View>
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>Coal</Text>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.currency}>$</Text>
                                    <Text style={styles.price}>2,303.72</Text>
                                    <View style={styles.percentageContainer}>
                                        <Text style={styles.percentage}>10.3%</Text>
                                        <UpArrowThinIcon width={8} height={8} fill="#fff" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={styles.itemContainer}>
                        <View style={styles.itemRow}>
                            <View style={[styles.circle, { backgroundColor: "#DDB834" }]}></View>
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>Aluminium</Text>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.currency}>$</Text>
                                    <Text style={styles.price}>1,242.82</Text>
                                    <View style={[styles.percentageContainer, { backgroundColor: "#FC5980" }]}>
                                        <Text style={styles.percentage}>11.5%</Text>
                                        <UpArrowThinIcon style={{ transform: [{ rotate: '180deg' }] }} width={8} height={8} fill="#fff" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={styles.itemContainer}>
                        <View style={styles.itemRow}>
                            <View style={[styles.circle, { backgroundColor: "#42AEEB" }]}></View>
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>Aluminium</Text>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.currency}>$</Text>
                                    <Text style={styles.price}>398.53</Text>
                                    <View style={[styles.percentageContainer, { backgroundColor: "#FC5980" }]}>
                                        <Text style={styles.percentage}>8.9%</Text>
                                        <UpArrowThinIcon style={{ transform: [{ rotate: '180deg' }] }} width={8} height={8} fill="#fff" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>



                </View>


            </LinearGradient>
        )
    }
}

// StyleSheet for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00A8E1',
        paddingTop: 50,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFF',
        marginBottom: 20,
    },
    selectorContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    activeSelector: {
        backgroundColor: '#00000040',
        color: '#FFF',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginRight: 10,
    },
    selector: {
        color: '#FFF',
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginRight: 10,
    },
    chartContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    centerTextContainer: {
        backgroundColor: "#2A2658",
        width: 200,
        height: 200,
        borderRadius: 120,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    },
    centerText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },
    centerValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        color: '#B8B5D0',
        marginRight: 2,
        fontSize: 18,
    },
    amount: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
    },
    centerIcon: {
        marginLeft: 5,
        backgroundColor: "#12948C",
        padding: 5,
        borderRadius: 3
    },

    container1: {
        width: '80%',
        marginTop: 31,
    },
    headerContainer: {
        flexDirection: 'column',
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#B1B8C863',
    },
    header: {
        flexDirection: "row",
        gap: 23
    },

    selectedUnderline: {
        width: 55,
        backgroundColor: "white",
        height: 2
    },
    amountText: {
        fontFamily: 'Gilroy',
        fontWeight: '600',
        fontSize: 15,
        color: '#fff',
    },
    volumeText: {
        fontFamily: 'Gilroy',
        fontWeight: '600',
        fontSize: 15,
        color: '#C3C9D6',
    },
    itemContainer: {
        flexDirection: 'column',
        gap: 6,
        marginTop: 25,
    },
    itemRow: {
        flexDirection: 'row',
        gap: 1,
    },
    circle: {
        marginTop: 4,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#3AA345',
    },
    itemDetails: {
        flexDirection: 'column',
        marginLeft: 2,
    },
    itemName: {
        fontFamily: 'Gilroy',
        fontWeight: '500',
        fontSize: 15,
        color: '#fff',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currency: {
        fontFamily: 'Gilroy',
        fontSize: 18,
        color: '#B8B5D0',
        marginRight: 2,
    },
    price: {
        fontFamily: 'Gilroy',
        fontSize: 18,
        color: '#fff',
    },
    percentageContainer: {
        width: 50,
        height: 21,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#12948C',
        borderRadius: 3,
        marginLeft: 3,
        gap: 2
    },
    percentage: {
        fontFamily: 'Gilroy',
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },

});

