

import { Clapperboard, Crown, Film, Plane, Search, ShoppingBag, Volleyball } from 'lucide-react-native';


export const colors = {
    black : '#000',
    white : '#fff' ,
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

export const popularTag: PoppularTagProps[] = [
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
];


export const dramaCategory = [
    {
        title: 'เงากามเทพ',
        tag: 'โรแมนติก',
        image: require('../assets/images/dramaCategory/01.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/theyoungandtheruthless/'
    },
    {
        title: 'ผีเสื้อสลับลาย',
        tag: 'ดรามา',
        image: require('../assets/images/dramaCategory/02.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/stolenwings/'
    },

    {
        title: 'เล่ห์มยุรา',
        tag: 'โรแมนติก',
        image: require('../assets/images/dramaCategory/03.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/loveandscandel/'
    },
    {
        title: 'เล่ห์ร้ายเกมลวง',
        tag: 'โรแมนติก',
        image: require('../assets/images/dramaCategory/04.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/thedeceptiongame/'
    },
    {
        title: 'ไฟน้ำค้าง',
        tag: 'โรแมนติก',
        image: require('../assets/images/dramaCategory/05.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/gameoflove/'
    },
    {
        title: 'รอยรักรอยบาป',
        tag: 'ดรามา',
        image: require('../assets/images/dramaCategory/06.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/royrakroybap/'
    },
    {
        title: 'ฟ้าหินดินทราย',
        tag: 'ดรามา',
        image: require('../assets/images/dramaCategory/07.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/fah-hin-din-sai/'
    },
    {
        title: 'ลูกไม้ลายสนธยา',
        tag: 'ดรามา',
        image: require('../assets/images/dramaCategory/08.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/look-mai-lai-son-tha-ya/'
    },
    {
        title: 'ร้ายเดียงสา',
        tag: 'ดรามา',
        image: require('../assets/images/dramaCategory/09.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/rai-dieng-sa/'
    },
    {
        title: 'ชะชะช่า ท้ารัก',
        tag: 'ละครเพลง',
        image: require('../assets/images/dramaCategory/10.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/chachacha-tha-rak/'
    },
]


export const actionCategory = [
    {
        title: 'เปิดโหมดล่า อย่าท้าทายระบบ',
        tag: 'แอกชัน',
        image: require('../assets/images/actionCategory/01.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/poetmodla/'
    },
    {
        title: 'โอม! พระยาไฟ',
        tag: 'แอกชัน',
        image: require('../assets/images/actionCategory/02.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/oam-pra-ya-fire-incantation/'
    },
    {
        title: 'พระจันทร์ลายพยัคฆ์',
        tag: 'แอกชัน',
        image: require('../assets/images/actionCategory/03.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/pra-chan-lai-pa-yak/'
    },
    {
        title: 'อินทรีแดง',
        tag: 'แอกชัน',
        image: require('../assets/images/actionCategory/04.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/the-red-mask/'
    },
    {
        title: 'สมิงจ้าวท่า',
        tag: 'แอกชัน',
        image: require('../assets/images/actionCategory/05.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/saming-chao-tha/'
    },
    {
        title: 'เสือสั่งฟ้า',
        tag: 'แอกชัน',
        image: require('../assets/images/actionCategory/06.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/suea-sang-fah-legend-of-the-tiger/'
    },
    {
        title: 'จ้าวสมิง',
        tag: 'แอกชัน',
        image: require('../assets/images/actionCategory/07.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/jao-sa-ming/'
    },
    {
        title: 'เหล็กไหล',
        tag: 'แอกชัน',
        image: require('../assets/images/actionCategory/08.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/lek-lai/'
    },
    {
        title: 'พ่อตามือปราบเฮี้ยน',
        tag: 'แอกชัน',
        image: require('../assets/images/actionCategory/09.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/por-ta-mue-prap-hean/'
    },
    {
        title: 'มือเหนือเมฆ',
        tag: 'แอกชัน',
        image: require('../assets/images/actionCategory/10.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/mue-nuea-mek-the-last-legend/'
    },
]
export const shortSeriesCategory = [
    {
        title: '21 วันของฉันกับเธอ',
        tag: 'แอกชัน',
        image: require('../assets/images/shortSeriesCategory/01.jpg'),
        link: 'https://www.bugaboo.tv/shortseries-watch/21_Days_Sunshine/ep1'
    },
    {
        title: 'ฟื้นคืนจากเถ้าถ่าน',
        tag: 'แอกชัน',
        image: require('../assets/images/shortSeriesCategory/02.jpg'),
        link: 'https://www.bugaboo.tv/shortseries-watch/Nirvana/ep1'
    },
    {
        title: 'ลิขิตรักแพทย์หญิง ดวงใจฝ่าบาท',
        tag: 'แอกชัน',
        image: require('../assets/images/shortSeriesCategory/03.jpg'),
        link: 'https://www.bugaboo.tv/shortseries-watch/Love_At_First_Sight_Doctor/ep1'
    },
    {
        title: 'ทายาทรักของประธานลู่',
        tag: 'แอกชัน',
        image: require('../assets/images/shortSeriesCategory/04.jpg'),
        link: 'https://www.bugaboo.tv/shortseries-watch/Pregnant_With_Your_Little_Ancestor/ep1'
    },
    {
        title: 'เจ้าหญิงลั่วหยาง',
        tag: 'แอกชัน',
        image: require('../assets/images/shortSeriesCategory/05.jpg'),
        link: 'https://www.bugaboo.tv/shortseries-watch/Princess_Luoyang/ep1'
    },
    {
        title: 'แผนรักลวงใจ',
        tag: 'แอกชัน',
        image: require('../assets/images/shortSeriesCategory/06.jpg'),
        link: 'https://www.bugaboo.tv/shortseries-watch/Hidden_Marriage/ep1'
    },
    {
        title: 'ทายาทเศรษฐี ผู้ส่งของ',
        tag: 'แอกชัน',
        image: require('../assets/images/shortSeriesCategory/07.jpg'),
        link: 'https://www.bugaboo.tv/shortseries-watch/Billionaire_Heiress_Delivers_Food/ep1'
    },
    {
        title: 'มหากาพย์มังกรสวรรค์',
        tag: 'แอกชัน',
        image: require('../assets/images/shortSeriesCategory/08.jpg'),
        link: 'https://www.bugaboo.tv/shortseries-watch/Eight_Heavenly_Dragons/ep1'
    },
    {
        title: 'หวนคืนรักเก่า เมื่อเราพบกันใหม่',
        tag: 'แอกชัน',
        image: require('../assets/images/shortSeriesCategory/09.jpg'),
        link: 'https://www.bugaboo.tv/shortseries-watch/Meeting_You_Again/ep1'
    },

]
export const originalCategory = [
    {
        title: 'ติดลมบน',
        image: require('../assets/images/originalCategory/01.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/tidlombon/',
        logo: require('../assets/svg/logoWhite/logCh7.png'),
        titleLogo: 'Ch7HD'
    },
    {
        title: 'เสียงจากหลุม',
        image: require('../assets/images/originalCategory/02.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/siangchaklum/',
        logo: require('../assets/svg/logoWhite/logCh7.png'),
        titleLogo: 'Ch7HD'
    },
    {
        title: 'ดวงใจ STORY',
        image: require('../assets/images/originalCategory/03.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/duangjaistory/',
        logo: require('../assets/svg/logoWhite/logCh7.png'),
        titleLogo: 'Ch7HD'
    },
    {
        title: 'Star Cam',
        image: require('../assets/images/originalCategory/04.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/starcam/',
        logo: require('../assets/svg/logoWhite/logCh7.png'),
        titleLogo: 'Ch7HD'
    },
    {
        title: 'TALK TO U',
        image: require('../assets/images/originalCategory/05.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/talktou/',
        logo: require('../assets/svg/logoWhite/logCh7.png'),
        titleLogo: 'Ch7HD'
    },
    {
        title: 'อร่อยต้องแชร์',
        image: require('../assets/images/originalCategory/06.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/aroitongshare/',
        logo: require('../assets/svg/logoWhite/bugabooTV.png'),
        titleLogo: 'BUGABOO.TV'
    },

    {
        title: 'หลงละคร',
        image: require('../assets/images/originalCategory/07.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/hlnglakhr/',
        logo: require('../assets/svg/logoWhite/logCh7.png'),
        titleLogo: 'Ch7HD'
    },
    {
        title: 'ปาเตี้ยว',
        image: require('../assets/images/originalCategory/08.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/paetiyw/',
        logo: require('../assets/svg/logoWhite/logCh7.png'),
        titleLogo: 'Ch7HD'
    },
    {
        title: '24/7 ไดอารีคนข่าว',
        image: require('../assets/images/originalCategory/09.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/247diarykonkhao/',
        logo: require('../assets/svg/logoWhite/logCh7.png'),
        titleLogo: 'Ch7HD'
    },

]

export const originalNewContent = [
    {
        title: 'EP.26 ที่สุดของความสด ธรรมชาติซีฟู้ด ครองตลาดอาหารทะเล ยอดขายทะลุพันล้าน | ติดลมบน มหาชนTalk',
        date: '3 ก.ย.2568',
        image: require('../assets/images/originalNewContent/01.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/tidlombon/1756801578237/'
    },
    {
        title: 'อยากให้เห็น" EP.28 คุณเต้ย ผีเหรียญ | เสียงจากหลุม มหาชนTalk',
        date: '30 ส.ค. 2568',
        image: require('../assets/images/originalNewContent/02.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/siangchaklum/1756365372155/'
    },
    {
        title: 'EP.17 ความ Shine ที่ไม่เคยเปลี่ยน - สน ยุกต์ | TALK TO U',
        date: '30 ส.ค. 2568',
        image: require('../assets/images/originalNewContent/03.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/talktou/1756456949340/'
    },
    {
        title: 'EP.7 เปิดตี้ชวนมาจอย x ดิว ศุภกฤต - บัว บัวบูชา',
        date: '29 ส.ค. 2568',
        image: require('../assets/images/originalNewContent/04.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/entjoyparty/1756461455888/'
    },
    {
        title: 'หาคนหาย ได้คนตาย" EP.27 คุณทองใหม่ | เสียงจากหลุม มหาชนTalk',
        date: '29 ส.ค. 2568',
        image: require('../assets/images/originalNewContent/05.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/siangchaklum/1755663413238/'
    },
    {
        title: 'MISSION 7 x หลุยส์ + ทราย Save World Save Life #คนปรับโลกเปลี่ยน',
        date: '29 ส.ค. 2568',
        image: require('../assets/images/originalNewContent/06.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/mission7/1755755034972/'
    },
    {
        title: 'EP.25 ลดมะเร็ง มีลูกยากกับ BKGI นวัตกรรมตรวจยีน ที่พลิกอนาคตสุขภาพของคนทั่วโลก! | ติดลมบน มหาชนTalk',
        date: '29 ส.ค. 2568',
        image: require('../assets/images/originalNewContent/07.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/tidlombon/1755505503552/'
    },
    {
        title: 'EP.9 "คลาวเดีย จักรพันธุ์ ณ อยุธยา" ความสำเร็จที่แลกมาด้วยความสามารถ | ดวงใจ STORY',
        date: '29 ส.ค. 2568',
        image: require('../assets/images/originalNewContent/08.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/duangjaistory/1755488823061/'
    },
    {
        title: 'ห้องเรียนผี" EP.26 อ.หนอ ศาสตราพยากรณ์ | เสียงจากหลุม มหาชนTalk',
        date: '16 ส.ค. 2568',
        image: require('../assets/images/originalNewContent/09.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/siangchaklum/1755249495950/'
    },
    {
        title: 'EP.16 LOVE & LIFE ในแบบมิว - มิว ศุภศิษฏ์ | TALK TO U',
        date: '16 ส.ค. 2568',
        image: require('../assets/images/originalNewContent/10.jpg'),
        link: 'https://www.bugaboo.tv/th/originals/talktou/1755235759619/'
    },

]



export const movieAndSeries = [
    {
        title: 'แค่เอื้อม',
        tag: 'ดรามา',
        image: require('../assets/images/movieAndSeries/01.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/kae-eaum/'
    },
    {
        title: 'เดชอสูรขันแก้วนพเก้า',
        tag: 'ดรามา',
        image: require('../assets/images/movieAndSeries/02.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/dejasoonkwankaewnoppakao/'
    },
    {
        title: 'วอน (เธอ)',
        tag: 'ดรามา',
        image: require('../assets/images/movieAndSeries/03.jpg'),
        link: 'https://www.bugaboo.tv/th/movie/68136/'
    },
    {
        title: 'นักฆ่าขนตางอน',
        tag: 'แอกชัน',
        image: require('../assets/images/movieAndSeries/04.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/nak-kha-kon-ta-ngaon/'
    },

    {
        title: 'ฟ้าหินดินทราย 2550',
        tag: 'ดรามา',
        image: require('../assets/images/movieAndSeries/05.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/fah-hin-din-sai-2007/'
    },
    {
        title: 'แฝดล่องหน 2544',
        tag: 'ดรามา',
        image: require('../assets/images/movieAndSeries/06.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/fad-long-hon/'
    },
    {
        title: 'เงากามเทพ',
        tag: 'โรแมนติก',
        image: require('../assets/images/movieAndSeries/07.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/theyoungandtheruthless/'
    },
    {
        title: 'ดั่งสายน้ำไหล',
        tag: 'โรแมนติก',
        image: require('../assets/images/movieAndSeries/08.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/dang-sai-nam-lai/'
    },
    {
        title: 'เล็กใหญ่ไม่เกี่ยว…ขอเอี่ยวด้วยคน',
        tag: 'แอกชัน',
        image: require('../assets/images/movieAndSeries/09.jpg'),
        link: 'https://www.bugaboo.tv/th/drama/lek-yai-mai-kaewko-aew-duay-kon/'
    },
    {
        title: 'โอ้! มายโกสต์ คุณผีช่วย',
        tag: 'คอมเมดี้',
        image: require('../assets/images/movieAndSeries/10.jpg'),
        link: 'https://www.bugaboo.tv/th/movie/66659/'
    },

]

export const sportCategory = [
    {
        title: 'วอลเลย์บอล นักเรียนหญิง',
        tag: 'กีฬา',
        image: require('../assets/images/sportCategory/01.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/volleyballchamp7hd2025/'
    },
    {
        title: 'บาสเกตบอล 3X3 นักเรียนชาย',
        tag: 'กีฬา',
        image: require('../assets/images/sportCategory/02.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/bas3x3champ7hd2025/'
    },
    {
        title: 'มวยไทย 7 สี',
        tag: 'กีฬา',
        image: require('../assets/images/sportCategory/03.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/muaythai7see/'
    },
    {
        title: 'ONE FIGHT NIGHT',
        tag: 'กีฬา',
        image: require('../assets/images/sportCategory/04.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/onelumpinee/'
    },
    {
        title: 'ONE ลุมพินี',
        tag: 'กีฬา',
        image: require('../assets/images/sportCategory/05.png'),
        link: 'https://www.bugaboo.tv/th/variety/onelumpinee/'
    },
    {
        title: 'ฟุตบอลแชมป์ แชมเปียน คัพ',
        tag: 'กีฬา',
        image: require('../assets/images/sportCategory/06.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/futblaechmp-7hd-aechmepiyn-khaph-2024/'
    },
    {
        title: 'สปอร์ตแฟน',
        tag: 'กีฬา',
        image: require('../assets/images/sportCategory/07.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/sportfan/'
    },
    {
        title: 'มวยเด็ด วิกหมอชิต',
        tag: 'กีฬา',
        image: require('../assets/images/sportCategory/08.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/muayded-vicmorchit/'
    },
    {
        title: 'เซียนสปอร์ต',
        tag: 'กีฬา',
        image: require('../assets/images/sportCategory/09.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/siansports/'
    },
    {
        title: 'ONE LUMPINEE SPECIAL',
        tag: 'กีฬา',
        image: require('../assets/images/sportCategory/10.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/one-lumpinee-special/'
    },
]


export const lastNews = [
    {
        title: 'ไดอยสุเทพ-ปุย เก็บเงินค่าเข้า เริ่ม 1 ต.ค. 68',
        date: '5.ก.ย 68',
        image: require('../assets/images/lastNews/01.jpg'),
        link: 'https://www.bugaboo.tv/th/news/68461/'
    },
    {
        title: "GABBY'S DOLLHOUSE: THE MOVIE เตรียมตัวบีบหูซ้าย บีบหูขวา หมุน ๆ แล้วย่อส่วน!! ในตัวอย่างแรกของหนัง",
        date: '5.ก.ย 68',
        image: require('../assets/images/lastNews/02.jpg'),
        link: 'https://www.bugaboo.tv/th/news/68460/'
    },
    {
        title: "เครยอนชินจัง เดอะมูฟวี่: ร้อนแรงแซ่บเว่อร์! แดนเซอร์แห่งคาซึคาเบะ “ลาก่อนนะ ชินจัง?!” ในบนโปสเตอร์แรกจากหนัง",
        date: '5.ก.ย 68',
        image: require('../assets/images/lastNews/03.jpg'),
        link: 'https://www.bugaboo.tv/th/news/68459/'
    },
    {
        title: "Caught Stealing คนเดือดขวางทางโจร “ออสติน บัตเลอร์” เตรียมซวย ทำไมทุกคนจ้องฆ่าผม",
        date: '5.ก.ย 68',
        image: require('../assets/images/lastNews/04.jpg'),
        link: 'https://www.bugaboo.tv/th/news/68458/'
    },
    {
        title: "รักสุดฟินเลเวล999กับยามาดะคุง เตรียมหัวใจให้พร้อมไปกับความรักแบบเกมเมอร์ ในตัวอย่างและใบปิดแรก",
        date: '5.ก.ย 68',
        image: require('../assets/images/lastNews/05.jpg'),
        link: 'https://www.bugaboo.tv/th/news/68457/'
    },
    {
        title: "สะเก็ดข่าว | FULL EP | 4 ก.ย.68",
        date: '5.ก.ย 68',
        image: require('../assets/images/lastNews/06.jpg'),
        link: 'https://www.bugaboo.tv/th/news/68436/'
    },
    {
        title: "สะเก็ดข่าว : ต้องลุ้น",
        date: '5.ก.ย 68',
        image: require('../assets/images/lastNews/07.jpg'),
        link: 'https://www.bugaboo.tv/th/news/68435/'
    },
    {
        title: "สะเก็ดข่าว : ข้ามถนน",
        date: '5.ก.ย 68',
        image: require('../assets/images/lastNews/08.jpg'),
        link: 'https://www.bugaboo.tv/th/news/68434/'
    },
    {
        title: "สะเก็ดข่าว : น้องห่านคูเมือง",
        date: '5.ก.ย 68',
        image: require('../assets/images/lastNews/09.jpg'),
        link: 'https://www.bugaboo.tv/th/news/68433/'
    },
    {
        title: "ฝนฟ้าอากาศ 4 ก.ย.68",
        date: '5.ก.ย 68',
        image: require('../assets/images/lastNews/10.jpg'),
        link: 'https://www.bugaboo.tv/th/news/68432/'
    },
    

]


export const popularTag2 : PoppularTagProps[] = [
    { tagTitle: 'เส้นทางบันเทิง 31 ธันวาคม 2564' },
    { tagTitle: 'ตัวอย่างหนัง Bride Hard อึดนรกแต่ง' },
    { tagTitle: 'มงคลเมเจอร์' },
    { tagTitle: 'ข่าวบันเทิง' },
    { tagTitle: 'ดาบพิฆาตอสูร ภาคปราสาทไร้ขอบเขต' },
    { tagTitle: 'Despicable Me 4 มิสเตอร์แสบ ร้ายเกินพิกัด 4' },
    { tagTitle: 'เที่ยงบันเทิงสด' },
    { tagTitle: 'รายการบันเทิงช่อง7' },
    { tagTitle: 'ทำบุญ' },

];

export const techCategory = [
    {
        title: 'วิธีทำให้สายเรียกเข้าขึ้นเต็มจอขณะใช้งาน บน Android | How To Tricks EP.318',
        date: '4.ก.ย 68',
        image: require('../assets/images/techCategory/01.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/1756974406799/'
    },
    {
        title: 'วิธีประหยัดแบต iPhone (iOS 26) ยืดแบตอึดกับฟีเจอร์ Adaptive Power Mode | How To Tricks',
        date: '4.ก.ย 68',
        image: require('../assets/images/techCategory/02.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/1756439801684/'
    },
    {
        title: 'วิธีทำให้สายเรียกเข้าขึ้นเต็มจอขณะใช้งาน บน iPhone | How To Tricks EP.316',
        date: '4.ก.ย 68',
        image: require('../assets/images/techCategory/03.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/1755766959840/'
    },
    {
        title: 'วิธีป้องกันมิจฉาชีพ ส่งข้อความหาเราในแชท Facebook Messenger | How To Tricks EP.315',
        date: '4.ก.ย 68',
        image: require('../assets/images/techCategory/04.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/1755232854292/'
    },
    {
        title: 'Audio Sharing วิธีแชร์เสียงหูฟัง AirPods ร่วมกับเพื่อนบน iPhone หรือ iPad | How To Tricks EP.314',
        date: '7 ส.ค. 2568',
        image: require('../assets/images/techCategory/05.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/1754538734432/'
    },
    {
        title: 'วิธีเคลียร์พื้นที่ Gmail เต็ม หมดปัญหาเมลล้น ทริคง่าย ๆ ทำได้ทันที | How To Tricks EP.313',
        date: '1 ส.ค.2568',
        image: require('../assets/images/techCategory/06.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/1754025336423/'
    },
    {
        title: 'รวม 5 ฟีเจอร์ใหม่ Facebook Messenger เพิ่มลูกเล่นอะไรบ้าง | How To Tricks EP.311',
        date: '1 ส.ค.2568',
        image: require('../assets/images/techCategory/07.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/1752814494095/'
    },
    {
        title: "LINE อัพเดตฟีเจอร์ 'รีแอคชั่น' ส่งรีแอคชั่นข้อความด้วยอิโมจิเพิ่มขึ้น | How To Tricks EP.310",
        date: '9 ก.ค. 2568',
        image: require('../assets/images/techCategory/08.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/1752060282408/'
    },
    {
        title: "วิธีใช้ Chain สตอรี่ ฟีเจอร์ใหม่ใน Instagram | How To Tricks EP.309",
        date: '3 ก.ค. 2568',
        image: require('../assets/images/techCategory/09.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/1751540865676/'
    },

]


export const varietyCategory = [
    {
        title: 'Picpost Review',
        image: require('../assets/images/varietyCategory/01.png'),
        link: 'https://www.bugaboo.tv/th/variety/picpost-review/'
    },
    {
        title: 'ยิ่งคุย ยิ่งลึก',
        image: require('../assets/images/varietyCategory/02.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/yingkhuy-yingluek/'
    },
    {
        title: 'ทำดีได้ดี',
        image: require('../assets/images/varietyCategory/03.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/Thdeeaiddee/'
    },
    {
        title: 'ละครดี Recap',
        image: require('../assets/images/varietyCategory/04.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/lakorndeerecap/'
    },
    {
        title: 'นิวบอย SOI 7',
        image: require('../assets/images/varietyCategory/05.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/newboysoi7/'
    },
    {
        title: 'How To Tricks',
        image: require('../assets/images/varietyCategory/06.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/how-to-tricks/'
    },
    {
        title: 'มิตรรัก ทั่วไทย',
        image: require('../assets/images/varietyCategory/07.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/mitrrakthoathai/'
    },
    {
        title: 'ดวลเพลงดัง Ch7HD',
        image: require('../assets/images/varietyCategory/08.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/duanplengdang/'
    },
    {
        title: 'เรื่องเล่าอาจารย์ยอด',
        image: require('../assets/images/varietyCategory/09.jpg'),
        link: 'https://www.bugaboo.tv/th/variety/ajarnyord/'
    },
 
]

export const popularTag3 : PoppularTagProps[] = [
    { tagTitle: 'เมษายน 2566' },
    { tagTitle: 'นมัสการ' },
    { tagTitle: 'ที่เที่ยวโรแมนติก' },
    { tagTitle: 'เดินป่า' },
    { tagTitle: 'ที่เที่ยวภาคใต้' },
    { tagTitle: 'งานสงกรานต์ 2568' },
    { tagTitle: 'สิงหาคม 2566' },
    { tagTitle: 'ที่เที่ยวธรรมชาติใกล้กรุง' },
    { tagTitle: 'ที่เที่ยววาเลนไทน์' },

];


