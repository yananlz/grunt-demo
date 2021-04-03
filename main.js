$(()=>{
     //get dom elem
      let   $width=$('#width'),
            $height=$('#height'),
            $btnCal=$("#calc"),
            $perimeter=$('#perimeter'),
            $area=$('#area'),
            $widthValidata=$("#width-validata"),
            $heightValidata=$('#height-validata');
    //calc button click
        $btnCal.click(()=>{
          //g et value
                let w=Number($width.val()),
                 h=Number($height.val());
          $forkMeGH.show("http://www.baidu.com");      
         //validata
        if(validata($width,$widthValidata) && validata($height,$heightValidata)){
         //calc
         let p=(w+h)*2,
             a=w*h;
         //output
         $perimeter.val(p);
         $area.val(a);

       }
    
        });
 });
function validata(input,output){
  //    empty
  if(input.val()===""){
        output.html("此字段不能为空");
    return false;
  }else{
    output.html("");
    return true;
  }
  //is number
  //is >0

}
