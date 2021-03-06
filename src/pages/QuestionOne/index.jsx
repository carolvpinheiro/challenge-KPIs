import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../config/firebaseconfig';
import { addDoc, collection } from 'firebase/firestore'

function QuestionOne() {
    const [ quantPeople, setQuantPeople ] = useState([]);
    const quantPeopleCollectionRef = collection(db, "questionOne");
    
    const addAnswer = async () => {
        await addDoc(quantPeopleCollectionRef, { quantity: quantPeople })
    }

    return(
        <>
            <h1>Quantas pessoas tem na sua empresa?</h1>

            <div onChange={e => setQuantPeople(e.target.value)}>
                <input type="radio" value="one-to-three" name="gender"/> 1 até 3
                <input type="radio" value="four-to-six" name="gender"/> 4 até 6
                <input type="radio" value="seven-to-nine" name="gender"/> 7 até 9
                <input type="radio" value="ten-to-fourteen" name="gender"/> 10 até 14
                <input type="radio" value="more-than-fifteen" name="gender"/> 15 ou mais
            </div>

            <Link to="/question-two">
                <button type="button" onClick={addAnswer}>Continuar</button>
            </Link>
           
        </>
    )
}

export default QuestionOne;
