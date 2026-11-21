import { useState } from 'react'
import InputBox from './components/INPUT'
import usecurrency from './hooks/usecurrency'
import './App.css'

function App() {

    const [amount, setAmount] = useState('')
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('pkr')
    const [convertedAmount, setConvertedAmount] = useState(null)

    const currencyInfo = usecurrency(from) || {}

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)

        setAmount(convertedAmount !== null ? String(convertedAmount) : amount)
        setConvertedAmount(amount === '' ? null : Number(amount))
    }

    const convert = () => {

        const numericAmount = Number(amount)
        const exchangeRate = Number(currencyInfo[to])

        if (
            amount === '' ||
            !Number.isFinite(numericAmount) ||
            !Number.isFinite(exchangeRate) ||
            !options.includes(to)
        ) {
            return
        }

        setConvertedAmount(numericAmount * exchangeRate)
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">

            <div className="w-full max-w-md bg-slate-800 rounded-2xl p-6 shadow-2xl">

                <h1 className="text-3xl font-bold text-center text-white mb-2">
                    Currency Converter
                </h1>

                <p className="text-center text-gray-400 mb-8">
                    Convert your currency easily
                </p>

                <div className="mb-4">
                    <InputBox
                        label="Enter Amount"
                        amount={amount}
                        onAmountChange={(value) => {
                            setAmount(value)
                            setConvertedAmount(null)
                        }}
                        currencyOptions={options}
                        selectCurrency={from}
                        onCurrencyChange={setFrom}
                    />
                </div>

                <div className="relative w-full flex justify-center mb-4">

                    <button
                        onClick={swap}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-lg transition"
                    >
                        Swap ⇅
                    </button>

                </div>

                <div className="mb-6">
                    <InputBox
                        label="Convert To"
                        amount={convertedAmount === null ? '' : convertedAmount.toFixed(2)}
                        amountDisable={true}
                        currencyOptions={options}
                        selectCurrency={to}
                        onCurrencyChange={setTo}
                    />
                </div>

                <button
                    onClick={convert}
                    disabled={!options.includes(to)}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold p-3 rounded-lg transition"
                >
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>

                <div className="mt-6 bg-slate-700 p-4 rounded-lg text-center">

                    <p className="text-gray-400 mb-2">
                        Converted Amount
                    </p>

                    <h2 className="text-2xl font-bold text-white break-words">
                        {convertedAmount === null
                            ? '0.00'
                            : convertedAmount.toFixed(2)} {to.toUpperCase()}
                    </h2>

                </div>

            </div>

        </div>
    )
}

export default App