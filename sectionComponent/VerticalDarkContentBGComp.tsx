import BannerVertical from '@/components/BannerVertical'
import NameVerticalDarkBG from '@/components/NameVerticalDarkBG'
import { colors } from '@/constants/utils'
import { FlatList, Image, StyleSheet, View } from 'react-native'

interface DataProp {
    title: string
    tag?: string
    image: any
    link: string
}

interface ComponentProp {
    title: string
    link: string
    data: DataProp[]
}

const VerticalDarkContentBGComp = ({ data, title, link }: ComponentProp) => {
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

            <NameVerticalDarkBG title={title} titleColor={'white'} link={link} />

            <FlatList
                style={{ marginTop: 15  , paddingHorizontal : 10}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
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
export default VerticalDarkContentBGComp
