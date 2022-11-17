import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setAuthUsername } from '../redux/setUser.action';


export function AuthenticationUser() {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const dispatch = useDispatch()
    const username = JSON.parse(localStorage.getItem("username") || null!)

    useEffect(() => {
        if (username != null) {
            setIsAuthenticated(true)
            dispatch(setAuthUsername(username))
        } else {
            setIsAuthenticated(false)
        }
    }, [username])




    return isAuthenticated
}