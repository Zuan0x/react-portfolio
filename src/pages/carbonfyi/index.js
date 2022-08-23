import { ProjectPage } from "../portfolio/projectPage"
import offsetraImage from "../../assets/images/offsetra.png"

export const carbonFYI = () => {
    return (
        <ProjectPage
        title="carbon.fyi"
        description="In partnership with Offsetra, I've recently been helping rework the emissions calculations for the highly popular carbon.fyi app, used to calculate the CO2 emissions for a given address or smart contract"
        image={offsetraImage}
         />
    )
}