const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


router.get('/movies', function(req, res){
  res.send(['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    );
})


const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']


router.get('/movies/:indexN',function(req, res){
  const indexN=req.params.indexN;c
  const movie=movies[indexN];
  if (movies.length -1 < indexN || indexN < 0) {
    res.send("404 use a valid index number")}
  else {
    res.send(movie)
  }

})



const films = [
  {
    id: 1,
    name: 'The Shining'
  },
  {
    id: 2,
    name: 'Incendies'
  },
  {
    id: 3,
    name: 'Rang de Basanti'
  },
  {
    id: 4,
    name: 'Finding Nemo'
  }
];

router.get('/films', function(req, res){
  res.send(films);
})

router.get('/films/:id', function(req, res){
  const idx = req.params.id;
  film= films.find(element=>element.id==idx);
  res.send(film);})

  



module.exports = router;