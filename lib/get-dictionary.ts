type Dictionary = {
  home: string;
  about: string;
  work: string;
  projects: string;
  blog: string;
  contact: string;
};

export const getDictionary = async (locale: string) => {
  const dictionary: Dictionary = (await import(`../locales/${locale}.ts`))
    .default;
  return dictionary;
};
