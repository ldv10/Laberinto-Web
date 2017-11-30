import React from "react"
import $ from "jquery"
import img from './wall.png'

const styles = {
	width: '3%',
	height: '3%'

}

export default class Pared extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}
