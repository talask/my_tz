

class Person {
 constructor(name, email) {
     this.name=name;
     this.email=email;     
                         }   
           }
$(function() {
  load();
  var button = document.getElementById('but');
  button.addEventListener('click', Addu);
  var inputu = document.getElementById('user');
  inputu.addEventListener('keyup', provu1);
  var inpute = document.getElementById('post');
  inpute.addEventListener('keyup', prove1);
            
             });
    
function load() {
  var table = document.getElementById('tab'); 
  var rowt = table.rows.length;
  if (localStorage.getItem('admin') !== null) {
    var arrA=JSON.parse(localStorage.getItem('admin'));
   	for (var j in arrA){
      var newRow=table.insertRow();
      var newCell = newRow.insertCell(0);
      newCell.innerHTML=arrA[j][0];
      newCell.setAttribute("ondblclick", "dblcl("+rowt+",0)");
      var newCell = newRow.insertCell(1);
      newCell.innerHTML=arrA[j][1];
      newCell.setAttribute("ondblclick", "dblcl("+rowt+",1)");
      var newCell = newRow.insertCell(2);
      newCell.innerHTML='admin';
      newCell.setAttribute("ondblclick", "dblcl("+rowt+",2)");
      rowt++; 
                       }
                                              }
  if (localStorage.getItem('user') !== null) {
    var arrU=JSON.parse(localStorage.getItem('user'));
    rowt = table.rows.length;
    for (var j in arrU){
      var newRow=table.insertRow();
      var newCell = newRow.insertCell(0);
      newCell.innerHTML=arrU[j][0];
      newCell.setAttribute("ondblclick", "dblcl("+rowt+",0)");
      var newCell = newRow.insertCell(1);
      newCell.innerHTML=arrU[j][1];
      newCell.setAttribute("ondblclick", "dblcl("+rowt+",1)");
      var newCell = newRow.insertCell(2);
      newCell.innerHTML='user';
      newCell.setAttribute("ondblclick", "dblcl("+rowt+",2)");
      rowt++; 
                       }  
                                             }
  if (localStorage.getItem('guest') !== null) {
    var arrG=JSON.parse(localStorage.getItem('guest'));
    rowt = table.rows.length;
    for (var j in arrG){
      var newRow=table.insertRow();
      var newCell = newRow.insertCell(0);
      newCell.innerHTML = arrG[j][0];
      newCell.setAttribute("ondblclick", "dblcl("+rowt+",0)");
      var newCell = newRow.insertCell(1);
      newCell.innerHTML = arrG[j][1];
      newCell.setAttribute("ondblclick", "dblcl("+rowt+",1)");
      var newCell = newRow.insertCell(2);
      newCell.innerHTML = 'guest';
      newCell.setAttribute("ondblclick", "dblcl("+rowt+",2)");
      rowt++; 
                       }  
                                             }
                 }
function prov(n) {
  var zap = document.getElementById(n).value;
  var f = 0;
  var a = zap.split('@');  
  if (a.length > 1)  var b = a[1].split('.');  
  if ((a.length === 2)&&(b.length === 2)&&(a[0] !== '')&&(a[1] !== '')&&(b[0] !== '')&&(b[1] !== ''))  f = 1; 
  return(f);
                 }

function Addu() {

//if($('#but').onclick) {// = function() {
  var usr= document.getElementById('user').value; 
  var post= document.getElementById('post').value;
  var sel= document.getElementById('rol');
  var rolv=sel.options[sel.selectedIndex].value;
  var rolt=sel.options[sel.selectedIndex].text;
  var fl=prov('post');
  if ((usr !=='')&&(fl === 1)) { 
    var table = document.getElementById('tab'); 
    var rowt = table.rows.length;
    var newRow=table.insertRow();
    var newCell = newRow.insertCell(0);
    newCell.innerHTML=usr;
    newCell.setAttribute("ondblclick", "dblcl("+rowt+",0)");
    var newCell = newRow.insertCell(1);
    newCell.innerHTML=post;
    newCell.setAttribute("ondblclick", "dblcl("+rowt+",1)");
    var newCell = newRow.insertCell(2);
    newCell.innerHTML=rolt;
    newCell.setAttribute("ondblclick", "dblcl("+rowt+",2)");
    addls(usr, post, rolt);
                           } else {
                               if (usr === '')  alert("Заполните имя пользователя");
                               if (fl === 0)    alert("Проверьте адрес электронной почты");
            }
            
}

function addls(u, e, r) {  
  if (localStorage.getItem(r) !== null) {
  var arr=JSON.parse(localStorage.getItem(r));
  arr[arr.length]=new Array(u, e);
  localStorage.setItem(r, JSON.stringify(arr));
                                        } else { 
                                            var a=new Array(); 
                                            a[0]=new Array(u,e);
                                            localStorage.setItem(r, JSON.stringify(a));                                     
                                               }
                        }
                        
