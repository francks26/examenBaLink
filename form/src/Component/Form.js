import '../Style/Form.css'

import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'

import Langages from './Langages.js'

//si javais eu le temps jaurais voulu creer les input a partir de cet array avec map
 
const inputs = [
			{id : 1,	type : "text",	name : "firstName",	value : "First Name"},
			{id : 2, 	type : "text",	name : "lastName",	value : "Last Name"},
			{id : 3, 	type : "text",	name : "title",		value : 'Title'},
			{id : 4, 	type : "text", 	name : "country", 	value : 'Country'},
			{id : 5, 	type : "text",	name : "city", 		value : 'City'},
			{id : 6, 	type : "text",	name : "street", 	value : 'Street'},
			{id : 7, 	type : "email", name : "email", 	value : 'Email'},
			{id : 8, 	type : "tel",	name : "telephone",	value : 'Telephone'}
]

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName	: 'First Name',
			lastName	: 'Last Name',
			title		: 'Title',
			isShow1		: true,
			country		: 'Country',
			city		: 'City',
			street		: 'Street',
			isShow2		: false,
			email		: 'Email',
			tel			: 'Telephone',
			checkBoxs	: [
				{id : 1, name : "telephone", selected : 0}, 
				{id : 2, name : "email", selected : 0}
			]
			
		};
	}
	
	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});
	}
	
	myChangeCheckBox = (event) => {
		const checkBoxs = this.state.checkBoxs.slice();
		
	}
	
	myFocus = (event) =>{
		let name = event.target.name;	
		this.setState({[name]: ''});
	}
	
		
	handleClickNext1 = (event) => {
		if(this.state.firstName === '' || this.state.firstName === 'First Name'  || this.state.lastName === '' || this.state.lastName === 'Last Name'){
			alert("you must fill in the name and surname please")
		}else{
			this.setState({['isShow1'] : false});
			this.setState({['isShow2'] : true});
		}
	}
	
	handleClickNext2  = (event) => {
		if(this.state.country === '' || this.state.country === 'Country' ){
			alert("you must fill in the country please")
		}else{
			this.setState({['isShow1'] : false});
			this.setState({['isShow2'] : false});
		}
	}
	
	handleClickBack1 = () => {
		this.setState({['isShow1'] : true});
		this.setState({['isShow2'] : false});
	}
	
	handleClickBack2 = () => {
		this.setState({['isShow1'] : false});
		this.setState({['isShow2'] : true});
	}
	
	handleSubmit = () => {
		if(this.state.email === '' || this.state.email === 'Email'){
			alert("you must fill in the mail please")
		}else{
		if (/^[-a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) && /^0[1-9]{1}[0-9]{8}$/.test(this.state.tel)){
				
				alert("submit") ;
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
			isShow1 ? ( //debut if 1
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
						<span class="progressBar progressBarLeft" id="blue">1</span>
						<span class="progressBar progressBarCenter">2</span>
						<span class="progressBar progressBarRight">3</span>
					</td>
					<td></td>
				</tr>
				
				<tr>
					<td></td>
					<td class="tdWhite">
						<input 
								type	= "text" 
								name	= "firstName"
								value= {this.state.firstName}
								onChange= {this.myChangeHandler}
								onFocus	= {this.myFocus}
								className = "form1"
								
						/>
					</td>

					<td></td>

				</tr>
				<tr>
					<td></td>
					<td class="tdWhite">
						<input 
								type	= "text" 
								name	= "lastName" 
								value	= {this.state.lastName}
								onChange= {this.myChangeHandler}
								onFocus	= {this.myFocus}
								className = "form1"
							/>
					</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td class="tdWhite">
						<input 
								type	= "text" 
								name	= "title"
								value	= {this.state.title}
								onChange= {this.myChangeHandler}
								onFocus	= {this.myFocus}
								className = "form1"
							/>
					</td>
					<td></td>
				</tr>
					
				<tr>
					<td></td>
					<td class="tdWhite tdRondBottom">
						<button 
							type="button" 
							class="next bouton" 
							onClick={this.handleClickNext1}
							>
							Next
						</button>
					</td>
					<td></td>
				</tr>	
			</table>
			) : ( // fin else 1
				
			isShow2 ? (	// debut if 2
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
						<span class="progressBar progressBarLeft">1</span>
						<span class="progressBar progressBarCenter" id="blue">2</span>
						<span class="progressBar progressBarRight">3</span>
					</td>
					<td></td>
				</tr>
				<tr>	
					<td></td>
					<td  class="tdWhite">
						<input 
								type	= "text" 
								name	= "country"
								value	= {this.state.country}
								onChange= {this.myChangeHandler}
								onFocus	= {this.myFocus}
								
							/>
					</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td class="tdWhite">
						<input 
								type	= "text" 
								name	= "city" 
								value	= {this.state.city}
								onChange= {this.myChangeHandler}
								onFocus	= {this.myFocus}
								
							/>
					</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td class="tdWhite">
						<input 
								type	= "text" 
								name	= "street"
								value	= {this.state.street}
								onChange= {this.myChangeHandler}
								onFocus	= {this.myFocus}
								
							/>
					</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td  class="tdWhite  tdRondBottom">
						<button 
							class="back  bouton" 
							onClick={this.handleClickBack1}
							
							>
							Back
						</button>
						
						<button 
							class="next bouton" 
							onClick={this.handleClickNext2}
							
							>
							Next
						</button>
					</td>
					<td></td>
					
				</tr>
			</table>
			) : ( //fin if 2
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
						<span class="progressBar progressBarLeft">1</span>
						<span class="progressBar progressBarCenter">2</span>
						<span class="progressBar progressBarRight" id="blue">3</span>
					</td>
					<td></td>
				</tr>
				
				<tr>
					<td></td>
					<td class="tdWhite">
						<input 
								type	= "email" 
								name	= "email" 
								value	= {this.state.email}
								onChange= {this.myChangeHandler}
								onFocus	= {this.myFocus}
								
							/>
					</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td class="tdWhite">
						<input 
								type	= "tel" 
								name	= "tel"
								value	= {this.state.tel}
								onChange= {this.myChangeHandler}
								onFocus	= {this.myFocus}
								
							/>
					</td>
					<td></td>
				</tr>
					
				<tr>
					<td></td>
					<td class="tdWhite"> would you like to be contacted by : <br/>  
						{
							this.state.checkBoxs.map(checkBox => (
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
						
						))}		
					</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td class="tdWhite  tdRondBottom">
						<button 
							class="back bouton" 
							onClick={this.handleClickBack2}
							
							>
							Back
						</button>
				
					<input type="submit" class="submit bouton" value="Submit" onClick={this.handleSubmit} />
					</td>
					<td></td>
				</tr>
			</table>
			) )//fin else 2
		);
	}
}


export default Form