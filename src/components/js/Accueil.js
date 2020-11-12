import React, {Component} from "react"
import image1 from '../img/6joueurs.png'
import image2 from "../img/9joueurs.png"
import Screen6 from './Screen6'
import Screen9 from './Screen9'

class Accueil extends Component {
    constructor() {
        super(); 
        this.state = {  
            joueurs: null
        }
    }

    handleClick6 = async () => {
        console.log("6 choisis")
        const state_copy = { ...this.state.joueurs };
        state_copy.joueurs = "6";
        this.setState(state_copy)
        console.log(this.state)
    }
    handleClick9 = async () => {
        console.log("9 choisis")
        const state_copy = { ...this.state.joueurs };
        state_copy.joueurs = "9";
        this.setState(state_copy)
        console.log(this.state)
    }
    
    render() {
        return (
        <div>
            <header className="bg-secondary text-white text-center">
                <h1>Push Or Fold</h1>
            </header>
            <main className="bg-dark">
                <div>
                    {this.state.joueurs == null && (
                        <div>
                            <div className="text-center text-white">
                              <h2>Bonjour, veuillez choisir votre configuration</h2>
                            </div>
                            <div className="d-flex justify-content-around mt-5">
                                <div className="Col-6 d-flex flex-column align-items-center"> 
                                    <button onClick={this.handleClick6} className="btn btn-success"><h2>6 Joueurs</h2></button> 
                                    <img src={image1} alt="" width="100%"/>
                                </div>   
                                <div className="Col-6 d-flex flex-column align-items-center"> 
                                    <button onClick={this.handleClick9} className="btn btn-success"><h2>9 Joueurs</h2></button> 
                                    <img src={image2} alt="" width="100%"/> 
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {this.state.joueurs === "6" && (
                        <div>
                            <Screen6 />
                        </div>
                    )}
                </div>
                <div>
                    {this.state.joueurs === "9" && (
                        <div>
                            <Screen9 />
                        </div>
                    )}
                </div>
            </main>
        </div>
        )
    }
}

export default Accueil;
