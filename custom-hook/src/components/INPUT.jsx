function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    return (
        <div className={`bg-white p-4 rounded-xl text-sm flex shadow-sm ${className}`}>

            <div className="w-1/2">
                <label className="text-gray-500 mb-2 inline-block font-medium">
                    {label}
                </label>

                <input
                    type="number"
                    min="0"
                    step="any"
                    placeholder="Enter amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange?.(e.target.value)}
                    className="outline-none w-full bg-transparent py-1.5 text-xl font-semibold text-gray-800 placeholder:text-gray-300"
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-gray-500 mb-2 w-full font-medium">
                    Currency Type
                </p>

                <select
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange?.(e.target.value)}
                    disabled={currencyDisable}
                    className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none border border-gray-200 text-gray-800 font-semibold focus:border-blue-500 transition-all"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    )
}

export default InputBox