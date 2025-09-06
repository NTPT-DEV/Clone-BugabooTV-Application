import BannerVertical from '@/components/BannerVertical'
import NameSection from '@/components/NameSection'
import { colors, dramaCategory } from '@/constants/utils'
import { FlatList, StyleSheet, View } from 'react-native'
const DramaCategorySection = () => {
    return (
        <View style={{
            flex: 1,
            marginTop: 15,
        }}>
            <NameSection
                title={'ดรามาน้ำตาคลอ'}
                linkColor={colors.darkPurple2}
                link={'https://www.bugaboo.tv/th/drama/all/drama-promote-teary/'} />

            <FlatList
                style={{ marginTop: 15, paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={dramaCategory}
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
export default DramaCategorySection
const styles = StyleSheet.create({})