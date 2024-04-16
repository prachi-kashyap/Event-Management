import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    result = ''
    bmiValue = ''

    inputHandler(event){
        const {name,value} = event.target
        if(name === "height") {
            this.height = value
        }
        if(name === "weight") {
            this.weight = value
        }
    }

    submitHandler(event)
    {
        event.preventDefault()
        this.calculate();
    }

    calculate(){
        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/(height*height);
        this.bmiValue = Number(bmi.toFixed(2));
        if(this.bmiValue < 18.5){
            this.result = "Underweight";
        }
        else if(this.bmiValue >= 18.5 && this.bmiValue < 25){
            this.result = "Normal";
        }
        else if(this.bmiValue >= 25 && this.bmiValue < 30){
            this.result = "Overweight";
        }
        else if(this.bmiValue >= 30 && this.bmiValue < 35){
            this.result = "Obese";
        }
        else {
            this.result = "Extremely Obese";
        }
    }

    recalculate(){
        this.height = ''
        this.weight = ''
        this.result = ''
        this.bmiValue = ''
    }
}