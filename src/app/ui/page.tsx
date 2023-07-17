import { Navigation } from "./Navigation";

export type LinkList = {
  name: string;
  href: string;
};
const linkArr: LinkList[] = [
  { name: "dashboard", href: "/dashboard" },
  { name: "ui", href: "/ui" },
];
export default function Page() {
  return (
    <>
      <Navigation navLinks={linkArr}></Navigation>
    </>
  );
}
