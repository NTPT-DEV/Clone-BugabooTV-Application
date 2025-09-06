import BannerHorizontal from '@/components/BannerHorizontal'
import NameSection from '@/components/NameSection'
import { colors, lastNews } from '@/constants/utils'
import { StyleSheet, View } from 'react-native'
const NewsUpdateSection = () => {
    return (
        <View style={styles.newContentContainer}>
            <NameSection 
            title={'ข่าวล่าสุด'} 
            linkColor={colors.darkPurple2} 
            link={'https://www.bugaboo.tv/th/news/all/'} />
            <BannerHorizontal data={lastNews} />
        </View>
    )
}
export default NewsUpdateSection

const styles = StyleSheet.create({
    newContentContainer: {
        marginHorizontal: 5
    }
})