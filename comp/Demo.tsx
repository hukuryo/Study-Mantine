import Link from "next/link";
import { Button } from "@mantine/core";

export default function Demo() {
  return (
    <Button component={Link} href="/hello">
      Next link button
    </Button>
  );
}
