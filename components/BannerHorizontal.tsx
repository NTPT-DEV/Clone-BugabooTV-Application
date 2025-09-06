import { FlatList, View } from 'react-native';

import NewContent, { NewContentProps } from './NewContent';

interface BannerHorizontalProps {
  data: NewContentProps[];
  colorTitle?: string;
}

const BannerHorizontal = ({ data, colorTitle }: BannerHorizontalProps) => {
  return (

    <FlatList
      style={{ paddingHorizontal: 10 }}
      contentContainerStyle={{}}
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <NewContent title={item.title}
            date={item.date}
            image={item.image}
            link={item.link}
            colorTitle={colorTitle} />
        )
      }}
      keyExtractor={(item) => item.title + item.date}
      ItemSeparatorComponent={() => <View style={{ width: 10 }}

      />}
    />

  )
}
export default BannerHorizontal
