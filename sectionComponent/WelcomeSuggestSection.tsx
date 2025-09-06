import SugestForYou from '@/components/SugestForYou';
import { colors, imageCategory } from '@/constants/utils';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';

const widthScreen = Dimensions.get('window').width;
const WelcomeSuggestSection = () => {
    return (
        <View style={{
            marginVertical : 10 ,
            gap : 20
        }}>
            <View style={{
                width : widthScreen , 
                paddingHorizontal : 20,
                gap : -10
            }}>
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
        </View>
    )
}
export default WelcomeSuggestSection
const styles = StyleSheet.create({})