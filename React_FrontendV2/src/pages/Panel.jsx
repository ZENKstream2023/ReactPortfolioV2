import React from "react";
import "../App.css";
import TotalSales from "../components/totalsales.jsx";
import BestSellers from "../components/bestsellers.jsx";
import Sidebar from "../components/Sidebar.jsx";
export const DashBoard = () => {
	return (
		<div className="container-fluid">

			<div className="row">

			<Sidebar/>

				<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
					<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
						<h1 className="h2">Resumen</h1>
					</div>
					<div className="row">
						<div className="col">
							<TotalSales
								id="myChart"
								width="900"
								height="380"
								className="my-4 w-100"
							/>
						</div>
						<div className="col">
							<BestSellers
								id="myChart"
								width="900"
								height="380"
								className="my-4 w-100"
							/>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};
export default DashBoard;
