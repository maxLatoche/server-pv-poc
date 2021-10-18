/* eslint-disable eqeqeq */
import { useEffect, useState } from "react"
import { AgGridReact } from 'ag-grid-react';
import Spinner from "./Spinner";

function getRowNodeId(data) {
	return data._id
}


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const [rowData, setRowData] = useState()
	const [filterParams, setFilterParams] = useState([])

	useEffect(() => {
		fetch("https://api.instantwebtools.net/v1/passenger?page=0&size=50").then(async res => {
			const body = await res.json()

			setRowData(body.data)
		})
	}, [])

	useEffect(() => {
		// simulate api call to get filterParams
		setTimeout(() => {
			setFilterParams(
				['Jim', 'Jane', 'Joe']
			)
		}, 500)
	}, [])

	return <AgGridReact
			className="ag-theme-balham"
			immutableData
			rowData={rowData}
			columnDefs={[
				{
					field:"name",
					colId:"name",
					filter: true,
					filterParams: {values: [...filterParams, 'Alice Prince', 'John Doe']}

				},
				{
					field:"trips",
					colId:"email",
				},
			]}
			getRowNodeId={getRowNodeId}
			onBodyScroll={(event) => {
				if (!rowData) return

				// each row is 28 pixels
				if (rowData.length * 28 == event.api.getVerticalPixelRange().bottom) {
					// always going to fetch page 1, in a real app this would fetch page n + 1
					fetch('https://api.instantwebtools.net/v1/passenger?page=1&size=50').then(async res => {
						const body = await res.json()

						setRowData([...rowData, ...body.data])
					})
				}
			}}
			frameworkComponents={{
				LoadingComponent: Spinner
			}}
			loadingOverlayComponent='LoadingComponent'
			onFilterChanged={(e) => {
				e.api.showLoadingOverlay()
				setRowData([])
				setTimeout(() => {
					// we can't actually filter or sort on this free api, but this is where the query would go with sort, limit, filter params etc.	
					// there isn't a meaningful reason for fetching page 2 here, it's just to change the data in rowData state
					fetch('https://api.instantwebtools.net/v1/passenger?page=2&size=50').then(async res => {
						e.api.hideOverlay();
						const body = await res.json()

						setRowData([...body.data])
					})
				}, 2000)
			}}
		/>
}