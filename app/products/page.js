'use client'
import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import Layout from "@/components/layout/Layout";
import data from "@/data/products.json";

import MainProductCard from "@/components/elements/MainProductCard";
import Loader from "@/app/Loader";

const MainProductsList = () => {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Container fluid className="mt_150">
                    <div className="container p-5 d-flex justify-content-center align-items-center flex-row flex-wrap gap-3">
                        {
                            data.map((item) => (
                                <MainProductCard key={item.id} item={item}/>

                            ))
                        }
                    </div>
                </Container>
                
            </Layout>
        </>
    );
};

export default MainProductsList;