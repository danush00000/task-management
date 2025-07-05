// validators.js

function validateTaskInput(data) {
  const errors = {};

  if (!data.title || typeof data.title !== 'string' || data.title.trim() === '') {
    errors.title = 'Task title is required and must be a non-empty string.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

module.exports = { validateTaskInput };
