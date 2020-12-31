import React, {PropsWithChildren} from 'react'
import style from './Button.module.scss'

interface ButtonProps {
  onClick: () => void
}

export function Button({onClick, children}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={style.btn} onClick={onClick}>
      {children}
    </button>
  )
}
