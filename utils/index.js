const dateToUnix = (date) => date.getTime();

const dateToUTC = (date) => date.toUTCString();

const responseCreator = (date) => {
  return {
    unix: dateToUnix(date),
    utc: dateToUTC(date),
  };
};

module.exports = {
  responseCreator,
};
