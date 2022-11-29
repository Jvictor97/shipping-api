class UnhandledError extends Error {
  constructor(message) {
    super(message);
  }
};

module.exports = { UnhandledError };