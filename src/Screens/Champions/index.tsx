import { useEffect, useState } from "react";
import { ChampionCard } from "./ChampionCard";
import Teaser from '../../assets/Tristana.mp4'

import { ChampionsContainer, ChampionsContent, HeaderContainer, Search } from "./styles";



export function Champions() {
    const [champion, setChampion] = useState<any[]>([])
    const [searchChampion, setSearchChampion] = useState('')

    function handlesearchChampion(e: string) {
        setSearchChampion(e)

        const search = champion.filter((select) => select.name.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
        setTimeout(() => {
            setChampion(search)
            if (e === '') {
                fetchChampions()
            }
        }, 500);

    }



    async function fetchChampions() {
        const response = await fetch('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/pt_BR/champion.json')
            .then(response => response.json())
            .then(champion => champion['data']
            ).then(champ => Object.values(champ))
        setChampion(response)

    }



    useEffect(() => {

        fetchChampions()
    }, [])

    return (
        <ChampionsContainer>
            <HeaderContainer>
                <video src={Teaser} loop muted autoPlay> </video>
            </HeaderContainer>
            <Search
                type="text"
                placeholder="Procure pelo campeão"
                value={searchChampion}
                onChange={e => handlesearchChampion(e.target.value)}

            />


            <ChampionsContent>
                {champion.map((card) => (

                    <ChampionCard key={card?.id} champion={card?.id} name={card?.name} />

                ))}


            </ChampionsContent>
            <footer>
                <a href="https://www.riotgames.com/pt-br">
                    <img src="https://logodownload.org/wp-content/uploads/2019/12/riot-games-logo-1.png" alt="" />
                </a>
                ™ &amp; © 2023 Riot Games, Inc. Todos os direitos reservados. Riot Games, League of Legends e PvP.net são marcas registradas e marcas de serviço da Riot Games, Inc.

            </footer>
        </ChampionsContainer>
    )
}