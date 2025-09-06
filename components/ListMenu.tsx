import { colors } from '@/constants/utils'
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native'


interface MenuModal {
    title: string
    icon: React.ReactNode
    link: string
}

const ListMenu = ({ title, icon, link }: MenuModal) => {
    return (
        <Pressable
            onPress={() => {
                link && Linking.openURL(link);
            }}>
            <View style={styles.container}>
                {icon}
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    )
}
export default ListMenu
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent : 'flex-start',
        alignItems : 'center' , 
        gap : 5 , 
    } , 
    text : {
        color : colors.gray , 
        fontFamily : 'sukumvit-bold'
    }
})