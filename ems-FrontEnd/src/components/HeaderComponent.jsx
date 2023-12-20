import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark' style={{backgroundColor: "#200E3A"}} >
                <a className="navbar-brand" href='http://localhost:3000/employees'>Employee Management System</a>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent