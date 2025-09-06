import MenuIconList from '@/components/MenuIcon'
import { iconLists } from '@/constants/utils'

import { FlatList, StyleSheet, View } from 'react-native'

const ListmenuSection = () => {
    return (
        
        <FlatList
            style={{ gap: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.title}
            data={iconLists}
            renderItem={({ item, index }) => {
                return (
                    <MenuIconList key={index} title={item.title} icon={item.icon} link={item.link} />
                )
            }}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            contentContainerStyle={{ paddingHorizontal: 10 , marginTop : 10 }}
        
        />
    )
}
export default ListmenuSection
const styles = StyleSheet.create({

})