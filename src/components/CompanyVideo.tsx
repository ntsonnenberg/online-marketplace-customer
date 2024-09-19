"use client";

import Image from "next/image";
import Link from "./Link";
import { Avatar, Stack } from "@mui/material";

interface Props {
  key: string;
  name: string;
  image: string;
  video: string;
}

export default function CompanyVideo({ key, name, image, video }: Props) {
  console.log(key, name, image);

  return (
    <>
      <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
        <Avatar src={image} alt="vendor-image" sx={{ width: 80, height: 80 }} />
        <Link href={`/companies`}>
          <h2>{name}</h2>
        </Link>
      </Stack>
    </>
  );
}
