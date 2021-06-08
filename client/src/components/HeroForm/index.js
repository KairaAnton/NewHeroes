import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import path from 'path';
import styles from './HeroForm.module.sass';
import CONSTANS from '../../CONSTANS';




function HeroForm() {
   const history = useHistory();

  const imagePath = path.join(CONSTANS.ROOT_PATH, '/public/images')
  return (
    <Formik
      initialValues={{
        nickname: '',
        realName: '',
        originDescription: '',
        catchPhrase: '',
        superpowers: '',
        images: ''
      }}
      onSubmit={values => {
        history.push('/superheroes');

      }}
    >
      {formik => (
        <Form className={styles.form}>
          <span>Nickname hero</span>
          <Field name="nickname" className={styles.fieldMin} />
          <span>Realname hero</span>
          <Field name="realName" className={styles.fieldMin} />
          <span>Superhero image</span>
          <Field name="images" type="file" accept="image/*" />
          <span> origin description</span>
          <Field name="originDescription" className={styles.fieldMax} as='textarea' />
          <span>superpowers</span>
          <Field name="superpowers" className={styles.fieldMax} as='textarea' />
          <span>catch phrase</span>
          <Field name="catchPhrase" className={styles.fieldMax} as='textarea' />
          <button type="submit" className={styles.fieldBtn}>Create superhero</button>
        </Form>
      )}
    </Formik>
  );
}

export default HeroForm;
