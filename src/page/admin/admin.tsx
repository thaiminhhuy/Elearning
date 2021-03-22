import React from 'react'
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin";
import TableUser from "../../components/Table/TableUser/TableUser"
import TableCourse from '../../components/Table/TableCourse/TableCourse';
export default function AdminPage() {
    return (
        <React.Fragment>
            <NavbarAdmin />
             {/* <TableUser/> */}
             <TableCourse />
        </React.Fragment>
    )
}
