import React, { useState } from "react";
import "./SmileyVoting.css";

const SmileyVoting = () => {
  const [smileys, setSmileys] = useState([
    { id: 1, name: "😊", count: 0 },
    { id: 2, name: "😄", count: 0 },
    { id: 3, name: "😍", count: 0 },
    { id: 4, name: "🤩", count: 0 },
  ]);
  const [showResults, setShowResults] = useState(false);
  const [winner, setWinner] = useState("");

  const handleVote = (id) => {
    const updatedSmileys = smileys.map((smiley) => {
      if (smiley.id === id) {
        return { ...smiley, count: smiley.count + 1 };
      }
      return smiley;
    });
    setSmileys(updatedSmileys);
  };

  const handleShowResults = () => {
    const maxCount = Math.max(...smileys.map((smiley) => smiley.count));
    const winningSmiley = smileys.find((smiley) => smiley.count === maxCount);
    setWinner(winningSmiley.name);
    setShowResults(true);
  };

  return (
    <div className="smiley-voting-container">
      <h1>Голосовалка за найкращий смайлик</h1>
      <ul>
        {smileys.map((smiley) => (
          <li key={smiley.id}>
            {smiley.name} - {smiley.count}
            <button onClick={() => handleVote(smiley.id)}>Голосувати</button>
          </li>
        ))}
      </ul>
      <button onClick={handleShowResults}>Показати результати</button>
      {showResults && <h2>Переможець: {winner}</h2>}
    </div>
  );
};

export default SmileyVoting;
