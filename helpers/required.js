const required = (type, required) => {
  if (required === undefined  ) {
    return {
      type,
    };
  } else {
    return {
      type,
      required,
    };
  }
};

module.exports = required;
