import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { version } from "../../libs/axios";
import ScrollToTop from "./components/ScrollTop";
import { BgBlur, BGContainer, Carrosel, ChampionSelectedContainer, ImageChamp, InfoChamp, Lore, Skins, SkinSelected } from "./styles";


interface ChampionProps {

    name: string;
    title: string;
    blurb: string;
    lore: string


}

interface SkinProps {
    id: number;
    num: number;
    name: string;
}

export function ChampionSelected() {
    const [champion, setChampion] = useState<ChampionProps | null>(null);
    const [skins, setSkins] = useState<SkinProps[]>([]);
    const [lerMais, setLermais] = useState(true)
    const [skinSelected, setSkinSelected] = useState('0')

    const { id } = useParams()

    async function getUserProfile() {
        const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/champion/${id}.json`)
        const data: any = await response.json()
            .then(champion => Object.entries(champion.data)[0][1])
        const dataSkins = await data.skins

        setChampion(data)
        setSkins(dataSkins)
    }

    

    function handleLerMais() {
        setLermais(!lerMais)
    }
   

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
                    <strong>{champion?.name}</strong>
                    <span>{champion?.title}</span>
                </InfoChamp>
            </BGContainer>
            <Lore>
                <div className="loreInfo">
                    <h4>Lore</h4>
                    {lerMais ?
                        <p>{`${champion?.blurb} `}<button onClick={handleLerMais}>ler mais</button> </p>
                        :
                        <p>{`${champion?.lore} `}<button onClick={handleLerMais}>ler menos</button></p>
                    }
                </div>

            </Lore>
            <Skins>
                <Carrosel>
                    {skins.map((skin) => (
                        <div key={skin.id}>
                            <button  onClick={() => setSkinSelected(`${skin.num}`)}>
                                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`} alt="" />
                            </button>
                        </div>
                    ))}
                </Carrosel>

                <SkinSelected>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skinSelected}.jpg`} alt="" />

                </SkinSelected>

            </Skins>



        </ChampionSelectedContainer >
    )
}
