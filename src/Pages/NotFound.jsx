import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Home, ArrowLeft, FileText } from 'lucide-react'
import Pages from '../Component/Globel/Pages'

const NotFound = () => {
  const { '*': requestedPath } = useParams()

  useEffect(() => {
    document.title = '404 | Page Not Found'
  }, [])

  return (
    <Pages>
      <div className="flex items-center justify-center p-4 h-[90vh] select-text">
        <div className="text-center max-w-lg">
          {/* Main 404 with nice gradient */}
          <h1 className="text-8xl md:text-9xl font-black text-purple-500">
            404
          </h1>

          {/* Illustration / Emoji style accent */}
          <div className="text-8xl md:text-9xl my-6">😵‍💫</div>

          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mt-2 mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for.
            <br />
            <span className="font-mono text-sm bg-purple-600 text-white px-2 py-1 rounded mt-2 inline-block text-purple-700">
              "{requestedPath || '/'}"
            </span>{' '}
            doesn't seem to exist.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to='/'
              className="border-1 border-black text-white cursor-pointer p-3 rounded-2xl text-center bg-purple-600 flex items-center gap-1.5 shadow-lg shadow-purple-500 hover:shadow-neutral-50 hover:duration-600"
            >
              <Home size={18} />
              Back to Home
            </Link>


            <Link to='/docs' className='border-1 cursor-pointer p-3 rounded-2xl shadow-sm shadow-black hover:shadow-neutral-50 hover:duration-600 flex gap-1.5 text-center'>
              <FileText />
              Read Docs
            </Link>
          </div>
        </div>
      </div>
    </Pages>
  )
}

export default NotFound