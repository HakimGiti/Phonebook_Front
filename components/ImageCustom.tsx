import Image from "next/image";

export const ImageCustom: React.FC<{
  image: string;
  absoluteAddress?: boolean;
  alt?: string;
  className?: string;
  object?: "cover" | "contain" | "fill";
  rounded?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}> = ({
  image,
  alt,
  rounded = "md",
  object = "cover",
  className,
  absoluteAddress = false,
}) => {
  return (
    <Image
      src={`${absoluteAddress ? "" : image}`}
      alt={alt ?? ""}
      width={0}
      height={800}
      sizes="100%,auto"
      className={`rounded-${rounded} w-full object-${object} ${className}`}
    />
  );
};
