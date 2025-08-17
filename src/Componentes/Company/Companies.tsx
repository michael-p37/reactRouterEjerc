import { Link, useLoaderData } from "react-router-dom";
import type { arrayType } from "../../Services";

function Companies() {
  const {companies} = useLoaderData<{companies: arrayType[]}>(); 
  return (
    <>
      <h2>Companies page</h2>
      <Link to="/">Inicio</Link>
      {companies.map((c) => (
        <li key={c.id}><Link to={`/companies/${c.id}`}>{c.name}</Link></li>
      ))}
    </>
  );
}
export default Companies;
