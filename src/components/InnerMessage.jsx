import React from "react"

export default function InnerMessage() {
	return (
		<div className="inner-container">
			<img className="inner-img" src="./images/Screenshot_22.png"  />
			<img src="./images/img.jpg" style={{height:"50%", marginLeft:"10px", marginTop:"5px"}}></img>
			<div className="balloon">🎈</div>
		</div>
	)
}



const innerCardMessage={
	title:'paşam',
	explantion:[
	  "name:Halil",
	  "surname:Tan",
	  "wolf",
	  "Adamın dibi",
	],
	closingMessage:"Doğum günün Kutlu olsun nice senelere Paşam"
  }