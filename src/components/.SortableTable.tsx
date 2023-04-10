import {useState} from 'react'
import Table from './Table'
import {DataProps} from './Table'

const SortableTable = (props: DataProps) => {
    const {config, data} = props
    const [sortOrder, setSortOrder] = useState<string | null>(null)
    const [sortBy, setSortBy] = useState<string | null>(null)

    const handleClick = (label: string) => {
        if (sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        } else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        } else if (sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(null)
        }
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }

        return {
            ...column,
            header: () => (
                <th onClick={() => handleClick(column.label)}>
                    {column.label} is sortable
                </th>
            ),
        }
    })

    // Only sort data if sortOrder && sortBy are not null
    // Make a copy of the 'data' prop
    // Find the correct sortValue function and use it for sorting
    let sortedData = data
    if (sortOrder && sortBy) {
        const {sortValue} = config.find((column) => column.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder
            } else {
                return (valueA - valueB) * reverseOrder
            }
        })
    }

    return <Table {...props} config={updatedConfig} />
}

export default SortableTable
