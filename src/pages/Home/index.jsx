import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <>
            <h1>Boas vindas a nossa pesquisa de satisfação!</h1>

            <p>Queremos saber o seu nível de satisfação com a empresa.</p>

            <Link to="/question-one">
                <button type="button">Iniciar Pesquisa</button>
            </Link>
        </>
    )
}

export default Home;