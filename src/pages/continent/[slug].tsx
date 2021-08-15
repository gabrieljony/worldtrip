import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Cities from "../../components/Cities";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";
import { useRouter } from "next/dist/client/router";
import Loading from "../../components/Loading";
import Content from "../../components/Content";

export interface ContinentProps {
    continent: {
        slug: string;
        title: string;
        description: string;
        banner_image: string;
        countries: number;
        languages: number;
        cities: number;
        cities_list: string;
        cities100: {
            city: string;
            country: string;
            thumbnail: string;
            flag: string;
        }[]
    }
}

export default function Continent({ continent }: ContinentProps) {
    const router = useRouter();
    if (router.isFallback) {
        return <Loading />
    }

    return (
        <Flex direction="column">
            <Head>
                <title>WorldTrip - {continent.title}</title>

                <meta property="og:title" content={`WorldTrip ${continent.title}`} />
                <meta property="og:description" content={continent.description} />
                <meta name="twitter:title" content={`WorldTrip ${continent.title}`} />

                {/* <meta name="twitter:image" content={continent.banner_image} />
        <meta name="twitter:image:src" content={continent.banner_image} />
        <meta property="og:image" content={continent.banner_image} />
        <meta property="og:image:secure_url" content={continent.banner_image} /> */}
            </Head>

            <Header />
            <ContinentBanner continent={continent} />

            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
                <Content continent={continent} />
                <Cities continent={continent} />
            </Flex>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const continents = await [
        {
            slug: "europa"
        },
        {
            slug: "america"
        },
        {
            slug: "africa"
        },
        {
            slug: "asia"
        },
        {
            slug: "oceania"
        },
        {
            slug: "antartida"
        }
    ]

    const paths = continents.map(continent => {
        return {
            params: {
                slug: continent.slug,
            },
        };
    });

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params;
    console.log('slug', slug)

    const continent = await {
        slug: "europa",
        title: "Europa",
        description: "O continente mais antigo.",
        banner_image: "",
        countries: "Europa",
        languages: null,
        cities: null,
        cities_list: null,
        cities100: [{ city: "França", country: "Paris", thumbnail: null, flag: null }].map(city => {
            return {
                city: city.city,
                country: city.country,
                thumbnail: city.thumbnail,
                flag: city.flag,
            }
        })
    };

    return {
        props: {
            continent
        },
        revalidate: 1800,
    }
}