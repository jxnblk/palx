import React from 'react'

export default props => {
  const { colors } = props.location.state
  if (!colors) return 'todo: redirect'
  const json = JSON.stringify(colors, null, 2)

  return (
    <pre>
      {json}
    </pre>
  )
}
