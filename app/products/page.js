import React from "react";
import { Container } from "react-bootstrap";

import Layout from "@/components/layout/Layout";


import MainProductCard from "@/components/elements/MainProductCard";

const waitSeconds = () => {
    return new Promise(resolve => { setTimeout(resolve, 1500) })
}

export default async function MainProductsList() {
    await waitSeconds()
    const res = await fetch("https://autonivelante-725bf-default-rtdb.firebaseio.com/products.json");
    const data = await res.json();

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Container fluid className="mt_150">
                    <div className="container p-5 d-flex justify-content-center align-items-center flex-row flex-wrap gap-3">
                        {
                            data.map((item) => (
                                <MainProductCard key={item.id} item={item} />

                            ))
                        }
                    </div>
                </Container>

            </Layout>
        </>
    );
};