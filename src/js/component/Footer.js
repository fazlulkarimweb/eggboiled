import React from "react";

export default class Footer extends React.Component {
	getVal12(year){
		return year;
	}
	render(){
		let className = 'Fz rocky';
		return(<footer>Foooter is created by{className}</footer>)
	}
}