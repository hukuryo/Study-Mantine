"use client";

import { Grid } from "@mantine/core";
function Header() {
  return (
    <header>
      <Grid columns={24}>
        <Grid.Col span={12}>1</Grid.Col>
        <Grid.Col span={6}>2</Grid.Col>
        <Grid.Col span={6}>3</Grid.Col>
      </Grid>
    </header>
  );
}

export default Header;
