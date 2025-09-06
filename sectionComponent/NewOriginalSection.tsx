import BannerHorizontal from '@/components/BannerHorizontal'
import NameSection from '@/components/NameSection'
import { colors, originalNewContent } from '@/constants/utils'
import { Image, StyleSheet, View } from 'react-native'
const NewOriginalSection = () => {
    return (
        <View
            style={{
                height: 320,
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
                    opacity: 0.2,
                    zIndex: 0,
                }}
            />
            <NameSection title={'ORIGINALS มาใหม่'} titleColor={'white'} link={'https://www.bugaboo.tv/th/originals/'} />
            <BannerHorizontal data={originalNewContent} colorTitle='white' />
        </View>
    )
}
export default NewOriginalSection
