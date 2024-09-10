import AnimatedText from './AnimatedText'
import Socials from './Socials'

function SocialCard() {
    return (
        <div className="w-full sm:flex sm:w-3/4 border-2 border-slate-200 rounded-xl px-4 hover:scale-105 transition ease-in-out shadow-[.5rem_.5rem_1rem_rgb(79,76,76)] gap-4">
            <div className='sm:w-2/5 py-4 max-h-[80vh]'>
                <img src="/images/ritik_portrait.webp" alt="Ritik Jaiswal" className='sm:rounded-l-xl h-full' />
            </div>
            <div className='py-2 flex flex-col h-[50%] my-auto'>
                <AnimatedText text='Hello World!! Welcome to my space!' />
                <div className="w-full border-t-2 mt-auto"></div>
                <p className='text-2xl font-medium text-white mt-8'>Follow me on Social media</p>
                <div className='mt-auto'>
                    <Socials />
                </div>
            </div>
        </div>
    )
}

export default SocialCard
