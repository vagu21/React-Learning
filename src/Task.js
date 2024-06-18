import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Task = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(value => setData(value));
    }, []);

    return (
        <div>
            { data.map(item => (
                <div key={item.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                    <Link to={`/task/${item.id}`}>{item.title}</Link>
                </div>
            ))
            }
        </div>
    );
}

export default Task;
