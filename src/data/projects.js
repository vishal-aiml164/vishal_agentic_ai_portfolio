
const projects = [
  {
    id: "license-plate-detection",
    title: "Automatic Vehicle License Plate Detection",
    category: "Computer Vision",
    type: "Computer Vision",
    description:
      "A computer vision application combining object detection and optical character recognition to identify vehicle license plates.",
    problem:
      "Automatically detecting vehicle license plates and extracting the registration number from images.",
    approach:
      "Explored object detection and OCR techniques, including YOLO-based detection and Tesseract OCR, to locate license plates and extract their text.",
    technologies: ["Python", "YOLOv5", "OCR", "Tesseract", "Flask"],
    results:
      "The article reports precision of 0.89 and recall of 0.81 for the YOLOv5 approach.",
    mediumUrl:
      "https://medium.com/@vishal-aiml164/automatic-license-plate-detection-and-number-display-5e257552bacf",
    githubUrl:
      "https://github.com/vishal-aiml164/vehicle-plate-v2",
      image: `${import.meta.env.BASE_URL}images/projects/license-plate.jpg`,
  },

  {
    id: "retail-sales-forecast",
    title: "Retail Sales Forecasting",
    category: "Machine Learning",
    type: "Predictive Analytics",
    description:
      "A forecasting solution designed to analyze historical retail sales patterns and predict future demand.",
    problem:
      "Forecast sales for individual retail stores using historical sales and store-related information.",
    approach:
      "Explored time-series forecasting and machine learning techniques using historical sales, store, location, region, discount and order information.",
    technologies: ["Python", "Pandas", "Random Forest", "Forecasting"],
    results:
      "The project explored forecasting sales for each store over the following two months.",
    mediumUrl:
      "https://medium.com/@vishal-aiml164/retail-sales-forecast-time-series-basic-to-advance-6f9265970d50",
          githubUrl:
      "https://github.com/vishal-aiml164/Sales_Forecasting_Time_Series",
      image: `${import.meta.env.BASE_URL}images/projects/retail-forecast.jpg`,
  },

  {
    id: "clinical-ner",
    title: "Clinical Named Entity Recognition",
    category: "NLP & Deep Learning",
    type: "Healthcare Analytics",
    description:
      "An NLP solution for identifying and extracting biomedical entities from clinical and medical text.",
    problem:
      "Extract meaningful medical entities from unstructured clinical text.",
    approach:
      "Used spaCy and NLP techniques to annotate clinical text, train a named entity recognition model and evaluate its performance.",
    technologies: ["Python", "spaCy", "NLP", "Named Entity Recognition"],
    results:
      "Developed a workflow for clinical data extraction using a trained NER model.",
    mediumUrl:
      "https://medium.com/@vishal-aiml164/named-entity-recognition-clinical-data-extraction-9b089d91b27b",
          githubUrl:
      "https://github.com/vishal-aiml164/NER_MODEL_CLINICAL_DATA",
      image: `${import.meta.env.BASE_URL}images/projects/clinical-ner.jpg`,
  },

  {
    id: "physician-targeting",
    title: "Drug Marketing and Physician Targeting",
    category: "Machine Learning",
    type: "Healthcare Analytics",
    description:
      "A multi-class classification solution to identify physician targeting segments and support pharmaceutical marketing decisions.",
    problem:
      "Predict physician segments to support more effective pharmaceutical marketing strategies.",
    approach:
      "Explored exploratory data analysis, feature engineering, Logistic Regression, Random Forest, LightGBM, PCA and autoencoder approaches.",
    technologies: ["Python", "LightGBM", "Random Forest", "Logistic Regression", "Streamlit"],
    results:
      "The article reports that tuned LightGBM outperformed the other evaluated models. PCA and autoencoder approaches did not materially improve performance.",
    mediumUrl:
      "https://medium.com/@vishal-aiml164/drug-marketing-and-physician-targeting-3fa1675e9cc8",
          githubUrl:
      "https://github.com/vishal-aiml164/PHYSICIAN_TARGETING_STREAMLIT",
      image: `${import.meta.env.BASE_URL}images/projects/physician-targeting.jpg`,
  },

  {
    id: "diabetes-readmission",
    title: "Diabetes Patient Readmission Prediction",
    category: "Machine Learning",
    type: "Healthcare Analytics",
    description:
      "A predictive modeling project focused on identifying patient readmission risk using healthcare encounter data.",
    problem:
      "Predict whether a diabetic patient may return for another hospital encounter.",
    approach:
      "Explored patient encounter information and predictive modeling techniques to study readmission patterns.",
    technologies: ["Python", "Scikit-learn", "Classification", "Pandas"],
    results:
      "The project investigates readmission prediction using patient encounter features.",
    mediumUrl:
      "https://medium.com/@vishal-aiml164/diabetes-patient-re-admission-prediction-ddd2e288f0ed",
          githubUrl:
      "https://github.com/vishal-aiml164/ML_PROJECTS",
      image: `${import.meta.env.BASE_URL}images/projects/diabetes-readmission.jpg`,
  },

  {
    id: "youtube-likes-prediction",
    title: "YouTube Video Likes Prediction",
    category: "Machine Learning",
    type: "Predictive Analytics",
    description:
      "A machine learning project exploring the prediction of YouTube video popularity using video-related information.",
    problem:
      "Estimate the number of likes a YouTube video may receive.",
    approach:
      "Explored regression techniques using video attributes and related information.",
    technologies: ["Python", "Machine Learning", "Regression", "Pandas"],
    results:
      "The project explores predicting video likes using regression methods.",
    mediumUrl:
      "https://medium.com/@vishal-aiml164/can-you-predict-the-number-of-likes-a-youtube-video-will-get-82403aa012eb",
          githubUrl:
      "https://github.com/vishal-aiml164/ML_PROJECTS",
      image: `${import.meta.env.BASE_URL}images/projects/youtube-likes.jpg`,
  },

  {
    id: "research-article-classification",
    title: "Research Article Classification",
    category: "NLP & Deep Learning",
    type: "Text Analytics",
    description:
      "A text classification solution that automatically categorizes research articles using natural language processing techniques.",
    problem:
      "Automatically predict relevant research article categories from their abstracts.",
    approach:
      "Explored text cleaning, Bag of Words, TF-IDF and one-vs-rest Logistic Regression for multi-label classification.",
    technologies: ["Python", "TF-IDF", "Bag of Words", "Logistic Regression", "NLP"],
    results:
      "The article reports an F1 score of 0.74 after applying TF-IDF and text cleaning in its evaluation.",
    mediumUrl:
      "https://medium.com/@vishal-aiml164/multi-class-classification-of-research-articles-using-nlp-methods-a20076ebd720",
          githubUrl:
      "https://github.com/vishal-aiml164/ML_PROJECTS",
      image: `${import.meta.env.BASE_URL}images/projects/research-classification.jpg`,
  },
];

export default projects;
