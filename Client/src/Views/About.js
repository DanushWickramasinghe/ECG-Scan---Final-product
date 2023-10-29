import "./App.css";
import React from "react";

const About = () => {
  return (
    <div className="about-box">
      <div className="about-page">
        <h1>Cardiovascular Diseases </h1>
        <p>
        Cardiovascular diseases (CVDs) pose a significant global health challenge, claiming millions of lives each year. Early and accurate detection of CVDs is critical for improving outcomes. These diseases encompass a range of disorders affecting the heart and blood vessels, including coronary heart disease, cerebrovascular disease, rheumatic heart disease, and more. Shockingly, over four out of five CVD-related deaths result from heart attacks and strokes, with a third of these fatalities occurring prematurely in individuals under 70 years of age. Key behavioral risk factors, including unhealthy diet, physical inactivity, tobacco use, and harmful alcohol consumption, significantly contribute to heart disease and stroke.
        </p>
      </div>

      <div className="about-page">
        <h1>ECG Signal</h1>
        <p>
        An electrocardiogram (ECG) signal is a window into the heart's electrical activity, consisting of a series of distinct components that hold valuable diagnostic information.These components, including the P-wave, QRS complex, and T-wave, represent different phases of the cardiac cycle. The P-wave reflects atrial depolarization, the QRS complex represents ventricular depolarization, and the T-wave signifies ventricular repolarization. Understanding these components and their subtle variations is fundamental in diagnosing cardiac conditions. These ECG signals are essential for the early detection of cardiovascular abnormalities.
        </p>
      </div>

      <div className="about-page">
        <h1>About Our Web App</h1>
        <p>
        Our web app employs advanced technologies, including Convolutional Neural Network (CNN), to analyze ECG signals for accurate diagnosis. In addition to ECG data, we also incorporate patient age and sex data to enhance our diagnostic capabilities. We utilize datasets from the PhysioNet website, containing normal and arrhythmia ECG data. These raw ECG signals and demographic information undergo preprocessing to facilitate the training of our classifiers, which distinguish normal from abnormal ECG data. By harnessing these advanced techniques and CNN, our web app contributes to improved ECG classification accuracy, ultimately aiding in the early diagnosis of cardiovascular diseases.
        </p>
      </div>
    </div>
  );
};

export default About;
