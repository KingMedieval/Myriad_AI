import React from "react";
import { Card } from "react-native-paper";
import { StyleSheet, Image, Text } from "react-native";

const AboutUsCard = (props) => {

    return (
            <Card style={styles.container}>
                <Card.Title
                    title={props.name}
                    titleStyle={{
                        textAlign: "center",
                        fontWeight: "bold"
                    }}
                />
                <Card.Content style={styles.content}>
                    <Image style={{
                        resizeMode: "cover",
                        height: 100,
                        width: 100
                    }}
                           source={{uri: props.picLink}}/>
                    <Text style={{ flexShrink: 1, flexWrap: "wrap", marginLeft: "5%"}}>
                        {props.infoText}
                    </Text>
                </Card.Content>
            </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexWrap: 'wrap',
        flexDirection: "row",
        justifyContent: "space-around",
        textAlign: "center",
        minHeight: "10%",
        padding: "2%",
        marginHorizontal: "5%",
        marginVertical: "2.5%"
    },
    content: {
        display: "flex",
        textAlign: "left",
        flexDirection: "row"
    }
});

export default AboutUsCard;