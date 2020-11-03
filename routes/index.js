var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res)=> {

  const number1 = req.body.num1;
  const number2 = req.body.num2;
  const calculation = req.body.calc;
  var kq;
  if(calculation == 'btnadd')
  {
    kq = parseFloat(number1) + parseFloat(number2);
    res.render('index', { title: 'Express', num1value: number1, num2value: number2, resultvalue: kq, btnadd: true});
  }
  else if(calculation == 'btnsub')
  {
    kq = parseFloat(number1) - parseFloat(number2);
    res.render('index', { title: 'Express', num1value: number1, num2value: number2, resultvalue: kq});
  }
  else if(calculation == 'btnmul')
  {
    kq = parseFloat(number1) * parseFloat(number2);
    res.render('index', { title: 'Express', num1value: number1, num2value: number2, resultvalue: kq});
  }
  else
  {
    kq = parseFloat(number1) / parseFloat(number2);
    res.render('index', { title: 'Express', num1value: number1, num2value: number2, resultvalue: kq});
  }
  
});

module.exports = router;
