import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import Platform from "../entities/Platform"
import { Box, Stack } from "@mui/material"

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: JSX.Element } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <SiNintendo />,
    mac: <FaApple />,
    linux: <FaLinux />,
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
  }

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      {platforms.map((platform) => (
        <Box key={platform.id}>{iconMap[platform.slug]}</Box>
      ))}
    </Stack>
  )
}

export default PlatformIconList
