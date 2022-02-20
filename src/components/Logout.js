import React from 'react'

export function Logout() {

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className='footer'>
            <form onSubmit={handleSubmit}>
                <input type='Submit' value='Logout' readOnly/>
            </form>
        </div>
    )
}