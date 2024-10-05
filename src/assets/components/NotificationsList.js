import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import User3 from '../images/user-3.png';
import User4 from '../images/user-4.png';

export default class NotificationsList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.notificationItem, styles.borderBottom]}>
                    <View style={styles.imageContainer}>
                        <Image source={User3} style={styles.userImage} />
                    </View>
                    <View style={styles.notificationTextContainer}>
                        <Text style={styles.notificationText}>
                            <Text style={styles.boldText}>Aneesh Thomas</Text> has updated
                            <Text style={styles.boldText}> Freight charges</Text>
                        </Text>
                        <View style={styles.infoRow}>
                            <Text style={styles.tag}>TR-22-00001</Text>
                            <Text style={styles.timeText}>3h ago</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.notificationItem, styles.borderBottom]}>
                    <View style={styles.imageContainer}>
                        <Image source={User4} style={styles.userImage} />
                    </View>
                    <View style={styles.notificationTextContainer}>
                        <Text style={styles.notificationText}>
                            <Text style={styles.boldText}>Nita Chakravarty</Text> has updated
                            <Text style={styles.boldText}> Freight</Text>
                        </Text>
                        <View style={styles.infoRow}>
                            <Text style={styles.tag}>TR-22-00001</Text>
                            <Text style={styles.timeText}>3h ago</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.notificationItem}>
                    <View style={[styles.imageContainer, { backgroundColor: "#fff" }]}>
                        <Image source={User3} style={styles.userImage} />
                    </View>
                    <View style={styles.notificationTextContainer}>
                        <Text style={styles.notificationText}>
                            <Text style={styles.boldText}>Aneesh Thomas</Text> has updated
                            <Text style={styles.boldText}> Freight</Text>
                        </Text>
                        <View style={styles.infoRow}>
                            <Text style={styles.tag}>TR-22-00001</Text>
                            <Text style={styles.timeText}>3h ago</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: "#EEEFFF"
    },

    notificationItem: {
        flexDirection: 'row',
        display: "flex",
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: "white"
    },
    borderBottom: {
        borderBottomWidth: 2,
        borderBottomColor: '#E2E7FF',
    },
    imageContainer: {
        justifyContent: 'center',
        width: 55,
        height: 55,
        paddingTop: 2,
        borderRadius: 999,
        overflow: 'hidden',
        backgroundColor: '#E2E7FF',
    },
    userImage: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
    },
    notificationTextContainer: {
        flex: 1,
        marginLeft: 8,
    },
    notificationText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#66687D',
    },
    boldText: {
        color: '#243448',
        fontWeight: 'bold',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tag: {
        fontSize: 10,
        fontWeight: '600',
        color: '#05172E',
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#E2E7FF',
        borderRadius: 4,
    },
    timeText: {
        fontSize: 10,
        fontWeight: '400',
        color: '#66687D',
    },
});
