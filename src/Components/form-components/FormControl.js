// import React from 'react'
import { useFela } from 'react-fela'

const rule = ({m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr}) => ({
    width: "100%",
    marginTop: `${mt}rem`,
    marginBottom: `${mb}rem`,
    marginLeft: `${ml}rem`,
    marginRight: `${mr}rem`,
    margin: mx ? `0 ${mx}rem` : my ? `${my}rem 0`: `${m}rem`,
    paddingTop: `${pt}rem`,
    paddingBottom: `${pb}rem`,
    paddingLeft: `${pl}rem`,
    paddingRight: `${pr}rem`,
    padding: px ? `0 ${px}rem` : py ? `${py}rem 0`: `${p}rem`,
    
})

const FormControl = ({ children, m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr }) => {

    const { css } = useFela({m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr})

  return (
    <div
        className={css(rule)}
    >{children}</div>
  )
}

export default FormControl