import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase"
import {actionTypes} from "./reducer"
import {UseStateValue} from "./StateProvider"

function Login() {
    const [state, dispatch] = UseStateValue()

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user.displayName)
        }).catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"
                
                alt=""/>
                <img src="https://logos-marques.com/wp-content/uploads/2020/04/Facebook-logo.png" alt=""/>
                
            </div>
            <Button type="submit" onClick={signIn} >
                Sign In
            </Button>
        </div>
    )
}

export default Login
