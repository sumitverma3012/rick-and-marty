import {useState, useEffect} from "react";
import { SimpleGrid, Text } from "@chakra-ui/react"
import {API_URL} from "../api/api.config";
import Character from "../components/Character";

const RickMortyContainer = () => {
    const [charactersList, setCharactersList] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch(API_URL.characters);
            const json = await response.json();
            setCharactersList(json);
        }
        fetchCharacters();
    }, [])

    return (
        <>
            <Text color="gray.500" isTruncated mb="20px">
                Total Characters: {charactersList && charactersList.info.count}
            </Text>
            <SimpleGrid minChildWidth="300px" spacing="40px">
                {charactersList && charactersList.results.map(character => <Character key={character.id} details={character}/>)}
            </SimpleGrid>
        </>
    )
}

export default RickMortyContainer;