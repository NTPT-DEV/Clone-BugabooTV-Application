import { colors } from '@/constants/utils'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    tagTitle? : string
}

const TagName = ({tagTitle} : Props) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleTag}>{tagTitle}</Text>
        </View>
    )
}
export default TagName
const styles = StyleSheet.create({
     titleContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 7,
            paddingVertical: 3,
            width: 'auto',
            height: 25,
            backgroundColor: colors.lightPurple,
            borderWidth: 1,
            borderColor: colors.purple,
            borderRadius: 5,
            marginRight: 10
        },
        titleTag: {
            color: colors.purple,
            fontFamily: 'sukumvit-text',
            textAlign: 'center'
        },
})