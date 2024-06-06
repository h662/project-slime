interface Language {
  en: string;
  ko: string;
  jp: string;
  "zh-CN": string;
  es: string;
  fr: string;
  de: string;
  pt: string;
  ru: string;
  ar: string;
  hi: string;
}

interface LocalizedAttributes {
  en: SlimeAttributes[];
  ko: SlimeAttributes[];
  jp: SlimeAttributes[];
  "zh-CN": SlimeAttributes[];
  es: SlimeAttributes[];
  fr: SlimeAttributes[];
  de: SlimeAttributes[];
  pt: SlimeAttributes[];
  ru: SlimeAttributes[];
  ar: SlimeAttributes[];
  hi: SlimeAttributes[];
}

interface SlimeAttributes {
  trait_type: string;
  value: string;
}

interface SlimeMetadata {
  id: 1;
  name: string;
  localizedNames: Language;
  description: string;
  localizedDescriptions: Language;
  scene: string;
  image: string;
  image_name: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
  localizedAttributes: LocalizedAttributes;
  birthday?: string;
}

interface OutletContext {
  metadata: SlimeMetadata[];
  currentMetadata: SlimeMetadata;
  setCurrentMetadata: Dispatch<SetStateAction<SlimeMetadata>>;
}
