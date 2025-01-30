import React from 'react'

const ShadowCircle = () => {
    return(
        <div className='fixed w-full h-screen top-0 left-0 bottom-0 right-0 -z-10 '>
            <div className="fixed left-[-250px] top-[200px] right-auto bottom-auto w-[500px] h-[500px] rounded-[1000px] bg-gradient-to-tr from-secondaryColor to-primaryColor opacity-50 blur-[100px] "></div>
            <div className="left-auto top-[100px] right-[-250px] bottom-auto opacity-50 bg-gradient-to-tr from-primaryColor to-secondaryColor "></div>
        </div>
    )
}


export default ShadowCircle