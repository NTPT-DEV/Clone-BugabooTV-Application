import BannerHorizontal from '@/components/BannerHorizontal'
import { newContent } from '@/constants/utils'
import { StyleSheet, Text, View } from 'react-native'


const NewContentSection = () => {
    return (
        <View style={styles.newContentContainer}>
            <Text
                style={{
                    fontFamily: 'sukumvit-bold',
                    fontSize: 18,
                    margin : 5
                }}
            >
                เนื้อหามาใหม่
            </Text>
            <BannerHorizontal data={newContent} />
        </View>
    )
}
export default NewContentSection

const styles = StyleSheet.create({
     newContentContainer: {
        marginHorizontal: 15
    }
})