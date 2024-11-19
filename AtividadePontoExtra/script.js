
function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
  }
  
  document.getElementById('mediaForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    const media = calcularMedia(num1, num2, num3);
  
    document.getElementById('resultado').textContent = `A média é: ${media.toFixed(2)}`;
  });
  