import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

class CampaignsCreate extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting', e);
  }

  render() {
    return (
      <div>
        <h2>Create New Campaign</h2>
        <form onSubmit={this.handleSubmit}>
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

const CampaignsCreateForm = reduxForm({
  form: 'campaign',
})(CampaignsCreate);

export default CampaignsCreateForm;
