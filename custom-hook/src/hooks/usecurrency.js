import { useEffect, useState } from "react"

function usecurrency(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        const controller = new AbortController()

        const fetchCurrency = async () => {
            try {
                let response = await fetch(
                    `https://latest.currency-api.pages.dev/v1/currencies/${currency.toLowerCase()}.json`,
                    { signal: controller.signal }
                )

                if (!response.ok) {
                    response = await fetch(
                        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`,
                        { signal: controller.signal }
                    )
                }

                if (!response.ok) {
                    throw new Error("Currency API request failed")
                }

                const result = await response.json()

                setData(result[currency.toLowerCase()] || {})

            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Currency API Error:", error)
                    setData({})
                }
            }
        }

        fetchCurrency()

        return () => controller.abort()

    }, [currency])

    return data
}

export default usecurrency