import RightCard from "./rightCard"


const RightSection = (props) => {
        // <RightCard/>
    return (
        <div id="right" className="h-full flex flex-nowrap overflow-auto  gap-10 p-8 w-2/3">
            {props.users.map((user, idx)=>{
            return <RightCard key={idx} user={user} index={idx}/>
            })}
           
           
        </div>
    )
}

export default RightSection