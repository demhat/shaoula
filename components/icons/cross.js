import * as React from 'react'

function SvgCross(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.621 1.121a3 3 0 00-4.242 0L23.912 12.588l-11.29-11.29a3 3 0 00-4.243 0l-7.081 7.08a3 3 0 000 4.243l11.29 11.29L1.121 35.38a3 3 0 000 4.242l7.081 7.081a3 3 0 004.243 0l11.467-11.467L35.555 46.88a3 3 0 004.243 0l7.08-7.081a3 3 0 000-4.243L35.236 23.912l11.467-11.467a3 3 0 000-4.243l-7.08-7.08z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgCross
