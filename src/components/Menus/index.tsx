import { Grid, GridItem } from "@chakra-ui/layout";
import MenuItem from "./MenuItem";

export default function Menus() {
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      
    <GridItem>
      <MenuItem icon="cocktail" text="vida noturna" />
    </GridItem>
    <GridItem>
      <MenuItem icon="surf" text="praia" />
    </GridItem>
    <GridItem>
      <MenuItem icon="building" text="moderno" />
    </GridItem>
    <GridItem>
      <MenuItem icon="museum" text="clássico" />
      </GridItem>
    <GridItem colSpan={[2, 2, 2, 1]}>
      <MenuItem icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}