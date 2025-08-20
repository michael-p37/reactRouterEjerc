import { Link, useLoaderData } from "react-router-dom";
import type { arrayType } from "../../Services";

function Company() {
  const { company } = useLoaderData<{ company: arrayType }>();
  return (
    <div>
      <Link to={`/companies`}>regresar a Companies</Link>
      <h2>Estas page company</h2>
      <ul>
        <li>
          <strong>Id: </strong>{company.id}
        </li>
        <li>
          <strong>Name: </strong>{company.name}
        </li>
        <li>
          <strong>Description: </strong>{company.description}
        </li>
      </ul>
      <Link to={`./edit`}>Edit</Link>
    </div>
  );
}
export default Company;
