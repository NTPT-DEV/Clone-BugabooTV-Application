import { newContent } from '@/constants/utils'
import { ScrollView, StyleSheet, View } from 'react-native'
import NewContent from './NewContent'
const BannerHorizontal = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flex: 1, flexDirection: 'row', gap: 15, marginHorizontal: 10, marginVertical: 20 }}>
        {newContent.map((item, index) => {
          return (
            <View key={index}>
              <NewContent title={item.title} image={item.image} date={item.date} link={item.link} />
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}
export default BannerHorizontal
const styles = StyleSheet.create({})