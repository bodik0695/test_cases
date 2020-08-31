import * as React from "react"
import Menu from "../../Components/Common/Menu";

export const AuthorizationPage = (props) => {
    
    return <div>
        <Menu />
        {props.children}
    </div>
}