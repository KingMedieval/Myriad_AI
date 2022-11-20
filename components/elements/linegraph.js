import React from "react";
import { View, StyleSheet } from "react-native";
import * as Svg from 'react-native-svg';
import {Card, useTheme, Text, Chip} from "react-native-paper";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryArea, VictoryLegend } from "victory-native";

const LineGraph = (props) => {
    const theme = useTheme();
    const colors = theme.colors;
    return (
        <View>
            <Card.Title
                title={props.lgTitle}
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
                        <VictoryLegend x={10} y={0}
                                       orientation="horizontal"
                                       itemsPerRow={2}
                                       gutter={30}
                                       colorScale={[colors.primary, colors.secondary ]}
                                       data={[
                                           { name: "This month" }, { name: "Last month" }
                                       ]}
                        />
                        <VictoryAxis
                            style={{
                                grid: { stroke: '#8d8d8d', strokeWidth: 0.5, strokeDasharray: "5,5" },
                            }}
                            label="Day of Month"
                        />
                        <VictoryAxis
                            dependentAxis
                            style={{
                                grid: { stroke: '#8d8d8d', strokeWidth: 0.5, strokeDasharray: "5,5" },
                                ticks: {stroke: "transparent"},
                                tickLabels: { fill:"transparent"}
                            }}

                        />
                        <VictoryLine x={() => 21}
                                     style={{data: {stroke: colors.tertiary, strokeWidth: 1.2, strokeDasharray: "5,1,5"}}}

                        />

                        <VictoryArea
                            style={{
                                data: { stroke: colors.primary, fill: colors.primary, opacity: 0.3, strokeWidth: 1.5,
                                    strokeDasharray: "5,5"},
                                parent: { border: "1px solid #ccc"}
                            }}
                            data={[
                                { x: 1, y: 50, y0: 50},
                                { x: 2, y: 95, y0: 95},
                                { x: 3, y: 2041, y0: 2041},
                                { x: 4, y: 2193, y0: 2193},
                                { x: 5, y: 2211, y0: 2211},
                                { x: 6, y: 2312, y0: 2312},
                                { x: 7, y: 2315, y0: 2315},
                                { x: 9, y: 2321, y0: 2321},
                                { x: 10, y: 2543, y0: 2543},
                                { x: 11, y: 2661, y0: 2661},
                                { x: 12, y: 2703, y0: 2703},
                                { x: 13, y: 2741, y0: 2741},
                                { x: 14, y: 2951, y0: 2951},
                                { x: 15, y: 3012, y0: 3012},
                                { x: 16, y: 3223, y0: 3223},
                                { x: 17, y: 3234, y0: 3234},
                                { x: 19, y: 3421, y0: 3421},
                                { x: 20, y: 3660, y0: 3660},
                                { x: 21, y: 3670, y0: 3670},
                                { x: 22, y: 3690, y0: 3680},
                                { x: 23, y: 3750, y0: 3680},
                                { x: 24, y: 3980, y0: 3690},
                                { x: 25, y: 4000, y0: 3690},
                                { x: 26, y: 4110, y0: 3690},
                                { x: 27, y: 4200, y0: 3690},
                                { x: 29, y: 4300, y0: 3690},
                                { x: 30, y: 4300, y0: 3700},
                                { x: 31, y: 4370, y0: 3710},
                            ]}
                        />
                        <VictoryArea
                            style={{
                                data: { stroke: colors.primary, fill: colors.primary, opacity: 1, strokeWidth: 1.5},
                                parent: { border: "1px solid #ccc"}
                            }}
                            data={[
                                { x: 1, y: 50, y0: 50},
                                { x: 2, y: 95, y0: 95},
                                { x: 3, y: 2041, y0: 2041},
                                { x: 4, y: 2193, y0: 2193},
                                { x: 5, y: 2211, y0: 2211},
                                { x: 6, y: 2312, y0: 2312},
                                { x: 7, y: 2315, y0: 2315},
                                { x: 9, y: 2321, y0: 2321},
                                { x: 10, y: 2543, y0: 2543},
                                { x: 11, y: 2661, y0: 2661},
                                { x: 12, y: 2703, y0: 2703},
                                { x: 13, y: 2741, y0: 2741},
                                { x: 14, y: 2951, y0: 2951},
                                { x: 15, y: 3012, y0: 3012},
                                { x: 16, y: 3223, y0: 3223},
                                { x: 17, y: 3234, y0: 3234},
                                { x: 19, y: 3421, y0: 3421},
                                { x: 20, y: 3660, y0: 3660},
                                { x: 21, y: 3670, y0: 3670},
                            ]}
                        />
                        <VictoryLine
                            style={{
                                data: { stroke: colors.secondary, strokeWidth: 1 },
                                parent: { border: "1px solid #ccc"}
                            }}
                            data={[
                                { x: 1, y: 50 },
                                { x: 2, y: 93 },
                                { x: 3, y: 2000 },
                                { x: 4, y: 2040 },
                                { x: 5, y: 2134 },
                                { x: 6, y: 2134 },
                                { x: 7, y: 2143 },
                                { x: 9, y: 2180 },
                                { x: 10, y: 2202 },
                                { x: 11, y: 2204 },
                                { x: 12, y: 2213 },
                                { x: 13, y: 2219 },
                                { x: 14, y: 2301 },
                                { x: 15, y: 2482 },
                                { x: 16, y: 2512 },
                                { x: 17, y: 2579 },
                                { x: 19, y: 2691 },
                                { x: 20, y: 2701 },
                                { x: 21, y: 2711 },
                                { x: 22, y: 2800 },
                                { x: 23, y: 2800 },
                                { x: 24, y: 2803 },
                                { x: 25, y: 2803 },
                                { x: 26, y: 2811 },
                                { x: 27, y: 2821 },
                                { x: 29, y: 2841 },
                                { x: 30, y: 2921 },
                                { x: 31, y: 3169 },
                            ]}
                        />
                    </VictoryChart>
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
        marginHorizontal: "5%",
        marginBottom: "2.5%",
    },
});

export default LineGraph;