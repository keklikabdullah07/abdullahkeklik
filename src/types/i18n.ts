export type SupportedLocale = "tr" | "en" | "ku";

export interface TranslationDictionary {
  header: {
    discipline: string;
    openToWork: string;
    contact: string;
    directory: string;
    localTime: string;
    location: string;
  };
  directoryModal: {
    title: string;
    close: string;
    worksLabel: string;
    worksSub: string;
    worksMeta: string;
    manifestoLabel: string;
    manifestoSub: string;
    manifestoMeta: string;
    bioLabel: string;
    bioSub: string;
    bioMeta: string;
    contactLabel: string;
    contactSub: string;
    contactMeta: string;
    selectLanguage: string;
  };
  hero: {
    quote: string;
    description: string;
    exploreCta: string;
    contactCta: string;
  };
  curatedWorks: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    tabAll: string;
    tabSystems: string;
    tabWeb: string;
    caseStudyTitle: string;
  };
  manifesto: {
    sectionBadge: string;
    title: string;
    p1: string;
    p2: string;
  };
  bio: {
    sectionBadge: string;
    title1: string;
    title2: string;
    subtitle: string;
    specimenLabel: string;
    totemTitle: string;
    totemDesc: string;
    totemMeta: string;
    quote: string;
    quoteHighlight: string;
    chukarLabel: string;
    narrativeP1: string;
    narrativeP2: string;
    narrativeFocus: string;
    principlesBadge: string;
    principlesTitle: string;
    timelineBadge: string;
    timelineTitle: string;
  };
  contact: {
    sectionBadge: string;
    statusBadge: string;
    tagline: string;
    sendEmail: string;
    copyEmail: string;
    copied: string;
    footerTitle: string;
    footerLoc: string;
    footerPatience: string;
  };
  commandPalette: {
    triggerLabel: string;
    placeholder: string;
    shortcutBadge: string;
    sectionsHeading: string;
    systemHeading: string;
    cliHeading: string;
    noResults: string;
    closeHint: string;
    navigateHint: string;
    selectHint: string;
    copyEmailSuccess: string;
    cliWhoamiDesc: string;
    cliStackDesc: string;
    cliKeklikDesc: string;
  };
}
