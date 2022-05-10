import React from 'react'

const Card = (props: {
  title: string
  href: string
  children?: React.ReactNode
  className: string
}) => {
  const data = (
    <div
      className={`w-96 rounded-xl border p-6 text-left hover:cursor-pointer hover:text-blue-600 ${props.className}`}
    >
      <h3 className="text-2xl font-bold">{props.title}</h3>
      {props.children}
    </div>
  )

  return props.href ? <a href={props.href}>{data}</a> : data
}

export default Card
