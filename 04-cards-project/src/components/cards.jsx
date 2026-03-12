import { Bookmark } from 'lucide-react'
function Card(props){
    console.log(props.types)


    return (
        <div className="cards">
        <div className="top">
          <img className="logo" src={props.logo} alt="company logo" />
          <div className="save">Save < Bookmark size={14}/></div>
        </div>

        <div className="middle">
          <div className="companyContaiiner">
            <h3>{props.company}</h3>
            <div className="days">{props.daysAgo}</div>
          </div>
          <h2 className="profileName">{props.title}</h2>
          <div className="typeContainer">
            <span className="type">{props.types[0]}</span>
            <span className="type">{props.types[1]}</span>
          </div>
        </div>

        <div className="divider" />

        <div className="bottom">
          <div className="price">
            <div className="amount">{props.pay}</div>
            <div className="location">{props.location}</div>
          </div>
          <button className="apply">Apply now</button>
        </div>
      </div>
    )

}



export default Card