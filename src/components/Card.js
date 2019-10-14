import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
const cardWith = (width - 108) / 4

const styles = StyleSheet.create({
    container: {
        borderColor: '#000',
        borderWidth: 1,
        margin: 10,
    },
    image: {
        width: cardWith,
        height: cardWith,
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