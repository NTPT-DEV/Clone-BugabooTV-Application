import NameSection from '@/components/NameSection';
import TopTenCard from '@/components/TopTenCard';
import { colors, topTenToday } from '@/constants/utils';
import { FlatList, View } from 'react-native';
const ToptenSection = () => {
    return (
        <View style={{ marginTop: 10 }}>
            <NameSection
                title={'Top 10 Today'}
                linkColor={colors.purple}
                titleColor={colors.black}
                link={'https://www.bugaboo.tv/th/all/top-today/'} />

            <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                <FlatList
                    data={topTenToday}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => {
                        return (
                            <TopTenCard name={item.name} image={item.image} link={item.link} index={index} />
                        )
                    }}
                />
            </View>
        </View>
    )
}
export default ToptenSection
