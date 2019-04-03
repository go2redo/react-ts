import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import logo from './logo.svg';
import './App.css';

import { GET_DATA, POST_DATA } from './store/constants';
import { postData } from './store/actions';

interface IProps {
  postData?: any;
  getData?: any;
  data?: any;
}

const TodoSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

class App extends PureComponent<IProps> {
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getData();
  }

  handleSubmit(value: any) {
    this.props.postData(value);
  }

  render() {
    const { data } = this.props;

    const createList = data.map((i: any) => (
      <li key={i.id}>
        {i.id} / {i.name} / {i.status.toString()}
      </li>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div>
            <Formik
              initialValues={{
                name: '',
              }}
              validationSchema={TodoSchema}
              onSubmit={value => this.handleSubmit(value)}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field name="name" type="text" placeholder="type here..." />
                  <div>
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                  </div>
                  <button type="submit">add</button>
                </Form>
              )}
            </Formik>
          </div>
          <ul>{createList}</ul>
        </header>
      </div>
    );
  }
}

export default connect(
  ({ data }: any) => ({ data }),
  dispatch => ({
    getData: () => dispatch({ type: GET_DATA }),
    postData: (payload: any) => dispatch(postData(payload)),
  }),
)(App);
