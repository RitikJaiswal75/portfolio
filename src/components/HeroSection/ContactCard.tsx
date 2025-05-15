import { portfolioData } from "../../data/allData";

function ContactCard() {
  return (
    <div className="w-full md:w-1/4 border-2 border-slate-200 rounded-xl px-4 hover:scale-105 transition ease-in-out shadow-[-.5rem_.5rem_1rem_rgb(79,76,76)]">
      <div className="py-2 pt-4">
        <img
          src="/images/profile_v1.webp"
          className="rounded-xl w-2/3 min-h-[25vh] sm:min-h-[30vh] xl:min-h-[10vh] mx-auto"
          alt="Ritik Jaiswal"
          loading="eager"
        />
        <h1 className="text-white font-bold my-2 text-center text-2xl">
          {portfolioData.name}
        </h1>
        <div className="w-full border-t-2 my-2"></div>
      </div>

      <div className="w-full flex-col">
        <div className="my-2">
          <div className="flex items-center break-all text-white gap-2 mb-4">
            <i className="ri-mail-send-line text-white font-bold text-xl"></i>
            <a
              href={`mailto:${portfolioData.contactCard.email}`}
              className="text-white font-bold text-lg"
            >
              {portfolioData.contactCard.email}
            </a>
          </div>
          <div className="flex items-center break-all text-white gap-2 mb-4">
            <i className="ri-phone-find-line text-white font-bold text-xl"></i>
            <a
              href={`tel:${portfolioData.contactCard.phone}`}
              className="text-white font-bold text-lg"
            >
              {portfolioData.contactCard.phone}
            </a>
          </div>
          <div className="flex items-center break-all text-white gap-2 mb-4">
            <i className="ri-map-pin-line text-white font-bold text-xl"></i>
            <a
              href={portfolioData.contactCard.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-lg"
            >
              {portfolioData.contactCard.location}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
