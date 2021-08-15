import { Flex, Heading } from '@chakra-ui/react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Menus from '../components/Menus'
import Separator from '../components/Separator'
import Slider from '../components/Slider'
import { GetStaticProps } from 'next'

interface HomeProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image?: string;
  }[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Menus />
      <Separator />

      <Heading 
        textAlign="center"
        fontWeight="500"
        mb={["5","14"]}
        fontSize={["lg",
        "3xl",
        "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Slider continents={continents}/>
    

      <main>
        
      </main>

      <footer>
        
      </footer>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = () => {

  const response = [
    {
      slug: "europa",
      title: "Europa",
      summary: "O continente mais antigo."
    },
    {
      slug: "america",
      title: "América",
      summary: "Um grande continente."
    },
    {
      slug: "africa",
      title: "Africa",
      summary: "Um grande continente."
    },
    {
      slug: "asia",
      title: "Ásia",
      summary: "Um grande continente."
    },
    {
      slug: "oceania",
      title: "Oceânia",
      summary: "Um grande continente."
    },
    {
      slug: "antartida",
      title: "Antártida",
      summary: "Um grande continente."
    }
  ]

  const continents = response.map(continent => {
    return {
      slug: continent.slug,
      title: continent.title,
      summary: continent.summary
    }
  })

  return {
    props: {
      continents
    }
  }
}
