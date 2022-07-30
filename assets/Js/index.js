let about = document.getElementById("about");
let college = document.getElementById("college");
let school = document.getElementById("school");

let imgcounter=1;
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let certimg = document.getElementById('certimg');
let download = document.getElementById('download');

let small_icons = document.getElementById('small-icons');
let preview = document.getElementById('preview');
let list = document.getElementById('list');

let htmls="<div class='row1 d-flex'>";
for(let i=1;i<=3;i++){
    htmls+="<img src='./assets/Imgs/certificate"+i+".jpg' alt='' width='25%' onclick='previewer("+i+")'></img>"
}
htmls+="</div><div class='row2 d-flex'>"
for(let i=4;i<=6;i++){
    htmls+="<img src='./assets/Imgs/certificate"+i+".jpg' alt='' width='25%' onclick='previewer("+i+")'></img>"
}
htmls+="</div>"
small_icons.innerHTML=htmls;
function changer(s){
    if(s=='about'){
        college.classList.add('hide');
        school.classList.add('hide');
        about.classList.remove('hide');
    }
    else if(s=='college'){
        about.classList.add('hide');
        school.classList.add('hide');
        college.classList.remove('hide'); 
    }
    else if(s=='school'){
        about.classList.add('hide');
        college.classList.add('hide');
        school.classList.remove('hide'); 
    }
}
function changeimg(s){
    if(s=='next' && imgcounter<6){
        imgcounter+=1;
        let imgsrc="./assets/Imgs/certificate"+imgcounter+".jpg";
        let pdfsrc="./assets/pdfs/certificate"+imgcounter+".pdf";
        certimg.setAttribute('src',imgsrc);
        download.setAttribute('href',pdfsrc);
    }
    else if(s=='prev' && imgcounter>1){
        imgcounter-=1;
        let imgsrc="./assets/Imgs/certificate"+imgcounter+".jpg";
        let pdfsrc="./assets/pdfs/certificate"+imgcounter+".pdf";
        certimg.setAttribute('src',imgsrc);
        download.setAttribute('href',pdfsrc);
    }
}
function modechanger(s){
    if(s=='preview'){
        small_icons.classList.add('hide');
        list.classList.add('hide');
        preview.classList.remove('hide');
    }
    else if(s=='icons'){
        preview.classList.add('hide');
        list.classList.add('hide');
        small_icons.classList.remove('hide');
    }
    else if(s=='list'){
        small_icons.classList.add('hide');
        preview.classList.add('hide');
        list.classList.remove('hide'); 
    }
}

function previewer(s){
    small_icons.classList.add('hide');
    preview.classList.remove('hide');
    list.classList.add('hide');

    imgcounter=s;
    let imgsrc="./assets/Imgs/certificate"+imgcounter+".jpg";
    let pdfsrc="./assets/pdfs/certificate"+imgcounter+".pdf";
    certimg.setAttribute('src',imgsrc);
    download.setAttribute('href',pdfsrc);
}