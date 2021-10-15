import { useEffect, useState } from "react"
import { AgGridReact } from 'ag-grid-react';

function getRowNodeId(data) {
	return data.name
}


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const [rowData, setRowData] = useState()
	
	useEffect(() => {
		fetch("https://fakerapi.it/api/v1/companies?_quantity=50").then(async res => {
			console.log(res)
			const body = await res.json()
			console.log(body.data)
			setRowData(body.data)
		})
	}, [])

	return <AgGridReact
		className="ag-theme-balham"
		immutableData
		rowData={rowData}
		columnDefs={[
			{
				field:"name",
				colId:"name",

			},
			{
				field:"email",
				colId:"email",

			},
			{
				field:"phone",
				colId:"phone",

			},
			{
				field:"country",
				colId:"country",

			}
		]}
		getRowNodeId={getRowNodeId}
	/>
}