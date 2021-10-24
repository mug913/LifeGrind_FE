import React from 'react'

export function Logout() {

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.clear();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='Submit' value='Logout'/>
            </form>
        </div>
    )
}