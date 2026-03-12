import RightCardContent from "./rightCardContent"

const RightCard = (props) => {
    return (
        <div className="h-full w-70 overflow-hidden  shrink-0 relative rounded-4xl">
            <img className="h-full w-full object-cover" src={props.user?.image} alt="" />
           <RightCardContent user={props.user} serialNo={props.index}/>
        </div>
    )
}

export default RightCard