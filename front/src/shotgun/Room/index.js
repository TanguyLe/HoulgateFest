import React from "react";
import glamorous from "glamorous";

import Button from "../../utils/basics/Button";

class Room extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div
				style={{
					// width: "calc(100% - 2px)",
					// height: "calc(100% -2px)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					// margin: "auto",
					border: "1px solid #353535", //TODO choose color (don't change this syntaxe, it's used in my pluggin)
					gridColumnStart: this.props.position.columnStart,
					gridColumnEnd: this.props.position.columnEnd,
					gridRowStart: this.props.position.rowStart,
					gridRowEnd: this.props.position.rowEnd
				}}
			>
				{this.props.name}
				{this.props.seats ? <Button>Shotgun !</Button> : ""}
			</div>
		);
	}
}

export default Room;
