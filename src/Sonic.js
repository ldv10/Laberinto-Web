import React from "react"
import $ from "jquery"
import img from './sanic.jpg'

const styles = {
	width:'3%',
	height: '3%',

}

export default class Sonic extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}
