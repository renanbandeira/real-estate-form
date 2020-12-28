import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { setSalaryIndicator } from "../redux/actions";
import { SALARY_INDICATORS } from "../redux/constants";
import { ContainerProps } from "../redux/types";

import Page from "../components/Page";

function SalaryIndicatorFormPage(props: ContainerProps) {
  const history = useHistory();
  const [salaryIndicator, setSalaryIndicatorState] = useState<string>(
    props.store.salaryIndicator
  );

  const changeSalaryIndicator = (event: React.BaseSyntheticEvent): void => {
    if (event.target.checked) {
      setSalaryIndicatorState(event.target.id);
    }
  };

  const submitPage = (): void => {
    if (salaryIndicator) {
      props.dispatch(setSalaryIndicator(salaryIndicator));
      history.push("/Summary");
    }
  };

  const handleSubmit = (event: React.BaseSyntheticEvent): void => {
    event.preventDefault();
    submitPage();
  };

  const onKeyUp = (event: React.KeyboardEvent): void => {
    event.preventDefault();
    if (event.keyCode === 13 || event.key === "Enter") {
      submitPage();
    }
  };

  return (
    <Page>
      <Form onSubmit={handleSubmit} onKeyUp={onKeyUp}>
        <Form.Group controlId="salaryIndicatorForm">
          <Form.Label>Salary Indicator</Form.Label>
          {Object.keys(SALARY_INDICATORS).map((salaryIndicatorKey) => {
            const salaryIndicatorValue = SALARY_INDICATORS[salaryIndicatorKey];
            return (
              <Form.Check
                type="radio"
                id={salaryIndicatorKey}
                key={salaryIndicatorKey}
                label={salaryIndicatorValue}
                checked={salaryIndicator === salaryIndicatorKey}
                onChange={changeSalaryIndicator}
              />
            );
          })}
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Page>
  );
}

export default SalaryIndicatorFormPage;
