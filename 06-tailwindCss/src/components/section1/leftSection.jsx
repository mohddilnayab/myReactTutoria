import Arrow from "./arrow"
import HeroText from "./heroText"

const LeftSection = () =>{
    return (
        <div className="h-full flex flex-col justify-between w-1/3">
            <HeroText/>
            <Arrow/>
            
        </div>
    )
}

export default LeftSection