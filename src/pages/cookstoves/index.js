import { ProjectPage } from "../portfolio/projectPage"
import cookstoveImage from "../../assets/images/cookstoves.jpg"

export const cookstoves = () => {
    return (
        <ProjectPage
        title="Cookstove"
        description="In partnership with two cookstove producers in Africa, Creol has been developing a methodology to use the data collected by the stoves for digital MRV, which in turn allowed for the creation of blockchain-native carbon credits.
        I was the engineering lead for this project, developing a front-end interface, smart contracts and verifiable proofs using Cartesi. The project is still building in stealth so I won't be disclosing the full architecture currently "
        image={cookstoveImage}
         />
    )
}