

import { Clapperboard, Crown, Film, Plane, Search, ShoppingBag, Volleyball } from 'lucide-react-native';


export const colors = {
    purple: '#823DFF',
    lightPurple: '#EAE9FF',
    lightPurple2: '#c5a5ffff',
    darkPurple: '#823DFF',
    gray: '#a8a8a8ff',
    darkPurple2: '#7C2AFF',
    darkPurple3: '#130033ff',
    lightBlue: '#56A6FD',
    darkGray: '#303030ff',
    lightGray: '#c7c7c7ff'
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
];


interface HighlightProps {
    title: string
    date: string
    image: number
    link: string
}

export const highLight: HighlightProps[] = [
    {
        title: 'พันธ์พยัคฆ์ จิตรเมืองนนท์ vs อัสซาดูลาห์ อิมานกาซาลิเอฟ ศึก ONE ลุมพินี 122 | 29',
        image: require('../assets/images/highlight/01.jpg'),
        date: '29 ส.ค.68',
        link: 'https://www.bugaboo.tv/th/variety/onelumpinee/1756485608340/',
    },
    {
        title: 'EP.26 ที่สุดของความสด ธรรมชาติซีฟู้ด ครองตลาดอาหารทะเล ยอดขายทะลุพันล้าน | ติดลมบน มหาชนTalk',
        image: require('../assets/images/highlight/02.jpg'),
        date: '3 ก.ย.2568',
        link: 'https://www.bugaboo.tv/th/originals/tidlombon/1756801578237/',
    },
    {
        title: 'EP.17 ความ Shine ที่ไม่เคยเปลี่ยน - สน ยุกต์ | TALK TO U',
        image: require('../assets/images/highlight/03.jpg'),
        date: '29 ส.ค.2568',
        link: 'https://www.bugaboo.tv/th/originals/tidlombon/1756801578237/',
    },
    {
        title: 'ยิ่งคุย ยิ่งลึก EP.131 ถอดรหัสการเมืองไทย ก่อนโหวตนายกฯ พรุ่งนี้',
        image: require('../assets/images/highlight/04.jpg'),
        date: '4 ก.ย.2568',
        link: 'https://www.bugaboo.tv/th/variety/yingkhuy-yingluek/1756972423187/',
    },
    {
        title: 'ละครดี Recap EP.7 : ขุนเดช',
        image: require('../assets/images/highlight/05.jpg'),
        date: '1 ก.ย.2568',
        link: 'https://www.bugaboo.tv/th/variety/lakorndeerecap/1756469726324/',
    },
    {
        title: '7 คาเฟ่นครนายก Pet Friendly พาสัตว์เลี้ยงเข้าได้ ใกล้กรุงเทพ',
        image: require('../assets/images/highlight/06.jpg'),
        date: '29 ส.ค.2568',
        link: 'https://www.bugaboo.tv/th/lifestyle/68194/',
    },
    {
        title: 'ในที่สุดความจริงก็ปรากฏ | ตอกย้ำความสนุก ผีเสื้อสลับลาย EP.28',
        image: require('../assets/images/highlight/07.jpg'),
        date: '3 ก.ย.2568',
        link: 'https://www.bugaboo.tv/th/video/68336/',
    },
];

interface PoppularTagProps {
    tagTitle: string
}

export const popularTag : PoppularTagProps[] = [
    { tagTitle: 'เติ้ล ธนพล' },
    { tagTitle: 'นักแสดงช่อง 7' },
    { tagTitle: 'เข้ม หัสวีร์' },
    { tagTitle: 'ของทุกเดือน' },
    { tagTitle: '7 สีคอนเสิร์ต เฟสติวัล' },
    { tagTitle: 'หยก ธัญยกันต์' },
    { tagTitle: 'ดูละครย้อนหลังช่อง 7' },
    { tagTitle: 'มิ้น มารนิตา' },
    { tagTitle: 'เรื่องย่อ ละครช่อง 7' },

];

export const newContent = [
    {
        title: 'ไฮไลต์ ยิ่งคุย ยิ่งลึก EP.131 เท้ง หัวหน้าพรรคส้มที่อ่อนกว่า ธนาธร | ถอดรหัสการเมืองไทย ก่อนโหวตนายกฯ พรุ่งนี้',
        date: '4.ก.ย 68',
        image: require('../assets/images/newContent/01.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/yingkhuy-yingluek/1756975151253/'
    },
    {
        title: 'Picpost Review EP.25 ทันกันไหม ? นิตยสารรายการโทรทัศน์ช่อง 7',
        date: '4.ก.ย 68',
        image: require('../assets/images/newContent/02.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/picpost-review/1756984272068/'
    },
    {
        title: 'วิธีทำให้สายเรียกเข้าขึ้นเต็มจอขณะใช้งาน บน Android | How To Tricks EP.318',
        date: '4.ก.ย 68',
        image: require('../assets/images/newContent/03.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/1756974406799/'
    },
    {
        title: 'ไฮไลต์ ยิ่งคุย ยิ่งลึก EP.131 พรรคส้ม จะเสียคะแนนที่เป็นนั่งร้านให้ อนุทิน | ถอดรหัสการเมืองไทย ก่อนโหวตนายกฯ พรุ่งนี้',
        date: '4.ก.ย 68',
        image: require('../assets/images/newContent/04.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/yingkhuy-yingluek/1756973447157/'
    },
]

export const dramaCH7 = [
    {
        title: 'ผีเสื้อสลับลาย',
        tag: 'ดราม่า',
        image: require('../assets/images/dramaCH7/01.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/stolenwings/'
    },
    {
        title: 'เดชอสูรขันแก้วนพเก้า',
        tag: 'นิทานพื้นบ้าน',
        image: require('../assets/images/dramaCH7/02.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/dejasoonkwankaewnoppakao/'
    },
    {
        title: 'ชาติลำชี',
        tag: 'ละครเพลง',
        image: require('../assets/images/dramaCH7/03.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/the-river-chis-protector/'
    },
 
    {
        title: 'ไม่สิ้นไร้ไฟสวาท',
        tag: 'ดราม่า',
        image: require('../assets/images/dramaCH7/04.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/mai-sin-rai-fai-sawat-fires-of-passion/'
    },
    {
        title: 'ฟ้าหินดินทราย',
        tag: 'ดราม่า',
        image: require('../assets/images/dramaCH7/05.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/fah-hin-din-sai/'
    },
    {
        title: 'กู้ภัยอาสารัก',
        tag: 'คอมเมดี้',
        image: require('../assets/images/dramaCH7/06.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/khoo-phai-ar-sa-rak/'
    },
    {
        title: 'แคน2แผ่นดิน',
        tag: 'แอกชั่น',
        image: require('../assets/images/dramaCH7/07.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/can-song-pan-din/'
    },
    {
        title: 'บ่วงหงส์',
        tag: 'ดราม่า',
        image: require('../assets/images/dramaCH7/08.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/boung-hong/'
    },
    {
        title: 'เหนี่ยวหัวใจสุดไกปืน',
        tag: 'แอกชั่น',
        image: require('../assets/images/dramaCH7/09.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/the-braves-the-loves-the-country-the-spirit-of-the-ruler/'
    },
] 