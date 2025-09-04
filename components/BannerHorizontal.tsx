import { ScrollView, View } from 'react-native';

import NewContent, { NewContentProps } from './NewContent';

interface BannerHorizontalProps {
  data: NewContentProps[];
  colorTitle?: string;
}

const BannerHorizontal = ({ data, colorTitle }: BannerHorizontalProps) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flex: 1, flexDirection: 'row', gap: 15, marginHorizontal: 5, marginVertical: 10 }}>
        {data.map((item , index: number) => {
          return (
            <View key={index}>
              <NewContent title={item.title}
                date={item.date}
                image={item.image}
                link={item.link} 
                colorTitle={colorTitle} />
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}
export default BannerHorizontal
