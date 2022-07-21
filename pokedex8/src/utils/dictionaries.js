import GrassIcon from '../assets/icons/grass.svg';
import PoisonIcon from '../assets/icons/poison.svg';
import FireIcon from '../assets/icons/fire.svg';
import FlyingIcon from '../assets/icons/flying.svg';
import WaterIcon from '../assets/icons/water.svg';
import BugIcon from '../assets/icons/bug.svg';
import NormalIcon from '../assets/icons/normal.svg';
import DarkIcon from '../assets/icons/dark.svg';
import DragonIcon from '../assets/icons/dragon.svg';
import ElectricIcon from '../assets/icons/electric.svg';
import FairyIcon from '../assets/icons/fairy.svg';
import FightingIcon from '../assets/icons/fighting.svg';
import GhostIcon from '../assets/icons/ghost.svg';
import GroundIcon from '../assets/icons/ground.svg';
import IceIcon from '../assets/icons/ice.svg';
import PsichicIcon from '../assets/icons/psychic.svg';
import RockIcon from '../assets/icons/rock.svg';
import SteelIcon from '../assets/icons/steel.svg';

export const handleStatsDictionary = (stat) => {
    switch (stat) {
        case "special-attack":
            return "Sp.Atk"
        case "special-defense":
            return "Sp.Def";
        case "hp":
            return "HP";
        case "defense":
            return "Defense";
        case "attack":
            return "Attack";
        case "speed":
            return "Speed";
        default:
            return false
    }
}

export const handleTypesDictionary = (type) => {
    let data = {
        color: "",
        darkerColor: "",
        image: ""
    }

    switch (type) {
        case "poison":
            data.color = "#AD61AE"
            data.darkerColor = "#7c337e"
            data.image = PoisonIcon
            return data
        case "grass":
            data.color = "#70B873"
            data.darkerColor = "#408847"
            data.image = GrassIcon
            return data
        case "fire":
            data.color = "#F44900"
            data.darkerColor = "#b90000"
            data.image = FireIcon
            return data
        case "flying":
            data.color = "#6892B0"
            data.darkerColor = "#396480"
            data.image = FlyingIcon
            return data
        case "water":
            data.color = "#33A4F5"
            data.darkerColor = "#0076c2"
            data.image = WaterIcon
            return data
        case "bug":
            data.color = "#316520"
            data.darkerColor = "#003a00"
            data.image = BugIcon
            return data
        case "normal":
            data.color = "#8A8A8A"
            data.darkerColor = "#808080"
            data.image = NormalIcon
            return data
        case "dark":
            data.color = "#5C5365"
            data.darkerColor = "#322a3b"
            data.image = DarkIcon
            return data
        case "dragon":
            data.color = "#0A6CBF"
            data.darkerColor = "#00428e"
            data.image = DragonIcon
            return data
        case "electric":
            data.color = "#F4D23B"
            data.darkerColor = "#bea100"
            data.image = ElectricIcon
            return data
        case "fairy":
            data.color = "#EC8FE6"
            data.darkerColor = "#b85fb4"
            data.image = FairyIcon
            return data
        case "fighting":
            data.color = "#CE4069"
            data.darkerColor = "#98003f"
            data.image = FightingIcon
            return data
        case "ghost":
            data.color = "#5269AC"
            data.darkerColor = "#1d3f7c"
            data.image = GhostIcon
            return data
        case "ground":
            data.color = "#D97745"
            data.darkerColor = "#a3491a"
            data.image = GroundIcon
            return data
        case "ice":
            data.color = "#74CEC0"
            data.darkerColor = "#419d90"
            data.image = IceIcon
            return data
        case "psychic":
            data.color = "#F67176"
            data.darkerColor = "#bf404a"
            data.image = PsichicIcon
            return data
        case "rock":
            data.color = "#C7B78B"
            data.darkerColor = "#96875d"
            data.image = RockIcon
            return data
        case "steel":
            data.color = "#BBBBBB"
            data.darkerColor = "#8b8b8b"
            data.image = SteelIcon
            return data
        default:
            return false
    }
}