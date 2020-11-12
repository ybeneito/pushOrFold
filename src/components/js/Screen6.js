import image from '../img/6joueurs.png'

function Screen6(props) {
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
                        <button className="btn btn-secondary mx-1">01</button>
                        <button className="btn btn-secondary mx-1">02</button>
                        <button className="btn btn-secondary mx-1">03</button>
                        <button className="btn btn-secondary mx-1">04</button>
                    </div>
                    <div className="btn-group m-1" role="group">
                        <button className="btn btn-secondary mx-1">05</button>
                        <button className="btn btn-secondary mx-1">06</button>
                        <button className="btn btn-secondary mx-1">07</button>
                        <button className="btn btn-secondary mx-1">08</button>
                    </div>
                    <div className="btn-group m-1" role="group">
                        <button className="btn btn-secondary mx-1">09</button>
                        <button className="btn btn-secondary mx-1">10</button>
                        <button className="btn btn-secondary mx-1">11</button>
                        <button className="btn btn-secondary mx-1">12</button>
                    </div>
                    <div className="btn-group m-1" role="group">
                        <button className="btn btn-secondary mx-1">13</button>
                        <button className="btn btn-secondary mx-1">14</button>
                        <button className="btn btn-secondary mx-1">15</button>
                        <button className="btn btn-secondary mx-1">16</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <h3 className="text-white">En attente de votre choix</h3>
        </div>
    </div>
    );
}

export default Screen6;