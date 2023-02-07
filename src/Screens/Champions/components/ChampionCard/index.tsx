import { NavLink } from "react-router-dom";
import { ChampionSelected } from "../../../ChampionSelected";
import { ChampionCardContainer } from "./styles";

interface ChampionProps {
    champion: string
    name:string
}

export function ChampionCard({ champion,name }: ChampionProps) {



    return (
        <ChampionCardContainer  data-aos="zoom-out-right" data-aos-duration="500">
            <NavLink to={`/${champion}`} >
                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`} alt="" />
                <div>
                    <p>{name?.toLocaleUpperCase()}</p>
                </div>
            </NavLink>
        </ChampionCardContainer>
    )
}