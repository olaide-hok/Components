import classNames from 'classnames'
import React from 'react'
import useNavigation from '../hooks/use-navigation'

interface LinkProps {
  children: React.ReactNode
  to: string
  className?: string
  activeClassName?: string
}

const Link = ({to, children, className, activeClassName}: LinkProps) => {
  const {navigate, currentPath} = useNavigation()

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  )

  const handleClick = (event: any) => {
    if (event.metakey || event.ctrlKey) {
      return
    }
    event.preventDefault()
    navigate(to)
  }

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link
