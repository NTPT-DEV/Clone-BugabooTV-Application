import BannerVertical from '@/components/BannerVertical'
import NameSection from '@/components/NameSection'
import { colors, movieAndSeries } from '@/constants/utils'
import { FlatList, StyleSheet, View } from 'react-native'
const MoviesAndSeriesSection = () => {
    return (
        <View style={{
            flex: 1,
            marginTop: 15,
        }}>
            <NameSection title={'หนังและซีรีส์'} linkColor={colors.darkPurple2} link={'https://www.bugaboo.tv/th/movies-series/'} />
            <FlatList
                style={{ marginTop: 15, paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={movieAndSeries}
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
export default MoviesAndSeriesSection
const styles = StyleSheet.create({})