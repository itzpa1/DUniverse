import React from 'react'

const ShadowCircle = () => {
    return(
        <div>
            <div className="fixed left-[-250px] top-[200px] right-auto bottom-auto -z-[1] w-[500px] h-[500px] rounded-[1000px] bg-gradient-to-tr from-secondaryColor to-primaryColor opacity-10 blur-[100px] "></div>
            <div className="left-auto top-[100px] right-[-250px] bottom-auto opacity-10 bg-gradient-to-tr from-primaryColor to-secondaryColor "></div>
        </div>
    )
}


export default ShadowCircle