import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import BubbleCard from './BubbleCard'
import { TradesFilledIcon, CommunityIcon, MeetingColoredIcon, MeetingIcon, CompletedTaskIcon, MapsAndFlagsIcon } from '../icons/index'
import User from '../images/user.png'
import axios from 'axios';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customersCount: 0,
            suppliersCount: 0,
            meetingsCount: 0,
        };
    }
    componentDidMount() {
        axios.get('http://20.247.206.163/api/customers/count')
            .then(response => {
                this.setState({
                    customersCount: response.data.count,
                });
            })
            .catch(error => {
                console.log(error.message);
            });


        axios.get('http://20.247.206.163/api/supplier/count')
            .then(response => {
                this.setState({
                    suppliersCount: response.data.count,
                });
            })
            .catch(error => {
                console.log(error.message);
            });

        axios.get('http://20.247.206.163/api/meeting/count')
            .then(response => {
                this.setState({
                    meetingsCount: response.data.count,
                });
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    render() {
        const { customersCount, suppliersCount, meetingsCount } = this.state;

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View>
                    <View style={styles.profileContainer}>
                        <Image source={User} style={styles.profileImage}></Image>
                        <View style={styles.greetingContainer}>
                            <Text style={styles.greetingText}>Good morning,</Text>
                            <Text style={styles.nameText}>VISHWANATH</Text>
                        </View>

                        <View style={styles.actionsContainer}>
                            <View style={styles.actionButton}>
                                <MeetingIcon></MeetingIcon>
                                <Text style={styles.actionText}>Meeting</Text>
                            </View>
                            <View style={styles.actionButton}>
                                <CompletedTaskIcon></CompletedTaskIcon>
                                <Text style={styles.actionText}>Tasks</Text>
                            </View>
                            <View style={styles.actionButton}>
                                <MapsAndFlagsIcon></MapsAndFlagsIcon>
                                <Text style={styles.actionText}>Approvals</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ display: "flex", flex: 1, flexDirection: "row", marginHorizontal: 20, gap: 10 }}>
                    <View style={styles.bubbleCardsContainer}>
                        <BubbleCard
                            width={165}
                            height={200}
                            IconComponent={TradesFilledIcon}
                            IconWidth={40}
                            IconHeight={60}
                            number={"12"}
                            status="NEW REQUIREMENTS"
                        />

                        <BubbleCard
                            width={165}
                            height={200}
                            IconComponent={TradesFilledIcon}
                            IconWidth={40}
                            IconHeight={60}
                            number={"02"}
                            status="INITAITED"
                        />

                        <BubbleCard
                            width={165}
                            height={200}
                            IconComponent={TradesFilledIcon}
                            IconWidth={40}
                            IconHeight={60}
                            number={"03"}
                            status="UPCOMING"
                        />
                    </View>

                    <View style={styles.bubbleCardsContainer}>
                        <BubbleCard
                            width={165}
                            height={200}
                            IconComponent={CommunityIcon}
                            IconWidth={40}
                            IconHeight={60}
                            number={customersCount}
                            status="CUSTOMERS"
                        />

                        <BubbleCard
                            width={165}
                            height={200}
                            IconComponent={CommunityIcon}
                            IconWidth={40}
                            IconHeight={60}
                            number={suppliersCount}
                            status="SUPPLIERS"
                        />

                        <BubbleCard
                            width={165}
                            height={200}
                            IconComponent={MeetingColoredIcon}
                            IconWidth={40}
                            IconHeight={60}
                            number={meetingsCount}
                            status="MEETINGS"
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 20,
        backgroundColor: "#EEEFFF"
    },
    profileContainer: {
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 10,
        gap: 10,
        marginVertical: 20,
        marginHorizontal: 20,
        padding: 20,
        paddingBottom: 30,
    },
    profileImage: {
        width: 80,
        height: 80,
    },
    greetingContainer: {
        alignItems: "center",
    },
    greetingText: {
        fontFamily: 'Gilroy',
        fontWeight: '500',
        fontSize: 16,
        color: '#9FADC7',
    },
    nameText: {
        fontFamily: 'Gilroy',
        fontWeight: '600',
        fontSize: 20,
        color: '#69789F',
    },
    actionsContainer: {
        gap: 10,
        flexDirection: "row",
        marginTop: 10,
    },
    actionButton: {
        flexDirection: "row",
        gap: 5,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 5,
        borderRadius: 10,
    },
    actionText: {
        color: "#232323",
    },
    bubbleCardsContainer: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: 10,
    }
})