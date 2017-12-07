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
  let newDate = dateFromDate(date) || dateFromTimestamp(date);
  if (newDate) {
    return {
      unix: newDate.getTime(),
      natural: newDate.toDateString()
    };
  } else {
    return {
      unix: null,
      natural: null
    }
  }
};
app.get('/', (req, res) => {
  res.send('URL FORMAT: [url]/[date or unix timestamp]');
});

app.get('/:date', (req, res) => {
  let date = getDateObject(req.params.date);
  
  res.send(date);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
