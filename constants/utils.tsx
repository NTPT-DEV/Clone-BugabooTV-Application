

import { Clapperboard, Crown, Film, Plane, Search, ShoppingBag, Volleyball } from 'lucide-react-native';


export const colors = {
    purple: '#823DFF',
    lightPurple: '#EAE9FF',
    darkPurple: '#823DFF',
    gray: '#a8a8a8ff',
    darkPurple2: '#7C2AFF',
    lightBlue: '#56A6FD',
    darkGray: '#303030ff'
}


interface CaetegoryProps {
    nameCategory: string;
    title: string;
    imageCategory: number;
    link: any
}

export const imageCategory: CaetegoryProps[] = [
    {
        nameCategory: 'ดูอีเว้นย้อนหลัง',
        title: '7สีคอนเสิร์ต เฟสติวัล',
        imageCategory: require('../assets/images/category/01.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/7seeconcertfestival/'
    },
    {
        nameCategory: 'ดูซีรีย์',
        title: '21 Days Sunshine 21 วันของฉันกับเธอ',
        imageCategory: require('../assets/images/category/02.jpg'),
        link: 'https://www.bugaboo.tv/shortseries-watch/21_Days_Sunshine/ep1'
    },
    {
        nameCategory: 'ดูวาไรตี',
        title: 'ONE ลุมพินี',
        imageCategory: require('../assets/images/category/03.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/onelumpinee/'
    },
    {
        nameCategory: 'ดูละคร',
        title: 'คุณแม่แก้ขัด',
        imageCategory: require('../assets/images/category/04.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/temporarymom/'
    },
    {
        nameCategory: 'ดูละคร',
        title: 'เงากามเทพ',
        imageCategory: require('../assets/images/category/05.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/theyoungandtheruthless/'
    },
    {
        nameCategory: 'ดูออริจินัล',
        title: 'TALK TO U',
        imageCategory: require('../assets/images/category/06.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/talktou/'
    },
]

interface IconListProps {
    title: string;
    icon: React.ReactNode;
    link: string;
}

export const iconLists: IconListProps[] = [
    { title: 'ตรวจสลาก', icon: <Search color={'white'} />, link: 'https://www.bugaboo.tv/th/lotto/' },
    { title: 'BUGABOO SHOP', icon: <ShoppingBag color={'white'} />, link: 'https://shop.bugaboo.tv/' },
    { title: 'ละครมาใหม่', icon: <Film color={'white'} />, link: 'https://www.bugaboo.tv/th/drama/' },
    { title: 'สมัครพรีเมี่ยม', icon: <Crown color={'white'} />, link: 'https://www.bugaboo.tv/th/subscription-plan/' },
    { title: 'กีฬาสด', icon: <Volleyball color={'white'} />, link: 'https://www.bugaboo.tv/th/sport/' },
    { title: 'หาที่ท่องเที่ยว', icon: <Plane color={'white'} />, link: 'https://www.bugaboo.tv/th/lifestyle/all/category/Travel+Destination/' },
    { title: 'ดูหนังฟรี', icon: <Clapperboard color={'white'} />, link: 'https://www.bugaboo.tv/th/movies-series/' },
];

interface ToptenProps {
    name: string
    image: number
    link: string
}
export const topTenToday: ToptenProps[] = [
    { name: 'ผีเสื้อสลับลาย', image: require('../assets/images/posterTopTen/01.jpg'), link: 'https://www.bugaboo.tv/th/drama/stolenwings/' },
    { name: 'มธุรสโลกันตร์', image: require('../assets/images/posterTopTen/02.jpg'), link: 'https://www.bugaboo.tv/th/drama/beauty-and-the-wild/' },
    { name: 'เหนี่ยวหัวใจสุดไกปืน', image: require('../assets/images/posterTopTen/03.jpg'), link: 'https://www.bugaboo.tv/th/drama/the-braves-the-loves-the-country-the-spirit-of-the-ruler/' },
    { name: 'ไฟน้ำค้าง', image: require('../assets/images/posterTopTen/04.jpg'), link: 'https://www.bugaboo.tv/th/drama/gameoflove/' },
    { name: 'เขยบ้านไร้ สะใภ้ไฮโซ', image: require('../assets/images/posterTopTen/05.jpg'), link: 'https://www.bugaboo.tv/th/drama/kheoy-baan-rai-sa-pai-hi-so-the-in-laws/' },
    { name: 'มวยไทย 7 สี', image: require('../assets/images/posterTopTen/06.jpg'), link: 'https://www.bugaboo.tv/th/variety/muaythai7see/' },
    { name: 'ยิ่งคุย ยิ่งลึก', image: require('../assets/images/posterTopTen/07.jpg'), link: 'https://www.bugaboo.tv/th/variety/yingkhuy-yingluek/' },
    { name: 'ONE ลุมพินี', image: require('../assets/images/posterTopTen/08.png'), link: 'https://www.bugaboo.tv/th/variety/onelumpinee/' },
    { name: 'เสียงจากหลุม', image: require('../assets/images/posterTopTen/09.jpg'), link: 'https://www.bugaboo.tv/th/originals/siangchaklum/' },
    { name: 'ติดลมบน', image: require('../assets/images/posterTopTen/10.jpg'), link: 'https://www.bugaboo.tv/th/originals/tidlombon/' },
]