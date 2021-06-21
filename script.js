function plus() {
 let num1;
 let num2;
 let result;

 let arr = ['1','2','3','4','5','6','7','8','9','.','c','ac'];
 
 num1 = document.getElementById('num1').value;
 num1 = parseInt(num1); 
 //parseInt(бул функция строка менен цифра жазылып калса, тамгасын окубайю только цифраны эле окуп берет)
 
 num2 = document.getElementById('num2').value;
 num2 = parseInt(num2);

 result = num1 + num2;

 document.getElementById('out').innerHTML = result;
 document.getElementById('out')
}
 function minus() {
     let num1, num2, result;

     num1 = document.getElementById('num1').value;
     num1 = parseInt(num1);

     num2 = document.getElementById('num2').value;
     num2 = parseInt(num2)

     result = num1 - num2;
      document.getElementById('out').innerHTML = result;
    }
    function multiple () {
        num1= document.getElementById('num1').value;
        num1 = parseInt(num1)

        num2 =document.getElementById('num2').value;
        num2 = parseInt(num2);
     result = num1 * num2;
     document.getElementById('out').innerHTML = result;
  }
  function divide () {
      num1 = document.getElementById('num1').value;
      num1 = parseInt(num1);

      num2 = document.getElementById('num2').value;
      num2 = parseInt(num2);

      result = num1 / num2;
      document.getElementById('out').innerHTML = result;
  }
