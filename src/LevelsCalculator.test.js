import { fireEvent, render } from '@testing-library/react';
import { LevelsCalculator } from './LevelsCalculator';

test('renders the calculator', () => {
  const { getByText } = render(<LevelsCalculator />);
  expect(getByText('From Level:')).toBeVisible();
  expect(getByText('Points to Next Level:')).toBeVisible();
  expect(getByText('To Level:')).toBeVisible();
});

test.each([
  [9, 10, 15, 154],
  [12, 5, 15, 70],
  [16, 3, 15, 0],
])('calculates the result correctly', (fromLevel, pointsToNext, toLevel, result) => {
  const { getByRole, getByText } = render(<LevelsCalculator />);
  fireEvent.change(getByRole('textbox', { name: 'From Level:' }), { target: { value: fromLevel }});
  fireEvent.change(getByRole('textbox', { name: 'Points to Next Level:' }), { target: { value: pointsToNext }});
  fireEvent.click(getByText(`Level ${toLevel}`));
  fireEvent.click(getByText('Level Up!'));
  expect(getByText(`Required Points: ${result}`)).toBeVisible();
});
