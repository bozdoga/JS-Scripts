const attachments = document.getElementsByClassName("md-2-line sds-resource-item md-whiteframe-2dp _md-button-wrap ng-scope _md");
const start_classification = document.getElementsByClassName("md-primary submit-product-card-classification md-button md-dg-theme layout-align-center-center layout-row flex");



function checkdocument() {

    const button_background = document.getElementsByClassName("sds-resource-item-description layout-align-start-start layout-column");
    
    
    let i = 0;
    for (i; i < attachments.length; i++) {
        if (attachments[i].innerText.includes('xls') == true)
        {
            button_background[i].style.backgroundColor = "green";
            attachments[i].style.color = "black";
            attachments[i].style.fontSize = "18px";
            console.log('red')} 
        else 
        {
        attachments[i].style.color = "black";
        attachments[i].style.fontSize = "18px";
        button_background[i].style.backgroundColor = "red";
        console.log('red')
        }
    }};

function collapse_docs() {
    let docs = document.getElementById('resources_container');
    docs.className = 'collapse in';
    docs.setAttribute('aria-expanded', 'true');
}

function linkify() {
    let comment = document.getElementsByClassName("text-weight-600 reviewer-reason-text")[0]
    let comment_text= comment.innerText
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    if (comment_text.match(urlRegex).length>0) {
    console.log (comment_text.match(urlRegex))
    comment.replaceWith(comment_text.match(urlRegex))
    }
}

function who_uploaded() {
    let upload_list = [];
    let i = 0;
    for(i;i <= attachments.length; i++) {
        upload_list.push(attachments[i].innerText)
        console.log(upload_list)
    }

}

document.addEventListener('click', () => {
    collapse_docs();
    checkdocument();
    who_uploaded();
    linkify();


});


   
