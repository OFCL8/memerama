import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Card from './Card';
import meme0 from '../../assets/0.jpg';
import meme1 from '../../assets/1.jpg';
import meme2 from '../../assets/2.jpg';
import meme3 from '../../assets/3.jpg';
import meme4 from '../../assets/4.jpg';
import meme5 from '../../assets/5.jpg';
import meme6 from '../../assets/6.jpg';
import meme7 from '../../assets/7.jpg';
import meme8 from '../../assets/8.jpg';
import meme9 from '../../assets/9.jpg';

const memes = [
    meme0,
    meme1,
    meme2,
    meme3,
    meme4,
    meme5,
    meme6,
    meme7,
    meme8,
    meme9,
];

//Todos los elementos de memes se ponen dos veces
const sources = [...memes, ...memes];

const styles = StyleSheet.create({
    //Poder darle estilo, necesario con flatlist
    cardsContainer: {
        alignItems: 'center',
        paddingVertical: 10,
    },
});

class Cards extends React.Component {
    //Se pone guion bajo por que necesitamos el segundo argumento
    keyExtractor = (_, index) => String(index);
    /*keyExtractor = (_, index) => {
        return String(index);
    }*/
    //Funcion para mostrar cartas
    renderCard = ({ item }) => <Card source={item} />;

    render() {
        return (
            <FlatList
                contentContainerStyle = {styles.cardsContainer}
                //Arreglo en el que se esta basando
                data = {sources}
                //Espera funcion para obtener un item y tener key
                keyExtractor = { this.keyExtractor }
                numColumns = {4}
                //Dice que componente se va a usar por cada uno
                renderItem = { this.renderCard }
                style = {styles.cards} 
            />
        );
    }
}

export default Cards;