

const RightCardContent = (props) =>{
    return (
         <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
                <h2 className="bg-white text-xl dont-semibod rounded-full h-10 w-10 flex justify-center items-center">{props.serialNo + 1}</h2>
                <div>
                    <p className="text-xl mb-14 text-white leading-relaxed">{props.user.intro}</p>
                    <div className="flex justify-between">
                        <button style={{backgroundColor:props.user.color}} className="bg-blue-600 font-medium px-8 py-2 rounded-full text-white ">{props.user.tag}</button>
                        <button style={{backgroundColor:props.user.color}} className="bg-blue-600  text-white px-3 py-2 rounded-full font-medium"><i class="ri-arrow-right-line"></i> </button>
                    </div>
                </div>
            </div>
    )
}
export default RightCardContent
