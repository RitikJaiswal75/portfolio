import React from "react"

function AboutMe() {
    return (
        <div className="text-white sm:p-2 font-medium flex-col gap-4 sm:text-xl">
            <h2 className="text-2xl font-bold text-center">About me</h2>
            Hi, I'm <span className="underline text-[#c79c18] font-bold">Ritik Jaiswal</span>, a passionate Frontend Developer with over 2 years of experience. Here's a bit about me:
            <br />
            <br />
            <span className="underline text-[#c79c18] font-bold">Technical Skills:</span> Proficient in JavaScript, TypeScript, React, Next.js, and CSS, with a strong focus on creating engaging and responsive interfaces.
            <br />
            <br />
            <span className="underline text-[#c79c18] font-bold">Personal Interests:</span>
            <ul className="list-disc px-2 ml-4">
                <li><span className="underline text-[#c79c18] font-bold">Walking:</span> I enjoy long walks, especially when exploring new places and soaking in nature's beauty.</li>
                <li><span className="underline text-[#c79c18] font-bold">Talking to People:</span> I love meeting new people, having meaningful conversations, and learning from different perspectives.</li>
                <li><span className="underline text-[#c79c18] font-bold">Nature Photography:</span> Capturing the beauty of nature through my lens is one of my favorite hobbies.</li>
            </ul>
            <br />
            <span className="underline text-[#c79c18] font-bold">Portfolio Goals:</span> This space is a reflection of my journey, where I share my projects, skills, and the joy I find in building for the web.
        </div>
    )
}

export default AboutMe
