import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { UpArrowThinIcon, TradesFilledIcon, SupplyChainIcon, CalenderIcon } from '../icons/index'
import BubbleCard from './BubbleCard'
import axios from 'axios';


export default class TradesOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalTrades: 0,
            tradeStagesCount: {
                "Contract stage": 0,
                "Pre Shipment": 0,
                "Post Fixtures Vessel": 0,
                "In-Transit": 0,
                "Pre Closure": 0,
            },
            estimatedCost: {
                "Contract stage": 0,
                "Pre Shipment": 0,
                "Post Fixtures Vessel": 0,
                "In-Transit": 0,
                "Pre Closure": 0,
            }
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get('http://20.247.206.163/api/trans');
            const trades = response.data;

            // Toplam ticaret sayısını hesapla
            const totalTrades = trades.length;

            // Ticaret aşamalarının sayısını ve tahmini maliyetlerini hesapla
            const tradeStagesCount = {
                "Contract stage": 0,
                "Pre Shipment": 0,
                "Post Fixtures Vessel": 0,
                "In-Transit": 0,
                "Pre Closure": 0,
            };

            const estimatedCost = {
                "Contract stage": 0,
                "Pre Shipment": 0,
                "Post Fixtures Vessel": 0,
                "In-Transit": 0,
                "Pre Closure": 0,
            };

            // Her bir ticaret kaydını incele
            trades.forEach(trade => {
                // Ticaret aşamasını say
                if (tradeStagesCount[trade.tradeStage] !== undefined) {
                    tradeStagesCount[trade.tradeStage]++;
                    // Tahmini maliyeti al
                    const estimatedCostStage = trade.processStage.find(stage => stage.stageName === "Estimated cost sheet");
                    if (estimatedCostStage) {
                        estimatedCost[trade.tradeStage] += parseFloat(estimatedCostStage.cost);
                    }
                }
            });

            this.setState({ totalTrades, tradeStagesCount, estimatedCost });

        } catch (error) {
            console.error('Error:', error);
        }
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.tradesContainer}>
                    <Text style={styles.tradesLabel}>TOTAL TRADES</Text>
                    <Text style={styles.tradesCount}>{this.state.totalTrades}</Text>
                </View>

                <View style={styles.revenueContainer}>
                    <Text style={styles.revenueLabel}>TOTAL REVENUE OF TRADES</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.currency}>$</Text>
                        <Text style={styles.price}>3,945.07</Text>
                        <View style={styles.percentageContainer}>
                            <Text style={styles.percentage}>10.2%</Text>
                            <UpArrowThinIcon width={13} height={11} fill="#fff" />
                        </View>
                    </View>
                </View>

                <View style={styles.bubbleCardsContainer}>
                    <BubbleCard
                        width={165}
                        height={200}
                        IconComponent={TradesFilledIcon}
                        IconWidth={40}
                        IconHeight={60}
                        number={this.state.tradeStagesCount["Contract stage"]}
                        status="CONTRACT STAGE"
                        price={this.state.estimatedCost["Contract stage"]}
                    />

                    <BubbleCard
                        width={165}
                        height={200}
                        IconComponent={SupplyChainIcon}
                        IconWidth={40}
                        IconHeight={60}
                        number={this.state.tradeStagesCount["Pre Shipment"]}
                        status="PRE SHIPMENT"
                        price={this.state.estimatedCost["Pre Shipment"]}
                    />

                    <BubbleCard
                        width={165}
                        height={200}
                        IconComponent={CalenderIcon}
                        IconWidth={40}
                        IconHeight={60}
                        number={this.state.tradeStagesCount["Post Fixtures Vessel"]}
                        status="POST FIXTURES VESSEL"
                        price={this.state.estimatedCost["Post Fixtures Vessel"]}
                    />

                    <BubbleCard
                        width={165}
                        height={200}
                        IconComponent={CalenderIcon}
                        IconWidth={40}
                        IconHeight={60}
                        number={this.state.tradeStagesCount["In-Transit"]}
                        status="IN-TRANSIT"
                        price={this.state.estimatedCost["In-Transit"]}
                    />

                    <BubbleCard
                        width={"100%"}
                        height={200}
                        IconComponent={CalenderIcon}
                        IconWidth={40}
                        IconHeight={60}
                        number={this.state.tradeStagesCount["Pre Closure"]}
                        status="PRE CLOSURE"
                        price={this.state.estimatedCost["Pre Closure"]}
                    />




                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEFFF"
    },
    contentContainer: {
        paddingBottom: 20
    },
    tradesContainer: {
        backgroundColor: "white",
        marginHorizontal: 20,
        marginTop: 20,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 10,
        shadowColor: "#383874",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    tradesLabel: {
        fontFamily: 'Gilroy',
        fontWeight: '600',
        fontSize: 12,
        color: "#9FADC7",
    },
    tradesCount: {
        fontFamily: 'Gilroy',
        fontWeight: '400',
        fontSize: 48,
        color: "#383874",
    },
    revenueContainer: {
        backgroundColor: "white",
        margin: 20,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 10,
        shadowColor: "#383874",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    revenueLabel: {
        fontFamily: 'Gilroy',
        fontWeight: '600',
        fontSize: 12,
        color: "#9FADC7",
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currency: {
        fontFamily: 'Gilroy',
        fontSize: 41,
        color: '#B8B5D0',
        marginRight: 2,
    },
    price: {
        fontFamily: 'Gilroy',
        fontSize: 48,
        color: '#383874',
    },
    percentageContainer: {
        width: 82,
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#12948C',
        borderRadius: 3,
        marginLeft: 6,
        gap: 3,
    },
    percentage: {
        fontFamily: 'Gilroy',
        fontWeight: '600',
        fontSize: 20,
        color: '#fff',
    },

    bubbleCardsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginHorizontal: 20
    }
})
