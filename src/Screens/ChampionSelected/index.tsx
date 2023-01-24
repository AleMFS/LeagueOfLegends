import { useEffect, useState } from "react";
import { useParams , useLocation} from "react-router-dom";
import { api } from "../../libs/axios";
import ScrollToTop from "./components/ScrollTop";
import { BgBlur, BGContainer, ChampionSelectedContainer, ImageChamp, InfoChamp, Lore } from "./styles";


interface ChampionProps {
    name: string;
    title: string;
}

export function ChampionSelected() {
    const [champion, setChampion] = useState<any>([])
    const { pathname } = useLocation();

    const { id } = useParams()

    async function getUserProfile() {
        const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/pt_BR/champion/${id}.json`)
            .then(data => data.json())
            .then(teste => Object.entries(teste.data)[0][1])
        setChampion(response)
    }

    console.log(champion)

   


    useEffect(() => {
        getUserProfile()

    }, [])


    return (
        <ChampionSelectedContainer>
            <ScrollToTop />
            <BGContainer>
                <BgBlur style={{ backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg)` }}></BgBlur>
                <ImageChamp>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt="" />
                </ImageChamp>
                <InfoChamp>
                    <strong>{champion.name}</strong>
                    <span>{champion.title}</span>
                </InfoChamp>
            </BGContainer>


        </ChampionSelectedContainer >
    )
}
