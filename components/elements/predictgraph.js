import React from "react";
import { View, StyleSheet } from "react-native";
import * as Svg from 'react-native-svg';
import {Card, useTheme, Text, Chip} from "react-native-paper";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryArea, VictoryLegend, VictoryStack } from "victory-native";

const StackedGraph = (props) => {
    const theme = useTheme();
    const colors = theme.colors;
    return (
        <View>
            <Card.Title
                title={props.pgTitle}
                titleStyle={{
                    textAlign: "center",
                    fontWeight: "bold"
                }}
            />
            <Card style={styles.container}>
                <Card.Content>
                    <VictoryChart
                        padding={{top:30, left:10, right:70, bottom:50}}
                    >
                        <VictoryAxis
                            style={{
                                grid: { stroke: '#8d8d8d', strokeWidth: 0.5, strokeDasharray: "5,5" },
                                ticks: {stroke: "transparent"},
                                tickLabels: { fill:"transparent"}
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            style={{
                                grid: { stroke: '#8d8d8d', strokeWidth: 0.5, strokeDasharray: "5,5" },
                            }}

                        />
                        <VictoryStack
                            colorScale={[colors.primary, colors.secondary, colors.onPrimaryContainer, colors.onSecondaryContainer, colors.tertiary,
                                colors.onTertiaryContainer, colors.onSurfaceVariant, colors.outline, colors.outlineVariant, colors.error, colors.errorContainer]}
                        >
                            <VictoryArea
                                data={[
                                    {x: "a", y: 2000},
                                    {x: "b", y: 2000},
                                    {x: "c", y: 2000},
                                    {x: "d", y: 2000},
                                    {x: "e", y: 2000},
                                    {x: "f", y: 2000},
                                    {x: "g", y: 2000},
                                    {x: "h", y: 2000},
                                    {x: "i", y: 2000},
                                    {x: "j", y: 2000},
                                    {x: "k", y: 2000},
                                    {x: "l", y: 2000},
                                    {x: "m", y: 2000},
                                    {x: "n", y: 2000},
                                    {x: "o", y: 2000},
                                    {x: "p", y: 2000},
                                    {x: "q", y: 2000},
                                    {x: "r", y: 2000},
                                    {x: "s", y: 2000},
                                    {x: "t", y: 2000},
                                    {x: "u", y: 2000},
                                    {x: "v", y: 2000},
                                    {x: "w", y: 2000},
                                    {x: "x", y: 2000},
                                    {x: "y", y: 2000},
                                    {x: "z", y: 2000},
                                    {x: "aa", y: 2000},
                                    {x: "bb", y: 2000},
                                    {x: "cc", y: 2000},
                                    {x: "dd", y: 2000},
                                ]} //rent
                            />
                            <VictoryArea
                                data={[ //bills
                                    {x: "a", y: 0},
                                    {x: "b", y: 90},
                                    {x: "c", y: 90},
                                    {x: "d", y: 90},
                                    {x: "e", y: 90},
                                    {x: "f", y: 90},
                                    {x: "g", y: 90},
                                    {x: "h", y: 90},
                                    {x: "i", y: 90},
                                    {x: "j", y: 90},
                                    {x: "k", y: 90},
                                    {x: "l", y: 90},
                                    {x: "m", y: 90},
                                    {x: "n", y: 90},
                                    {x: "o", y: 90},
                                    {x: "p", y: 150},
                                    {x: "q", y: 150},
                                    {x: "r", y: 150},
                                    {x: "s", y: 150},
                                    {x: "t", y: 150},
                                    {x: "u", y: 150},
                                    {x: "v", y: 150},
                                    {x: "w", y: 150},
                                    {x: "x", y: 350},
                                    {x: "y", y: 350},
                                    {x: "z", y: 350},
                                    {x: "aa", y: 350},
                                    {x: "bb", y: 350},
                                    {x: "cc", y: 350},
                                    {x: "dd", y: 350},
                                ]} //Bills
                            />
                            <VictoryArea
                                data={[
                                    {x: "a", y: 0},
                                    {x: "b", y: 10},
                                    {x: "c", y: 25},
                                    {x: "d", y: 32},
                                    {x: "e", y: 143},
                                    {x: "f", y: 145},
                                    {x: "g", y: 152},
                                    {x: "h", y: 153},
                                    {x: "i", y: 155},
                                    {x: "j", y: 162},
                                    {x: "k", y: 162},
                                    {x: "l", y: 173},
                                    {x: "m", y: 175},
                                    {x: "n", y: 252},
                                    {x: "o", y: 293},
                                    {x: "p", y: 295},
                                    {x: "q", y: 302},
                                    {x: "r", y: 303},
                                    {x: "s", y: 305},
                                    {x: "t", y: 322},
                                    {x: "u", y: 332},
                                    {x: "v", y: 343},
                                    {x: "w", y: 355},
                                    {x: "x", y: 359},
                                    {x: "y", y: 446},
                                    {x: "z", y: 470},
                                    {x: "aa", y: 509},
                                    {x: "bb", y: 533},
                                    {x: "cc", y: 555},
                                    {x: "dd", y: 562},
                                ]} //Basic Needs
                            />
                            <VictoryArea
                                data={[
                                    {x: "a", y: 0},
                                    {x: "b", y: 0},
                                    {x: "c", y: 0},
                                    {x: "d", y: 0},
                                    {x: "e", y: 45},
                                    {x: "f", y: 45},
                                    {x: "g", y: 45},
                                    {x: "h", y: 45},
                                    {x: "i", y: 45},
                                    {x: "j", y: 45},
                                    {x: "k", y: 45},
                                    {x: "l", y: 111},
                                    {x: "m", y: 111},
                                    {x: "n", y: 111},
                                    {x: "o", y: 111},
                                    {x: "p", y: 111},
                                    {x: "q", y: 111},
                                    {x: "r", y: 111},
                                    {x: "s", y: 111},
                                    {x: "t", y: 169},
                                    {x: "u", y: 169},
                                    {x: "v", y: 169},
                                    {x: "w", y: 169},
                                    {x: "x", y: 169},
                                    {x: "y", y: 169},
                                    {x: "z", y: 169},
                                    {x: "aa", y: 169},
                                    {x: "bb", y: 223},
                                    {x: "cc", y: 223},
                                    {x: "dd", y: 223},
                                ]} //going out
                            />
                            <VictoryArea
                                data={[
                                    {x: "a", y: 0},
                                    {x: "b", y: 0},
                                    {x: "c", y: 0},
                                    {x: "d", y: 0},
                                    {x: "e", y: 0},
                                    {x: "f", y: 0},
                                    {x: "g", y: 0},
                                    {x: "h", y: 14},
                                    {x: "i", y: 14},
                                    {x: "j", y: 14},
                                    {x: "k", y: 14},
                                    {x: "l", y: 14},
                                    {x: "m", y: 14},
                                    {x: "n", y: 14},
                                    {x: "o", y: 30},
                                    {x: "p", y: 30},
                                    {x: "q", y: 30},
                                    {x: "r", y: 30},
                                    {x: "s", y: 60},
                                    {x: "t", y: 60},
                                    {x: "u", y: 60},
                                    {x: "v", y: 60},
                                    {x: "w", y: 60},
                                    {x: "x", y: 60},
                                    {x: "y", y: 60},
                                    {x: "z", y: 60},
                                    {x: "aa", y: 60},
                                    {x: "bb", y: 60},
                                    {x: "cc", y: 60},
                                    {x: "dd", y: 75},
                                ]} //Streaming
                            />
                            <VictoryArea
                                data={[
                                    {x: "a", y: 400},
                                    {x: "b", y: 400},
                                    {x: "c", y: 400},
                                    {x: "d", y: 400},
                                    {x: "e", y: 400},
                                    {x: "f", y: 400},
                                    {x: "g", y: 400},
                                    {x: "h", y: 400},
                                    {x: "i", y: 400},
                                    {x: "j", y: 400},
                                    {x: "k", y: 400},
                                    {x: "l", y: 400},
                                    {x: "m", y: 400},
                                    {x: "n", y: 400},
                                    {x: "o", y: 400},
                                    {x: "p", y: 400},
                                    {x: "q", y: 400},
                                    {x: "r", y: 400},
                                    {x: "s", y: 400},
                                    {x: "t", y: 400},
                                    {x: "u", y: 400},
                                    {x: "v", y: 400},
                                    {x: "w", y: 400},
                                    {x: "x", y: 400},
                                    {x: "y", y: 400},
                                    {x: "z", y: 400},
                                    {x: "aa", y: 400},
                                    {x: "bb", y: 400},
                                    {x: "cc", y: 400},
                                    {x: "dd", y: 400},
                                ]} //Insurance
                            />
                            <VictoryArea
                                data={[
                                    {x: "a", y: 0},
                                    {x: "b", y: 0},
                                    {x: "c", y: 0},
                                    {x: "d", y: 0},
                                    {x: "e", y: 40},
                                    {x: "f", y: 40},
                                    {x: "g", y: 40},
                                    {x: "h", y: 40},
                                    {x: "i", y: 40},
                                    {x: "j", y: 40},
                                    {x: "k", y: 80},
                                    {x: "l", y: 80},
                                    {x: "m", y: 80},
                                    {x: "n", y: 80},
                                    {x: "o", y: 80},
                                    {x: "p", y: 80},
                                    {x: "q", y: 80},
                                    {x: "r", y: 80},
                                    {x: "s", y: 80},
                                    {x: "t", y: 120},
                                    {x: "u", y: 120},
                                    {x: "v", y: 120},
                                    {x: "w", y: 120},
                                    {x: "x", y: 120},
                                    {x: "y", y: 120},
                                    {x: "z", y: 120},
                                    {x: "aa", y: 140},
                                    {x: "bb", y: 140},
                                    {x: "cc", y: 140},
                                    {x: "dd", y: 140},
                                ]} //Gas
                            />
                            <VictoryArea
                                data={[
                                    {x: "a", y: 0},
                                    {x: "b", y: 0},
                                    {x: "c", y: 0},
                                    {x: "d", y: 0},
                                    {x: "e", y: 0},
                                    {x: "f", y: 0},
                                    {x: "g", y: 0},
                                    {x: "h", y: 0},
                                    {x: "i", y: 50},
                                    {x: "j", y: 50},
                                    {x: "k", y: 50},
                                    {x: "l", y: 50},
                                    {x: "m", y: 50},
                                    {x: "n", y: 50},
                                    {x: "o", y: 100},
                                    {x: "p", y: 100},
                                    {x: "q", y: 100},
                                    {x: "r", y: 100},
                                    {x: "s", y: 100},
                                    {x: "t", y: 100},
                                    {x: "u", y: 100},
                                    {x: "v", y: 100},
                                    {x: "w", y: 100},
                                    {x: "x", y: 100},
                                    {x: "y", y: 100},
                                    {x: "z", y: 100},
                                    {x: "aa", y: 100},
                                    {x: "bb", y: 100},
                                    {x: "cc", y: 100},
                                    {x: "dd", y: 100},
                                ]} //Bike
                            />
                            <VictoryArea
                                data={[
                                    {x: "a", y: 0},
                                    {x: "b", y: 0},
                                    {x: "c", y: 0},
                                    {x: "d", y: 0},
                                    {x: "e", y: 0},
                                    {x: "f", y: 0},
                                    {x: "g", y: 0},
                                    {x: "h", y: 0},
                                    {x: "i", y: 120},
                                    {x: "j", y: 120},
                                    {x: "k", y: 120},
                                    {x: "l", y: 120},
                                    {x: "m", y: 120},
                                    {x: "n", y: 120},
                                    {x: "o", y: 120},
                                    {x: "p", y: 120},
                                    {x: "q", y: 120},
                                    {x: "r", y: 250},
                                    {x: "s", y: 250},
                                    {x: "t", y: 250},
                                    {x: "u", y: 250},
                                    {x: "v", y: 250},
                                    {x: "w", y: 250},
                                    {x: "x", y: 250},
                                    {x: "y", y: 250},
                                    {x: "z", y: 250},
                                    {x: "aa", y: 250},
                                    {x: "bb", y: 350},
                                    {x: "cc", y: 350},
                                    {x: "dd", y: 350},
                                ]} //Shoes
                            />

                        </VictoryStack>
                    </VictoryChart>
                </Card.Content>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        marginHorizontal: "5%",
        marginBottom: "2.5%",
    },
});

export default StackedGraph;