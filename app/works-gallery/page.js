import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Layout from "@/components/layout/Layout";

const waitSeconds = () => {
    return new Promise((resolve) => setTimeout(resolve, 1500));
}


export default async function WorksGallery() {
    await waitSeconds();

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Container fluid className="mt_150">
                    <div>
                        <h1>Works Gallery</h1>
                        <Row className="justify-content-center">

                            <Col key={index} xl={4} lg={4} md={6} sm
                                className="mb-4">
                                <h2>Hola, soy la galería de trabajos</h2>
                            </Col>
                        </Row>

                    </div>

                </Container>

            </Layout>
        </>
    );
};

