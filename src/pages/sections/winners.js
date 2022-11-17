import React from 'react';
import { Navigate } from 'react-router-dom';
import winners from '../../img/winners.png';

function Winners() {
    return (
        <div>
            <h2>Ýeňijiler sanawy</h2>
            <div className='flex flex-row'>
                <div className='w-25vw'>
                    <img src={winners}></img>
                    <div className='flex justify-between'>
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
                <div className='w-65vw'>
                    <p>table</p>
                </div>
            </div>
        </div>
    );
}

export default Winners;