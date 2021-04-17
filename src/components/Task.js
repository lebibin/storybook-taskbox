import React from 'react';
import PropTypes from 'prop-types';

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
          type="checkbox"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>
      <div className="actions" onClick={event => event.stopPropagation()}>
        {
          state !== 'TASK_ARCHIVED' && (
            <a onClick={() => onPinTask(id)}>
              <span className="icon-star" />
            </a>
          )
        }
      </div>
      <input type="text" value={title} readOnly={true} />
    </div>
  )
}

Task.propTypes = {
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
}