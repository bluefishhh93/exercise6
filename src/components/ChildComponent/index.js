function ChildComponent(props){
    return (
        <div>
            <p>Count: {props.count}</p>
            <button onClick={props.incrementCount}>Increase</button>
        </div>
    )
}

export default ChildComponent