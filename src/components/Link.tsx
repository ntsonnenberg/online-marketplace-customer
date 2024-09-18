import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

interface Props {
  href: string;
  children: any;
}

export default function Link({ href, children }: Props) {
  return (
    <MuiLink component={NextLink} href={href} underline="none">
      {children}
    </MuiLink>
  );
}
