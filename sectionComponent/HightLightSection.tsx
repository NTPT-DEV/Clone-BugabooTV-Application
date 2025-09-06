import { colors, highLight } from '@/constants/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Dimensions, Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';


const widthScreen = Dimensions.get('window').width;
const HightLightSection = () => {
  return (
    
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
                                      width: 50,
                                    height: 50,
                                    paddingRight: 4,
                                    borderRadius: 200,
                                    opacity: 0.5,
                                    backgroundColor: '#fff'
                                }}>
                                    <ChevronLeft size={40} />
                                </View>}
                            nextButton={
                                <View style={{
                                    justifyContent: 'center',
                                    width: 50,
                                    height: 50,
                                    alignItems: 'center',
                                    paddingLeft: 4,
                                    borderRadius: 100,
                                    opacity: 0.5,
                                    backgroundColor: '#fff'
                                }}>
                                    <ChevronRight size={40} />
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
  )
}
export default HightLightSection
const styles = StyleSheet.create({})