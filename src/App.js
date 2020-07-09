import './App.module.css';
import React, { Component } from "react"
import  Grids from "./components/Grids";
import Chartjs from './components/Chartsjs';
import Header from './components/Header';
import { fetchData } from "./api";


export default class App extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state
    return (
  
      <div >
        <Header></Header>
        <div >
          <Grids data={data} />
          </div>
          <div> 
          <Chartjs/>
          </div>
        
        </div>
  
    );
  };
}
