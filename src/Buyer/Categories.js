import React from "react";
import { Typography, List, ListItem, Button } from "@material-ui/core";

const Categories = () => {
  return (
    <List>
      <Typography variant="h2" color="primary">
        SHOP BY CATEGORY
      </Typography>
      <ListItem>
        <Button>
          <Typography variant="h4" color="error" align="left">
            Apparel
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <Typography variant="h4" color="error" align="left">
            Automotive
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <Typography variant="h4" color="error" align="left">
            Electronics
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <Typography variant="h4" color="error" align="left">
            Furniture
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <Typography variant="h4" color="error" align="left">
            Gaming
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <Typography variant="h4" color="error" align="left">
            Jewelry
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <Typography variant="h4" color="error" align="left">
            Miscellaneous
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <Typography variant="h4" color="error" align="left">
            Outdoor & Garden
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <Typography variant="h4" color="error" align="left">
            Sporting Goods
          </Typography>
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <Typography variant="h4" color="error" align="left">
            Toy & Toddler
          </Typography>
        </Button>
      </ListItem>
    </List>
  );
};

export default Categories;
