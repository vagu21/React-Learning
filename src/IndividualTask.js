import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const IndividualTask = () => {
    const { id } = useParams();
    const [indi, setIndividual] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(value => setIndividual(value))
    }, [id]);

    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            {indi !== null ?
                <div>
                    <div>ID: {indi.id}</div>
                    <div>Title: {indi.title}</div>
                </div>
                : null
            }
        </div>
    );
}

export default IndividualTask
