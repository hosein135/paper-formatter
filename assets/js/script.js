var text1;
var text2;
var text3;
var text4;
var text5;
var text6;
var text7;
var flag =0;
var str;
let t;
var elm;
var element;
new ClipboardJS('.btn');
function getText1() {
    text1= $("#tarea").val();
    text2 = text1.replace(/\n/g, " ");
    $("#converted").text(text2);

} ;

function getText2() {
    text4 = text2.replace(/-/g, "");
    $("#converted").text(text4);
    flag++;
} ;

function getText3() {
    if(flag == 0){str =  String(text2);}
    else{str =  String(text4);};
    var sentences = str.split(/\./);
    sentences.splice(-1);
    for (var x in sentences){
        element = document.createElement("p");
        element.setAttribute("id", "p"+x);
        text5 =  sentences[x] + ".";
        element.appendChild(document.createTextNode(text5));
        document.getElementById('converted2').appendChild(element);
        element.setAttribute("ondblclick", "trans3()");
        let words = [];
        t = String(`p${x}`);
        console.log(t);
        words[x] = document.getElementById(t).innerHTML.split(" ");
        var filtered = [];
        filtered [x] = words[x].filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});
        console.log(filtered [x]);
        
        text6 = filtered [x];
        text7 = String(text6);
        text7 = text7.replaceAll(",", " ");
        for (var y in filtered [x]){
            elm = document.createElement("span");
            elm.setAttribute("id", "sp"+y);
            elm.setAttribute("data-clipboard-target", "#p"+x);
            elm.setAttribute("class", "btn");
            elm.setAttribute("oncontextmenu", "trans2()");
            elm.appendChild(document.createTextNode(text6[y]+" "));
            document.getElementById(`p${x}`).appendChild(elm);
            
        };  

    }
    
   
 $('p').contents().filter(function(){
      
      return this.nodeType != 1;
   }).remove();   
} ;
function trans3(){
    let dumm = String($(event.target).parent().children().text());
    window.open(`https://translate.google.com/?sl=en&tl=fa&text=${dumm}&op=translate`, '_blank');
}; 
function trans2(){
    let dum = String($(event.target).text());
    window.open(`https://www.merriam-webster.com/dictionary/${dum}`, '_blank');
};
