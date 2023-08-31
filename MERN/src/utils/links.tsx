import { FaComputer } from 'react-icons/fa6'
import { PiTreeStructureFill } from 'react-icons/pi'
import { IoBarChartSharp } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { MdAdminPanelSettings } from 'react-icons/md'

export const links = [
    { text: 'add your skills', path: '.', icon: <FaComputer /> },
    {
        text: 'all developers',
        path: 'alldevs',
        icon: <PiTreeStructureFill />,
    },
    { text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
    { text: 'profile', path: 'profile', icon: <CgProfile /> },
    { text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
]
