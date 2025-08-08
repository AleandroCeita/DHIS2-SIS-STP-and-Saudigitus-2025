import {
  ReactFinalForm,
  InputFieldFF,
  SingleSelectFieldFF,
  SwitchFieldFF,
  composeValidators,
  createEqualTo,
  email,
  hasValue,
  Button,
} from "@dhis2/ui";
import React from "react";
import styles from "./formApp.module.css";

const alertValues = (values) => {
  const formattedValuesString = JSON.stringify(values, null, 2);
  alert(formattedValuesString);
};

export const FormApp = () => (
  <div className={styles.container}>
    <ReactFinalForm.Form onSubmit={alertValues}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <ReactFinalForm.Field
              name="SOCIALID"
              label="SOCIALID"
              component={InputFieldFF}
              className={styles.socialId}
              validate={hasValue}
            />
          </div>

          <div className={styles.row}>
            <ReactFinalForm.Field
              required
              name="NumeroDeProcesso"
              label="NumeroDeProcesso"
              component={InputFieldFF}
              className={styles.numeroDeProcesso}
              validate={hasValue}
            />
          </div>
          <div className={styles.row}>
            <ReactFinalForm.Field
              required
              name="firstname"
              label="Primeiro Nome"
              component={InputFieldFF}
              className={styles.firstname}
              validate={hasValue}
            />
          </div>
          <div className={styles.row}>
            <ReactFinalForm.Field
              required
              name="lastname"
              label="Apelido"
              component={InputFieldFF}
              className={styles.lastname}
              validate={hasValue}
            />
          </div>
          <div className={styles.row}>
            <ReactFinalForm.Field
              required
              name="sexo"
              label="Sexo"
              component={SingleSelectFieldFF}
              className={styles.sexo}
              options={[
                { label: "Masculino", value: "Masculino" },
                { label: "Feminino", value: "Feminino" },
              ]}
            />
          </div>

          <div className={styles.row}>
  <ReactFinalForm.Field
    required
    name="dateOfBirth"
    label="Data de nascimento (idade)"
    component={InputFieldFF}
    type="date"  // <- aqui está a mudança!
    className={styles.dateOfBirth}
    validate={hasValue}
  />
</div>
          <div className={styles.row}>
            <ReactFinalForm.Field
              required
              name="contactNumber"
              label="Número de Telemóvel"
              component={InputFieldFF}
              className={styles.dateOfBirth}
              validate={hasValue}
            />
          </div>
<br />
          <div className={styles.row}>
            <Button type="submit" primary>
              Registar
            </Button>
          </div>
        </form>
      )}
    </ReactFinalForm.Form>
  </div>
);
