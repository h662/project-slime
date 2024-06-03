interface SlimeAttributes {
  trait_type: string;
  value: string;
}

interface SlimeMetadata {
  id: number;
  name: string;
  name_ko: string;
  name_jp: string;
  description: string;
  description_ko: string;
  description_jp: string;
  scene: string;
  image: string;
  image_name: string;
  attributes: SlimeAttributes[];
}

interface OutletContext {
  metadata: SlimeMetadata[];
  currentMetadata: SlimeMetadata;
  setCurrentMetadata: Dispatch<SetStateAction<SlimeMetadata>>;
}
