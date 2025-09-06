import { colors } from '@/constants/utils';
import { LinearGradient } from 'expo-linear-gradient';
import { Crown, Menu, Store } from 'lucide-react-native';
import { useState } from 'react';
import { Linking, Pressable, StyleSheet, View } from 'react-native';
import BagabooTVLogo from '../assets/svg/bugaboo-tv.svg';
import HelpIconMenu from './HelpIconMenu';
import MenuModal from './MenuModal';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const openModal = () => {
        setOpenMenu(openMenu => !openMenu);
    }
    const closeModal = () => {
        setOpenMenu(false);
      
    }

    return (
        <>
            <View style={styles.navBar}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Pressable onPress={openModal}>
                        <Menu color={"black"} width={24} height={24} />
                    </Pressable>
                    <BagabooTVLogo width={130} height={130} />
                </View>
                <View style={styles.containerRightIcon}>

                    <HelpIconMenu />

                    <Pressable
                        onPress={() => {
                            Linking.openURL('https://shop.bugaboo.tv/')
                        }}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }}
                            colors={[colors.darkPurple2, colors.lightBlue]}
                            style={styles.gradientBorder}
                        >
                            <View style={styles.innerBox}>
                                <Store color={colors.darkPurple2} width={20} height={20} />
                            </View>
                        </LinearGradient>
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            Linking.openURL('https://www.bugaboo.tv/th/subscription-plan/')
                        }}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }}
                            colors={[colors.darkPurple2, colors.lightBlue]}
                            style={[styles.gradientBorder,
                            { justifyContent: 'center', alignItems: 'center', width: 33, height: 33 }]}>
                            <Crown fill={'white'} color={'white'} width={15} height={15} />
                        </LinearGradient>
                    </Pressable>
                </View>
                <MenuModal openMenu={openMenu} closeModal={closeModal} />
            </View>
        </>
    )
}
export default Navbar
const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 90,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 10,
        zIndex: 10,
        elevation: 8
    },
    boxIcon: {
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
    }
})