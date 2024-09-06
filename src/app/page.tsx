import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href={"/create-new"}>
        <Button className="rounded">Buat Baru</Button>
      </Link>
    </div>
  )
}
