import { ProjectPage } from "../projectPage"
import cookstoveImage from "../../../assets/images/cookstoves.jpg"
import creolGif from "../../../assets/images/LogoCropped.gif"
import klimaImage from "../../../assets/images/klima-dao.png"
import offsetraImage from "../../../assets/images/offsetra.png"

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

export const creol = () => {
    return (
        <ProjectPage
        title="Creol"
        description="Starting early 2020, Creol was one of the first developers of tokenised carbon and an underlying subscription service designed to give the public access to the Voluntary Carbon Market (VCM).
        Over the course of 2020-21 I worked at Creol developing smart contracts for tokenised carbon and an easy-to-use interface"
        image={creolGif}
         />
    )
}

export const klima = () => {
    return (
        <ProjectPage
        title="KLIMA DAO"
        description="Reviving some of the work we developed at Creol, I've been adapting an individual and business carbon footprint calculator, designed to help individuals engage and understand the impact of personal choices. This calculator will be redirected to the KlimaDAO offseting page"
        image={klimaImage}
         />
    )
}

export const carbonFYI = () => {
    return (
        <ProjectPage
        title="carbon.fyi"
        description="In partnership with Offsetra, I've recently been helping rework the emissions calculations for the highly popular carbon.fyi app, used to calculate the CO2 emissions for a given address or smart contract"
        image={offsetraImage}
         />
    )
}