import { useFormik } from "formik";
import { Button, InputGroup, Form as BSForm } from "react-bootstrap";
import * as Yup from "yup";
import { CreateTask } from "../types";

interface Props {
  onCreate: (obj: CreateTask) => void;
}

export function TaskForm({ onCreate }: Props) {
  const formik = useFormik<CreateTask>({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Informe um nome para a tarefa"),
    }),
    onSubmit(values, { resetForm }) {
      onCreate(values);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={(values) => {
        formik.handleSubmit(values);
      }}
    >
      <InputGroup className="my-3">
        <BSForm.Control
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Digite qual a sua próxima tarefa"
          aria-label="Digite qual a sua próxima tarefa"
          aria-describedby="todo-task"
        />
        <Button variant="primary" id="button-task-submit" type="submit">
          Salvar
        </Button>
      </InputGroup>
      {formik.touched.name && formik.errors.name ? (
        <p className="text-danger my-1">{formik.errors.name}</p>
      ) : null}
    </form>
  );
}
