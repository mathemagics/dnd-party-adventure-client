import React, { PureComponent } from 'react';
import { func, string } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

class CampaignsForm extends PureComponent {
  static propTypes = {
    onSubmit: func.isRequired,
    handleSubmit: func.isRequired,
    title: string.isRequired,
  }

  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="title">Title</label>
            <Field name="title" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field name="description" component="input" type="text" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'campaign' })(CampaignsForm);
