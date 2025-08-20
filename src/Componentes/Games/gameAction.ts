import { redirect, type LoaderFunctionArgs } from "react-router-dom";
import { updateGame } from "../../Services";

async function gameAction({request, params}: LoaderFunctionArgs) {
    const formData = await request.formData();
    const update = Object.fromEntries(formData);
    await updateGame(Number(params.id), update)

  return redirect(`/games/${params.id}`);
}
export default gameAction;