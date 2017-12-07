const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const dateFromDate = date => {
  console.log('checking date...', date);
  newDate = new Date(date);
  if (!isNaN(newDate) && newDate instanceof Date) {
    return newDate;
  } else {
    return null;
  }
};
const dateFromTimestamp = date => dateFromDate(parseInt(date));

const getDateObject = date => {
  return dateFromDate(date) || dateFromTimestamp(date);
};
app.get('/', (req, res) => {
  res.send('to get started, add timestamp or date to url');
});

app.get('/:date', (req, res) => {
  let date = getDateObject(req.params.date);
  if (date) {
    res.send({
      unix: date.getTime(),
      natural: date.toDateString()
    });
  }  else {
    res.send({error: `not valid date | ${date}`})
  }
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
