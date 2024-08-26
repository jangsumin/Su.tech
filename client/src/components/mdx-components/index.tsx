import ImageContainer from "./ImageContainer";
import { MDXComponents } from "mdx/types";

const MdxComponents: MDXComponents = {
  img: ImageContainer as any,
};

export default MdxComponents;
