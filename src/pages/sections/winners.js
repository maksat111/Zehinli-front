import React from 'react';
import { Navigate } from 'react-router-dom';
import winners from '../../img/winners.png';

function Winners() {
    return (
        <div>
            <h2>Ýeňijiler sanawy</h2>
            <div className='bg-red'>
                <div>
                    <img src={winners}></img>
                    <div>
                        <p>Şugün</p>
                        <p>Hepdelik</p>
                        <p>Ussat</p>
                    </div>
                    <div>
                        <p>Başlangyç</p>
                        <p>Höwesjeň</p>
                        <p>Ussat</p>
                    </div>
                    <button>Meni görkez</button>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Winners;