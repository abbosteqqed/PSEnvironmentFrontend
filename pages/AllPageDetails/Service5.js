import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import Service2 from "../../components/sections/Services/Service2"
export default function ServiceDetailsPage() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Service2" />
                <Service2  />
            </Layout>
        </>
    );
}