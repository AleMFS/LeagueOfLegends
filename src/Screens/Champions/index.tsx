import { useEffect, useState } from "react";
import { ChampionCard } from "./ChampionCard";
import Teaser from '../../assets/Tristana.mp4'
import axios from 'axios';

import { ChampionsContainer, ChampionsContent, HeaderContainer, Search } from "./styles";
import { version } from "../../libs/axios";


interface Champion {
    name: string;
    id: string;
    title: string;

}


export function Champions() {
    const [champion, setChampion] = useState<Champion[]>([])
    const [searchChampion, setSearchChampion] = useState('')
    const [allChampions, setAllChampions] = useState<Champion[]>([])

    function handlesearchChampion(e: string) {
        setSearchChampion(e)
        if (e.length > 0) {
            setTimeout(() => {
                const search = champion.filter((select) => select.name.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
                setAllChampions(search)
            }, 500);

        }   
    }




    async function fetchChampions() {
        const response = await axios.get<{ data: { [key: string]: Champion } }>(`http://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/champion.json`)
        console.log(response)
        const champions = Object.values(response.data.data)
        const sortedChampions = champions.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        setChampion(sortedChampions)
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
                {(searchChampion === '' ? champion : allChampions)
                    .filter(card => card.id)
                    .map((card: Champion) => (
                        <ChampionCard key={card.id} champion={card.id} name={card.name} />
                    ))}



            </ChampionsContent>

        </ChampionsContainer>
    )
}