export default function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            const user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
            return {
                ...state, user
            }
        case 'LOGOUT':
            localStorage.removeItem('user')
            return {
                ...state, user: false
            }
        default: { }
    }
}