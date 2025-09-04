import { colors } from '@/constants/utils';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Shield } from 'lucide-react-native';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ToptenProps {
    name: string
    image: number
    link: string
    index ? : number
}
const TopTenCard = ({name , image , link , index} : ToptenProps) => {
    return (
        <TouchableOpacity 
        onPress={() => Linking.openURL(link)}
        style={styles.container}>
            <View style={{position : 'absolute' , zIndex : 20 , top : 4}}>
                <View style={styles.iconContainer}>
                    <MaskedView
                        maskElement={
                            <Shield width={40} height={40} fill="black" color="black" />
                        }
                    >
                        <LinearGradient
                            colors={[colors.darkPurple, colors.lightBlue]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{ width: 40, height: 40 }}
                        />
                    </MaskedView>
                    <Text style={styles.iconText}>{index! + 1 }</Text>
                </View>
            </View>
            <Image
                style={styles.image}
                source={image}
            />
            <Text style={styles.title}>{name!}</Text>

        </TouchableOpacity>
    )
}
export default TopTenCard


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative' ,
        marginRight : 10
        
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
        fontSize: 15,
        color: colors.darkGray
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