import React, {useState} from 'react'
import Dropdown from '../components/Dropdown'

interface OptionProps {
  label: string
  value: string
  (prevState: null): null
}

function DropdownPage() {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option: OptionProps) => {
    setSelection(option)
  }

  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
  ]
  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  )
}

export default DropdownPage
