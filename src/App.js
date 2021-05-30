import './App.css';

import { LevelsCalculator } from './LevelsCalculator';

function App() {
  return (
    <div className="App">
      <h2>Animal Crossing: Pocket Camp</h2>
      <h1>Friendship Levels Calculator</h1>
      <p>Have you ever found yourself stuck on a Happy Homeroom class because you can't craft a furniture? Look it up on the <a href="https://animalcrossingpocketcamp.fandom.com/wiki">ACPC Wiki</a> and it turns out you have to reach Level 15 Friendship with a villager and start their Special Request.</p>
      <p>Fortunately you have plenty of snacks to give them, but how many do you need?</p>
      <p>Let us help you calculate it below!</p>
      <LevelsCalculator />
    </div>
  );
}

export default App;
