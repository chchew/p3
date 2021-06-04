import React, { Component } from 'react';
import './main.scss';

class Fire extends Component{
    constructor(props){
        super(props);

        this.state = {
            particles: [],
            fireworks: []
        }
    }

    createFirework(firework, width){
        firework.push(new Firework(Math.random()*(width-20)))     
        window.addEventListener("onClick", )
    }

    render(){



        return(
            <div>
                <button>|- Fireworks here -|</button>
            </div>
        )
    }
}

export default Fire;