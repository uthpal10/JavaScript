for(let i=1; i<=20; i++)
    {
        if(i % 2 == 0 && i % 3 == 0)
        {
           console.log(i+ " ==>  webdriverIO");
        }
        else if(i % 2 == 0)
        {
           console.log(i+ " ==>  java");        
        }
        else if(i % 3 == 0)
        {
           console.log(i+ " ==>  javaScript");        
        }
        else
        {
            console.log(i);
        }
    }