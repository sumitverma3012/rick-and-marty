import {FaFemale, FaMale, AiFillQuestionCircle, AiTwotoneApi, AiTwotoneBug, BsFillPersonCheckFill} from "react-icons/all";


export const characterStatus = {
    Alive: {
        color: 'teal.500',
        icon: BsFillPersonCheckFill,
        text: 'Alive'
    },
    Dead: {
        color: 'red.500',
        icon: AiTwotoneBug,
        text: 'Dead'
    },
    unknown: {
        color: 'purple.500',
        icon: AiTwotoneApi,
        text: 'Status unknown'
    }
};

export const characterGender = {
    Male: {
        color: 'blue.400',
        icon: FaMale,
        text: 'Male'
    },
    Female: {
        color: 'pink.400',
        icon: FaFemale,
        text: 'Female'
    },
    Genderless: {
        color: 'gray.500',
        icon: AiFillQuestionCircle,
        text: 'Genderless'
    },
    unknown: {
        color: 'purple.400',
        icon: AiFillQuestionCircle,
        text: 'Gender unknown'
    }
};