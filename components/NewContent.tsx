import { colors } from '@/constants/utils';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

interface NewContentProps {
    title: string;
    date: string;
    image: number;
    link: string;
}


const NewContent = ({ title, date, image, link }: NewContentProps) => {
    return (
        <Pressable
            onPress={() => Linking.openURL(link)}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Text
                        style={{
                            fontFamily: 'sukumvit-semibold',
                            color: colors.gray,
                            fontSize: 12
                        }}
                    >{date}</Text>
                    <Text
                        style={{
                            fontFamily: 'sukumvit-semibold',
                            fontSize: 18,
                            lineHeight: 20,
                            color: colors.darkGray
                        }}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >{title}</Text>
                </View>
            </View>
        </Pressable>
    )
}
export default NewContent
const styles = StyleSheet.create({
    container: {
        width: 260,
        height: 240,
        overflow: 'hidden',

        gap: 10
    },
    imageContainer: {
        width: '100%',
        height: 150,
        overflow: 'hidden',
        borderRadius: 10
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    textContainer: {
        padding: 5,
        gap: 5
    }
})