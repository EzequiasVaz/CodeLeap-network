import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuthUsername, setLocalStorageUsername } from '../../redux/setUser.action'
import { LoginButton, LoginContainer, LoginForm, LoginLabel, LoginTitle, LoginUsernameInput } from './style'

export function LoginComponent() {


    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')

    const dispatch = useDispatch()


    return (
        <LoginContainer>
            <LoginTitle>Welcome to CodeLeap network!</LoginTitle>
            <LoginForm method='POST' onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                dispatch(setAuthUsername(username))
                dispatch(setLocalStorageUsername(username))
                navigate('/main')
            }} >
                <LoginLabel htmlFor='txtUsername'>
                    Please enter your username
                </LoginLabel>
                <LoginUsernameInput placeholder='e.g Ezequias Vaz' id='txtUsername' required minLength={3}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.currentTarget.value)
                    }} />
                {
                    username.length >= 3 ? <LoginButton type='submit' id='btnEnter'>Enter</LoginButton> : <LoginButton type='submit' id='btnEnter' disabled>Enter</LoginButton>
                }

            </LoginForm>
        </LoginContainer>
    )
}