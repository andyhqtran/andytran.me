import { Header } from "@several/components";

import { Hero } from "~/components/Hero";

export default function RootPage() {
  return (
    <>
      <Header isSticky />
      <div className="container">
        <Hero />
      </div>
    </>
  );
}
