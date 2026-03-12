import LeftSection from './leftSection'
import RightSection from './rightSection'

const Page1Content = (props) => {
    return (
        <div className='py-10 flex items-center gap-10 h-[90vh] px-18'>
            <LeftSection/>
            <RightSection users={props.users}/>
        </div>
    )
}

export default Page1Content