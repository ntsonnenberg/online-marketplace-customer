"use client";

import Link from "./Link";
import { Avatar, Box, Card, Stack, CardMedia } from "@mui/material";

interface Props {
  vendor: { _id: string; name: string; image: string; video?: string | null };
}

export default function CompanyVideo({ vendor }: Props) {
  return (
    <Box sx={{ padding: 1 }}>
      <Stack spacing={4} direction="column">
        <Link href={`/companies/${vendor._id}`}>
          <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
            <Avatar
              src={vendor.image}
              alt="vendor-image"
              sx={{ width: 80, height: 80 }}
            />
            <h2>{vendor.name}</h2>
          </Stack>
        </Link>
        <Box component="section" sx={{ padding: 1 }}>
          <Card sx={{ maxWidth: 700, flexGrow: 1 }}>
            <CardMedia
              component="video"
              src={vendor?.video || ""}
              loop
              controls
            />
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}
