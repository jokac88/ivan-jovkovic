import type {Ref} from "@vue/reactivity";

export interface SideNavTypes {
  name?: string;
  url?: string;
  offsetTop?: number;
  isActive?: boolean;
}

export interface SectionTypes {
  url?: string;
  name?: string;
  offsetTop?: number;

  [key: string]: any;
}

export type DataTypes = {
  name: string;
  personalInfo: PersonalInfoTypes;
  languages: LanguagesTypes;
  projects?: ProjectsTypes;
  hobbies: HobbiesTypes;
  drivingLicense: DrivingLicenseTypes;
  aboutMe: AboutMeTypes;
  education: EducationTypes;
  employmentHistory: EmploymentHistoryTypes;
  technicalSkills?: TechnicalSkillsTypes;
  navigation: NavigationTypes[];
  colorModePicker: ColorModePickerTypes[];
  pace?: PaceTypes;
  topBar?: TopBarTypes;
}

interface DateOfBirthTypes {
  property: string;
  value: string;
}

interface CityTypes {
  property: string;
  value: string;
}

interface NationalityTypes {
  property: string;
  value: string;
}

interface ResidenceTypes {
  property: string;
  value: string;
}

interface MobileTypes {
  property: string;
}

interface EmailTypes {
  property: string;
}

interface WebsiteTypes {
  property: string;
}

interface LinkedInTypes {
  property: string;
}

interface GitHubTypes {
  property: string;
}

interface SkypeTypes {
  property: string;
  value: string;
}

interface PersonalInfoTypes {
  title: string;
  dateOfBirth: DateOfBirthTypes;
  city: CityTypes;
  nationality: NationalityTypes;
  residence: ResidenceTypes;
  mobile?: MobileTypes;
  email?: EmailTypes;
  website?: WebsiteTypes;
  linkedin?: LinkedInTypes;
  github?: GitHubTypes;
  skype: SkypeTypes;
}

interface LanguageTypes {
  name: string;
  level: string;
  percentage: string;
}

interface LanguagesTypes {
  title: string;
  languages: LanguageTypes[];
}

export interface ProjectTypes {
  icon?: string;
  isVisible?: boolean;
  name?: string;
  url?: string;
}

interface ProjectsTypes {
  title: string;
  projects: ProjectTypes[];
}

interface HobbiesTypes {
  title: string;
  hobbies: string[];
}

interface DrivingLicenseTypes {
  title: string;
  text: string;
}

interface AboutMeTypes {
  title: string;
  text: string;
}

interface PropertyTypes {
  year?: string;
  college?: string;
  department?: string;
  degree?: string;
  course?: string;
  description?: string | { text: string; technologies: string[] };
  company?: string;
}

interface EducationTypes {
  title: string;
  properties: PropertyTypes;
  education: { isVisible: boolean }[];
}

interface EmploymentHistoryTypes {
  title: string;
  properties: PropertyTypes;
  employmentHistory: { isVisible: boolean }[];
}

export interface TechnicalSkillTypes {
  name?: string;
  icon?: string;
  color?: string;
  percentage?: string;
  isVisible?: boolean;
}

interface TechnicalSkillsTypes {
  title: string;
  technicalSkills?: TechnicalSkillTypes[];
}

interface NavigationTypes {
  name: string;
}

export interface ColorModePickerTypes {
  name: string;
  text: string;
}

interface PaceTypes {
  pageWrapperScrollHeight: Ref<number>;
  pageWrapperScrollTop: Ref<number>;
}

interface LanguageBarTypes {
  name: string;
  title: string;
}

interface TopBarTypes {
  languageBar: LanguageBarTypes[];
  sideNavIsVisible: Ref<boolean>;
}