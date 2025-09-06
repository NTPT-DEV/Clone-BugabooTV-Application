import BannerVertical from '@/components/BannerVertical'
import NameSection from '@/components/NameSection'
import { actionCategory, colors } from '@/constants/utils'
import { FlatList, StyleSheet, View } from 'react-native'
const ActionCategorySection = () => {
    return (
        <View style={{
            flex: 1,
            marginTop: 15,
        }}>
            <NameSection title={'แอกชัน'} linkColor={colors.darkPurple2} link={'https://www.bugaboo.tv/th/drama/all/drama-promote-action/'} />
            <FlatList
                style={{ marginTop: 15, paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={actionCategory}
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
export default ActionCategorySection
const styles = StyleSheet.create({})