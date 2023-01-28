import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { version } from "../../libs/axios";
import ScrollToTop from "./components/ScrollTop";
import { BgBlur, BGContainer, Carrosel, ChampionSelectedContainer, ContainerSkins, ImageChamp, InfoChamp, Lore, Skins, SkinSelected } from "./styles";
import { useKeenSlider } from 'keen-slider/react'


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
    const [lerMais, setLermais] = useState(true);
    const [skinSelected, setSkinSelected] = useState(0);
    const [indexSelected, setIndexSelected] = useState(0);
    const { id } = useParams();


    const [sliderRef] = useKeenSlider(
        {
            loop: false,
            slides: {
                perView: 'auto'
            },
            vertical: true,
            breakpoints: {
                '(max-width:1160px)': {
                    loop: false,
                    slides: {
                        perView: 'auto'
                    },
                    vertical: false
                }
            }

        })

    async function getUserProfile() {
        const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/champion/${id}.json`)
        const data: any = await response.json()
            .then(champion => Object.entries(champion.data)[0][1])
        const dataSkins = await data.skins

        setChampion(data)
        setSkins(dataSkins)
    }

    function handleSelected(number: number, index: number) {

        setIndexSelected(index)
        setSkinSelected(number)
    }

    function handleRead() {
        setLermais(!lerMais)
    }


    useEffect(() => {
        getUserProfile()

    }, [])


    return (
        <ChampionSelectedContainer>
            {champion && (
                <>
                    <ScrollToTop />
                    <BGContainer>
                        <BgBlur style={{ backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg)` }}></BgBlur>
                        <ImageChamp>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt="" />
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
                                <p>{`${champion?.blurb} `}<button onClick={handleRead}>ler mais</button> </p>
                                :
                                <p>{`${champion?.lore} `}<button onClick={handleRead}>ler menos</button></p>
                            }
                        </div>

                    </Lore>
                    <Skins>
                        <Carrosel ref={sliderRef} className="keen-slider">
                            {skins.map((skin, index) => (
                                <ContainerSkins key={skin.id} className="keen-slider__slide"  >
                                    <button onClick={() => handleSelected(skin.num, index)}>
                                        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`} alt="" />
                                    </button>


                                </ContainerSkins>
                            ))}
                        </Carrosel>

                        <SkinSelected>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skinSelected}.jpg`} alt="" />
                            <span>{skins[indexSelected].name === 'default' ? champion.name : skins[indexSelected].name}</span>

                        </SkinSelected>

                    </Skins>

                </>
            )
            }

        </ChampionSelectedContainer >
    )
}
