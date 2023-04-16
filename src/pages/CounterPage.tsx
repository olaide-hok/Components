import {useReducer} from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'
interface CounterPageProps {
    initialCount: any
}

const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const SET_VALUE_TO_ADD = 'change_value_to_add'
const ADD_VALUE_TO_COUNT = 'add_value_to_count'

const reducer = (state: any, action: any) => {
    // Using Switch Cases
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            }

        default:
            return state
    }

    // Using If-Statements
    // if (action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count + 1,
    //     }
    // }
    // if (action.type === DECREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count - 1,
    //     }
    // }
    // if (action.type === SET_VALUE_TO_ADD) {
    //     return {
    //         ...state,
    //         valueToAdd: action.payload,
    //     }
    // }

    // return state
}

function CounterPage({initialCount}: CounterPageProps) {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    })

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT,
        })
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
        })
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const value = parseInt(event.currentTarget.value)
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event?.preventDefault()
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        })
        // setCount(count + valueToAdd)
        // setValueToAdd(0)
    }

    return (
        <Panel>
            <h1>Count is {state.count}</h1>
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
                    value={state.valueToAdd || ''}
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
