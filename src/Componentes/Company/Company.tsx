import { useLoaderData } from "react-router-dom";
import type { arrayType } from "../../Services";

function Company() {
  const { company } = useLoaderData<{ company: arrayType }>();
  return (
    <>
      <h2>Estas page company</h2>
      <div>
        <p>{company.name}</p>
        <p>{company.id}</p>
        <p>{company.description}</p>
      </div>
    </>
  );
}
export default Company;
