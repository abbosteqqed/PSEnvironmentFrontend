import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceDetails from "../components/sections/ServiceDetails";
export default function ServiceDetailsPage() {
	return (
		<>
			<Layout>
				<PageTitle pageName="Service Details" />
				<ServiceDetails />
			</Layout>
		</>
	);
}


