import { ProjectPage } from "../portfolio/projectPage"
import klimaImage from "../../assets/images/klima-dao.png"

export const klima = () => {
    return (
        <ProjectPage
        title="KLIMA DAO"
        description="Reviving some of the work we developed at Creol, I've been adapting an individual and business carbon footprint calculator, designed to help individuals engage and understand the impact of personal choices. This calculator will be redirected to the KlimaDAO offseting page"
        image={klimaImage}
         />
    )
}