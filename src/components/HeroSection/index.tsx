import React from "react"
import ContactCard from "./ContactCard"
import SocialCard from "./SocialCard"

function HeroSection() {
    return (
        <main className="flex gap-8 flex-col md:flex-row">
            <ContactCard />
            <SocialCard />
        </main>
    )
}

export default HeroSection
