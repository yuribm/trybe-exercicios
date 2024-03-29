const express = require('express');

const activities = [
  {
    id: 1,

    description: 'Banho no cachorro',

    status: 'A fazer',
  },

  {
    id: 2,

    description: 'Cortar a grama',

    status: 'A fazer',
  },

  {
    id: 3,

    description: 'Estudar JavaScript',

    status: 'Feito',
  },
];

const app = express();

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const selectActivities = activities.find((activitie) => activitie.id === Number(id));
  res.status(200).json(selectActivities);
});

module.exports = app;
