
import { BookOpen, Clapperboard, FileSearch, Film, Gamepad2, Megaphone, Monitor, MonitorPlay, Music, Smile, Sparkles, Tv, Users, Volleyball } from 'lucide-react-native';
import { colors } from './utils';

interface MenuModal {
    title: string
    icon: React.ReactNode
    link: string
}

export const menuModal: MenuModal[] = [
    { title: 'ละคร', icon: <Tv  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'หนังและซีรีย์', icon: <Film  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'ข่าว', icon: <BookOpen  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'กีฬา', icon: <Volleyball  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'Original', icon: <Clapperboard  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'รายการสด', icon: <Monitor  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'นักแสดง', icon: <Smile  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'แฟนคลับ', icon: <Users  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'วาไรตี้', icon: <Gamepad2  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'Short Series', icon: <MonitorPlay  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'บันเทิง', icon:  <Music  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'ตรวจสลาก', icon: <FileSearch  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'ไลฟ์สไตล์', icon: <Sparkles size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'อีเว้นต์', icon: <Megaphone  size={25} color={colors.purple} />, link: 'https://www.bugaboo.tv/th/drama/' },

];