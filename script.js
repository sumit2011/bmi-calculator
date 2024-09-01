const calculateBtn = document.querySelector('#calculate-bmi');
const bmiresult = document.querySelector('#bmi-result');

calculateBtn.addEventListener('click' , (event) => {
    const weight = document.querySelector('#weightFeild').Value;
    const height = document.querySelector('#heightFeild').Value;

    const result = weight / (height * height);

    let bmiMsg;
    let msgColor = 'text-denger';

    if(result < 18.95){
        bmiMsg = 'Thinness';
    }
    else if (result >= 18.5 && result <= 25){
        bmiMsg = 'Normal';
        msgColor='text-success';
    }
    else if (result >  25 && result <= 30){
        bmiMsg = 'Overweight';
    }
    else{
        bmiMsg = 'Obese';
    }

    bmiresult.innerHTML= `<p id="bmi-result"> BMI = <b>${result}</b> (<span<b>Normal</b></span>)</b>
        </p>`
});