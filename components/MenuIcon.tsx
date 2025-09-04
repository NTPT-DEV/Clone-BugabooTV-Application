
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

interface IconListProps {
    title: string;
    icon: React.ReactNode;
    link: string;
}
const MenuIcon = ({ title, icon, link }: IconListProps) => {

    return (
        <Pressable
            onPress={() => {
                link && Linking.openURL(link);
            }}>
            <View style={{ width: 70, }}>
                <View style={styles.container}>
                    {icon}
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    )
}
export default MenuIcon

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    title: {
        marginTop: 4,
        textAlign: 'center',
        flexWrap: 'wrap',
        fontFamily: 'sukumvit-bold',
        lineHeight: 18,
    }
})