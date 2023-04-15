import {useEffect, useState} from 'react'

const useCounter = (initialCount: any) => {
    const [count, setCount] = useState(initialCount)

    useEffect(() => {
        console.log(count)
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }
    return {
        count: count,
        increment: increment,
    }
}

export default useCounter
