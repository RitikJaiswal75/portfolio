import ContactCard from "./ContactCard"
import SocialCard from "./SocialCard"

function HeroSection() {
    return (
        <div className="flex gap-8 flex-col md:flex-row">
            <ContactCard />
            <SocialCard />
        </div>
    )
}

export default HeroSection
