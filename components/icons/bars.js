import * as React from 'react'

function SvgBars(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 50 50" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5a5 5 0 015-5h40a5 5 0 010 10H5a5 5 0 01-5-5zm0 20a5 5 0 015-5h40a5 5 0 010 10H5a5 5 0 01-5-5zm5 15a5 5 0 000 10h40a5 5 0 000-10H5z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgBars
