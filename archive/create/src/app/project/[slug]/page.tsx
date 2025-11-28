"use client";
import dynamic from "next/dynamic";

import { FrameSkeleton } from "~/components/frame/FrameSkeleton";

const Frame = dynamic(
  () => import("~/components/frame/Frame").then((mod) => mod.Frame),
  {
    loading: FrameSkeleton,
    ssr: false,
  },
);

export default function Page() {
  return <Frame />;
}
