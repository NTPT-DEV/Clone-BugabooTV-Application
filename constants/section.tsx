// sections.ts

import HorizontalCententComp from '@/components/HorizontalCententComp';
import NameSection from '@/components/NameSection';
import VerticalContentComp from '@/components/VerticalContentComp';
import HightLightSection from '@/sectionComponent/HightLightSection';
import ListmenuSection from '@/sectionComponent/ListmenuSection';
import LiveChanelStection from '@/sectionComponent/LiveChanelStection';
import NewOriginalSection from '@/sectionComponent/NewOriginalSection';
import OriginalCategorySection from '@/sectionComponent/OriginalCategorySection';
import PoppularTagSection from '@/sectionComponent/PoppularTagSection';
import ToptenSection from '@/sectionComponent/ToptenSection';
import VerticalDarkContentBGComp from '@/sectionComponent/VerticalDarkContentBGComp';
import WelcomeSuggestSection from '@/sectionComponent/WelcomeSuggestSection';
import { actionCategory, colors, dramaCategory, dramaCH7, lastNews, movieAndSeries, newContent, popularTag, popularTag2, popularTag3, shortSeriesCategory, sportCategory, techCategory, varietyCategory } from './utils';


export const sections = [
    { type: 'liveChannelSection', component: <LiveChanelStection /> },
    { type: 'nameLiveSection', component: <NameSection nameLive='ฟ้ามีตา' title={'ถ่ายทอดสด ช่อง 7HD'} linkColor={colors.purple} titleColor={colors.black} link={'https://www.bugaboo.tv/th/live/'} /> },
    { type: 'WelcomeSuggestSection', component: <WelcomeSuggestSection /> },
    { type: 'ListmenuSection', component: <ListmenuSection /> },
    { type: 'ToptenSection', component: <ToptenSection /> },
    { type: 'HightLightSection', component: <HightLightSection /> },
    { type: 'PoppularTagSection', component: <PoppularTagSection data={popularTag} /> },
    { type: 'NewContentSection', component: <HorizontalCententComp title={'เนื้อหามาใหม่'} data={newContent} /> },
    { type: 'DramaCH7Section', component: <VerticalDarkContentBGComp data={dramaCH7} title={'ละครช่อง 7HD'} link={'https://www.bugaboo.tv/th/drama/'} /> },
    { type: 'DramaCategorySection', component: <VerticalContentComp data={dramaCategory} title={'ดราม่าน้ำตาคลอ'} link={'https://www.bugaboo.tv/th/drama/'} /> },
    { type: 'ActionCategorySection', component: <VerticalContentComp data={actionCategory} title={'แอกชั่น'} link={'https://www.bugaboo.tv/th/drama/all/drama-promote-action/'} /> },
    { type: 'ShortSeriesCategorySection', component: <VerticalDarkContentBGComp data={shortSeriesCategory} title={'Short Series'} link={'https://www.bugaboo.tv/th/shortseries/'} /> },
    { type: 'OriginalCategorySection', component: <OriginalCategorySection /> },
    { type: 'NewOriginalSection', component: <NewOriginalSection /> },
    { type: 'MoviesAndSeriesSection', component: <VerticalContentComp data={movieAndSeries} title={'หนังและซีรีย์'} link={'https://www.bugaboo.tv/th/movies-series/'} /> },
    { type: 'SportSection', component: <VerticalContentComp data={sportCategory} title={'รายการกีฬา'} link={'https://www.bugaboo.tv/th/variety/all/variety-promote-sportsshows/'} /> },
    { type: 'NewsUpdateSection', component: <HorizontalCententComp title={'ข่าวล่าสุด'} data={lastNews} /> },
    { type: 'PoppularTagSection2', component: <PoppularTagSection data={popularTag2} /> },
    { type: 'TectnologySection', component: <HorizontalCententComp title={'เทคโนโลยี'} data={techCategory} /> },
    { type: 'VarietyCategorySection', component: <VerticalContentComp data={varietyCategory} title={'รายการวาไรตี'} link={'https://www.bugaboo.tv/th/variety/'} /> },
    { type: 'PoppularTagSection3', component: <PoppularTagSection data={popularTag3} /> },


];
