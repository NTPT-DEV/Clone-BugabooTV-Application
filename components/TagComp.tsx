import { Text, View } from 'react-native';

interface Props {
  bgColor?: string,
  tag?: string,
  tagTitleColor?: string;
  borderColor?: string

}

const TagComp = ({ bgColor , tag  , borderColor ,tagTitleColor }: Props) => {
  return (
    <View style={{
      backgroundColor: bgColor,
      borderColor: borderColor,
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 3,
      alignSelf: 'flex-start',
      borderRadius: 8,
      marginTop: 10

    }}>
      <Text style={{
        color:tagTitleColor,
        fontFamily: 'sukumvit-semibold'
      }}>{tag}</Text>
    </View>
  )
}
export default TagComp
