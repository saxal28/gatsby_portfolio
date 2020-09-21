import React from 'react'

export const GridItem = ({ children, xs, sm, md, lg, xl }) => {
  const buildCol = (span, size) => `col-${span}-${size}`
  const colClasses = (() => {
    const classes = ['col']
    if(xs) classes.push(buildCol(xs, 'xs'))
    if(sm) classes.push(buildCol(sm, 'sm'))
    if(md) classes.push(buildCol(md, 'md'))
    if(lg) classes.push(buildCol(lg, 'lg'))
    if(xl) classes.push(buildCol(xl, 'xl'))

    return classes.join(' ')
  })()

  return <div className={`${colClasses}`}>{children}</div>
}

export const Grid = ({ children }) => <div className='row'>{children}</div>