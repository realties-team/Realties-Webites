import { StaticImageData } from "next/image";

export interface ServiceType {
  icon: StaticImageData;
  id: number;
  title: string;
  description: string;
}
