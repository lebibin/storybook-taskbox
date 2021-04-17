import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { WithPinnedTasks } from './TaskList.stories';

it('renders pinned tasks at the start of the list', () => {
  const { getByDisplayValue } = render(<WithPinnedTasks {...WithPinnedTasks.args} />);

  const lastTaskInput = getByDisplayValue('Task 6 (pinned)')
  expect(lastTaskInput).toBeInTheDocument();
});