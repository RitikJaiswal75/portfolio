import React from "react"

function KnowMoreInfo() {
    return (
        <section className="hidden sm:flex flex-col justify-center items-center w-full text-white gap-8 mt-8">
            <p className="text-2xl font-bold">Wanna Know more? Why don't we scroll down...</p>
            <div className="animate-bounce text-4xl cursor-pointer">
                <i className="ri-mouse-line"></i>
                <br />
                <i className="ri-arrow-down-s-line"></i>
            </div>
        </section>
    )
}

export default KnowMoreInfo
