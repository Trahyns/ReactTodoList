import React from 'react'
import Link from './Link'

const Top = () => {
    return (
        <div className="todo-tab">
            <Link filter="SHOW_ALL">All Tasks</Link>
            <Link filter="SHOW_ACTIVE">Pending Tasks</Link>
            <Link filter="SHOW_COMPLETED">Completed Tasks</Link>
        </div>
    )
}

export default Top