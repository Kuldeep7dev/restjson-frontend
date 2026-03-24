import { RiHeartFill } from '@remixicon/react'
import { Coffee, Star } from 'lucide-react'
import toast from 'react-hot-toast'

const Footer = () => {
  const handleComingSoon = () => {
    toast.dismiss()
    toast('Comming soon', {
      position: 'bottom-right',
      style: {
        color: 'Black',
        fontFamily: 'Space Mono',
        fontWeight: 'bold',
        letterSpacing: '1px'
      }
    })
  }
  return (
    <footer className="bg-purple-600 rounded-b-sm border-t border-purple-600 py-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">

        {/* Title */}
        <p className="text-purple-100 text-base sm:text-lg font-semibold flex items-center gap-2 justify-center flex-wrap">
          Thanks for using <span className="font-bold">Rest JSON</span>
          <RiHeartFill className="text-red-600" size={18} />
        </p>

        {/* Subtitle */}
        <p className="text-white text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
          Made with love • If you like it, please consider supporting the project
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-3">
          <a
            href='https://github.com/Kuldeep7dev'
            target="_blank"
            className="flex items-center justify-center gap-2 px-5 py-2.5
              bg-purple-600 border border-white
              text-white
              rounded-lg text-base sm:text-lg font-bold tracking-wider
              shadow-sm shadow-purple-500/50
              hover:shadow-md hover:shadow-purple-500/70
              hover:-translate-y-0.5
              transition-all duration-200
              min-w-[180px]"
          >
            <Star size={15} />
            Star on GitHub
          </a>

          <div
            // to="/buymeacoffee"
            onClick={handleComingSoon}
            target='_blank'
            className="flex items-center justify-center gap-2 px-5 py-2.5
              bg-white text-purple-700
              rounded-lg text-base sm:text-lg font-bold tracking-wider
              shadow-sm shadow-black/20
              hover:shadow-md hover:-translate-y-0.5
              transition-all duration-200
              min-w-[180px]"
          >
            <Coffee size={16} />
            Support me
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer