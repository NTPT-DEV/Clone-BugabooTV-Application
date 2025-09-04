import { Text, View } from 'react-native';

interface Props {
  bgColor?: string,
  tag?: string,
  tagTitleColor?: string;
  borderColor?: string

}

const TagComp = ({ ...item }: Props) => {
  return (
    <View style={{
      backgroundColor: item.bgColor,
      borderColor: item.borderColor,
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 3,
      alignSelf: 'flex-start',
      borderRadius: 8,
      marginTop: 10

    }}>
      <Text style={{
        color: item.tagTitleColor,
        fontFamily: 'sukumvit-semibold'
      }}>{item.tag}</Text>
    </View>
  )
}
export default TagComp
