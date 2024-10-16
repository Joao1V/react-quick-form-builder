# React-Quick-Form-Builder

### Features

- Build forms simply and quickly

### Install

    npm install react-quick-form-builder

### Quickstart

```tsx
import FormBuilder, {FieldsProps} from 'react-quick-form-builder';

function App() {
    const fields: FieldsProps = [
        {
            type: "text",
            accessor: "name",
            label: "Your name",
            placeholder: "Write here...",
        },
        {
            type: "email",
            accessor: "email",
            label: "Your email",
            placeholder: "your.email@email.com",
        },
        {
            type: "select",
            accessor: "option",
            label:"Select a option",
            options:[
                {label: "Option1", value: "Value1"},
                {label: "Option2", value: "Value2"},
                {label: "Option3", value: "Value3"},
            ],
        },
        {
            type: "textarea",
            accessor: "description",
            label: "Write a description:",
            placeholder: "Write here...",
        },
        {
            type: "button",
            label:"Salvar"
        }
    ];

  return (
      <FormBuilderProvider>
          <FormBuilder fields={fields}
                       idForm={"create-account"}
          />
      </FormBuilderProvider>
  );
}
```






