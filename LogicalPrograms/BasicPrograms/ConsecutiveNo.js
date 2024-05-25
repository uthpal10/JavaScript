function printConsecutiveNo (no)
{
    const numberString = no.toString();
    const consecutiveNum = [];
    let currentSequence = '';

    for(let i=0; i<numberString.length; i++)
    {
        if(parseInt(numberString[i]) +1 === parseInt(numberString[i+1]))
        {
            currentSequence += numberString[i];
        }
        else
        {
            currentSequence += numberString[i];
            if(currentSequence.length > 1)
            {
                consecutiveNum.push(currentSequence);
            }
            currentSequence = '';
        }
    }
    console.log(" Consecutive number Sequences : " + consecutiveNum);
}
const no = 9975612389;
printConsecutiveNo(no)