import { useEffect, useState } from "react";
import { ChampionCard } from "./components/ChampionCard";
import TristanaV from '../../assets/Tristana.webm'
import TristanaMob from '../../assets/Mobile.png'
import LOL from '../../assets/LOL.png'
import axios from 'axios';

import { ChampionsContainer, ChampionsContent, HeaderContainer, Search } from "./styles";
import { version } from "../../libs/axios";
import { SearchTags } from "./components/SearchTags";
import { MagnifyingGlass } from 'phosphor-react'
import AOS from 'aos';
import 'aos/dist/aos.css';


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
        const response = await axios.get<{ data: { [key: string]: Champion } }>(`https://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/champion.json`)
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

    AOS.init();

    useEffect(() => {
        
        fetchChampions()
    }, [])

    return (
        <ChampionsContainer>
            <HeaderContainer>
                <video src={TristanaV} autoPlay loop muted > </video>
                <img src={TristanaMob} alt="" className="mobile" />
                <img src={LOL} alt="" className="logo" />
            </HeaderContainer>
            <SearchTags search={handlesearchTags} />
            <Search >
                <input
                    type="text"
                    placeholder={`Busque aqui seu campeão `}
                    value={searchChampion}
                    onChange={e => handlesearchChampion(e.target.value)}
                />
                <MagnifyingGlass size={22} color="#ffffff" weight="bold" />
            </Search>


            <ChampionsContent>
                {(championsTag.length > 0 ? (searchChampion === '' ? championsTag : allChampions) : (searchChampion === '' ? champion : allChampions))
                    .filter(card => card.id)
                    .map((card: Champion) => (
                        <ChampionCard key={card.id}   champion={card.id} name={card.name} />
                    ))}


            </ChampionsContent>

        </ChampionsContainer>
    )
}