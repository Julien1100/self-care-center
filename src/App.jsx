import { useState } from "react";
import MessageSelector from "./components/MessageSelector";
import MessageDisplay from "./components/MessageDisplay";
import meditate from "./assets/meditate.svg";

function App() {
  const data = [
    { type: "Affirmation", text: "Je suis digne de bonheur et de succès." },
    {
      type: "Affirmation",
      text: "Mon esprit est rempli de pensées positives et d'amour.",
    },
    {
      type: "Affirmation",
      text: "Chaque jour, je deviens une meilleure version de moi-même.",
    },
    {
      type: "Affirmation",
      text: "La vie m'apporte exactement ce dont j'ai besoin au bon moment.",
    },
    { type: "Affirmation", text: "Je suis entouré(e) d'amour et de soutien." },
    {
      type: "Affirmation",
      text: "Mon passé n'a pas le pouvoir de dicter mon avenir.",
    },
    {
      type: "Affirmation",
      text: "Chaque obstacle est une opportunité de croissance.",
    },
    {
      type: "Affirmation",
      text: "Je mérite de prendre soin de moi et de me traiter avec respect.",
    },
    {
      type: "Affirmation",
      text: "Mes actions créent constamment des opportunités pour moi.",
    },
    {
      type: "Affirmation",
      text: "Je suis le créateur(trice) de ma réalité, et je choisis la paix.",
    },
    { type: "Mantra", text: "Je suis en paix avec chaque aspect de ma vie." },
    {
      type: "Mantra",
      text: "Chaque jour est une nouvelle opportunité pour grandir et apprendre.",
    },
    {
      type: "Mantra",
      text: "Je suis aligné(e) avec l'énergie de l'abondance.",
    },
    {
      type: "Mantra",
      text: "Mon corps est en bonne santé, mon esprit est en paix, et mon cœur est joyeux.",
    },
    {
      type: "Mantra",
      text: "Je choisis la joie et la gratitude, peu importe les circonstances.",
    },
    {
      type: "Mantra",
      text: "Je mérite le succès et je l'attire naturellement.",
    },
    {
      type: "Mantra",
      text: "L'amour et la lumière guident chacun de mes pas.",
    },
    {
      type: "Mantra",
      text: "Chaque respiration que je prends me rapproche de la sérénité.",
    },
    {
      type: "Mantra",
      text: "Je libère tout ce qui ne sert plus mon bien-être.",
    },
    {
      type: "Mantra",
      text: "Mon potentiel est illimité, et je suis capable de réaliser mes rêves.",
    },
  ];

  const [currentType, setCurrentType] = useState("affirmation");
  const [currentData, setCurrentData] = useState(null);

  const getRandomData = (type) => {
    const filteredData = data.filter((item) => item.type === type);
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    return filteredData[randomIndex];
  };

  const handleTypeChange = (newType) => {
    setCurrentType(newType);
  };

  return (
    <>
      <h1>✨ Self Care Center ✨</h1>

      <MessageSelector
        currentType={currentType}
        handleTypeChange={handleTypeChange}
        getRandomData={getRandomData}
        setCurrentData={setCurrentData}
      />

      <MessageDisplay currentData={currentData} meditateImage={meditate} />
    </>
  );
}

export default App;
