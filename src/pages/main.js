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
   docs:[],
 };



// loadProducts(){ }  nesse formato nãoa cessa this para referenciar a classe
//arrow function não cria escopo de função  herda da funçãoa acima
  loadProducts = async () => {
    const response= await api.get('/products');
    
    // console.log(response);
   const  docs = response.data;
   console.log(docs);

    this.setState({ docs });
  };

    render() {
        return (
           <View>
             <Text> Página Main Hunt</Text> 
             {this.state.docs.map(product => ( 
                <Text key={product_id}> {product.title}</Text>
             ))}    
           </View>
        );
    }
}