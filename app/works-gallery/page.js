"use client";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import WorksMainCard from "@/src/components/sections/WorksMainCard";

export default function WorksGallery() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1}>
        <Container fluid className="mt_150" style={{ height:"100vh" }}>
          <Row className="justify-content-center">
            <Col xl={4} lg={4} md={6} sm className="mb-4">
              <WorksMainCard />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
