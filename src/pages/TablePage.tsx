import Table from '../components/Table'

function TablePage() {
    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4},
    ]

    const config = [
        {label: 'Name', render: (fruit: any) => fruit.name},
        {
            label: 'Color',
            render: (fruit: any) => (
                <div className={`p-3 m-2 ${fruit.color}`}></div>
            ),
        },
        {
            label: 'Score',
            render: (fruit: any) => fruit.score,
            header: () => {
                return <th>Score</th>
            },
        },
    ]

    const keyFn = (data: any) => {
        return data.name
    }
    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage
