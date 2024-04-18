let arr = [ undefined, 10, "hi", false, 99, true, 'bye', null]

for( let i = 0; i<arr.length; i++ )
{
    if( typeof arr[i] == 'undefined' )
    {
        console.log(arr[i]);
    }
}
