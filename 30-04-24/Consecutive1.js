function printConsecutiveNo (no)
{
    no = no.toString();
    const consecutiveNum = [];
    let currentSequence = '';
         
    for(let i=0; i<no.length; i++)
    {
        if(parseInt(no[i]) +1 === parseInt(no[i+1]))
        {
            currentSequence += no[i];
        }
        else
        {
            currentSequence += no[i];
            if(currentSequence.length > 1)
            {
                consecutiveNum.push(currentSequence);
            }
            currentSequence = '';
        }
    }
    console.log("Consecutive number Sequences: ", consecutiveNum);
}
const input = 9975612389;
printConsecutiveNo(input)