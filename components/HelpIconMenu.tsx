import { colors } from '@/constants/utils';
import { LinearGradient } from 'expo-linear-gradient';
import { X } from 'lucide-react-native';
import { useState } from 'react';
import { Dimensions, Linking, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import HelpIcon from '../assets/svg/helpIcon.svg';

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const HelpIconMenu = () => {

    const [openHelp, setOpenHelp] = useState(false);

    const handleOpen = () => { setOpenHelp(true) }
    const handleClose = () => { setOpenHelp(false) }

    return (
        <>
            <Pressable
                onPress={handleOpen}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }}
                    colors={[colors.darkPurple2, colors.lightBlue]}
                    style={styles.gradientBorder}
                >
                    <View style={styles.innerBox}>
                        <HelpIcon width={28} height={28} />
                    </View>
                </LinearGradient>
            </Pressable>
            <Modal
                animationType='fade'
                visible={openHelp}
                transparent={true}
            >
                <View style={styles.containerModal}>
                    <View style={styles.mainTextContainer}>
                        <View>
                            <Text style={styles.h1}>พบปัญหาจากการใช้งาน สามารถแจ้งได้ที่</Text>
                        </View>
                        <View>
                            <Text style={styles.h2}>ช่องทางที่ 1 ไปรษณีย์อิเล็กทรอนิกส์</Text>
                            <Text style={[styles.h2, { color: colors.purple }]}>(E-mail) support_inter@bugaboo.tv</Text>
                        </View>
                        <View>
                            <Text style={styles.h2}>ช่องทางที่ 2 ติดต่อผ่านเบอร์โทรศัพท์ : 0 2495 7777 ต่อ 9</Text>
                            <Text style={styles.h2}>(วันจันทร์ - อาทิตย์ เวลา 06.00 - 21.00 น.)</Text>
                        </View>
                        <View>
                            <Text style={styles.h2}>ช่องทางที่ 3 Facebook Messenger:</Text>
                            <Pressable
                                onPress={() => Linking.openURL('https://www.facebook.com/messages/t/Bugaboo.TVPremium')}
                            ><Text style={[styles.h2, { color: colors.purple }]}>https://www.facebook.com/messages/t/Bugaboo.TVPremium</Text></Pressable>
                        </View>
                        <Pressable
                            onPress={handleClose}
                            style={{
                                position: 'absolute',
                                right: 18,
                                top: 18
                            }}
                        >
                            <X size={30} color={colors.darkGray} />
                        </Pressable>
                    </View>

                </View>

            </Modal>
        </>
    )
}
export default HelpIconMenu
const styles = StyleSheet.create({

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

    containerModal: {
        ...StyleSheet.absoluteFillObject, 
        width: widthScreen,
        height: heightScreen,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
    },

    mainTextContainer: {
        position: 'relative',
        borderRadius: 30,
        backgroundColor: colors.white,
        width: widthScreen * 0.9,
        
        paddingHorizontal: 30,
        paddingTop: 20 ,
        paddingBottom : 45 ,
        gap : 8 ,
    },
    h1: {
        marginTop: 30,
        fontFamily: 'sukumvit-bold',
        fontSize: 18,
        textAlign: 'center'
    },
    h2: {
        fontFamily: 'sukumvit-bold',
        fontSize: 14,
    }

})