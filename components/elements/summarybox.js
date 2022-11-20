import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Card } from "react-native-paper";

const Summarybox = (props) => {
    return (
        <View>
            <Card.Title
                title="Summary"
                titleStyle={{
                    textAlign: "center",
                    fontWeight: "bold"
                }}
            />
            <Card style={styles.screen}>

                <Text>{props.ifHobby}
                    <Text style={{color: props.hobbyColor, fontWeight: "bold"}}>{props.hobby}
                        <Text style={{color: "#000000", fontWeight: "normal"}}>{props.thenDo}
                            <Text style={{color: props.doColor, fontWeight: "bold"}}>{props.do}</Text>
                        </Text>
                    </Text>
                </Text>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        display: "flex",
        marginHorizontal: "5%",
        marginBottom: "2.5%",
        padding: "5%"
    }

});

export default Summarybox;