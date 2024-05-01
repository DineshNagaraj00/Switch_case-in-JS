function calculate(){
    const number1=parseFloat(document.getElementById('num1').value);
    const number2=parseFloat(document.getElementById('num2').value);
    const operator=document.getElementById('operator').value;
    let result;

    switch (operator){
        case '+':
            result=number1+number2;
            break
        case '-':
            result=number1-number2;
            break
        case '*':
            result=number1*number2;
            break
        case '/':
            if(number2 !=0){
                result=number1/number2;
            }
            else{
                result="Cannot divide by Zero"
            }
            break
        default:
            result="Invalid operator"
        
    }
    document.getElementById("result").innerText = "Result: " + result;
}