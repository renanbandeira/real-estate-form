import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { ContainerProps } from "../redux/types";
import { SALARY_INDICATORS } from "../redux/constants";

import Page from "../components/Page";

function SummaryPage(props: ContainerProps) {
  const { fullName, phoneNumber, email, salaryIndicator } = props.store;
  return (
    <Page>
      <Card bg="light" text="dark" className="mb-2">
        <Card.Header as="h3">Form Review</Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup>
              <ListGroup.Item>Full Name: {fullName}</ListGroup.Item>
              <ListGroup.Item>Phone Number: {phoneNumber}</ListGroup.Item>
              <ListGroup.Item>Email Address: {email}</ListGroup.Item>
              <ListGroup.Item>
                Salary Indicator: {SALARY_INDICATORS[salaryIndicator]}
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </Page>
  );
}

export default SummaryPage;
