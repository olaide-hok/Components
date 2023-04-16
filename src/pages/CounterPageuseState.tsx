import {useState} from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'
interface CounterPageProps {
    initialCount: any
}

function CounterPage({initialCount}: CounterPageProps) {
    const [count, setCount] = useState(initialCount)
    const [valueToAdd, setValueToAdd] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const value = parseInt(event.currentTarget.value)
        setValueToAdd(value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event?.preventDefault()
        setCount(count + valueToAdd)
        setValueToAdd(0)
    }

    return (
        <Panel>
            <h1>Count is {count}</h1>
            <div className="flex flex-row">
                <Button primary onClick={increment}>
                    Increment
                </Button>
                <Button primary onClick={decrement}>
                    Decrement
                </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    title="value"
                    value={valueToAdd || ''}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button primary>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage
