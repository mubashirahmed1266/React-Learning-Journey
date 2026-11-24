import React from 'react'
import UserContextProvider from './context/usercontextprovider'
import Login from './components/login'
import Profile from './components/profile'

function App() {

    return (
        <UserContextProvider>
            <h1>Today I will learn Context API</h1>
            <Login />
            <Profile />
        </UserContextProvider>
    )
}

export default App