function ContactCard() {
    return (
        <div className="w-full sm:w-1/4 border-2 border-slate-200 rounded-xl px-4 hover:scale-105 transition ease-in-out shadow-[-.5rem_.5rem_1rem_rgb(79,76,76)]">
            <div className="py-2 pt-4">
                <img src="/images/profile_v1.jpg" className="rounded-xl w-2/3 mx-auto" alt="Ritik Jaiswal" />
                <h1 className="text-white font-bold my-2 text-center text-2xl">Ritik Jaiswal</h1>
                <div className="w-full border-t-2 my-2"></div>
            </div>

            <div className="w-full flex-col">
                {/* email id */}
                <div className="my-2">
                    <div className="flex items-center break-all text-white gap-2 mb-4">
                        <i className="ri-mail-send-line text-white font-bold text-xl"></i>
                        <a href="mailto:ritikjaiswalse@gmail.com" className="text-white font-bold text-lg">ritikjaiswalse@gmail.com</a>
                    </div>
                    <div className="flex items-center break-all text-white gap-2 mb-4">
                        <i className="ri-phone-find-line text-white font-bold text-xl"></i>
                        <a href="tel:+918792083160" className="text-white font-bold text-lg">+91 879-2083-160</a>
                    </div>
                    <div className="flex items-center break-all text-white gap-2 mb-4">
                        <i className="ri-map-pin-line text-white font-bold text-xl"></i>
                        <a href="https://www.google.com/maps/place/Bellandur" className="text-white font-bold text-lg">Bellandur, Bangalore</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
