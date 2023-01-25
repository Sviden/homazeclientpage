const getFirstLetterOfFirstAndLastWord = (inputString: string) : string =>{
    
    let firstWordLetter = "";
    let lastWordLetter = "";


    if(!inputString){
        console.log("Error: param is undefined");
        return ''
    }else{
       const splittedString = inputString.split(' ');
        if(splittedString.length > 0){
           firstWordLetter = splittedString[0][0].toUpperCase();
           if(splittedString.length > 1){
            lastWordLetter = splittedString[splittedString.length-1][0].toUpperCase();
           }
        }
    }
   
    return `${firstWordLetter}${lastWordLetter}`;



}