import { useState } from "react";
import "../src/game.css";
import paper from "../src/images/Paper.png";
import rock from "../src/images/Rock.png";
import scissor from "../src/images/Scissor.png";
import info from "../src/images/info.png";
import { motion } from "framer-motion";
const Game = () => {
  const options = ["rock", "paper", "scissor"];
  const [playerScore, setPlayerScore] = useState(0);
  const [showRule, setShow] = useState(false);
  const [showComment, setComment] = useState("");
  const [getSelect, setSelect] = useState({ player: "", system: "" });
  const inputstring = ">>";

  const SelectItem = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const toggleRule = () => {
    setShow(!showRule);
  };

  const ChangeScore = () => {
    const value = playerScore + 1;
    setPlayerScore(value);
  };

  const Reset = () => {
    setPlayerScore(0);
    setComment("");
  };

  const GameCheck = (e) => {
    const player = e.target.id;
    const system = SelectItem();
    setSelect({ player: player, system: system });
    switch (player) {
      case "rock":
        if (system === "paper") {
          setComment("Oh no, your opponent wins");
        } else if (system === "scissor") {
          ChangeScore();
          setComment("Yay! you win");
        } else {
          setComment(`It's a draw`);
        }
        break;
      case "paper":
        if (system === "scissor") {
          setComment("Oh no, your opponent wins");
        } else if (system === "rock") {
          ChangeScore();
          setComment("Yay! you win");
        } else {
          setComment(`It's a draw`);
        }
        break;
      case "scissor":
        if (system === "rock") {
          setComment("Oh no, your opponent wins.");
        } else if (system === "paper") {
          ChangeScore();
          setComment("Yay! you win");
        } else {
          setComment(`It's a draw`);
        }
        break;
      default:
        alert(`mmm...that doesn't seem right, try again please?`);
    }
  };

  return (
    <div className="game-body">
      <div className={showRule ? "game-block" : ""}>
        <div className="game-title">
          Rock-Paper-Scissor
          <span className="game-info">
            <img src={info} alt="info" onClick={toggleRule}></img>
          </span>
        </div>
        <div className="container">
          <motion.div
            className="card"
            id="rock"
            onClick={GameCheck}
            animate={{ rotateY: 360 }}
            transition={{ duration: 0.5 }}>
            <div className="inner-card" id="rock">
              <img src={rock} tooltip="rock" alt="rock" id="rock" />
            </div>
          </motion.div>
          <motion.div
            className="card"
            id="paper"
            onClick={GameCheck}
            animate={{ rotateY: 360 }}
            transition={{ duration: 0.5 }}>
            <div className="inner-card" id="paper">
              <img src={paper} tooltip="paper" alt="paper" id="paper" />
            </div>
          </motion.div>
          <motion.div
            className="card"
            id="scissor"
            onClick={GameCheck}
            animate={{ rotateY: 360 }}
            transition={{ duration: 0.5 }}>
            <div className="inner-card" id="scissor">
              <img src={scissor} tooltip="scissor" alt="scissor" id="scissor" />
            </div>
          </motion.div>
          <div className="console-view">
            <div className="console-continer">
              <div className="console-header">
                <div className="console-head">
                  <div className="green"></div>
                  <div className="yellow"></div>
                  <div className="red"></div>
                </div>
                <div className="reset-button" onClick={Reset}>
                  Reset
                </div>
              </div>
              <div className="console-body">
                {inputstring} Score : {playerScore}
                <br />
                {showComment === "" ? (
                  <div>
                    {inputstring} Click to begin{" "}
                    <span className="blink">.</span>
                  </div>
                ) : (
                  <div>
                    {inputstring} Your Choice : {getSelect?.player}
                    <br />
                    {inputstring} Opponens Choice : {getSelect?.system}
                    <br />
                    {inputstring} {showComment} <span className="blink">.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showRule && (
        <motion.div
          className="game-rules"
          initial={{ opacity: 0, rotateY: 270 }}
          animate={{ opacity: 1, rotateY: 360 }}
          transition={{ duration: 0.5 }}>
          <div className="close-rules" onClick={toggleRule}>
            X
          </div>
          <div>
            <div className="rule-header">How to play?</div>
            <div>
              <div className="rule-body">
                - Click on one of the card to get started.
              </div>
              <div className="rule-body">
                - Score is displayed on the right.
              </div>
              <div className="rule-body">
                - Your move and opponent's move is displayed on the screen
              </div>
              <div className="rule-body">- To start fresh, click on reset.</div>
            </div>
            <div className="rule-header">~~Happy gaming!~~</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Game;
