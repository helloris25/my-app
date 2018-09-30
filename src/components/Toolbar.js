import React from 'react'

class Toolbar extends React.PureComponent {

    render() {
        return (
            <nav className='navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow'>
                <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='#'>LookStock</a>

                <ul className='navbar-nav px-3'>
                    <li className='nav-item text-nowrap'>
                        <a className='nav-link' href='#'>Sign In</a>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Toolbar