import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onFormSubmit }) => {
  return (
    <Formik
      initialValues={{ value: '' }}
      onSubmit={(values, { resetForm }) => {
        onFormSubmit(values.value.trim());
        resetForm();
      }}
    >
      <SearchbarHeader>
        <Form as={SearchForm}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <Field
            as={SearchFormInput}
            name="value"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchbarHeader>
    </Formik>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
