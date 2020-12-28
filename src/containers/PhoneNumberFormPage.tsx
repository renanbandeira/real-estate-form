import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { setPhoneNumber } from "../redux/actions";
import { ContainerProps } from "../redux/types";

import Page from "../components/Page";

function PhoneNumberFormPage(props: ContainerProps) {
  const history = useHistory();
  const [phoneNumber, setPhoneNumberState] = useState<string>(
    props.store.phoneNumber
  );

  const changePhoneNumber = (event: React.BaseSyntheticEvent): void => {
    setPhoneNumberState(event.target.value);
  };
  const handleSubmit = (event: React.BaseSyntheticEvent): void => {
    event.preventDefault();
    if (phoneNumber) {
      props.dispatch(setPhoneNumber(phoneNumber));
      history.push("/Salary");
    }
  };
  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="phoneNumberForm">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={changePhoneNumber}
            required
          />
          <Form.Text className="text-muted">Press Enter to submit</Form.Text>
        </Form.Group>
      </Form>
    </Page>
  );
}

export default PhoneNumberFormPage;
