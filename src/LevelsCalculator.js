import { useState } from 'react';

import { Button, FormControl, FormControlLabel, FormLabel, Input, RadioGroup, Radio } from '@material-ui/core';

import levels from './levels.json';
import './LevelsCalculator.scss';

export const LevelsCalculator = () => {
  const [fromLevel, setFromLevel] = useState("0");
  const [pointsNext, setPointsNext] = useState("0");
  const [toLevel, setToLevel] = useState("15");
  const [reqPoints, setReqPoints] = useState();

  const calculate = () => {
    if (fromLevel >= toLevel) {
      setReqPoints('0');
      return;
    }
    const pointsSoFar = levels.totalPriorFriendshipPoints[parseInt(fromLevel) + 1] - parseInt(pointsNext);
    const pointsTarget = levels.totalPriorFriendshipPoints[parseInt(toLevel)];
    const result = pointsTarget - pointsSoFar;
    setReqPoints(result.toString());
  }
  
  return (
    <div className="container">
      <FormControl>
        <FormLabel htmlFor="from-level">From Level:</FormLabel>
        <Input
          id="from-level"
          value={fromLevel}
          onChange={(e) => setFromLevel(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="points-next">Points to Next Level:</FormLabel>
        <Input
          id="points-next"
          value={pointsNext}
          onChange={(e) => setPointsNext(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>To Level:</FormLabel>
        <RadioGroup
          aria-label="to level"
          name="to-level"
          value={toLevel}
          onChange={(e) => setToLevel(e.target.value)}>
          <FormControlLabel value="7" control={<Radio />} label="Level 7" />
          <FormControlLabel value="10" control={<Radio />} label="Level 10" />
          <FormControlLabel value="15" control={<Radio />} label="Level 15" />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" onClick={calculate}>Level Up!</Button>
      {reqPoints && <p>Required Points: {reqPoints}</p>}
    </div>
  )
};
