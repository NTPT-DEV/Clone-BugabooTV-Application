
import MenuIcon from '@/components/MenuIcon';
import NewContent from '@/components/NewContent';
import SugestForYou from '@/components/SugestForYou';
import TopTenCard from '@/components/TopTenCard';
import { colors, highLight, iconLists, imageCategory, newContent, popularTag, topTenToday } from '@/constants/utils';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useVideoPlayer, VideoView } from 'expo-video';
import { ArrowRight, ChevronLeft, ChevronRight, Crown, Menu, MoveRight, Store } from 'lucide-react-native';
import { Dimensions, FlatList, Image, Linking, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import BagabooTVLogo from '../../assets/svg/bugaboo-tv.svg';
import HelpIcon from '../../assets/svg/helpIcon.svg';



const widthScreen = Dimensions.get('window').width;
const videoSource = require('../../assets/videos/BUGABOOTV.mp4');

const HomeScreen = () => {
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });
    return (
        <ScrollView style={styles.rootContainer}>
            <StatusBar hidden={true} />
            <View style={styles.navBar}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Menu color={"black"} width={24} height={24} />
                    <BagabooTVLogo width={130} height={130} />
                </View>
                <View style={styles.containerRightIcon}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }}
                        colors={[colors.darkPurple2, colors.lightBlue]}
                        style={styles.gradientBorder}
                    >
                        <View style={styles.innerBox}>
                            <HelpIcon width={28} height={28} />
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }}
                        colors={[colors.darkPurple2, colors.lightBlue]}
                        style={styles.gradientBorder}
                    >
                        <View style={styles.innerBox}>
                            <Store color={colors.darkPurple2} width={20} height={20} />
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }}
                        colors={[colors.darkPurple2, colors.lightBlue]}
                        style={[styles.gradientBorder,
                        { justifyContent: 'center', alignItems: 'center', width: 33, height: 33 }]}>
                        <Crown fill={'white'} color={'white'} width={15} height={15} />
                    </LinearGradient>
                </View>
            </View>
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
                            source={require('../../assets/images/logos/ch7-logo.png')} />
                    </LinearGradient>
                    <Image
                        style={{
                            borderRadius: 8,
                            width: 120,
                            height: 65,
                            resizeMode: 'cover',

                        }}
                        source={require('../../assets/images/logos/hot-news.png')} />
                </View>
            </View>
            <View style={{
                padding: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
            }}>
                <View>
                    <Text
                        style={{
                            fontFamily: 'sukumvit-bold',
                            fontSize: 20
                        }}>ถ่ายทอดสด ช่อง 7HD</Text>
                    <Text
                        style={{
                            fontFamily: 'sukumvit-text',
                            fontSize: 16,
                            color: colors.darkGray
                        }}
                    >ละครสิ้นไร้ไฟสวาท (Rerun)</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
                        onPress={() => {
                            Linking.openURL('https://www.bugaboo.tv/th/live/');
                        }}>
                        <Text
                            style={{
                                fontFamily: 'sukumvit-semibold',
                                fontSize: 16,
                                color: colors.darkPurple
                            }}
                        >ดูรายการสด </Text>
                        <ArrowRight color={colors.darkPurple} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                padding: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
            }}>
                <View>
                    <Text
                        style={{
                            fontFamily: 'sukumvit-bold',
                            fontSize: 28
                        }}>ขอต้อนรับสู่ BUGABOO TV</Text>
                    <Text
                        style={{
                            fontFamily: 'sukumvit-text',
                            fontSize: 16,
                            color: colors.darkGray
                        }}
                    >เนื้อหาแนะนำสำหรับคุณ</Text>
                </View>

            </View>

            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <FlatList
                    data={imageCategory}
                    keyExtractor={(item) => item.title + item.title}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <SugestForYou
                                title={item.title}
                                nameCategory={item.nameCategory}
                                image={item.imageCategory}
                                link={item.link}
                            />
                        )
                    }}
                />
            </View>
            <ScrollView
                horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    marginVertical: 20,
                    marginHorizontal: 10,
                    gap: 12
                }}>
                    {iconLists.map((item, index: number) => (
                        <MenuIcon key={index} title={item.title} icon={item.icon} link={item.link} />
                    ))}
                </View>
            </ScrollView>
            {/* Top 10 Section */}

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                    style={{
                        fontFamily: 'sukumvit-bold',
                        fontSize: 20,
                        letterSpacing: -0.1,
                        paddingHorizontal: 14
                    }}
                >Top 10 Today</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
                    onPress={() => {
                        Linking.openURL('https://www.bugaboo.tv/th/all/top-today/');
                    }}>
                    <Text
                        style={{
                            fontFamily: 'sukumvit-semibold',
                            fontSize: 14,
                            color: colors.darkPurple
                        }}
                    >ดูทั้งหมด</Text>
                    <MoveRight color={colors.darkPurple} />
                </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                <FlatList
                    data={topTenToday}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => {
                        return (
                            <TopTenCard name={item.name} image={item.image} link={item.link} index={index} />
                        )
                    }}
                />
            </View>

            {/* Hight Light Section */}

            <View style={{ marginHorizontal: 10 }}>
                <Text style={{

                    fontFamily: 'sukumvit-bold',
                    fontSize: 18,
                    letterSpacing: -0.1,
                    marginLeft: 5
                }}>
                    ไฮไลท์แนะนำ
                </Text>
                <Swiper
                    style={{ height: 390 }}
                    autoplay
                    autoplayTimeout={3}
                    loop
                    showsPagination
                    showsButtons
                    paginationStyle={{
                        bottom: 20
                    }}
                    dotStyle={{
                        backgroundColor: colors.lightGray,
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginHorizontal: 3,
                    }}
                    activeDotStyle={{
                        backgroundColor: colors.purple,
                        width: 35,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 3,
                    }}
                    buttonWrapperStyle={{
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        position: 'absolute',
                        top: -75,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                    }}
                    prevButton={
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingRight: 4,
                            borderRadius: 200,
                            opacity: 0.5,
                            backgroundColor: '#fff'
                        }}>
                            <ChevronLeft size={50} />
                        </View>}
                    nextButton={
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 4,
                            borderRadius: 200,
                            opacity: 0.5,
                            backgroundColor: '#fff'
                        }}>
                            <ChevronRight size={50} />
                        </View>
                    }
                >
                    {highLight.map((item, index) => (
                        <View key={index} style={{
                            width: widthScreen,
                            marginTop: 15,
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start'

                        }}>
                            <View style={{
                                width: widthScreen - 20,
                                aspectRatio: 16 / 9,
                                overflow: 'hidden',
                                borderRadius: 20
                            }}>
                                <Pressable
                                    onPress={() => {
                                        Linking.openURL(item.link);
                                    }}>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            resizeMode: 'cover',

                                        }}
                                        source={item.image} />
                                </Pressable>
                            </View>
                            <View style={{
                                marginTop: 5,
                                padding: 10
                            }}>
                                <Text style={{
                                    fontFamily: 'sukumvit-bold',
                                    fontSize: 14,
                                    flexWrap: 'wrap',
                                    color: colors.gray

                                }}>{item.date}</Text>
                                <Text style={{
                                    fontFamily: 'sukumvit-bold',
                                    fontSize: 20,
                                    flexWrap: 'wrap'
                                }}>{item.title}</Text>
                            </View>
                        </View>
                    ))}
                </Swiper>
            </View>

            {/* Poppular Tag */}
            <View style={{
                marginHorizontal: 10,
                marginVertical: 20,
                gap: 15
            }}>
                <Text
                    style={{
                        fontFamily: 'sukumvit-bold',
                        fontSize: 18,
                        marginLeft: 5,

                    }}
                >
                    แท๊กยอดนิยม
                </Text>
                <FlatList
                    data={popularTag}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item.tagTitle + index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleTag}>{item.tagTitle}</Text>
                            </View>
                        )
                    }}
                />
            </View>


            <View style={styles.newContentContainer}>
                <Text
                    style={{
                        fontFamily: 'sukumvit-bold',
                        fontSize: 18,
                        marginLeft: 5,
                    }}
                >
                    ไฮไลต์แนะนำ
                </Text>
            </View>
            {/* New Content Sections */}
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ flex : 1 , flexDirection : 'row' , gap : 15 , marginHorizontal : 10 , marginVertical : 20 }}>
                    {newContent.map((item , index) => {
                        return (
                            <View key={index}>
                                <NewContent  title={item.title} image={item.image} date={item.date} link={item.link} />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>

            {/* Drama Ch7 Section */}

            


        </ScrollView>
    )
}
export default HomeScreen
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#fff',
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        height: 90,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 10,
        elevation: 8
    }, boxIcon: {
        borderWidth: 2,
        padding: 2,
        borderRadius: 5
    },
    containerRightIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    gradientBorder: {
        borderRadius: 10,
        padding: 2,
    },
    innerBox: {
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
    },
    videoContainer: {
        justifyContent: 'center', alignItems: 'center'
    },
    video: {
        width: widthScreen,
        aspectRatio: 16 / 9
    },
    imageContainer: {
        flexDirection: 'row',
        marginVertical: 12,
        gap: 8,
        paddingHorizontal: 10,

    },

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
    newContentContainer: {
        marginHorizontal: 10
    }


})