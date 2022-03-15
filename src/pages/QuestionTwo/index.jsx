import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function QuestionTwo() {
    const [valuation, setValuation] = useState(0);
    const valuationValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return(
        <>
            <h1>Qual a sua satisfação com a empresa?</h1>

            <div onClick={e => setValuation(e.target.value)}>
                {
                    valuationValues.map((value) =>  <button key={value} value={value}>{value}</button>)
                }
            </div>

            <Link to="/question-one">
                <button type="button">Voltar</button>
            </Link>

            <Link to="/results">
                <button type="button">Finalizar</button>
            </Link>

        </>
    )
}

export default QuestionTwo;