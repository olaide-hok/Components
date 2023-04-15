import Button from '../components/Button'
import useCounter from '../hooks/use-counter'

interface CounterPageProps {
    initialCount: any
}

function CounterPage({initialCount}: CounterPageProps) {
    const {count, increment} = useCounter(initialCount)

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button primary onClick={increment}>
                Increment
            </Button>
        </div>
    )
}

export default CounterPage
