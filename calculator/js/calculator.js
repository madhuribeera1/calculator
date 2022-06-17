let btn=document.querySelectorAll('.symbol')
for(let x of btn){
    x.addEventListener('click',function(){

        
        let key=this.innerHTML
        if(key =='AC'){
            document.querySelector('.screen').innerHTML='';
        }
        else if(key =='C'){
            let a=document.querySelector('.screen').innerHTML
            a=a.slice(0,-1)
            document.querySelector('.screen').innerHTML=a;
        
        }else if(key == '='){
            let result=document.querySelector('.screen').innerHTML
             result=eval(result);
            document.querySelector('.screen').innerHTML=result
        }
        else{
            document.querySelector('.screen').innerHTML +=key
        }
    })
}