import { Flex } from '@chakra-ui/react'
import Header from '../components/Header/indes'
import Banner from '../components/Banner'
import Menus from '../components/Menus'
import Separator from '../components/Separator'

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Menus />
      <Separator />
    

      <main>
        
      </main>

      <footer>
        
      </footer>
    </Flex>
  )
}
