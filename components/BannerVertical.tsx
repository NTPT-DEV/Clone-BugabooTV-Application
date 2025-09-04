import { colors } from '@/constants/utils';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TagComp from './TagComp';

interface ToptenProps {
    title?: string
    image?: number
    link?: string
    index?: number
    tag?: string
    titleColor?: string
}
const BannerVertical = ({ ...item }: ToptenProps) => {

    return (
        <TouchableOpacity
            onPress={() => Linking.openURL(item.link!)}
            style={styles.container}>
            <Image
                style={styles.image}
                source={item.image}
            />
            <View style={{marginHorizontal : 5}} >
                <TagComp {...item} tagTitleColor={colors.purple} borderColor={colors.purple} />
                <Text style={[styles.title, { color: item.titleColor }]}>{item.title!}</Text>
            </View>

        </TouchableOpacity>
    )
}
export default BannerVertical
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        marginRight: 10

    },
    image: {
        borderRadius: 10,
        height: 300,
        width: 200,
        resizeMode: 'cover',
    },
    title: {
        marginTop: 4,
        marginLeft: 4,
        fontFamily: 'sukumvit-semibold',
        fontSize: 16,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        position: 'relative'
    },
    iconText: {
        fontFamily: 'sukumvit-bold',
        color: '#fff',
        fontSize: 20,
        position: 'absolute'
    }
})