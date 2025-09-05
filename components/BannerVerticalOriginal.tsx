import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ToptenProps {
    title?: string
    image?: number
    link?: string
    index?: number
    tag?: string
    titleColor?: string
    tagTitleColor?: string
    logo ? : number 
    titleLogo ? : string
    titleLogoColor ? : string 
    borderColor?  : string

}
const BannerVerticalOriginal = ({ title, image, link, tag, titleColor, tagTitleColor , logo , titleLogo , titleLogoColor , borderColor }: ToptenProps) => {

    return (
        <TouchableOpacity
            onPress={() => Linking.openURL(link!)}
            style={styles.container}>
            <Image
                style={styles.image}
                source={image}
            />
            <View style={{
                marginTop : 7 , 
                borderWidth : 1 , 
                borderColor : borderColor,
                borderRadius : 5,
                justifyContent : 'center' , 
                alignItems : 'center' , 
                flexDirection : 'row' , 
                paddingVertical : 6,
                gap : 3
            }}>
                <Image source={logo} 
                style={{width : 20 , height : 20 , resizeMode : 'cover'}}
                />
                <Text style={{
                    fontFamily : 'sukumvit-semibold',
                    fontSize : 14 , 
                    color : titleLogoColor
                }}>{titleLogo}</Text>
            </View>
            <View style={{ marginHorizontal: 5}} >
                {/* <TagComp tag={tag} tagTitleColor={tagTitleColor} borderColor={colors.purple} /> */}
                <Text style={[styles.title, { color: titleColor }]}>{title!}</Text>
            </View>

        </TouchableOpacity>
    )
}
export default BannerVerticalOriginal
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
        marginTop: 7,
        marginLeft: 4,
        fontFamily: 'sukumvit-semibold',
        fontSize: 16,
        flexWrap : 'wrap'
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