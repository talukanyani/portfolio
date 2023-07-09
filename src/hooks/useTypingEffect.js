import { useState, useEffect } from 'react'

export default function useTypingEffect(texts) {
    const [chars, setChars] = useState('')
    const [charIndex, setCharIndex] = useState(0)
    const [textIndex, setTextIndex] = useState(0)
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
                    setTextIndex(prevIndex => (prevIndex + 1) % texts.length)
                }
            } else {
                setChars(prevChars => (prevChars + texts[textIndex][charIndex]))
                setCharIndex(prevIndex => prevIndex + 1)

                if (charIndex === (texts[textIndex].length - 1)) {
                    setIsDeleting(true)
                    setWaitingTime(20)
                }
            }
        }, 150)

        return () => clearInterval(typingInterval)
    })

    return chars
}