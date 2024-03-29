import React from 'react'
import className from 'classnames'

type ButtonProps = {
  children: string | any
  outline?: Boolean
  rounded?: Boolean
  [rest: string]: any
} & (
  | {
      primary: Boolean
      secondary?: never
      success?: never
      warning?: never
      danger?: never
    }
  | {
      primary?: never
      secondary: Boolean
      success?: never
      warning?: never
      danger?: never
    }
  | {
      primary?: never
      secondary?: never
      success: Boolean
      warning?: false
      danger?: false
    }
  | {
      primary?: never
      secondary?: never
      success?: never
      warning: Boolean
      danger?: never
    }
  | {
      primary?: never
      secondary?: never
      success?: never
      warning?: never
      danger: Boolean
    }
)

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}: ButtonProps) => {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
  )
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}

// Button.propTypes = {
//     checkvariationvalue: {{ primary, secondary, success, warning, danger}} => {
//         const count = Number(!!primary)
//         + Number(!!secondary)
//         + Number(!!warning)+ Number(!!success)+ Number(!!danger)

//         if(count > 1) {
//             return new Error('Only one of primary, secondary, success, warning, dsanger can be true')
//         }
//     }
// }

export default Button
