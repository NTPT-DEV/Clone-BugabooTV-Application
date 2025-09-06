import Navbar from '@/components/Navbar'
import { sections } from '@/constants/section'
import { StatusBar } from 'expo-status-bar'
import { FlatList, ImageBackground } from 'react-native'
const Home = () => {
    return (
        <ImageBackground
            source={require("../../assets/images/imageBackground/mainBg.jpg")}
            style={{ flex: 1, }}
            resizeMode="cover"
        >
            <StatusBar hidden={true} />

            {/* Navbar */}
            <Navbar />

            <FlatList
                data={sections}
                keyExtractor={(item) => item.type}
                renderItem={({ item }) => {
                    return item.component;
                }}
            />

        </ImageBackground>
    )
}
export default Home
