import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Books from "./Books";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

class App extends Component{
  render(){
    return(
      <ApolloProvider client={client}>
        <div className="App">
          <Books/>
        </div>
      </ApolloProvider>
    );
  }
}

export default hot(module)(App);