import '../Style/Form.css'

import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'

import Langages from './Langages.js'

class Form extends Component {
	state = {
		firstName	: 'First Name',
		lastName	: 'Last Name',
		title		: 'Title',
		isShow1		: true,
		country		: 'Country',
		city		: 'City',
		street		: 'Street',
		isShow2		: false,
		email		: 'Email',
		telephone	: 'Telephone',
		checkBoxs	: [
			{id : 1, name : "telephone", selected : 0}, 
			{id : 2, name : "email", selected : 0}
		],
		
		inputs : [
			{id : 1,	type : "text",	name : "firstName",	value : "First Name", hidden : 0},
			{id : 2, 	type : "text",	name : "lastName",	value : "Last Name", hidden : 0},
			{id : 3, 	type : "text",	name : "title",		value : 'Title', hidden : 0},
			{id : 4, 	type : "text", 	name : "country", 	value : 'Country', hidden : 1},
			{id : 5, 	type : "text",	name : "city", 		value : 'City', hidden : 1},
			{id : 6, 	type : "text",	name : "street", 	value : 'Street', hidden : 1},
			{id : 7, 	type : "email", name : "email", 	value : 'Email', hidden : 1},
			{id : 8, 	type : "tel",	name : "telephone",	value : 'Telephone', hidden : 1}
		]
	}
	
	handleChangeHandler = (event) => {
		let name = event.target.name;
		let val = event.target.value;
		this.setState({[name]: val});
	}
	
	myChangeCheckBox = (event) => {
		const checkBoxs = this.state.checkBoxs.slice();
		
	}
	
	handleFocus = (event) =>{
		let name = event.target.name;
		this.setState({[name]: ''});
	}
	
	handleClickNext = () => {
		const inputs2 = this.state.inputs.slice();
		if(this.state.isShow1 && !this.state.isShow2){
			if(this.state.firstName === '' || this.state.firstName === 'First Name'  || this.state.lastName === '' || this.state.lastName === 'Last Name'){
				alert("you must fill in the name and surname please")
			}else{ 
				inputs2[0]['hidden'] = 1;
				inputs2[1]['hidden'] = 1;
				inputs2[2]['hidden'] = 1;
				inputs2[3]['hidden'] = 0;
				inputs2[4]['hidden'] = 0;
				inputs2[5]['hidden'] = 0;
				this.setState({['isShow1'] : false});
				this.setState({['isShow2'] : true});
			} 
		}else if(!this.state.isShow1 && this.state.isShow2){
			if(this.state.country === '' || this.state.country === 'Country' ){
				alert("you must fill in the country please")
			}else{
				this.setState({['isShow2'] : false});
				inputs2[3]['hidden'] = 1;
				inputs2[4]['hidden'] = 1;
				inputs2[5]['hidden'] = 1;
				inputs2[6]['hidden'] = 0;
				inputs2[7]['hidden'] = 0;
			}
		}
	}
	
	
	handleClickBack = () => {
		const inputs2 = this.state.inputs.slice();
		if(!this.state.isShow1 && this.state.isShow2){
			inputs2[0]['hidden'] = 0;
			inputs2[1]['hidden'] = 0;
			inputs2[2]['hidden'] = 0;
			inputs2[3]['hidden'] = 1;
			inputs2[4]['hidden'] = 1;
			inputs2[5]['hidden'] = 1;
			this.setState({['isShow1'] : true});
			this.setState({['isShow2'] : false});
		}else if(!this.state.isShow1 && !this.state.isShow2){
			inputs2[3]['hidden'] = 0;
			inputs2[4]['hidden'] = 0;
			inputs2[5]['hidden'] = 0;
			inputs2[6]['hidden'] = 1;
			inputs2[7]['hidden'] = 1;
			this.setState({['isShow2'] : true});
		}
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		const inputs2 = this.state.inputs.slice();
		if(this.state.email === '' || this.state.email === 'Email'){
			alert("you must fill in the mail please")
		}else{
			if (/^[-a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) && /^0[1-9]{1}[0-9]{8}$/.test(this.state.telephone)){
					
				alert("submit") ;
				inputs2[0]['hidden'] = 0;
				inputs2[1]['hidden'] = 0;
				inputs2[2]['hidden'] = 0;
				inputs2[6]['hidden'] = 1;
				inputs2[7]['hidden'] = 1;
				this.setState({['isShow1'] : true});
				this.setState({['isShow2'] : false});
			}else{
				if (!/^[-a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)){
					alert("incorrect email format !!!");
				}else{
					alert("incorrect telephone format !!!");
				}
			}
		}
	}
	
	render() {
		
		var isShow1 = this.state.isShow1;
		var isShow2 = this.state.isShow2;
		
		
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<table>
						
						<tr>
							<td></td>
							<td class="tdWhite tdRondTop">
								<Langages />
							</td>
							<td></td>
						</tr>
						
						<tr>
							<td></td>
							<td class="tdWhite">
								<span class="progressBar progressBarLeft" id={(isShow1 && !isShow2) ? 'blue' : ''}>1</span>
								<span class="progressBar progressBarCenter" id={(!isShow1 && isShow2) ? 'blue' : ''}>2</span>
								<span class="progressBar progressBarRight" id={(!isShow1 && !isShow2) ? 'blue' : ''}>3</span>
							</td>
							<td></td>
						</tr>
						
						<tr>
							<td></td>
							<td class="tdWhite">
								{
									this.state.inputs.map(input => (
										<input 
											type={input.type} 
											name={input.name} 
											value={this.state['' + input.name]} 
											hidden={input.hidden}
											onChange = {this.handleChangeHandler}
											onFocus = {this.handleFocus}
											/>
									))
								}
								
								{(!isShow1 && !isShow2) && (
								<div class="checkBox">
									<br/>
									would you like to be contacted by :
									{this.state.checkBoxs.map(checkBox => (
										<span> 
											<input 
												type="checkbox"
												key = {checkBox.id}
												id={checkBox.name} 
												name={checkBox.name} 
												value={checkBox.name}
												onChange = {this.myChangeCheckBox}/> 
												{checkBox.name}
										</span>
									
											)
									)}
									
								</div>
								)	
								}
							</td>
							<td></td>
						</tr>
						
						<tr>
							<td></td>
							<td class="tdWhite tdRondBottom">
								{(isShow1 && !isShow2 || !isShow1 && isShow2) ? (
								<button 
									type="button" 
									class="next bouton" 
									onClick={this.handleClickNext}
								>
									Next
								</button>
								) : "" }
								
								{(!isShow1 && isShow2 || !isShow1 && !isShow2) ? (
								<button 
									class="back  bouton" 
									onClick={this.handleClickBack}
									
									>
									Back
								</button>
								) : "" }
								
								
								{(!isShow1 && !isShow2) ? (
									<input type="submit" class="submit bouton" value="Submit" />
								) : ""}
								
							</td>
							<td></td>
						</tr>
						
					</table>
				</form>
			</div>
		);
	}
}


export default Form