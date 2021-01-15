export default class LoveCalculator{
    constructor(yourName = "", partnerName = "", framework = "simplex") {
        this.yourName = yourName;
        this.partnerName = partnerName;
        this.framework = framework;
        this.result = 0;
        this.description = "";
        this.comment = ""
    }

    compute(){
        let result = "";
        switch (this.framework){
            case "simplex":
                result = this.computeSimplex();
                break;
            case "gravis":
                result = this.computeGravis();
                break;
            case "flames":
                result = this.computeFlames();
                break;
            default:
        }

        this.result = result;
        
        if(this.framework == "flames"){
            this.description = LoveCalculator.flamesName(result);
        }
        this.comment = this.createComment();
        return result;
    }

    computeSimplex(){
        //Take the Sum of user, the partner and LOVE
        let yourNameSum = LoveCalculator.addUpNumberEquivalent(this.yourName);
        let partnerNameSum = LoveCalculator.addUpNumberEquivalent(this.partnerName);
        let loveSum = LoveCalculator.addUpNumberEquivalent("Love");

        // Add each digits of the sums individually
        let yourNameDigitAdd = LoveCalculator.addUpDigits(yourNameSum);
        let partnerNameDigitAdd = LoveCalculator.addUpDigits(partnerNameSum);
        
        let nameTotal = yourNameDigitAdd + partnerNameDigitAdd;

        return nameTotal + loveSum;
    }

    static addUpDigits(number){
        let sum = 0;
        let numberAsString = String(number);
        do{
            for (let digit of numberAsString){
                if(LoveCalculator.isCharacterANumber(digit)){
                    sum += Number(digit);
                }
            }
            numberAsString = String(sum);
        } while(sum > 20);

        return sum
    }

    static addUpNumberEquivalent(alphabeticName){
        let sum = 0;
        let lowerCaseName = alphabeticName.toLowerCase();
        for (let char of lowerCaseName){
            if(LoveCalculator.isCharacterALetter(char)){
                let num = LoveCalculator.getNumberEquivalent(char);
                sum += num;
            }
        }
        return sum;
    }
    
    static getNumberEquivalent(char){
        let lowerCaseChar = char.toLowerCase();
        return lowerCaseChar.charCodeAt(0) - 96;
    }

    static isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
    }
    
    static isCharacterANumber(char){
        let numEquiv = Number(char);
        return !Number.isNaN(numEquiv);
    }

    computeGravis(){
        let letterCount = this.countAllLetters();
        do{
            if(letterCount.length > 2 && Number(letterCount) !== 100){ 
                
                letterCount = LoveCalculator.reduceNumber(letterCount);
                
            }
        }while(letterCount.length > 2 && Number(letterCount) !== 100)
        return letterCount;
    }

    countAllLetters(){
        let combinedText = (this.yourName + "loves" + this.partnerName).toUpperCase();
        let countedChars = "";
        let letterCounter = "";
        for(let char of combinedText){
            if(!countedChars.includes(char)){
                let re = new RegExp(char,'g');
                letterCounter += combinedText.match(re).length;
                countedChars += char;
            }
        }

        return letterCounter;
    }

    static reduceNumber(letterCount){
        let newLetterCount = '';
        do{
            if(letterCount.length > 1){
                let countSum = Number(letterCount[0]) + Number(letterCount[letterCount.length - 1])
                newLetterCount += countSum;
                letterCount = letterCount.slice(1,-1);
            }else if(letterCount.length == 1){
                newLetterCount += letterCount[0];
                letterCount = letterCount.slice(1);
            }

        }while(letterCount.length > 0)

        return newLetterCount;
    }

    computeFlames(){
        let uniqueCharacters = this.findUniqueCharacters();
        let flamesCount = uniqueCharacters.length;
        let flamesCharacter = "flames";
        let count = 0;
        do{
            
            for(let char of flamesCharacter){
                count += 1;
                if(count == flamesCount){
                    flamesCharacter = flamesCharacter.replace(char,"");
                    count = 0;
                }
                
            }
        } while(flamesCharacter.length > 1);

        return flamesCharacter;
    }

    static flamesName(flamesCharacter){
        let result = "";
        switch (flamesCharacter){
            case "f":
                result = "friends";
                break;
            case "l":
                result = "lovers";
                break;
            case "a":
                result = "admirers";
                break;
            case "m":
                result = "marriage";
                break;
            case "e":
                result = "enemies";
                break;
            case "s":
                result = "siblings";
                break;
            default:
        }
        return result;
    }

    findUniqueCharacters(){
        let yourNameCapitalized = this.yourName.toUpperCase();
        let yourNameRevised = "";
        let partnerNameCapitalized = this.partnerName.toUpperCase();
        for (let char of yourNameCapitalized){
            if(partnerNameCapitalized.includes(char)){
                partnerNameCapitalized = partnerNameCapitalized.replace(char, "");
            }else{
             yourNameRevised += char;   
            }
        }

        return yourNameRevised + partnerNameCapitalized;
    }


    createComment(){
        let result = "";
        let partnerName  = this.partnerName.toUpperCase();
        if(this.framework == "simplex" || this.framework =="gravis"){
            if(this.result >= 0 && this.result < 20){
                result = "According to the Amarelator, you have no chance to get together with "+partnerName +". However, matters of the heart might not be accurately simulated by some computer program, Do shoot your shot, you can never tell."
            }else if(this.result >= 20 && this.result < 45){
                result = "This is going to be one hard journey for you, and you might not be any match for "+partnerName +", but we encourage you regardless. Give it a good shot, Good luck";
            }
            else if(this.result >= 45 && this.result < 65){
                result = "You have a pretty decent chance here, and Amaraletor thinks you are a good match for "+partnerName +", Do not blow this.";
            }
            else if(this.result >= 65 && this.result <= 100){
                result = "What are you waiting for, this match is amazing, you need to get together with "+partnerName +" and begin to make this happen ASAP.";
            }
        }else if(this.framework == "flames"){
            if(this.result == "f"){
                result = "You are setup for one amazing friendship experience with "+ this.partnerName + ". We wish you goodluck." 
            }else if(this.result == "l"){
                result = "Awwww, You have a lover in "+ partnerName + ". I hope you will not sleep on this and get together with them ASAP." 
            }else if(this.result == "a"){
                result = "We are confident that " + partnerName + " admires you a lot, Amaraletor encourages that you get close and explore the possibilities there, or not." 
            }
            else if(this.result == "m"){
                result = "Amaraletor thinks you guys will make a beautiful couple, if you have not started the process, go and get started, "+ partnerName + " is yours. Happy ... go on get started first." 
            }else if(this.result == "e"){
                result = "This is a no-no, according to Amaraletor, you guys are most likely enemies from another lifetime and we would advice that you stay away from " + partnerName + ". On the other hand, do not take our words for it, but we have warned you." 
            }else if(this.result == "s"){
                result = "Brothers and Sisters always have an amazing relationship and Amarelator thinks that is the kind of relationship you have with "+ partnerName + ". Say Hi to your Sibling for us." 
            }
        }
    return result;
    }
}