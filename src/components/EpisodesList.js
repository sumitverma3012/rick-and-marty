import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    ListItem,
    List,
    Divider,
    Box,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText
} from "@chakra-ui/react"
import {useEffect, useState} from "react";
import {API_URL} from "../api/api.config";

const EpisodesList = (props) => {
    const {isOpen, onClose, btnRef, episode} = props;
    const [listEpisodes, setListEpisodes] = useState([]);

    const getCharacter = async () => {
        const arrayOfEpisodes = episode && episode.map(item => item.split('https://rickandmortyapi.com/api/episode/')[1])
        const result = await fetch(`${API_URL.episodes}/${arrayOfEpisodes}`);
        const json = await result.json()
        if(json && json.length) {
            setListEpisodes(json);
        } else {
            setListEpisodes([JSON.parse(JSON.stringify(json))]);
        }
        console.log('result:', json);
    };

    useEffect(() => {
        getCharacter();
    }, [isOpen])

    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="md"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>EPISODES</DrawerHeader>
                <Divider orientation="horizontal" />

                <DrawerBody>
                    <List spacing={3}>
                        {listEpisodes.map(epi => {
                            return (
                                <Box key={epi.id}>
                                    <ListItem >
                                        <Stat>
                                            <StatLabel>{epi.episode}</StatLabel>
                                            <StatNumber> {epi.name}</StatNumber>
                                            <StatHelpText>{epi.air_date}</StatHelpText>
                                        </Stat>
                                    </ListItem>
                                    <Divider orientation="horizontal" />
                                </Box>
                            )
                        })}
                    </List>
                </DrawerBody>

                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default EpisodesList;