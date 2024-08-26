import Image from "next/image";

interface ImageContainerProps {
  src: string;
  alt: string;
}

const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  return (
    <>
      <Image src={src} alt={alt} width={700} height={400} />
      <span>{alt}</span>
    </>
  );
};

export default ImageContainer;
