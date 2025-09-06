
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

interface IconListProps {
    title: string;
    icon: React.ReactNode;
    link: string;
}
const MenuIconList = ({ title, icon, link }: IconListProps) => {

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
export default MenuIconList

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    title: {
        fontSize : 12 ,
        marginTop: 4,
        textAlign: 'center',
        flexWrap: 'wrap',
        fontFamily: 'sukumvit-bold',
        lineHeight: 18,
    }
})