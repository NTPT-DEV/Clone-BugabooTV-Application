import BannerVertical from '@/components/BannerVertical'
import NameSection from '@/components/NameSection'
import { colors, sportCategory } from '@/constants/utils'
import { FlatList, View } from 'react-native'
const SportSection = () => {
    return (
        <View style={{
            flex: 1,
            marginTop: 15,
        }}>
            <NameSection title={'รายการกีฬา'} linkColor={colors.darkPurple2} link={'https://www.bugaboo.tv/th/variety/all/variety-promote-sportsshows/'} />
            <FlatList
                style={{ marginTop: 15, paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={sportCategory}
                renderItem={({ item, index }) => {
                    return (
                        <BannerVertical
                            title={item.title}
                            tag={item.tag}
                            image={item.image}
                            link={item.link}
                            index={index}
                            titleColor={colors.darkGray}
                            tagTitleColor={colors.purple}
                        />
                    )
                }}
                keyExtractor={(item, index) => item.title + index.toString()}
            />
        </View>
    )
}
export default SportSection