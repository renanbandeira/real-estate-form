import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { setEmail } from "../redux/actions";
import { ContainerProps } from "../redux/types";

import Page from "../components/Page";

function EmailFormPage(props: ContainerProps) {
  const history = useHistory();
  const [email, setEmailState] = useState<string>(props.store.email);

  const changeEmail = (event: React.BaseSyntheticEvent): void => {
    setEmailState(event.target.value);
  };
  const handleSubmit = (event: React.BaseSyntheticEvent): void => {
    event.preventDefault();
    props.dispatch(setEmail(email));
    history.push("/Phone");
  };
  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="emailForm">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email Adddress"
            value={email}
            onChange={changeEmail}
            required
          />
          <Form.Text className="text-muted">Press Enter to submit</Form.Text>
        </Form.Group>
      </Form>
    </Page>
  );
}

export default EmailFormPage;
