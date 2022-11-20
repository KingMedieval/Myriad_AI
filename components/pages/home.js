import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Piechart from "../elements/piechart";
import Summarybox from "../elements/summarybox";
import Agreement from "../elements/agreement";
import {Chip, Provider, Text} from "react-native-paper";
import {useTheme} from "react-native-paper";
import LineGraph from "../elements/linegraph";
import StackedGraph from "../elements/predictgraph";

const Home = () => {
    const d = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const theme = useTheme();
    const colors = theme.colors;
    return (
        <Provider>
            <ScrollView style={style.container}>
                <Piechart
                    graphTitle={`${month[d.getMonth()]} ${d.getFullYear()} Spending`}
                />
                <Chip icon={"information"} style={style.chip}>{month[d.getMonth()]} spending: $3,660.00</Chip>
                <Chip icon={"information"} style={style.chip}>AI estimate monthly budget left: $131.00</Chip>
                <LineGraph lgTitle={`${month[d.getMonth()]} vs. Last Month`}/>
                <Chip icon={"information"} style={style.chip}>You will spend $3,660 to $4,370 by the end</Chip>
                <StackedGraph pgTitle={"Next Month Prediction"} />
                <Chip icon={"information"} style={style.chip}>Predicted increase in utility bills.</Chip>
                <Chip icon={"information"} style={style.chip}>Predicted decrease in spending for biking.</Chip>
                <Chip icon={"information"} style={style.chip}>Predicted increase in spending for skiing.</Chip>
                <Summarybox
                    ifHobby={"This month you spent more on "}
                    hobbyColor={colors.primary}
                    hobby={"shoes "}
                    thenDo={"compared to others who are also interested in shoes. "}
                    doColor={colors.secondary}
                    do={"Based on AI prediction, you should refrain from spending more on shoes to prepare for" +
                        " holiday season and ski season."}
                />
                <Chip icon={"information"} style={style.chip}>AI confidence: 79%</Chip>
                <Text style={{marginVertical: "5%"}}></Text>
            </ScrollView>
        </Provider>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: "2.5%"
    },
    chip: {
        marginVertical: "2.5%",
        marginHorizontal: "5%"
    }
});

export default Home;