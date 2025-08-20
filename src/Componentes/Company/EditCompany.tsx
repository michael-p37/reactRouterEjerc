import { Form, useLoaderData } from "react-router-dom";
import { type arrayType } from "../../Services";

function EditCompay() {
  const { company } = useLoaderData<{ company: arrayType }>();
  return (
    <div>
      <h2>Pagina de edicion</h2>
      <Form method="POST">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={company.name} />
        </div>
        <div>
          <label htmlFor="descriptions">Descripcion</label>
          <input
            type="text"
            id="descriptions"
            name="description"
            defaultValue={company.description}
          />
          <button type="submit">Aceptar</button>
        </div>
      </Form>
    </div>
  );
}
export default EditCompay;
