import Image from "next/image";

export default function Partners() {
  return (
    <div className="flex gap-4">
      <div className="relative h-40 w-40">
        <Image
          src="/images/images.png"
          alt="Partner Logo"
          layout="intrinsic"
          width={160}
          height={160}
          className="rounded-md"
        />
      </div>
      <div className="relative h-40 w-40">
        <Image
          src="/images/images.png"
          alt="Partner Logo"
          layout="intrinsic"
          width={160}
          height={160}
          className="rounded-md"
        />
      </div>
      <div className="relative h-40 w-40">
        <Image
          src="/images/images.png"
          alt="Partner Logo"
          layout="intrinsic"
          width={160}
          height={160}
          className="rounded-md"
        />
      </div>
      <div className="relative h-40 w-40">
        <Image
          src="/images/images.png"
          alt="Partner Logo"
          layout="intrinsic"
          width={160}
          height={160}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
