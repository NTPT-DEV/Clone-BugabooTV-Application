import BannerVerticalOriginal from '@/components/BannerVerticalOriginal'
import NameSection from '@/components/NameSection'
import { colors, originalCategory } from '@/constants/utils'
import { FlatList, Image, StyleSheet, View } from 'react-native'
const OriginalCategorySection = () => {
    return (
        <View
            style={{
                flex: 1,
                height: 460,
                backgroundColor: colors.darkPurple3,
                position: 'relative',
                overflow: 'hidden',
                paddingTop: 10,

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

            <NameSection title={'ORIGINALS'} titleColor={'white'} link={'https://www.bugaboo.tv/th/originals/'} />

            <FlatList
                style={{ marginTop: 15, paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={originalCategory}
                renderItem={({ item, index }) => {
                    return (
                        <BannerVerticalOriginal
                            title={item.title}
                            image={item.image}
                            link={item.link}
                            index={index}
                            titleColor={'white'}
                            logo={item.logo}
                            titleLogo={item.titleLogo}
                            borderColor={colors.purple}
                            titleLogoColor='white'
                        />
                    )
                }}
                keyExtractor={(item, index) => item.title + index.toString()}
            />

        </View>
    )
}
export default OriginalCategorySection
const styles = StyleSheet.create({})