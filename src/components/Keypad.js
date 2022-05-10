import React, { useEffect, useState } from "react";
import data from "../data/db.json";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    let words = data.letters;

    setLetters(words);
  }, []);

  // setLetters(json);
  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const colors = usedKeys[l.key];
          return (
            <div className={colors} key={l.key}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
