import React from "react";
import MaterialTable from "material-table"
interface Column {
    name: string;
    occupation: string;
    age: number;
}
export default function TableUser() {
    const { useState } = React;

  
    const [dataStore, setDataStore] = useState([
        { name: "Jon", job: "Software Dev", age: 29 }
    ]);
  
  return (
    <React.Fragment>
      <MaterialTable
        title="Editable Preview"
        columns={[
            {
                title: "Name",
                field: "name"
            },
            {
                title: "Occupation",
                field: "job"
            },
            {
                title: "Age",
                field: "age",
                type: "numeric"
            }
        ]}
        data={dataStore}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setDataStore([...dataStore, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...dataStore];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setDataStore([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...dataStore];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setDataStore([...dataDelete]);

                resolve();
              }, 1000);
            })
        }}
      />
    </React.Fragment>
  );
}
