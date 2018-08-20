import React from "react";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    componentWillMount() {
        
    }

    componentDidMount() {
        
    }
    
    componentWillReceiveProps() {

    }

    shouldComponentUpdate() {
        console.log()
    }
    
    componentWillUpdate() {

    }

    componentDidUpdate() {

    }
    
    render(){
        return(
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}    