import React from 'react';

function QuestionOne() {



    return(
        <>
            <h1>Quantas pessoas tem na sua empresa?</h1>

            <div onChange={e => e.target.value}>
                <input type="radio" value="one-to-three" name="gender"/> 1 até 3
                <input type="radio" value="four-to-six" name="gender"/> 4 até 6
                <input type="radio" value="seven-to-nine" name="gender"/> 7 até 9
                <input type="radio" value="ten-to-fourteen" name="gender"/> 10 até 14
                <input type="radio" value="more-than-fifteen" name="gender"/> 15 ou mais
            </div>
           
        </>
    )
}

export default QuestionOne;