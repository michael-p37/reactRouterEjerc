import type { LoaderFunctionArgs } from "react-router-dom";
import { getCompanies, getCompany} from "../../Services/CompaniesService";

export async function CompaniesLoader() {
    const companies = await getCompanies();
    return {companies};
}
export async function CompanyLoader({params}: LoaderFunctionArgs) {
      const id = Number(params.id);
      const company = await getCompany(id)
    return {company};
}