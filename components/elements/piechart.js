import React from "react";
import { View, StyleSheet } from "react-native";
import * as Svg from 'react-native-svg';
import {Card, useTheme, Text, Chip} from "react-native-paper";
import { VictoryPie } from "victory-native";

const Piechart = (props) => {
    const theme = useTheme();
    const colors = theme.colors;
    return (
        <View>
            <Card.Title
                title={props.graphTitle}
                titleStyle={{
                    textAlign: "center",
                    fontWeight: "bold"
                }}
            />
            <Card style={styles.container}>
                <Card.Content>
                    <VictoryPie
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onPressIn: () => {
                                    return [
                                        {
                                            target: "data",
                                            mutation: ({ style }) => {
                                                return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                                            }
                                        }, {
                                            target: "labels",
                                            mutation: ({ text }) => {
                                                return text === "clicked" ? null : { text: "clicked" };
                                            }
                                        }
                                    ];
                                }
                            }
                        }]}
                        data={[
                            { x: "Rent", y: 2000},
                            { x: "Bills", y: 350 },
                            { x: "Basic Needs", y: 400 },
                            { x: "Going Out", y: 200 },
                            { x: "Streaming", y: 60},
                            { x: "Insurance", y: 400},
                            { x: "Gas", y: 100},
                            { x: "Biking", y: 150},
                            { x: "Shoes", y: 500}
                        ]}
                        colorScale={[colors.primary, colors.secondary, colors.onPrimaryContainer, colors.onSecondaryContainer, colors.tertiary,
                                     colors.onTertiaryContainer, colors.onSurfaceVariant, colors.outline, colors.outlineVariant]}
                        sortOrder={"descending"}
                        labelPlacement={"parallel"}
                        padding={{left: 40, right: 40}}
                        labelRadius={75}
                        style={{labels: { fontSize: 15, fill: "#ffffff" }}}
                    />
                </Card.Content>
            </Card>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        marginHorizontal: "5%",
        marginBottom: "2.5%"
    }
});

export default Piechart;