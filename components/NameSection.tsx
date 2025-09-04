import { colors } from '@/constants/utils'
import { ArrowRight } from 'lucide-react-native'
import { Linking, Pressable, Text, View } from 'react-native'

interface Props {
    title: string
    titleColor? : string
    link : string
    linkColor ? : string
}
const NameSection = ({title , titleColor = 'black' , link , linkColor = colors.lightPurple2 } : Props) => {
    return (
        <View
            style={{
                flex: 1,
                marginHorizontal: 5,
                zIndex: 1,
            }}
        >
            <View style={{
                width: '100%',
                height : 40,
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        color: `${titleColor}`,
                        fontFamily: 'sukumvit-bold',
                    }}
                >
                    {title}
                </Text>
                <Pressable
                onPress={()=> {
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
export default NameSection
