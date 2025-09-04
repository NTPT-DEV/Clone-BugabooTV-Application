import { colors } from '@/constants/utils';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

interface SugestForYouProps {
    nameCategory?: string;
    title?: string;
    image?: number ;
    link?: string
}

const SugestForYou = ({ nameCategory, title, image, link }: SugestForYouProps) => {

    return (
        <Pressable
            onPress={() => {
                link && Linking.openURL(link);
            }}
        >
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title1}>{nameCategory}</Text>
                </View>
                <Text style={styles.title2} >{title}</Text>
                {image && (
                    <Image
                        style={styles.image}
                        source={ image }
                    />
                )}
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 0.7, y: 0 }}
                    colors={['#000000ff', 'transparent']} style={StyleSheet.absoluteFillObject} />
            </View>
        </Pressable>
    )
}
export default SugestForYou

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        width: 250,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative' , 
        marginRight : 12

    },
    image: {
        height: 110,
        width: 250,
        resizeMode: 'cover',
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 7,
        paddingVertical: 2,
        width: 'auto',
        height: 25,
        backgroundColor: colors.lightPurple,
        borderWidth: 1,
        borderBlockColor: colors.purple,
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 10,
        borderRadius: 5,
    },
    title1: {
        color: colors.purple,
        fontFamily: 'sukumvit-text'
    },
    title2: {
        color: '#fff',
        position: 'absolute',
        fontFamily: 'sukumvit-bold',
        bottom: 10,
        left: 12,
        fontSize: 16,
        zIndex: 10
    }
})