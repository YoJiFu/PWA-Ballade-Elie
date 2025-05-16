import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          welcome: "Mobile Application",
          association: "Ballade Association",
          songList: "Song List",
          songMap: "Song Map",
          origin: "Origin",
          theme: "Theme",
          beneficiaries: "Beneficiaries",
          difficulty: "Difficulty",
          // Values
          northAfrica: "North Africa",
          caucasus: "Caucasus",
          balkans: "Balkans",
          middleEast: "Middle East",
          westAfrica: "West Africa",
          centralAsia: "Central Asia",
          easternEurope: "Eastern Europe",
          latinAmerica: "Latin America",
          eastAfrica: "East Africa",
          scandinavia: "Scandinavia",
          mediterranean: "Mediterranean",
          northAmerica: "North America",
          nearEast: "Near East",
          india: "India",
          centralAmerica: "Central America",
          westernEurope: "Western Europe",
          southernAfrica: "Southern Africa",
          oceania: "Oceania",
          southAmerica: "South America",
          // Themes
          tragic: "Tragic",
          dramatic: "Dramatic",
          precious: "Precious",
          // Beneficiaries
          children: "Children",
          teens: "Teens",
          adults: "Adults",
          // Difficulty
          easy: "Easy",
          intermediate: "Intermediate",
          expert: "Expert"
        }
      },
      fr: {
        translation: {
          welcome: "Application Mobile",
          association: "Association Ballade",
          songList: "Liste des morceaux",
          songMap: "Carte des morceaux",
          origin: "Origine",
          theme: "Thème",
          beneficiaries: "Bénéficiaires",
          difficulty: "Difficulté",
          // Values
          northAfrica: "Afrique du Nord",
          caucasus: "Caucase",
          balkans: "Balkans",
          middleEast: "Moyen-Orient",
          westAfrica: "Afrique de l’Ouest",
          centralAsia: "Asie Centrale",
          easternEurope: "Europe de l'Est",
          latinAmerica: "Amérique Latine",
          eastAfrica: "Afrique de l’Est",
          scandinavia: "Scandinavie",
          mediterranean: "Méditerranée",
          northAmerica: "Amérique du Nord",
          nearEast: "Proche-Orient",
          india: "Inde",
          centralAmerica: "Amérique Centrale",
          westernEurope: "Europe de l’Ouest",
          southernAfrica: "Afrique Australe",
          oceania: "Océanie",
          southAmerica: "Amérique du Sud",
          // Themes
          tragic: "Tragique",
          dramatic: "Dramatique",
          precious: "Précieux",
          // Beneficiaries
          children: "Enfants",
          teens: "Adolescents",
          adults: "Adultes",
          // Difficulty
          easy: "Facile",
          intermediate: "Intermédiaire",
          expert: "Expert"
        }
      }
    }
  });

export default i18n;
