import React, { Component } from 'react';
import './subheader.scss';

class Subheader extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const { title } = this.props

        return(
            <div className='subheader-main'>
                <div className='subheader'> - { title } - </div>   
            </div>
        )
    }
}

export default Subheader