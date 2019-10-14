import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: 70,
        height: 70,
    },
});

class Card extends React.Component {
    render() {
        return(
            <View style = {styles.container}>
                <Image source={this.props.source} style={ styles.image }/>
            </View>
        );
    }
}

export default Card;