function edls(u, e, r) { 
  if (localStorage.getItem(r) !== null) {
    var arr = JSON.parse(localStorage.getItem(r));
    b = new Array(u,e);
    if (arr.indexOf(b) !==1) { 
        var k=arr.indexOf(b); arr.splice(k,1); 
                             }     
    localStorage.setItem(r, JSON.stringify(arr));
                                        }else { 
                                           alert("Unknown");                                
                                              }
                                                   
                      }

function dblcl(r, c) {
  var table = document.getElementById('tab');
  edls(table.rows[r].cells[0].innerHTML, table.rows[r].cells[1].innerHTML, table.rows[r].cells[2].innerHTML);
  var textedCell = table.rows[r].cells[c].innerHTML; 
  var sel = "<select name=\"edit\" id =\"edit\" onchange=\"bluri('"+r+"','"+c+"');\"\"><OPTION value=admin>admin</OPTION><OPTION value=user>user</OPTION><OPTION value=guest>guest</OPTION></select>";
  if ((textedCell.indexOf('input') === -1)&&(textedCell.indexOf('select') === -1)) {
    if (c === 0) { 
      table.rows[r].cells[c].innerHTML = "<input type='text' nam='edit' id='edit' value='"+textedCell+"' size='20' onkeyup=\"provu('edit');\"  onblur=\"bluri('"+r+"','"+c+"');\">"; document.getElementById('edit').focus();
                 }
    if (c === 1) {   
      table.rows[r].cells[c].innerHTML = "<input type='text' nam='edit' id='edit' value='"+textedCell+"' size='20' onkeyup=\"prove('edit');\"  onblur=\"bluri('"+r+"','"+c+"');\">"; document.getElementById('edit').focus();
                 }
    if (c === 2) {  
      table.rows[r].cells[c].innerHTML = sel;
                 }
                                                                                    }
                     }
                  
function bluri(r, c){ 
  var table = document.getElementById('tab');
  if (c === 2) { 
    var sel = document.getElementById('edit');
    var rolv=sel.options[sel.selectedIndex].value;
    var zap=sel.options[sel.selectedIndex].text;
               } 
  else {
    var zap = document.getElementById('edit').value; 
       }
    if (zap !== '') { 
      table.rows[r].cells[c].innerHTML = zap; 
                    } 
    else { 
      alert("Заполните поле"); 
      document.getElementById('edit').focus(); 
         }
    addls(table.rows[r].cells[0].innerHTML, table.rows[r].cells[1].innerHTML, table.rows[r].cells[2].innerHTML);
                    }
     function prove(nam) { 
  var bChar = 0;
  var rChar = "";
  var aChar = document.getElementById(nam).value;
  for (var n=0; n<aChar.length; n++){
    var sChar=aChar.substring(n,n+1);
    if (/^[@\s\.\-\_0-9a-z]*$/i.test(sChar)) rChar = rChar+sChar;
    else bChar = 1; 
                                    }
  if (bChar === 1) { 
    document.getElementById(nam).value = rChar;
    document.getElementById(nam).focus();
                   }                            
  else {
    document.getElementById(nam).value = rChar;
    document.getElementById(nam).focus();
       }
                   }   

function provu(nam) { 
  var bChar = 0; 
  var rChar = "";
  var aChar = document.getElementById(nam).value;
  for ( var n=0; n<aChar.length; n++) { 
    var sChar = aChar.substring(n,n+1);
    if (/^[а-яёєїі\s\.0-9\,\_a-z]*$/i.test(sChar)) { 
        rChar = rChar+sChar; 
        rChar.replace(/([^`]+)/g);  
                                                    }
    else { 
      bChar = 1; 
         }
                                 }
  if (bChar === 1) {
      document.getElementById(nam).value = rChar;
      document.getElementById(nam).focus();
}
  else {   
      document.getElementById(nam).value = rChar;
      document.getElementById(nam).focus();
       }
                   }           

function prove1() { 
  var bChar = 0;
  var rChar = "";
  var aChar = this.value;
  for (var n=0; n<aChar.length; n++){
    var sChar=aChar.substring(n,n+1);
    if (/^[@\s\.\-\_0-9a-z]*$/i.test(sChar)) rChar = rChar+sChar;
    else bChar = 1; 
                                    }
  if (bChar === 1) { 
    this.value = rChar;
    this.focus();
                   }                            
  else {
    this.value = rChar;
    this.focus();
       }
                   }   

function provu1() { 
  var bChar = 0; 
  var rChar = "";
  var aChar = this.value;
  for ( var n=0; n<aChar.length; n++) { 
    var sChar = aChar.substring(n,n+1);
    if (/^[а-яёєїі\s\.0-9\,\_a-z]*$/i.test(sChar)) { 
        rChar = rChar+sChar; 
        rChar.replace(/([^`]+)/g);  
                                                    }
    else { 
      bChar = 1; 
         }
                                 }
  if (bChar === 1) {
      this.value = rChar;
      this.focus();
}
  else {   
      this.value = rChar;
      this.focus();
       }
                   }                   
//-->
