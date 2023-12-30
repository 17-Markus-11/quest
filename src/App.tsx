import React, { Component } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

class App extends Component {
    render(): React.ReactNode {
        return <>
            <div className="app-wrapper">
                <div className='app-wrapper-content'>
                    <Outlet />
                </div>
            </div>
        </>
    }
}

export default App;
