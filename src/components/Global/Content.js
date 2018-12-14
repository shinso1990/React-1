import React, { Component } from 'react';
import './css/Content.css';


class Content extends Component {

	constructor(props){
		super(props); // permite tener acceso al this de esta clase.
		console.log(this.props);

		this.state = {
			//PROPIEDADES O NODOS QUE AL MODIFICARSE HACEN QUE SE VUELVA A EJECUTAR EL RENDER
			count:0,
			number1:0,
			number2:0,
			result:0
		};

		this.handleCountClick = this.handleCountClick.bind(this);
		this.handleResultClick = this.handleResultClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	//se ejecuta después del constructor cuando es cargado (por tal razón ejecuta 2 veces el render)
	componentDidMount(){
		this.setState({count:1});
	}

	handleCountClick(e){ //e: evento
		var valueToSet = 0;
		switch(e.target.id){
			case "add":
				valueToSet = this.state.count + 1;
			break;
			case "substract":
				valueToSet = this.state.count - 1;
			break;
			case "reset":
				valueToSet = 0;
			break;
		}

		this.setState({count: valueToSet});
	}

	handleResultClick(e){
		this.setState({result: this.state.number1 + this.state.number2});
	}

	handleInputChange(e){
		switch(e.target.id){
			case "number1":
				this.setState({number1: Number(e.target.value) })
			break;
			case "number2":
				this.setState({number2: Number(e.target.value) })
			break;
		}
	}


	render() {
		return (
		  <div className="Content">
		    <h1> Counter: {this.state.count} </h1>
		    <p>
				<button id="add" onClick={this.handleCountClick} >+</button>
				<button id="substract" onClick={this.handleCountClick} >-</button>
				<button id="reset" onClick={this.handleCountClick} >Reset</button>
		    </p>
		    <h2>Calculadora</h2>
		    <p>
			    <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChange} />
			    +
			    <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChange} />
			    
		    	<button id="equals"  onClick={this.handleResultClick} >=</button>

	    		<b>{this.state.result}</b>
		    </p>
		  </div>
		);
	}

	//<button id="add" onClick={this.handleCountClick.bind()} >+</button> 
}

export default Content;
