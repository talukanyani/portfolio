import { useState, useEffect } from 'react'

export default function useTypingEffect(text) {
    const [chars, setChars] = useState('')
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [waitingTime, setWaitingTime] = useState(0)

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (waitingTime > 0) {
                setWaitingTime((prevCount) => prevCount - 1)
            } else if (isDeleting) {
                setChars(prevChars => prevChars.slice(0, -1))
                setCharIndex(prevIndex => prevIndex - 1)

                if (charIndex === 1) {
                    setIsDeleting(false)
                    setWaitingTime(10)
                }
            } else {
                setChars(prevChars => (prevChars + text[charIndex]))
                setCharIndex(prevIndex => prevIndex + 1)

                if (charIndex === (text.length - 1)) {
                    setIsDeleting(true)
                    setWaitingTime(100)
                }
            }
        }, 200)

        return () => clearInterval(typingInterval)
    })

    return chars
}
