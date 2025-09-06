import { colors } from '@/constants/utils'
import { FlatList, View } from 'react-native'
import BannerVertical from './BannerVertical'
import NameVerticalSection from './NameVerticalSection'


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

const VerticalContentComp = ({ data, title, link }: ComponentProp) => {

    return (
        <View style={{
            flex: 1,
            marginTop: 15,
            paddingBottom : 20
        }}>
            <NameVerticalSection title={title} linkColor={colors.darkPurple2} link={link} />
            <FlatList
                style={{ marginTop: 15, paddingHorizontal: 10 }}
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
                            titleColor={colors.darkGray}
                            tagTitleColor={colors.purple}
                        />
                    )
                }}
                keyExtractor={(item, index) => item.title + index.toString()}
            />
        </View>
    )
}
export default VerticalContentComp
