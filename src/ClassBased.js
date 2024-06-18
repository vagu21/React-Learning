import React, { Component } from 'react'
import ClassBased2 from './ClassBased2'

export default class ClassBased extends Component {
    state={
        name:"bharadwaj",
        products:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            response=>response.json().then(
                data=>this.setState({products:data})
            )
        )
    }
  render() {
    return (
        <>
        
            {
                this.state.products.map(
                    item=><li key={item.id}>{item.title}</li>
                )
            }
        {/* <h1>{this.state.name}</h1> */}
        <ClassBased2 data={this.state.name}/>
        <button onClick={()=>this.setState({name:"vagu"})}>change</button>

        </>
        
    )
  }
}
