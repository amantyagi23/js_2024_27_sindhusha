/* eslint-disable react/prop-types */

import { user } from "../../modules/users/services/userService"

const AuthenticatedRoutes = ({ children }) => {
    
    if (user !== null) {
        return <>{children}</>
    }
    return (
        <div> Not Authenticated please Login</div>
    )
}

export default AuthenticatedRoutes