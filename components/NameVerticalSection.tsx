import { colors } from '@/constants/utils'
import { ArrowRight } from 'lucide-react-native'
import { Dimensions, Linking, Pressable, Text, View } from 'react-native'

interface Props {
    title: string
    titleColor?: string
    link: string
    linkColor?: string
    nameLive?: string
    postion? :string
}

const widthScreen = Dimensions.get('window').width;
const NameVerticalSection = ({ title, titleColor = 'black', link, linkColor = colors.lightPurple2, nameLive }: Props) => {
    
    return (

        <View style={{
            width: widthScreen,
            justifyContent: 'center',
            alignItems: 'center' , 
            marginVertical : 5
        }}>
            <View style={{
                width: widthScreen ,
                flexDirection: 'row',
                gap: nameLive ? 20  : 0 ,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal : 12
              
            }}>
                {nameLive ? (
                    <View>
                        <Text
                            style={{
                                fontSize: 20,
                                color: `${titleColor}`,
                                fontFamily: 'sukumvit-bold',
                            }}
                        >
                            {title}
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                color: `${titleColor}`,
                                fontFamily: 'sukumvit-semibold',
                            }}
                        >
                            {nameLive}
                        </Text>
                    </View>
                ) : (
                    <Text
                        style={{
                            fontSize: 20,
                            color: `${titleColor}`,
                            fontFamily: 'sukumvit-bold',
                        }}
                    >
                        {title}
                    </Text>
                )}
                <Pressable
                    onPress={() => {
                        Linking.openURL(link)
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: linkColor, fontFamily: 'sukumvit-semibold' }}>ดูทั้งหมด </Text>
                        <ArrowRight size={18} color={linkColor} />
                    </View>
                </Pressable>
            </View>
        </View>

    )
}
export default NameVerticalSection
