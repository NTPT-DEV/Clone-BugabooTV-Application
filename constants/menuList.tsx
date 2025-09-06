
import { BookOpen, Film, Tv, Volleyball } from 'lucide-react-native';

interface MenuModal {
 title : string
 icon : React.ReactNode
 link : string
}

export const menuModal : MenuModal[] = [
  {title : 'ละคร' , icon :  <Tv /> , link : 'https://www.bugaboo.tv/th/drama/'}, 
  {title : 'หนังและซีรีย์' , icon :  <Film /> , link : 'https://www.bugaboo.tv/th/drama/'}, 
  {title : 'ข่าว' , icon : <BookOpen /> , link : 'https://www.bugaboo.tv/th/drama/'}, 
  {title : 'รายการสด' , icon : <Volleyball /> , link : 'https://www.bugaboo.tv/th/drama/'}, 

];