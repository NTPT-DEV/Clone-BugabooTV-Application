import { colors } from '@/constants/utils';
import { LinearGradient } from 'expo-linear-gradient';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const videoSource = require('../assets/videos/BUGABOOTV.mp4');
const widthScreen = Dimensions.get('window').width;

const LiveChanelStection = () => {


    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });
    return (
        <View style={styles.container}>
            <VideoView
                style={styles.video}
                player={player}
                allowsFullscreen
                allowsPictureInPicture
                contentFit="contain"
            />
            <View style={styles.imageContainer}>
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }}
                    colors={[colors.darkPurple2, colors.lightBlue]}
                    style={
                        {
                            padding: 2,
                            borderRadius: 8,
                        }}>
                    <Image
                        style={{
                            borderRadius: 6,
                            width: 120,
                            height: 62,
                            resizeMode: 'cover',
                        }}
                        source={require('../assets/images/logos/ch7-logo.png')} />
                </LinearGradient>
                <View style={{
                    borderRadius: 8,
                    width: 120,
                    height: 65,
                    elevation: 3
                }}>
                    <Image
                        style={{
                            borderRadius: 8,
                            width: 120,
                            height: 65,
                            resizeMode: 'cover',

                        }}
                        source={require('../assets/images/logos/hot-news.png')} />
                </View>
            </View>
        </View>
    )
}
export default LiveChanelStection
const styles = StyleSheet.create({
    container: {
        paddingTop : 90 ,
        backgroundColor: 'transparent',
    },
    imageContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        gap: 8,
        paddingHorizontal: 10,

    },
    videoContainer: {
        justifyContent: 'center', alignItems: 'center'
    },
    video: {
        width: widthScreen,
        aspectRatio: 16 / 9
    },
})