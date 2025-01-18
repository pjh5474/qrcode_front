import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6 *:text-zinc-600">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <div className="relative size-28 rounded-md overflow-hidden">
          <Image fill className="cover" alt={"Logo"} src={"/No.png"} />
        </div>
        <h1 className="text-4xl">QR Code Order System</h1>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn py-2.5 text-lg">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link className="hover:underline underline-offset-2" href="/menu">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
