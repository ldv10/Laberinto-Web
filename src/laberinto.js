//Pablo Lopez 14509
import React from "react"
import $ from "jquery"
import Pared from './Pared.js'
import Espacios from './Espacios.js'
import Sonic from './Sonic.js'
import Ring from './Ring.js'
import img from './background.jpg'

const styles = {
	background: `url(${img})`,
	backgroundSize: 2000
}

export default class Laberinto extends React.Component{

	constructor(){
		super()
		this.state = {
			maze:[],
			posiscionx:1,
			posisciony:1,

		}

		$.getJSON('http://52.88.26.79:7000/?type=json&w=10&h=10').done((result)=>{
			this.setState({maze:result})
		})
	}

	handleKeyDown(e) {
		e.preventDefault()
        if (e.key === "ArrowRight") {
        	const parte2 = this.state.maze
        	if(parte2[this.state.posisciony][this.state.posiscionx+1] == " "){

            	parte2[this.state.posisciony][this.state.posiscionx] = " "
            	parte2[this.state.posisciony][this.state.posiscionx+1] = "p"
            	this.setState({
                	posiscionx: this.state.posiscionx +1,
                	maze: parte2

            	})
        	}
        	if(parte2[this.state.posisciony][this.state.posiscionx+1] == "g"){

            	parte2[this.state.posisciony][this.state.posiscionx] = " "
            	parte2[this.state.posisciony][this.state.posiscionx+1] = "p"
            	this.setState({
                	posiscionx: this.state.posiscionx +1,
                	maze: parte2,

            	})
            	alert("Sonic speeeeeeeed!");

        	}
        }
        if (e.key === "ArrowLeft") {
            const parte2 = this.state.maze
        	if(parte2[this.state.posisciony][this.state.posiscionx-1] == " "){

            	parte2[this.state.posisciony][this.state.posiscionx] = " "
            	parte2[this.state.posisciony][this.state.posiscionx-1] = "p"
            	this.setState({
                	posiscionx: this.state.posiscionx -1,
                	maze: parte2
            	})
        	}
        	if(parte2[this.state.posisciony][this.state.posiscionx+1] == "g"){

            	parte2[this.state.posisciony][this.state.posiscionx] = " "
            	parte2[this.state.posisciony][this.state.posiscionx+1] = "p"
            	this.setState({
                	posiscionx: this.state.posiscionx +1,
                	maze: parte2,

            	})
            	alert("Sonic speeeeeeeed!");

        	}
        }
        if (e.key === "ArrowUp") {
            const parte2 = this.state.maze
        	if(parte2[this.state.posisciony-1][this.state.posiscionx] == " "){
            	parte2[this.state.posisciony][this.state.posiscionx] = " "
            	parte2[this.state.posisciony-1][this.state.posiscionx] = "p"
            	this.setState({
                	posisciony: this.state.posisciony -1,
                	maze: parte2
            	})
        	}
        	if(parte2[this.state.posisciony][this.state.posiscionx+1] == "g"){

            	parte2[this.state.posisciony][this.state.posiscionx] = " "
            	parte2[this.state.posisciony][this.state.posiscionx+1] = "p"
            	this.setState({
                	posiscionx: this.state.posiscionx +1,
                	maze: parte2,

            	})
            	alert("Sonic speeeeeeeed!");

        	}
        }
        if (e.key === "ArrowDown") {
            const parte2 = this.state.maze
        	if(parte2[this.state.posisciony+1][this.state.posiscionx] == " "){

            	parte2[this.state.posisciony][this.state.posiscionx] = " "
            	parte2[this.state.posisciony+1][this.state.posiscionx] = "p"
            	this.setState({
                	posisciony: this.state.posisciony + 1,
                	maze: parte2
            	})
        	}
        	if(parte2[this.state.posisciony][this.state.posiscionx+1] == "g"){

            	parte2[this.state.posisciony][this.state.posiscionx] = " "
            	parte2[this.state.posisciony][this.state.posiscionx+1] = "p"
            	this.setState({
                	posiscionx: this.state.posiscionx +1,
                	maze: parte2,

            	})
            	alert("Sonic speeeeeeeed!");

        	}
        }

    }

	render(){
		return <div id="Laberinto" style = {styles} onKeyDown = {this.handleKeyDown.bind(this)} tabIndex = "0">
			{
				this.state.maze.map(row=>{
					let wall = row.map(pared =>{
						if((pared== "+")||(pared=="|")||(pared=="-"))
						{
							return <Pared/>
						}
						if(pared == " "){
							return <Espacios/>
						}
						if(pared == "p"){
							return <Sonic/>
						}
						if(pared == "g"){
							return <Ring/>
						}
						return <span>{pared}</span>
					})
					wall.push(<br />)
						return wall
				})
			}
		</div>
	}

}
