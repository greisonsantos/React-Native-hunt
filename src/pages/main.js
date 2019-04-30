import React, { Component } from "react";
import api from '../services/api';   //recuperar dados da api

import { View, Text } from "react-native";

export default class Main extends Component {
  
  static navigationOptions={
    title:"JS Hunt"
  };

   //executa automaticamente a chamada a api
  componentDidMount(){
    this.loadProducts();
  }

//estado e um objeto
//toda vez que tiver uma alteração em uma variavel do state 
// o emtodo render e executado novamente
 state={
   counter: 2
 };



// loadProducts(){ }  nesse formato nãoa cessa this para referenciar a classe
  loadProducts = async () => {
    const response= await api.get('/products');
    const { docs } = response.data;
  //  console.log(docs);

    this.setState({ counter:12});
  };

    render() {
        return (
           <View>
             <Text> Página Main Hunt {this.state.counter}</Text>     
           </View>
        );
    }
}