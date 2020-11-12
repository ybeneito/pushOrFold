import React, { Component } from 'react'
import image from '../img/9joueurs.png'
import image1 from '../img/tableau91.png'
import image2 from '../img/tableau92.png'
import image3 from '../img/tableau93.png'
import image4 from '../img/tableau94.png'
import image5 from '../img/tableau95.png'
import image6 from '../img/tableau96.png'
import image7 from '../img/tableau97.png'
import image8 from '../img/tableau98.png'
import image9 from '../img/tableau99.png'
import image10 from '../img/tableau910.png'
import image11 from '../img/tableau911.png'
import image12 from '../img/tableau912.png'
import image13 from '../img/tableau913.png'
import image14 from '../img/tableau914.png'
import image15 from '../img/tableau915.png'
import image16 from '../img/tableau916.png'

class Screen9 extends Component {
    state = { 
        blindes: null
     }
        handle1Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "1";
        this.setState(state_copy)
    }
        handle2Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "2";
        this.setState(state_copy)
    }
        handle3Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "3";
        this.setState(state_copy)
    }
        handle4Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "4";
        this.setState(state_copy)
    }
        handle5Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "5";
        this.setState(state_copy)
    }
        handle6Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "6";
        this.setState(state_copy)
    }
        handle7Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "7";
        this.setState(state_copy)
    }
        handle8Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "8";
        this.setState(state_copy)
    }
        handle9Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "9";
        this.setState(state_copy)
    }
        handle10Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "10";
        this.setState(state_copy)
    }
        handle11Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "11";
        this.setState(state_copy)
    }
        handle12Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "12";
        this.setState(state_copy)
    }
        handle13Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "13";
        this.setState(state_copy)
    }
        handle14Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "14";
        this.setState(state_copy)
    }
        handle15Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "15";
        this.setState(state_copy)
    }
        handle16Click = async () => {
        const state_copy = { ...this.state.blindes };
        state_copy.blindes = "16";
        this.setState(state_copy)
    }    
    render() {
        return (
            <div>
            <div className="d-flex justify-content-around align-items-center">
                <div className='col-6'>
                    <img src={image} alt="" width="100%"/>
                </div>
                <div className='col-6 d-flex flex-column text-white'>
                    <h2>Sélectionnez votre nombre de blindes: </h2>
                    <div className="btn-toolbar d-flex flex-column">
                        <div className="btn-group m-1" role="group">
                            <button className="btn btn-secondary mx-1" onClick={this.handle1Click}>01</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle2Click}>02</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle3Click}>03</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle4Click}>04</button>
                        </div>
                        <div className="btn-group m-1" role="group">
                            <button className="btn btn-secondary mx-1" onClick={this.handle5Click}>05</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle6Click}>06</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle7Click}>07</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle8Click}>08</button>
                        </div>
                        <div className="btn-group m-1" role="group">
                            <button className="btn btn-secondary mx-1" onClick={this.handle9Click}>09</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle10Click}>10</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle11Click}>11</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle12Click}>12</button>
                        </div>
                        <div className="btn-group m-1" role="group">
                            <button className="btn btn-secondary mx-1" onClick={this.handle13Click}>13</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle14Click}>14</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle15Click}>15</button>
                            <button className="btn btn-secondary mx-1" onClick={this.handle16Click}>16</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {this.state.blindes == null && (
                     <h3 className="text-white">En attente de votre choix</h3>
                )}
                {this.state.blindes === "1" && (
                    <img src={image1} alt="" />
                )}
                {this.state.blindes === "2" && (
                    <img src={image2} alt="" />
                )}
                {this.state.blindes === "3" && (
                    <img src={image3} alt="" />
                )}
                {this.state.blindes === "4" && (
                    <img src={image4} alt="" />
                )}
                {this.state.blindes === "5" && (
                    <img src={image5} alt="" />
                )}
                {this.state.blindes === "6" && (
                    <img src={image6} alt="" />
                )}
                {this.state.blindes === "7" && (
                    <img src={image7} alt="" />
                )}
                {this.state.blindes === "8" && (
                    <img src={image8} alt="" />
                )}
                {this.state.blindes === "9" && (
                    <img src={image9} alt="" />
                )}
                {this.state.blindes === "10" && (
                    <img src={image10} alt="" />
                )}
                {this.state.blindes === "11" && (
                    <img src={image11} alt="" />
                )}
                {this.state.blindes === "12" && (
                    <img src={image12} alt="" />
                )}
                {this.state.blindes === "13" && (
                    <img src={image13} alt="" />
                )}
                {this.state.blindes === "14" && (
                    <img src={image14} alt="" />
                )}
                {this.state.blindes === "15" && (
                    <img src={image15} alt="" />
                )}
                {this.state.blindes === "16" && (
                    <img src={image16} alt="" />
                )}                   
            </div>
        </div>
        );
    }
}

export default Screen9;

