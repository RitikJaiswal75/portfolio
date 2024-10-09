import React from "react"
import { portfolioData } from "../data/allData"

function DownloadResume() {
    return (
        <a className="h-[40px] bg-[#c79c18] text-white font-2xl font-bold flex justify-center items-center fixed right-2 top-2 sm:!bottom-2 rounded px-2" href="/documents/resume.pdf" download={portfolioData.resume.downloadable ? `${portfolioData.name.replace(' ', '_')}_resume.pdf` : false} target="_blank">
            <i className="ri-download-2-fill"></i>
            <span>Resume</span>
        </a>
    )
}

export default DownloadResume
