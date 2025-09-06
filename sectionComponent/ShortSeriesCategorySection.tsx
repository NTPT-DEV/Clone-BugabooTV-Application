import BannerVertical from '@/components/BannerVertical'
import NameSection from '@/components/NameSection'
import { colors, shortSeriesCategory } from '@/constants/utils'
import { FlatList, Image, StyleSheet, View } from 'react-native'
const ShortSeriesCategorySection = () => {
    return (
        <View
            style={{
                flex: 1,
                height: 460,
                backgroundColor: colors.darkPurple3,
                position: 'relative',
                overflow: 'hidden',
                paddingTop: 10,
                marginTop : 20
            }}
        >
            <Image
                source={require('../assets/images/imageBackground/bg01.jpg')}
                blurRadius={2}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    position: 'absolute',
                    left: -450,
                    resizeMode: 'cover',
                    opacity: 0.15,
                    zIndex: 0,
                }}
            />

            <NameSection title={'Short Series'} titleColor={'white'} link={'https://www.bugaboo.tv/th/shortseries/'} />

            <FlatList
                style={{ marginTop: 15, paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={shortSeriesCategory}
                renderItem={({ item, index }) => {
                    return (
                        <BannerVertical
                            title={item.title}
                            tag={item.tag}
                            image={item.image}
                            link={item.link}
                            index={index}
                            titleColor={'white'}
                            tagTitleColor={'white'}
                        />
                    )
                }}
                keyExtractor={(item, index) => item.title + index.toString()}
            />

        </View>
    )
}
export default ShortSeriesCategorySection
