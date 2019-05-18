//14. Longest Common Prefix

//Method1
var longestCommonPrefix = function(strs) {
    var res=[];
    var temp=strs.map(i=>{return i.split('')});
    
    if(temp[0] && temp[0][0]){
       for(var i=0;i<temp[0].length;i++){    
        if(temp.every(x=>{return x[i]==temp[0][i]})){
            res.push(temp[0][i]);
        }else{
            break;
        }
     }        
    }
    
    return res.join('')

};

//Method2

