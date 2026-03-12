

function Card(props){
    return (
        <div className="card">
            <img src={props.url} alt="" />
            <h1>{props.name}</h1>
            <p>He Is {props.age} years old. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolores?</p>
            <button>Click me</button>
        </div>
    )
}

export default Card