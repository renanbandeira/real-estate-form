import React, { useReducer } from 'react';
import { Switch, Route, useLocation, useHistory, Link } from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import FullNameFormPage from './containers/FullNameFormPage';
import EmailFormPage from './containers/EmailFormPage';
import PhoneNumberFormPage from './containers/PhoneNumberFormPage';
import SalaryIndicatorFormPage from './containers/SalaryIndicatorFormPage';
import SummaryPage from './containers/SummaryPage';

import ProgressIndicator from './components/ProgressIndicator';

import { reducer, initialState } from './redux/store';
import { ContainerProps } from './redux/types';
import { PAGE_BY_STEP } from './redux/constants';

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const currentKey = location.pathname.split('/')[1] || '/';
  const [store, dispatch] = useReducer(reducer, initialState);

  const stepByLocation = PAGE_BY_STEP.indexOf(currentKey);
  if (stepByLocation === -1 || stepByLocation > store.currentStep) {
    history.replace(PAGE_BY_STEP[store.currentStep]);
  }

  const renderComponent = (Component: React.FC<ContainerProps>) => () => (
    <Component store={store} dispatch={dispatch} />
  );
  return (
    <div>
      <ProgressIndicator>
        {PAGE_BY_STEP.map((pageName, index) => {
          if (index <= store.currentStep) {
            return (<li key={pageName} className="active"><Link to={`/${pageName}`}>{pageName}</Link></li>);
          }
          return (<li key={pageName}>{pageName}</li>);
        })}
      </ProgressIndicator>
      <TransitionGroup component="main">
        <CSSTransition key={currentKey} timeout={1000} classNames="route" unmountOnExit>
          <div className="route__container">
            <Switch location={location}>
              <Route path="/Name" component={renderComponent(FullNameFormPage)} />
              <Route path="/Email" component={renderComponent(EmailFormPage)} />
              <Route path="/Phone" component={renderComponent(PhoneNumberFormPage)} />
              <Route path="/Salary" component={renderComponent(SalaryIndicatorFormPage)} />
              <Route path="/Summary" component={renderComponent(SummaryPage)} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
