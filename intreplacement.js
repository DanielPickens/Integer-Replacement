var integerReplacement = function(n) {
      let op = 0;
        
        while(n!=1){
            
            if((n&1)==1){
                
                if((n-1)/2==1){
                    n-=1;
                }
                else if((((n+1)/2)&1)!=1){
                    n+=1;
                }else{ 
                    n-=1;
                }
                
                ++op;
                
            }else{
                n>>>=1;
                ++op;
            }
            
        }
        
        return op;
    }



/*
Runtime: 68 ms, faster than 96.61% of JavaScript online submissions for Integer Replacement.
Memory Usage: 38.5 MB, less than 83.05% of JavaScript online submissions for Integer Replacement.
*/
