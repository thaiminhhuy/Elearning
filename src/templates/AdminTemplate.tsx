import React from 'react'
import {Route, Redirect} from "react-router-dom";
const AdminLayout = (props: any) => {
   return (
       <React.Fragment>
           {props.children}
       </React.Fragment>

   )
}
interface routeComponent {
    Component: any;
    key: any;
    exact: any;
    path: any;
}
export const AdminTemplate: React.FC<routeComponent> = ({Component , ...props}) => {
    return (
        <Route 
        {...props}
        render = {propsComponent => {
           if (localStorage.getItem("userAdmin")) {
            return (
                <AdminLayout>
                    {/* <NavbarAdmin /> */}
                    <Component {...propsComponent}/>
                </AdminLayout>
            )
           }else{
               return <Redirect to="/admin"/>
           }
        }}
        />
    )
          
}