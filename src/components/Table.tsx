import {Fragment, ReactNode} from 'react'

interface DataProps {
    data: {
        name: string
        color: string
        score: number
    }[]
    config: {
        label: string
        render: (data: any) => ReactNode
        header?: () => ReactNode
    }[]
    keyFn: (data: any) => any
}

function Table({data, config, keyFn}: DataProps) {
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return <th key={column.label}>{column.label}</th>
    })
    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
                <td className="p-3" key={column.label}>
                    {column.render(rowData)}
                </td>
            )
        })
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    )
}

export default Table
