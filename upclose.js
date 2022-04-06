const checked = [];


const others = [`www.amazon.com.au`,`www.amazon.ca`,`www.amazon.in`,`www.amazon.com`,`www.amazon.sg`,`www.amazon.eg`,`www.amazon.ae`,`www.amazon.sa`,`www.amazon.se`,
`www.amazon.pl`,
`www.amazon.de`,`www.amazon.fr`,`www.amazon.es`, `www.amazon.it`,`www.amazon.com.br`,`www.amazon.com.mx`,
`www.amazon.co.jp`, `www.amazon.cn`,`www.amazon.co.uk`,`www.amazon.nl`,`www.amazon.com.tr`]





function Up_Close() {
    if (document.querySelectorAll('#feature-bullets')[0].innerText.length == 0
        && document.querySelectorAll('#productDescription')[0].innerText.length ==0)  
       
        {
        window.close();
        
    }
}

function prime() {
    console.log('prime deneme');
    if (document.querySelectorAll('#feature-bullets').length == 0)  {
        console.log('prime')
        window.close()
    }
 
}

    




function validate() {
    Up_Close();
    prime();
    
    
}
validate();

