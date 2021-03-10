import React, { Component } from 'react'
import './Compteur.css';
import Resultat from '../Composants/Resultat/Resultat.js';
import IncrBtn from '../Composants/IncrBtn/IncrBtn.js';
import { connect } from 'react-redux'

class Compteur extends Component {

    state = {
        compteur : 0
    }

    render() {
        return (
            <div className="cont">
                <div className="blocConmpt">
                    <Resultat valeur={this.props.counter} />
                </div>
                <div className="contBtn">
                    <IncrBtn txt="Incremente" clicked={this.props.incremente} />
                    <IncrBtn txt="Decremente" clicked={this.props.decremente} />
                </div>
            </div>
        )
    }
}

// Premier paramètre qui permet de retourner le state utilisé depuis le reducer
const mapStateToProps = state => {
    return {
        counter: state.compteur
    }
}

// Second paramètre qui permet d'envoyer les actions au reducer
const mapDispatchToProps = dispatch => {
    return {
        incremente: () => dispatch({type: 'INCREMENTE'}),
        decremente: () => dispatch({type: 'DECREMENTE'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Compteur);
