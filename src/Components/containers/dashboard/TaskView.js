import React from 'react'
import { useFela } from 'react-fela'

const TaskView = () => {
    const { css } = useFela()

    const rules = () => ({ 
        // width: '84%',
        flex: '1 1 auto',
        backgroundColor: 'currentColor',
        minHeight: '100%',
      
    })
  return (
    <div className={css(rules)}>TaskView</div>
  )
}

export default TaskView