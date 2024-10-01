import { portfolioData } from "../../data/allData"

const socialIcons: { [key: string]: JSX.Element } = {
    linkedin: <i className="ri-linkedin-box-line"></i>,
    twitter: <i className="ri-twitter-line"></i>,
    github: <i className="ri-github-fill"></i>,
    instagram: <i className="ri-instagram-line"></i>,
    youtube: <i className="ri-youtube-line"></i>
}

// Define the type for the available socials
type SocialKey = keyof typeof portfolioData.social.availableSocials;

function Socials() {
    return (
        <div className="flex text-4xl text-white justify-evenly">
            {Object.keys(portfolioData.social.availableSocials).map((social) => {
                const socialKey = social as SocialKey; // Type assertion
                const url = portfolioData.social.availableSocials[socialKey]; // Use the typed key
                return (
                    <a
                        key={social}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={url}
                        className="animate-wiggle hover:scale-110 transition ease-in-out"
                    >
                        {socialIcons[socialKey]}
                    </a>
                )
            })}
        </div>
    )
}

export default Socials;
