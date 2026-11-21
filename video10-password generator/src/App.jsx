import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      password += str.charAt(char)
    }

    setPassword(password)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 32)
    window.navigator.clipboard.writeText(password)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className='w-full min-h-screen bg-black flex justify-center pt-24 px-4'>

      <div className='w-full max-w-xl mx-auto shadow-md rounded-xl px-5 py-5 bg-gray-800 h-fit'>

        <h1 className='text-white text-center text-xl mb-5'>
          Password generator
        </h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            ref={passwordRef}
            className='outline-none w-full py-2 px-4 bg-white text-gray-800'
            placeholder='Password'
            readOnly
          />

          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-4 py-2 shrink-0'
          >
            {copied ? "Copied!" : "Copy"}
          </button>

        </div>

        <div className='flex flex-wrap items-center gap-x-3 gap-y-3 text-sm'>

          <div className='flex items-center gap-x-2'>

            <input
              type="range"
              min={8}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className='cursor-pointer'
            />

            <label className='text-orange-500 whitespace-nowrap'>
              Length: {length}
            </label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              id="numberInput"
            />

            <label
              htmlFor="numberInput"
              className='text-orange-500 cursor-pointer'
            >
              Numbers
            </label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              id="characterInput"
            />

            <label
              htmlFor="characterInput"
              className='text-orange-500 cursor-pointer'
            >
              Characters
            </label>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App