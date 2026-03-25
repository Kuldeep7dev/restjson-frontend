import { FileText } from "lucide-react"
import Pages from "../Component/Globel/Pages"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useEffect, useState } from "react"
import ToggleButton from "../Component/BasicComponent/ToggleButton"

const Docs = () => {
  const [activeClient, setActiveClient] = useState("fetch")
  const [multiUserOutput, setMultiUserOutput] = useState(false)
  const [singleUserOutput, setSingleUserOutput] = useState(false)


  useEffect(() => {
    document.title = 'Rest JSON | DOCS'
  }, [])

  return (
    <Pages>
      <div
        className="flex justify-center mt-6 sm:mt-10 mb-20 px-3 sm:px-6"
        style={{ userSelect: "text" }}
      >
        <div className="flex flex-col gap-4 w-full max-w-4xl">

          {/* Heading */}
          <h1 className="flex items-center gap-2 text-2xl sm:text-4xl font-bold">
            <FileText size={28} /> Rest JSON - DOCS
          </h1>

          <h3 className="text-base sm:text-lg leading-relaxed">
            Rest JSON is a dummy REST API created for frontend developers and beginners
            who want to practice fetching data using GET requests without building a real backend.
            This API is intended for learning and testing purposes only.
          </h3>

          <p className="text-sm sm:text-base">
            <strong>Tip:</strong> You can use the{" "}
            <a
              className="underline font-bold"
              target="_blank"
              rel="noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
            >
              Fetch API
            </a>{" "}
            or{" "}
            <a
              className="underline font-bold"
              target="_blank"
              rel="noreferrer"
              href="https://axios-http.com/docs/intro"
            >
              Axios
            </a>{" "}
            to send GET requests.
          </p>

          {/* Base URL (small but professional add) */}
          <div className="rounded-sm p-3 bg-[#1e1e1e] overflow-x-auto">
            <SyntaxHighlighter language="text" style={vscDarkPlus}>
              {`Base URL: https://restjson.onrender.com`}
            </SyntaxHighlighter>
          </div>

          {/* Code Box */}
          <div className="rounded-sm p-3 mt-2 w-full bg-[#1e1e1e] overflow-x-auto">

            {/* Switch Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
              <button
                onClick={() => setActiveClient("fetch")}
                className={`border-2 px-3 py-1 text-sm rounded-sm transition
                  ${activeClient === "fetch"
                    ? "bg-purple-600 text-white font-bold"
                    : "bg-white text-black"}`}
              >
                Fetch API
              </button>

              <button
                onClick={() => setActiveClient("axiosaxiosInstance")}
                className={`border-2 px-3 py-1 text-sm rounded-sm transition
                  ${activeClient === "axiosaxiosInstance"
                    ? "bg-purple-600 text-white font-bold"
                    : "bg-white text-black"}`}
              >
                Axios
              </button>
            </div>

            {activeClient === "fetch" && (
              <>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {`const res = await fetch('https://restjson.onrender.com/users')
const data = await res.json()
console.log(data)`}
                </SyntaxHighlighter>

                <p className="text-white text-xs sm:text-sm text-center my-2">OR</p>

                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {`fetch('https://restjson.onrender.com/users')
  .then(res => res.json())
  .then(console.log)`}
                </SyntaxHighlighter>
              </>
            )}

            {activeClient === "axiosaxiosInstance" && (
              <>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {`const res = await axiosaxiosInstance.get('https://restjson.onrender.com/users')
console.log(res.data)`}
                </SyntaxHighlighter>

                <p className="text-white text-xs sm:text-sm text-center my-2">OR</p>

                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {`axiosaxiosInstance.get('https://restjson.onrender.com/users')
  .then(res => console.log(res.data))
  .catch(console.error)`}
                </SyntaxHighlighter>
              </>
            )}
          </div>

          {/* All Users */}
          <h1 className="text-lg sm:text-xl mt-6">
            # Getting Data from the API (All Users)
          </h1>

          <div className="rounded-sm p-3 bg-[#1e1e1e] overflow-x-auto">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
              {`const res = await fetch('https://restjson.onrender.com/users')
const data = await res.json()
console.log(data)`}
            </SyntaxHighlighter>
          </div>

          <ToggleButton
            isOpen={multiUserOutput}
            onToggle={() => setMultiUserOutput(p => !p)}
            openText="See Output"
            closeText="Hide Output"
          />

          <div
            className={`
              w-full bg-[#1e1e1e] rounded-sm overflow-hidden
              transition-all duration-500 ease-out
              ${multiUserOutput
                ? "max-h-[900px] opacity-100 translate-y-0 p-3"
                : "max-h-0 opacity-0 -translate-y-3 p-0"}
            `}
          >
            <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
              {`[
  {
    "id": 1,
    "account": {
      "username": "string",
      "email": "string",
      "role": "user | admin",
      "isVerified": true,
      "status": "active | inactive"
    },
    "profile": {
      "fullname": "string",
      "gender": "male | female",
      "dateOfBirth": "YYYY-MM-DD",
      "phone": "string",
      "address": {
        "city": "string",
        "state": "string",
        "country": "string",
        "pincode": "string"
      }
    }
  },

  /* ... */

  {
    "id": 100,
    "...": "more users with same structure"
  }
]
`}
            </SyntaxHighlighter>
          </div>

          {/* Single User */}
          <h1 className="text-lg sm:text-xl mt-4">
            # Get data for a specific <b>ID</b>
          </h1>

          <div className="rounded-sm p-3 bg-[#1e1e1e] overflow-x-auto">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
              {`const res = await axiosaxiosInstance.get('http://localhost:4050/users/1')
console.log(res.data)`}
            </SyntaxHighlighter>
          </div>

          <ToggleButton
            isOpen={singleUserOutput}
            onToggle={() => setSingleUserOutput(p => !p)}
            openText="See Output"
            closeText="Hide Output"
          />

          <div
            className={`
              w-full bg-[#1e1e1e] rounded-sm overflow-hidden
              transition-all duration-500 ease-out
              ${singleUserOutput
                ? "max-h-[900px] opacity-100 translate-y-0 p-3"
                : "max-h-0 opacity-0 -translate-y-3 p-0"}
            `}
          >
            <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
              {`[
  {
    "id": 1,
    "account": {
      "username": "string",
      "email": "string",
      "role": "user | admin",
      "isVerified": true,
      "status": "active | inactive"
    },
    "profile": {
      "fullname": "string",
      "gender": "male | female",
      "dateOfBirth": "YYYY-MM-DD",
      "phone": "string",
      "address": {
        "city": "string",
        "state": "string",
        "country": "string",
        "pincode": "string"
      }
    }
  }
]
`}
            </SyntaxHighlighter>
          </div>

        </div>
      </div>
    </Pages>
  )
}

export default Docs
