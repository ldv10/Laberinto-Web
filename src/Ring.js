import React from "react"
import $ from "jquery"
import img from './ring.gif'

const styles = {
	width: '3%',
	height: '3%'

}

export default class Ring extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}
