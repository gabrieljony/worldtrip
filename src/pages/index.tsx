import { Flex } from '@chakra-ui/react'
import Header from '../components/Header/indes'
import Banner from '../components/Banner'
import Menus from '../components/Menus'

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Menus />
    

      <main>
        
      </main>

      <footer>
        
      </footer>
    </Flex>
  )
}
