import React from 'react'

const NamePlate = () => {
    return (
        <div className="flex items-center justify-center border border-black dark:border-white p-1 w-fit">
            {/* Left box */}
            <div className="bg-black dark:bg-white text-white dark:text-black p-1 flex flex-col items-center justify-center">
                <h1 className="text-lg md:text-xl font-bold tracking-wide">KHALID</h1>
                <div className="w-full h-[3px] bg-white dark:bg-black" />
            </div>

            {/* Right box */}
            <div className=" p-1 flex flex-col items-center justify-center">
                <h1 className="text-lg md:text-xl font-extrabold tracking-wide">KAKAR</h1>
                <div className="w-full h-[3px] bg-black dark:bg-white" />
            </div>
        </div>
    )
}

export default NamePlate
