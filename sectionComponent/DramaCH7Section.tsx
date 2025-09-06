import BannerVertical from '@/components/BannerVertical';
import NameSection from '@/components/NameSection';
import { colors, dramaCH7 } from '@/constants/utils';
import { FlatList, Image, StyleSheet, View } from 'react-native';


const DramaCH7Section = () => {
    return (
        <View
            style={{
                flex: 1,
                height: 460,
                backgroundColor: colors.darkPurple3,
                position: 'relative',
                overflow: 'hidden',
                paddingTop: 10,
            }}
        >
            <Image
                source={require('../assets/images/imageBackground/bg01.jpg')}
                blurRadius={2}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    position: 'absolute',
                    left: -450,
                    resizeMode: 'cover',
                    opacity: 0.15,
                    zIndex: 0,
                }}
            />

            <NameSection title={'ละครช่อง 7HD'} titleColor={'white'} link={'https://www.bugaboo.tv/th/drama/'} />

            <FlatList
                style={{ marginTop: 15  , paddingHorizontal : 10}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={dramaCH7}
                renderItem={({ item, index }) => {
                    return (
                        <BannerVertical
                            title={item.title}
                            tag={item.tag}
                            image={item.image}
                            link={item.link}
                            index={index}
                            titleColor={'white'}
                            tagTitleColor={'white'}
                        />
                    )
                }}
                keyExtractor={(item, index) => item.title + index.toString()}
            />

        </View>
    )
}
export default DramaCH7Section
