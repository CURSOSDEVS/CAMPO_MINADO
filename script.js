let html = document.getElementById('principal');

let text ="";

let size = 4;

let maps = new Array(size);

function fillMaps(size){
  for (let i = 0; i < maps.length; i++) {
    maps[i] = new Array(size);
    for (let j = 0; j < maps[i].length; j++) {
      if((Math.round(Math.random(150) * (1 - 0 ) + 0)) == 1){
        maps[i][j] = -1 ;
      }else{
        maps[i][j] = 0;
      };      
    };
  };
};

fillMaps(size);

lookBombs=(c,l)=>{
  let qtdBombs = 0;
  if(maps[c][l]==0){
    let a = c - 1;
    let b = l - 1;
    let d = c + 1;
    let e = l + 1;
    if(a >= 0 && b >= 0){
      if (maps[a][b] == -1){
         qtdBombs ++;
       };
    };
    if(b >=0){
      if(maps[c][b]== -1){
        qtdBombs ++;
      };
    };
    if ( d < maps.length && b >=0){
      if(maps[d][b]== -1){
        qtdBombs ++;
      };   
    };
    if(a >= 0){
      if(maps[a][l]== -1){
        qtdBombs ++;
      };  
    };
    if((d < maps.length) ){
      if(maps[d][l]== -1){
        qtdBombs ++;
      };  
    };

    if(a >= 0 && e < maps[a].length){
      if(maps[a][e]== -1){
        qtdBombs ++;
      };
    };

    if( e < maps[c].length){
      if((maps[c][e]== -1)){
        qtdBombs ++;
      };
    };
    if(d < maps.length && e < maps[d].length){
      if(maps[d][e]== -1){
        qtdBombs ++;
      };
    };

     maps[c][l] = qtdBombs;
  }
  qtdBombs = 0;
  return maps[c][l];
}

changeMaps=()=>{
  for (let i = 0; i < maps.length; i++) {
  for (let j = 0; j < maps[i].length; j++) {      
      
         maps[i][j] = lookBombs(i,j);
     
  };
};
}

changeMaps();

for (let i = 0; i < maps.length; i++) {
  for (let j = 0; j < maps[i].length; j++) {      
      //text +=`<input type="button" value="" onclick="onBtnClick(this, ${maps[i][j]})"/>`;
      text +=`<button value="" class="btn btn-primary" onclick="onBtnClick(this, ${maps[i][j]})"></button>`;
  };
  text +="<br>";
};

onBtnClick=(obj, value)=>{
  //(value==1) ? obj.value="true" : obj.value="false";
  //obj.value = value;
  obj.innerHTML = value;
};

onTestClick=(obj, value)=>{
  obj.value = value;
  obj.innerHTML = value;
}


html.innerHTML = text;