import { Form, useLoaderData } from "react-router-dom";
import type { arrayType } from "../../Services";

function EditGame() {
  const { game } = useLoaderData<{ game: arrayType }>();
  return (
    <div>
      <h1>Pagina de juegos</h1>
      <Form method="POST">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={game.name}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={game.description}
          />
          <button type="submit">Aceptar</button>
        </div>
      </Form>
    </div>
  );
}
export default EditGame;
