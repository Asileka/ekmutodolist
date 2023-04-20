import React from "react";
import { Formik, Field, Form } from "formik";

function FormAddTask({ listArray, setListArray }) {
  return (
    <div>
      <Formik
        initialValues={{
          newTask: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          setListArray([...listArray, values]);
        }}
      >
        <Form>
          <label htmlFor="newTask">New Task</label>
          <Field
            id="newTask"
            name="newTask"
            placeholder="To procrastinate all day"
          />
          <button type="submit">Add Task</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormAddTask;
