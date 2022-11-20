import * as React from 'react';
import { Chip, Modal, Text, Button, List } from 'react-native-paper';

const Agreement = (props) => {

    const containerStyle = {backgroundColor: 'white', padding: 20};
    return (

                <Modal visible={props.visible} dismissable={props.dismiss} contentContainerStyle={containerStyle}>
                    <Text variant="headlineSmall">{props.title}</Text>

                    <List.Item
                        title="The app collects anonymous data to train the algorithm."
                        titleNumberOfLines={2}
                    />
                    <List.Item
                        title="The data will not be used for other purposes."
                        titleNumberOfLines={2}
                    />
                    <List.Item
                        title="Make informed decisions when making big financial decisions."
                        titleNumberOfLines={2}
                    />
                    <Chip icon="check"
                          onPress={props.handleCheck}
                          mode={props.filled}
                          style={{marginBottom:20}}
                    >I agree</Chip>
                    <Button
                        mode="contained"
                        disabled={props.disable}
                        onPress={props.onPress}
                        compact={true}
                        style={{marginLeft: "60%"}}
                    >
                        Submit
                    </Button>
                </Modal>
    );
};

export default Agreement;