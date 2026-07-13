export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Machine Learning Cohort Student",
    company: "Bangkit Academy by Google, Goto, and Traveloka",
    period: "2024",
    achievements: [
      "Completed an intensive AI/ML program focused on Python, TensorFlow, Data Analysis, Machine Learning, and Google Cloud Platform (GCP) through hands-on labs and technical assessments.",
      "Developed machine learning solutions involving data preprocessing, model training, evaluation, and deployment following industry-standard workflows. ",
      "Collaborated in a multidisciplinary capstone project using Agile methodologies, contributing to the design and integration of a production-ready machine learning model. ",
    ],
  },
];
