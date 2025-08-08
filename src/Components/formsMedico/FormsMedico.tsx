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
import React, { useState } from "react";
import styles from "./formsMedico.module.css";
import { useAlert, useDataMutation } from "@dhis2/app-runtime";

const alertValues = (values) => {
  const formattedValuesString = JSON.stringify(values, null, 2);
  alert(formattedValuesString);
};

const mutation: any = {
  resource: "trackedEntityInstances",
  type: "create",
  data: ({ data }) => data,
};

interface attributeForm {
  attribute: string;
  value: string;
}

export const FormsMedico = () => {
  const [form, setform] = useState({});
  const { show } = useAlert(({ message }) => message, { critical: true });

  const [mutate, { loading }] = useDataMutation(mutation, {
    onComplete: () => {
      alert("Utente Salvo com Sucesso!");
    },
    onError: (error) => {
      show(`Erro ao salvar o utente: ${error.message}`);
    }
  });
  console.log(converForm(form));

  function handleSubmit(e: any) {
    e.preventDefault();
    mutate({data: {
        trackedEntityType: "XxdJLlq6ZLD",
        orgUnit: "cIXhhPt1rIQ",
        attributes: converForm(form),
        enrollments: [
          {
            orgUnit: "cIXhhPt1rIQ",
            program: "rTmLXWgtUj2",
            status: "ACTIVE",
            enrollmentDate: "2025-08-07",
            incidentDate: "2025-08-07",
          },
        ],
      }});
  }

  function converForm(form: Record<string, string>): attributeForm[] {
    let attributes: attributeForm[] = [];

    Object.keys(form).forEach((position) => {
      attributes.push({
        attribute: position,
        value: form[position],
      });
    });

    return attributes;
  }

  //{id: value, id2:value}
  // [{attribute: id1, value: value1}, {attribute: id2, value: value2}]
  return (
    <div>
      <div className={styles.container}>
        <ReactFinalForm.Form
          onSubmit={()=>{}}
        >
          {({  }) => (
            <form
              onChange={(e: any) => {
                setform({ ...form, [e.target.name]: e.target.value });
              }}
              onSubmit={(event) => {
            handleSubmit(event);
            console.log("Form submitted with values:", form);
          }}
            >
              <div className={styles.row}>
                <ReactFinalForm.Field
                  name="ZgIyltp8TDu"
                  label="SOCIALID"
                  component={InputFieldFF}
                  className={styles.socialId}
                  validate={hasValue}
                />
              </div>

              <div className={styles.row}>
                <ReactFinalForm.Field
                  required
                  name="um3rU8yasxl"
                  label="NumeroDeProcesso"
                  component={InputFieldFF}
                  className={styles.numeroDeProcesso}
                  validate={hasValue}
                />
              </div>
              <div className={styles.row}>
                <ReactFinalForm.Field
                  required
                  name="Jrd6W0L8LQY"
                  label="Primeiro Nome"
                  component={InputFieldFF}
                  className={styles.firstname}
                  validate={hasValue}
                />
              </div>
              <div className={styles.row}>
                <ReactFinalForm.Field
                  required
                  name="KmR2FYgDUmr"
                  label="Apelido"
                  component={InputFieldFF}
                  className={styles.lastname}
                  validate={hasValue}
                />
              </div>
              <div className={styles.row}>
                <ReactFinalForm.Field
                  required
                  name="CklPZdOd6H1"
                  label="Sexo"
                  component={SingleSelectFieldFF}
                  className={styles.sexo}
                  options={[
                    { label: "Masculino", value: "MALE" },
                    { label: "Feminino", value: "FEMALE" },
                  ]}
                />
              </div>

              <div className={styles.row}>
                <ReactFinalForm.Field
                  required
                  name="mAWcalQYYyk"
                  label="Data de nascimento (idade)"
                  component={InputFieldFF}
                  type="date" // <- aqui está a mudança!
                  className={styles.dateOfBirth}
                  validate={hasValue}
                />
              </div>
              <div className={styles.row}>
                <ReactFinalForm.Field
                  required
                  name="v04HHvgxlpe"
                  label="Número de Telemóvel"
                  component={InputFieldFF}
                  className={styles.dateOfBirth}
                  validate={hasValue}
                />
              </div>
              <br />
              <button type="submit">{loading ? "Salvando" : "Salvar"}</button>
            </form>
          )}
        </ReactFinalForm.Form>
      </div>
      
    </div>
  );
};
