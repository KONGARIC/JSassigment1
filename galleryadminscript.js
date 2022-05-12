var data = [
 
]
var count =0;

function load()
{

  data.forEach( function(obj) 
    {
      var img = new Image();
      img.src = obj.url;
      img.setAttribute('id',''+obj.id)

      img.setAttribute("class", "banner-img");
        
      img.setAttribute("alt", "no img");
      document.getElementById("img-container").appendChild(img);
  })
}
load();

function delImg(){
   
  data.forEach( function(obj){

    document.getElementById(obj.id).addEventListener("dblclick", function( event ) {
    
      delete data[obj.id];
      document.querySelector("#img-container").innerHTML='';
      load();
      promt()
      console.log(data.length)

    }, false);

    })
}
const addForm=document.forms['addForm'];
addForm.addEventListener('submit',function(e){
  e.preventDefault();
  const idvalue=addForm.querySelector('#id').value;
  const dropDown=addForm.querySelector('#imgs').value;

  const url=addForm.querySelector('#url').value;
  const name=addForm.querySelector('#name').value;
  
  const info=addForm.querySelector('#info').value;
  
  const date=addForm.querySelector('#date').value;


  if(dropDown==='new'){
    data.push({
      'id':count,
      "url": url,
      "name": name,
      "info": info,
      "date": date,
        
    });
    count=count+1;
  }
  else{
    data.forEach(function(obj){
      if(obj.id==idvalue){
        obj.url=url
        obj.name=name
        obj.info=info
        obj.data=date;
      }
    })

  }


  
  document.querySelector("#img-container").innerHTML='';
  load();
   

  console.log(data)
  addForm.querySelector('#id').value=-1;
  
  
  })



  document.querySelector("#img-container").addEventListener("mouseover", function( event ) {
    event.target.style.color = "orange";
    setTimeout(function() {
      event.target.style.color = "";
      delImg();
      updateImg();
      
    }, 500);
  }, false);




  function updateImg(){

    data.forEach( function(obj){

      document.getElementById(obj.id).addEventListener("click", function( event ) {
      
        document.querySelector('#id').value=obj.id;
        document.querySelector('#url').value=obj.url
        document.querySelector('#name').value=obj.name;
        document.querySelector('#info').value=obj.info
        document.querySelector('#date').value=obj.date
        document.querySelector('#imgs').value='update'
          
      });
  
    })
      
  }

promt()
function promt(){
  var len=data.filter(n => n).length
  console.log("len ",len)
  if(len==0){
    document.querySelector("#img-container").innerHTML='<h1>Add Image</h1>';
  }
  
}


