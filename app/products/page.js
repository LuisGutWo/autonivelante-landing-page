import React from "react";
import { Container } from "react-bootstrap";

import Layout from "@/src/components/layout/Layout";



import { NEXT_PRODUCTS_API_URL } from "../config";
import MainProductCard from "./MainProductCard";

const waitSeconds = () => {
    return new Promise(resolve => { setTimeout(resolve, 1500) })
}

export default async function MainProductsPage() {
    await waitSeconds()
    const res = await fetch(NEXT_PRODUCTS_API_URL);
    const data = await res.json();

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Container fluid className="mt_150">
                    <div className="container p-5 d-flex justify-content-center align-items-center flex-row flex-wrap gap-3">
                        {
                            data.map((item, index) => (
                                <MainProductCard key={index} item={item} />

                            ))
                        }
                    </div>
                </Container>

            </Layout>
        </>
    );
};