import { Link } from "react-router-dom";

function Root() {
    return (
        <>
         <h1>Root page</h1>
         <p>Rutas disponibles para navegar</p>
         <ul>
            <li><Link to='login'>Login</Link></li>
            <li><Link to='companies'>Companies</Link></li>
            <li><Link to='games'>Games</Link></li>
            <li><Link to='home'>Home</Link></li>
            <li><Link to='error'>Invalid Page</Link></li>
         </ul>
        </>
    )
}
export default Root;