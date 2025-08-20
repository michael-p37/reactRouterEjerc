import { redirect, type LoaderFunctionArgs } from "react-router-dom";
import { updateCompany } from "../../Services";

export async function action({request, params}: LoaderFunctionArgs) {
    const formData = await request.formData();
    const update = Object.fromEntries(formData);
    await updateCompany(Number(params.id), update);
    return redirect(`/companies/${params.id}`);
}