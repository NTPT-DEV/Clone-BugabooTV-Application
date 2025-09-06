// sections.ts

import HorizontalCententComp from '@/components/HorizontalCententComp';
import NameSection from '@/components/NameSection';
import ActionCategorySection from '@/sectionComponent/ActionCategorySection';
import DramaCategorySection from '@/sectionComponent/DramaCategorySection';
import DramaCH7Section from '@/sectionComponent/DramaCH7Section';
import HightLightSection from '@/sectionComponent/HightLightSection';
import ListmenuSection from '@/sectionComponent/ListmenuSection';
import LiveChanelStection from '@/sectionComponent/LiveChanelStection';
import MoviesAndSeriesSection from '@/sectionComponent/MoviesAndSeriesSection';
import NewOriginalSection from '@/sectionComponent/NewOriginalSection';
import NewsUpdateSection from '@/sectionComponent/NewsUpdateSection';
import OriginalCategorySection from '@/sectionComponent/OriginalCategorySection';
import PoppularTagSection from '@/sectionComponent/PoppularTagSection';
import ShortSeriesCategorySection from '@/sectionComponent/ShortSeriesCategorySection';
import SportSection from '@/sectionComponent/SportSection';
import ToptenSection from '@/sectionComponent/ToptenSection';
import WelcomeSuggestSection from '@/sectionComponent/WelcomeSuggestSection';
import { colors, newContent, popularTag, popularTag2, techCategory } from './utils';


export const sections = [
    { type: 'liveChannelSection', component :  <LiveChanelStection /> },
    { type: 'nameLiveSection', component :  <NameSection nameLive='ฟ้ามีตา' title={'ถ่ายทอดสด ช่อง 7HD'} linkColor={colors.purple} titleColor={colors.black} link={'https://www.bugaboo.tv/th/live/'} /> },
    { type: 'WelcomeSuggestSection', component : <WelcomeSuggestSection /> },
    { type: 'ListmenuSection', component : <ListmenuSection /> },
    { type: 'ToptenSection', component : <ToptenSection /> },
    { type: 'HightLightSection', component : <HightLightSection /> },
    { type: 'PoppularTagSection', component : <PoppularTagSection data={popularTag} /> },
    { type: 'NewContentSection', component : <HorizontalCententComp  title={'เนื้อหามาใหม่'} data={newContent}/> },
    { type: 'DramaCH7Section', component : <DramaCH7Section /> },
    { type: 'DramaCategorySection', component : <DramaCategorySection /> },
    { type: 'ActionCategorySection', component : <ActionCategorySection /> },
    { type: 'ShortSeriesCategorySection', component : <ShortSeriesCategorySection /> },
    { type: 'OriginalCategorySection', component : <OriginalCategorySection /> },
    { type: 'NewOriginalSection', component : <NewOriginalSection /> },
    { type: 'MoviesAndSeriesSection', component : <MoviesAndSeriesSection /> },
    { type: 'SportSection', component : <SportSection /> },
    { type: 'NewsUpdateSection', component : <NewsUpdateSection /> },
    { type: 'PoppularTagSection2', component : <PoppularTagSection data={popularTag2} /> },
    { type: 'TectnologySection', component : <HorizontalCententComp title={'เทคโนโลยี'} data={techCategory} /> },
    
];
