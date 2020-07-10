import '../Style/Form.css'

import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Langages extends Component {
	
	state = {
            countries : [
                {id : 1, name : "FR", selected : 0},
                {id : 2, name : "GB", selected : 1}, 
                {id : 3, name : "ISL", selected : 0}
            ]

        }
    
    
	render() {
		return (
			<select class="langages">
				{this.state.countries.map((country) => (
                    <option 
                        value={country.name} 
                        key={country.id}  
						selected={country.selected}
                    >
                        {country.name}
                    </option> 
                ))};
            </select>
		);
	}
}

export default Langages