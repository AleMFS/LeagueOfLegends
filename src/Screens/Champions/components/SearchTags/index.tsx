import { useState } from "react";
import { SearchTagsContainer, TagsContainer } from "./styles";

interface FunctionSearch {
    search: (string: string) => void
}

export function SearchTags({ search }: FunctionSearch) {
    const [selectedOption, setSelectedOption] = useState('');
    

    function handleSearchForTags(e:string){
        setSelectedOption(e)
        search(e)
    }
   
    return (
        <SearchTagsContainer>
            <TagsContainer>
                <label className={selectedOption === 'Todos' ? 'active' : ''}>
                    <input
                        type="radio"
                        value="Todos"
                        checked={selectedOption === 'Todos'}
                        onChange={(e) => handleSearchForTags(e.target.value)}
                    />
                    TODOS
                </label>
                <label className={selectedOption === 'Assassin' ? 'active' : ''}>
                    <input
                        type="radio"
                        value="Assassin"
                        checked={selectedOption === 'Assassin'}
                        onChange={(e) => handleSearchForTags(e.target.value)}
                    />
                    ASSASSINOS
                </label>
                <label className={selectedOption === 'Marksman' ? 'active' : ''}>
                    <input
                        type="radio"
                        value="Marksman"
                        checked={selectedOption === 'Marksman'}
                        onChange={(e) => handleSearchForTags(e.target.value)}
                    />
                    ATIRADORES
                </label>
                <label className={selectedOption === 'Fighter' ? 'active' : ''}>
                    <input
                        type="radio"
                        value="Fighter"
                        checked={selectedOption === 'Fighter'}
                        onChange={(e) => handleSearchForTags(e.target.value)}
                    />
                    LUTADORES
                </label>
                                
                <label className={selectedOption === 'Mage' ? 'active' : ''}>
                    <input
                        type="radio"
                        value="Mage"
                        checked={selectedOption === 'Mage'}
                        onChange={(e) => handleSearchForTags(e.target.value)}
                    />
                    MAGOS
                </label>
                
                <label className={selectedOption === 'Support' ? 'active' : ''}>
                    <input
                        type="radio"
                        value="Support"
                        checked={selectedOption === 'Support'}
                        onChange={(e) => handleSearchForTags(e.target.value)}
                    />
                    SUPORTES
                </label>
                <label className={selectedOption === 'Tank' ? 'active' : ''}>
                    <input
                        type="radio"
                        value="Tank"
                        checked={selectedOption === 'Tank'}
                        onChange={(e) => handleSearchForTags(e.target.value)}
                    />
                    TANQUES
                </label>
            </TagsContainer>
        </SearchTagsContainer>
    )
}