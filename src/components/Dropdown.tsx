import React, {useEffect, useRef, useState} from 'react'
import {GoChevronDown} from 'react-icons/go'
import Panel from './Panel'

interface DropdownProps {
  options: {label: string; value: string}[]
  value: null | {label: string}
  onChange: Function
}
interface OptionProps {
  label: string
  value: string
}

const Dropdown = ({options, value, onChange}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (event: any) => {
      if (!divEl.current) {
        return
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen)
  }

  const handleOptionClick = (option: OptionProps) => {
    setIsOpen(false)
    // What option did the user click on?
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    )
  })

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}>
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown
