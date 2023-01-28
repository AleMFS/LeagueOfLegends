import { useEffect, useState } from "react";
import { ChampionCard } from "./components/ChampionCard";
import Teaser from '../../assets/Tristana.mp4'
import LOL from '../../assets/LOL.png'
import axios from 'axios';

import { ChampionsContainer, ChampionsContent, HeaderContainer, Search } from "./styles";
import { version } from "../../libs/axios";
import { SearchTags } from "./components/SearchTags";


interface Champion {
    name: string;
    id: string;
    title: string;
    tags: string[]

}


export function Champions() {
    const [champion, setChampion] = useState<Champion[]>([])
    const [allChampions, setAllChampions] = useState<Champion[]>([])
    const [championsTag, setChampionsTag] = useState<Champion[]>([])
    const [searchChampion, setSearchChampion] = useState('')


    function handlesearchTags(e: string) {


        let search: Champion[]
        switch (e) {
            case "Assassin":
                search = champion.filter((select) => select.tags.includes(e))
                setChampionsTag(search)
                break;

            case "Mage":
                search = champion.filter((select) => select.tags.includes(e))
                setChampionsTag(search)
                break;
            case "Fighter":
                search = champion.filter((select) => select.tags.includes(e))
                setChampionsTag(search)
                break;
            case "Marksman":
                search = champion.filter((select) => select.tags.includes(e))
                setChampionsTag(search)
                break;

            case "Support":
                search = champion.filter((select) => select.tags.includes(e))
                setChampionsTag(search)
                break;

            case "Tank":
                search = champion.filter((select) => select.tags.includes(e))
                setChampionsTag(search)
                break;

            default:
                setChampionsTag(champion)
        }



    }

    function handlesearchChampion(e: string) {
        setSearchChampion(e)

        if (championsTag.length > 0) {
            setTimeout(() => {
                const searchFilter = championsTag.filter((select) => select.name.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
                setAllChampions(searchFilter)
            }, 500);
        } else {
            setTimeout(() => {
                const searchFilter = champion.filter((select) => select.name.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
                setAllChampions(searchFilter)
            }, 500);
        }
    }






    async function fetchChampions() {
        const response = await axios.get<{ data: { [key: string]: Champion } }>(`http://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/champion.json`)
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
                <img src={LOL} alt="" />
            </HeaderContainer>
            <SearchTags search={handlesearchTags} />
            <Search
                type="text"
                placeholder="Procure pelo campeão"
                value={searchChampion}
                onChange={e => handlesearchChampion(e.target.value)}

            />


            <ChampionsContent>
            {(championsTag.length > 0 ? (searchChampion === '' ? championsTag : allChampions) : (searchChampion === '' ? champion : allChampions))
                    .filter(card => card.id)
                    .map((card: Champion) => (
                        <ChampionCard key={card.id} champion={card.id} name={card.name} />
                    ))}


            </ChampionsContent>

        </ChampionsContainer>
    )
}