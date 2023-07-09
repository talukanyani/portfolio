import { useState } from 'react'

export default function usePost() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [isError, setIsError] = useState(false)

    const submit = (url, data) => {
        setIsLoading(true)

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(() => {
            setIsLoading(false)
            setIsSent(true)
        }).catch(() => {
            setIsLoading(false)
            setIsError(true)
        })
    }

    return [submit, isLoading, isSent, isError]
}
