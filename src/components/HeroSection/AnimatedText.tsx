import React from "react"

function AnimatedText({ text }: { text: string }) {

    return (
        <>
            <p className="lg:animate-typewriter lg:h-[32px] overflow-hidden break-all font-bold text-white text-2xl lg:border-r-2 xl:border-r-4 border-slate-200">{text}</p>
        </>
    )
}

export default AnimatedText
