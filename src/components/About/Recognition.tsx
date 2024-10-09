import React from "react"

function Recognition() {
    return (
        <div className="text-white sm:p-2 font-medium flex-col gap-4 sm:text-xl" id="recognition">
            <h2 className="text-2xl font-bold text-center">Recognition</h2>
            <ul className="list-disk ml-2 px-2">
                <li><span className="underline text-[#c79c18] font-bold">Special Recognition:</span> Honored for serving as a Game Marshal during multiple IPL matches, ensuring smooth streaming coordination.</li>
                <li><span className="underline text-[#c79c18] font-bold">#Kudos Award:</span> Recognized for designing and developing the complete frontend of the Stream Validator web app, facilitating internal media validation across various platforms.</li>
                <li><span className="underline text-[#c79c18] font-bold">Community Speaker:</span> Delivered talks at an open community event hosted by Team Shiksha and presented at Razorpay about navigator.sendBeacon.</li>
                <li><span className="underline text-[#c79c18] font-bold">STEM Educator:</span> Provided STEM education to grade school students at BeyondSkool, inspiring young minds in science and technology.</li>
            </ul>
        </div>
    )
}

export default Recognition
