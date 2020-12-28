import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { setFullName } from "../redux/actions";
import { ContainerProps } from "../redux/types";

import Page from "../components/Page";

function FullNameFormPage(props: ContainerProps) {
  const history = useHistory();
  const [fullName, setFullNameState] = useState<string>(props.store.fullName);

  const changeFullName = (event: React.BaseSyntheticEvent): void => {
    setFullNameState(event.target.value);
  };
  const handleSubmit = (event: React.BaseSyntheticEvent): void => {
    event.preventDefault();
    props.dispatch(setFullName(fullName));
    history.push("/Email");
  };
  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullNameForm">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={changeFullName}
            required
          />
          <Form.Text className="text-muted">Press Enter to submit</Form.Text>
        </Form.Group>
      </Form>
    </Page>
  );
}

export default FullNameFormPage;
