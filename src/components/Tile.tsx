import React from "react";
import { Box } from "./Box";
import { Grid, GridItem } from "./Grid";
import { Image } from "./Image";
import { PriceTag } from "./PriceTag";
import { TileActions } from "./TileActions";

export const Tile = () => {
  return (
    <Box css={{ border: "1px solid #ccc" }}>
      <Grid cols={6} rows={2} gap={0}>
        <GridItem colSpan={2} rowSpan={3} css={{ padding: "5px" }}>
          <Image
            css={{ width: "65px" }}
            src="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/339540-Product-0-I_300x300.jpg?v=1572321461"
            alt="item"
          />
        </GridItem>
        <GridItem colSpan={4} rowSpan={1} css={{ paddingRight: "10px" }}>
          <Image src="https://brand-images.jbhifi.com.au/diesel.png" />
        </GridItem>
        <GridItem
          colSpan={4}
          rowSpan={1}
          css={{ paddingBottom: "15px", fontWeight: "700" }}
        >
          Diesel Full Guard 2.5 Smart Watch (Black Silicone)
        </GridItem>
        <GridItem colSpan={4} rowSpan={1} css={{ paddingBottom: "15px" }}>
          Ratings
        </GridItem>
      </Grid>
      <Box
        css={{
          display: "flex",
          bg: "$yellow",
          justifyContent: "space-between",
        }}
      >
        <PriceTag
          price="$499"
          css={{
            marginLeft: "10px",
            alignSelf: "flex-start",
            marginTop: "-10px",
          }}
        />
        <TileActions />
      </Box>
    </Box>
  );
};
