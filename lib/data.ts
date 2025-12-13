import { Project, Skill } from './types';

export const projects: Project[] = [
  {
    id: 'youtube-de',
    title: 'Data Engineering - YouTube Analytics',
    description: 'YouTube data analytics leveraging AWS and Tableau for data ingestion, processing, analysis, and visualization of performance metrics.',
    longDescription: 'Comprehensive data engineering project utilizing AWS services for ETL pipelines, data warehousing, and real-time analytics. Built automated data ingestion from YouTube API, processed using AWS Lambda and Glue, stored in S3 and Redshift, with interactive Tableau dashboards for insights.',
    category: 'Data Engineering',
    tags: ['AWS', 'ETL', 'Data Pipeline', 'Tableau', 'Analytics'],
    image: '/01.jpg',
    githubUrl: 'https://github.com/aashayb13/DataEngineer_Youtube_Analysis',
    technologies: ['AWS S3', 'AWS Lambda', 'AWS Glue', 'AWS Athena', 'Python', 'Tableau', 'SQL'],
    featured: true,
    metrics: [
      { label: 'Data Processed', value: '10M+ rows' },
      { label: 'Processing Time', value: '<5 min' },
      { label: 'Cost Savings', value: '40%' }
    ]
  },
  {
    id: 'customer-acquisition-ml',
    title: 'Machine Learning - Customer Acquisition',
    description: 'Customer Acquisition Cost Prediction for Food Mart utilizing Machine Learning',
    longDescription: 'Developed predictive models to optimize customer acquisition strategies and reduce CAC. Implemented multiple ML algorithms including Random Forest, XGBoost, and Neural Networks to predict customer lifetime value and acquisition costs with 92% accuracy.',
    category: 'Machine Learning',
    tags: ['Machine Learning', 'Predictive Analytics', 'Python', 'Scikit-learn'],
    image: '/Machine Learning.jpg',
    githubUrl: 'https://github.com/aashayb13/Customer_Acquisition_ML_Model',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'Random Forest'],
    featured: true,
    metrics: [
      { label: 'Model Accuracy', value: '92%' },
      { label: 'CAC Reduction', value: '35%' },
      { label: 'ROI Improvement', value: '28%' }
    ]
  },
  {
    id: 'financial-analytics',
    title: 'Financial Analytics - Fraud Detection',
    description: 'Detecting Fraudulent Credit Card transactions using Machine Learning algorithms including Decision Tree and Neural Networks',
    longDescription: 'Built a robust fraud detection system using ensemble methods and deep learning. Handled highly imbalanced dataset using SMOTE and implemented real-time scoring pipeline for transaction monitoring.',
    category: 'Machine Learning',
    tags: ['ML', 'Fraud Detection', 'Neural Networks', 'Classification'],
    image: '/Financial Analytics.jpg',
    githubUrl: 'https://github.com/aashayb13/Financial_Analytics',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Decision Trees', 'Neural Networks', 'SMOTE'],
    featured: true,
    metrics: [
      { label: 'Detection Accuracy', value: '98.5%' },
      { label: 'False Positives', value: '<2%' },
      { label: 'Processing Speed', value: '100ms' }
    ]
  },
  {
    id: 'walmart-stock',
    title: 'Data Analytics - Walmart Stock Analysis',
    description: 'Analysis of stock prices done with Walmart\'s open source data',
    longDescription: 'Performed comprehensive time-series analysis of Walmart stock data including trend analysis, seasonality detection, and price prediction using ARIMA and Prophet models.',
    category: 'Data Analytics',
    tags: ['Data Analytics', 'Time Series', 'Python', 'Visualization'],
    image: '/Stock.jpg',
    githubUrl: 'https://github.com/aashayb13/Walmart-stock-analysis',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'ARIMA', 'Prophet'],
    featured: false
  },
  {
    id: 'hospital-db',
    title: 'Hospital Database Management',
    description: 'Aim to improve operations and efficiency of Hospitals by managing their data in SQL',
    longDescription: 'Designed and implemented a comprehensive hospital management database system with optimized queries for patient records, appointments, billing, and inventory management. Improved query performance by 60% through indexing and normalization.',
    category: 'Database',
    tags: ['SQL', 'Database Design', 'MySQL', 'Data Management'],
    image: '/SQL.jpg',
    githubUrl: 'https://github.com/aashayb13/Hospital_Database_Management',
    technologies: ['MySQL', 'SQL', 'Database Design', 'ER Modeling', 'Normalization'],
    featured: false
  },
  {
    id: 'water-quality',
    title: 'Water Quality Monitoring using ML & IoT',
    description: 'A Comprehensive project and research paper on monitoring the water quality of city areas by building a Machine Learning model and leveraging IoT',
    longDescription: 'Developed an IoT-enabled water quality monitoring system with ML-based prediction and anomaly detection. Published research paper on the implementation and results.',
    category: 'Research',
    tags: ['IoT', 'Machine Learning', 'Research', 'Sensors'],
    image: '/Research.jpg',
    githubUrl: 'https://github.com/aashayb13/Water-Quality-Monitoring',
    paperUrl: 'https://ijarsct.co.in/Paper7706.pdf',
    technologies: ['Python', 'IoT', 'Raspberry Pi', 'TensorFlow', 'Sensors', 'MQTT'],
    featured: false,
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Sensors Deployed', value: '50+' },
      { label: 'Areas Covered', value: '5 cities' }
    ]
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', proficiency: 95 },
  { name: 'SQL', category: 'Languages', proficiency: 90 },
  { name: 'R', category: 'Languages', proficiency: 80 },
  { name: 'JavaScript', category: 'Languages', proficiency: 75 },

  // ML/AI
  { name: 'TensorFlow', category: 'ML/AI', proficiency: 85 },
  { name: 'PyTorch', category: 'ML/AI', proficiency: 80 },
  { name: 'Scikit-learn', category: 'ML/AI', proficiency: 90 },
  { name: 'Keras', category: 'ML/AI', proficiency: 85 },
  { name: 'XGBoost', category: 'ML/AI', proficiency: 85 },

  // Cloud
  { name: 'AWS', category: 'Cloud', proficiency: 85 },
  { name: 'Azure', category: 'Cloud', proficiency: 80 },
  { name: 'Google Cloud', category: 'Cloud', proficiency: 70 },

  // Databases
  { name: 'MySQL', category: 'Databases', proficiency: 90 },
  { name: 'PostgreSQL', category: 'Databases', proficiency: 85 },
  { name: 'MongoDB', category: 'Databases', proficiency: 75 },
  { name: 'Redis', category: 'Databases', proficiency: 70 },

  // Tools & Frameworks
  { name: 'Tableau', category: 'Tools', proficiency: 90 },
  { name: 'Power BI', category: 'Tools', proficiency: 85 },
  { name: 'Apache Spark', category: 'Frameworks', proficiency: 80 },
  { name: 'Apache Airflow', category: 'Frameworks', proficiency: 75 },
  { name: 'Docker', category: 'Tools', proficiency: 80 },
  { name: 'Git', category: 'Tools', proficiency: 90 },
  { name: 'Pandas', category: 'Frameworks', proficiency: 95 },
  { name: 'NumPy', category: 'Frameworks', proficiency: 90 }
];

export const personalInfo = {
  name: 'Aashay Bhujbal',
  title: 'Business Analytics Graduate Student',
  subtitle: 'Data Analytics | Data Engineering | Machine Learning',
  university: 'The University of Texas at Dallas',
  email: 'aashayb.work@gmail.com',
  phone: '+1 (945) 274-8962',
  location: 'Dallas, TX',
  linkedin: 'https://www.linkedin.com/in/aashaybhujbal/',
  github: 'https://github.com/aashayb13',
  twitter: 'https://x.com/aashay87042647',
  resumeUrl: '/Aashay_Bhujbal_Resume.pdf',
  avatar: '/Aashay.jpg',
  about: `A dedicated and results-driven data professional with a Master's degree in Business Analytics from The University of Texas at Dallas and hands-on experience in data engineering and analysis. I specialize in transforming complex data into actionable insights. My expertise spans Python, SQL, and cloud technologies like Azure and AWS, where I've successfully orchestrated ETL pipelines, developed predictive models, and created interactive dashboards that drive data-driven decision-making. I am passionate about leveraging data science to solve real-world challenges and enhance business performance.`
};
