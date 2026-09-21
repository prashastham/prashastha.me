import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Tag = {
  name: string;
} & MicroCMSListContent;

export type Writer = {
  name: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  thumbnail: MicroCMSImage;
  description: string;
  content: string;
  isPDFContent: boolean;
  fileURL?: string;
  tags?: Tag[];
  writer?: Writer;
} & MicroCMSListContent;
