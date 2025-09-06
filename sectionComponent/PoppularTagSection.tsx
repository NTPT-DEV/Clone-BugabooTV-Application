import TagName from '@/components/TagName';

import { FlatList, Text, View } from 'react-native';

export interface PoppularTagProps {
  tagTitle: string;
}

interface PoppularTagSectionProps {
  data: PoppularTagProps[];
}

const PoppularTagSection = ({data} : PoppularTagSectionProps ) => {
    return (
        <View style={{
            marginHorizontal: 15, 
            marginVertical: 20,
            gap: 15
        }}>
            <Text
                style={{
                    fontFamily: 'sukumvit-bold',
                    fontSize: 18,
                    marginLeft: 5,
                }}
            >
                แท๊กยอดนิยม
            </Text>
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item.tagTitle + index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TagName tagTitle={item.tagTitle} />
                    )
                }}
            />
        </View>
    )
}
export default PoppularTagSection
