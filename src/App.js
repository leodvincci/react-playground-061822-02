import './App.css';
import {Joke} from "./Joke";

function App() {
  const ele = <h1>Hello</h1>
    console.log(ele)

    return (
    <div className="App">




      <Joke
        jokeSetup={"Why did the chicken cross the road?"}
        jokePunchline={"To get to the other side."}
      />


      <Joke
          jokeSetup={"I got my daughter a fridge for her birthday."}
          jokePunchline={"I can't wait to see her face light up when she opens it."}
      />
      <Joke
          jokeSetup={"How did the hacker escape the police?"}
          jokePunchline={"He just ransomware!"}
      />
      <Joke
          jokeSetup={"Why don't pirates travel on mountain roads?"}
          jokePunchline={"Scurvy."}
      />
      <Joke
          jokeSetup={"Why do bees stay in the hive in the winter?"}
          jokePunchline={"Swarm"}
      />

        <Joke
          jokeSetup={"What did the fish say when he swam into a wall?"}
          jokePunchline={"Dam."}
      />


      <Joke
          jokeSetup={"What do you call a fish with no eyes?"}
          jokePunchline={"A fsh."}
      />
      <Joke
          jokeSetup={"What do you call a can opener that doesn’t work?"}
          jokePunchline={"A can’t opener! "}
      />
    <Joke
          jokeSetup={"There are three types of people in the world"}
          jokePunchline={"Those who can count and those who can’t."}
      />






    </div>
  );
}

export default App;
