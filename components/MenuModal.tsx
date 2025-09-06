import { menuModal } from '@/constants/menuList';
import { colors } from '@/constants/utils';
import { Store, X } from 'lucide-react-native';
import { Dimensions, FlatList, Linking, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import ListMenu from './ListMenu';

interface Props {
    openMenu: boolean
    closeModal: () => void
}

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const MenuModal = ({ openMenu , closeModal}: Props) => {
    return (

        <Modal
            visible={openMenu}
            animationType='fade'
            transparent={true}
        >
            <View style={styles.rootContainer}>
                <View style={styles.containerMenu}>


                    <View style={{
                        width: '100%',
                        paddingHorizontal: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10
                    }}>
                        <Text style={{ fontSize: 16, fontFamily: 'sukumvit-bold', color: colors.darkGray }}>โปรดเลือกเมนู</Text>
                        <Pressable onPress={closeModal}>
                            <X size={30} color={colors.darkGray} />
                        </Pressable>
                    </View>


                    <Pressable
                    onPress={()=> {
                        Linking.openURL('https://shop.bugaboo.tv/')
                    }}
                    >
                        <View style={{
                        width: widthScreen * 0.85,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 10,
                        flexDirection: 'row',
                        gap: 10,
                        borderRadius: 10,
                        borderWidth: 1.5,
                        borderColor: colors.gray,
                        backgroundColor: colors.white,
                    }}>
                        <Store size={28} color={colors.gray} />
                        <Text
                            style={{ fontSize: 14, fontFamily: 'sukumvit-bold', color: colors.gray }}
                        >Bugaboo Shop</Text>
                    </View>
                    </Pressable>

                    <View style={styles.modal}>
                        <FlatList
                            numColumns={2}
                            data={menuModal}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ width: (widthScreen / 3) }}>
                                        <ListMenu title={item.title} icon={item.icon} link={item.link} />
                                    </View>
                                )
                            }
                            }
                            contentContainerStyle={{
                                justifyContent: 'space-between',

                            }}
                            columnWrapperStyle={{
                                justifyContent: 'space-between',
                                marginBottom: 12,
                            }}
                            keyExtractor={(item) => item.title}
                        />
                    </View>

                </View>

            </View>

        </Modal>
    )
}
export default MenuModal
const styles = StyleSheet.create({
    rootContainer: {
        height: heightScreen ,
        width: widthScreen,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        top: 57

    },
    containerMenu: {
        width: widthScreen,
        position: 'absolute',
        backgroundColor: colors.white,
        alignItems: 'center'
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: widthScreen,
        paddingLeft: 65,
        paddingVertical: 20,
    }
})