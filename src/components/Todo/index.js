import React, { useState } from 'react';

function Todo() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    const onSetInput = (value) => {
        setInput(value);
    }

    const handleRemoveTodo = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    const onSetList = () => {
        if(input.trim() !== '') {
        setList([...list, input]);
        setInput(''); // Clear the input field after adding the item
        }
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e) => onSetInput(e.target.value)} />
            <button onClick={onSetList}>Add</button>
            <ul>
                {list.map((todo, i) => (
                    <li key={i}>{todo} <span onClick={ e => handleRemoveTodo(i)} style={{color : 'red', cursor : 'pointer'}}>X</span></li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
