import { colors } from '@/constants/utils'
import { StyleSheet, View } from 'react-native'
import BannerHorizontal from './BannerHorizontal'
import NameSection from './NameSection'

interface DataProps {
    title: string
    date : string
    image: number
    link: string
}

interface ComponentProp {
    title: string
    data: DataProps[]
}
const HorizontalCententComp = ({title ,data} : ComponentProp) => {


    return (
        <View style={styles.contentContainer}>
            <NameSection
                title={title}
                linkColor={colors.darkPurple2}
                link={'https://www.bugaboo.tv/th/news/all/'} />
            <BannerHorizontal data={data} />
        </View>
    )
}
export default HorizontalCententComp
const styles = StyleSheet.create({
    contentContainer: {
        marginHorizontal: 5
    }
})