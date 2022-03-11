import { useReducer } from "react";
import { setCookies, removeCookies } from "cookies-next";

const initial = {
    username: null,
}

const userReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            const hour = 3600
            const user = action.payload
            setCookies('user', { user: 'logged', token: user.token }, { maxAge: hour })

            return {...state, username: user.username}

        case 'LOGOUT':
            removeCookies('user')
            return {...state, username: null}

        default:
            return state

    }
}

export const useUser = () => {
    const [state, dispatch] = useReducer(userReducer, initial)

    const { username } = state

    return {
        username,
        logIn: credentials => dispatch({ type: 'LOGIN', payload: credentials }),
        logOut: () => dispatch({ type: 'LOGOUT' })
    }
}