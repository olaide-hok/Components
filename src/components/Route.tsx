import React from 'react'
import useNavigation from '../hooks/use-navigation'

interface RouteProps {
  children: React.ReactNode
  path: string
}

const Route = ({path, children}: RouteProps) => {
  const {currentPath} = useNavigation()

  if (path === currentPath) {
    return children
  }
  return null
}

export default Route
