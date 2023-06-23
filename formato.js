const opcions={
    opcion1:"Si",
    opcion2:"No",
    opcion3:"Más de $999,999.00 MXN",
    opcion4:"Más de $500,000.00 MXN",
    opcion5:"Más de $99,999.00 MXN",
    opcion6:"Menos de $99,999.00 MXN",
    opcion7:"Sector Primario",
    opcion8:"Sector Secundario",
    opcion9:"Sector Terceario",
    opcion10:"Equipos",
    opcion11:"Hadware",
    opcion12:"Software",
    opcion13:"No cuento con tecnología",
    val1:20,
    val2:0,
    val3:7,
    val4:13,
    val5:45,
    val6:25,
    val7:15,
    val8:30,
    val9:10,
    
}
let opcion1=opcions.opcion1;
let opcion2=opcions.opcion2;
let opcion3=opcions.opcion3;
let opcion4=opcions.opcion4;
let opcion5=opcions.opcion5;
let opcion6=opcions.opcion6;
let opcion7=opcions.opcion7;
let opcion8=opcions.opcion8;
let opcion9=opcions.opcion9;
let opcion10=opcions.opcion10;
let opcion11=opcions.opcion11;
let opcion12=opcions.opcion12;
let opcion13=opcions.opcion13;
let opcion;
let val1=opcions.val1;
let val2=opcions.val2;
let val3=opcions.val3;
let val4=opcions.val4;
let val5=opcions.val5;
let val6=opcions.val6;
let val7=opcions.val7;
let val8=opcions.val8;
let val9=opcions.val9;


function login(){
    document.getElementById('documento').style.display="block";
    document.getElementById('bloque4').style.display="none";

    nombres=document.getElementById('nombres').value;
    telefono=document.getElementById('telefono').value;
    giro=document.getElementById('giro').value;
    clasificacion=document.getElementById('clasificacion').value;
    fecha=document.getElementById('fecha').value;

    document.getElementById("nombre").innerHTML=nombres
    document.getElementById("telef").innerHTML=telefono
    document.getElementById("gir").innerHTML=giro
    document.getElementById("clasif").innerHTML=clasificacion
    document.getElementById("date").innerHTML=fecha
/*----------------------------------------------------------------*/
    
    if(document.getElementById('valor').checked){
        document.getElementById("si1").innerHTML=opcion1
        document.getElementById("val1").innerHTML=val1
    }else{
        document.getElementById("si1").innerHTML=opcion2
        document.getElementById("val1").innerHTML=val2
    }
    if(document.getElementById('valor2').checked){
        document.getElementById("si2").innerHTML=opcion1
        document.getElementById("val2").innerHTML=val1
    }else{
        document.getElementById("si2").innerHTML=opcion2
        document.getElementById("val2").innerHTML=val2
    }
    if(document.getElementById('valor3').checked){
        document.getElementById("si3").innerHTML=opcion1
        document.getElementById("val3").innerHTML=val1
    }else{
        document.getElementById("si3").innerHTML=opcion2
        document.getElementById("val3").innerHTML=val2
    }
    
    if(document.getElementById('valor4').checked){
        document.getElementById("si4").innerHTML=opcion1
        document.getElementById("val4").innerHTML=val1
    }else{
        document.getElementById("si4").innerHTML=opcion2
        document.getElementById("val4").innerHTML=val2
    }
    if(document.getElementById('valor5').checked){
        document.getElementById("si5").innerHTML=opcion1
        document.getElementById("val5").innerHTML=val3
    }else{
        document.getElementById("si5").innerHTML=opcion2
        document.getElementById("val5").innerHTML=val2
    }
    if(document.getElementById('valor6').checked){
        document.getElementById("si6").innerHTML=opcion1
        document.getElementById("val6").innerHTML=val4
    }else{
        document.getElementById("si6").innerHTML=opcion2
        document.getElementById("val6").innerHTML=val2
    }

    resultado=0;
    total=document.querySelectorAll('td+td+td');
    for (i=0;i<6;++i){
        resultado+=parseFloat(total[i].firstChild.data);
    }
    document.getElementById('val7').innerHTML=resultado
    /*----------------------------------------------------------------*/
    if(document.getElementById('va1').checked){
        document.getElementById("s1").innerHTML=opcion3
        document.getElementById("v1").innerHTML=val5
    }else if(document.getElementById('va2').checked){
        document.getElementById("s1").innerHTML=opcion4
        document.getElementById("v1").innerHTML=val6
    }else if(document.getElementById('va3').checked){
        document.getElementById("s1").innerHTML=opcion5
        document.getElementById("v1").innerHTML=val7
    }else if(document.getElementById('va4').checked){
        document.getElementById("s1").innerHTML=opcion6
        document.getElementById("v1").innerHTML=val2
    }
    if(document.getElementById('v5').checked){
        document.getElementById("s2").innerHTML=opcion1
        document.getElementById("v2").innerHTML=val8
    }else{
        document.getElementById("s2").innerHTML=opcion2
        document.getElementById("v2").innerHTML=val2
    }
    
    if(document.getElementById('SR7').checked){
        document.getElementById("s3").innerHTML=opcion7
        document.getElementById("v3").innerHTML=val6
    }else if(document.getElementById('SR8').checked){
        document.getElementById("s3").innerHTML=opcion8
        document.getElementById("v3").innerHTML=val6
    }else if(document.getElementById('SR9').checked){
        document.getElementById("s3").innerHTML=opcion9
        document.getElementById("v3").innerHTML=val6
    }
    resultado2=0;
    total2=document.querySelectorAll('td+td+td');
    for (i=6;i<9;++i){
        resultado2+=parseFloat(total2[i].firstChild.data);
    }
    document.getElementById('vas1').innerHTML=resultado2
    /*----------------------------------------------------------------*/
    if(document.getElementById('tec1').checked){
        document.getElementById("te1").innerHTML=opcion10
        document.getElementById("vt1").innerHTML=val9
    }else if(document.getElementById('tec2').checked){
        document.getElementById("te1").innerHTML=opcion11
        document.getElementById("vt1").innerHTML=val9
    }else if(document.getElementById('tec3').checked){
        document.getElementById("te1").innerHTML=opcion12
        document.getElementById("vt1").innerHTML=val9
    }else if(document.getElementById('tec4').checked){
        document.getElementById("te1").innerHTML=opcion13
        document.getElementById("vt1").innerHTML=val2
    }
    if(document.getElementById('neg1').checked){
        document.getElementById("te2").innerHTML=opcion1
        document.getElementById("vt2").innerHTML=val7
    }else{
        document.getElementById("te2").innerHTML=opcion2
        document.getElementById("vt2").innerHTML=val2
    }
    if(document.getElementById('mark1').checked){
        document.getElementById("te3").innerHTML=opcion1
        document.getElementById("vt3").innerHTML=val1
    }else{
        document.getElementById("te3").innerHTML=opcion2
        document.getElementById("vt3").innerHTML=val2
    }
    if(document.getElementById('capa1').checked){
        document.getElementById("te4").innerHTML=opcion1
        document.getElementById("vt4").innerHTML=val1
    }else{
        document.getElementById("te4").innerHTML=opcion2
        document.getElementById("vt4").innerHTML=val2
    }
    if(document.getElementById('comp1').checked){
        document.getElementById("te5").innerHTML=opcion1
        document.getElementById("vt5").innerHTML=val7
    }else{
        document.getElementById("te5").innerHTML=opcion2
        document.getElementById("vt5").innerHTML=val2
    }

    resultado3=0;
    total3=document.querySelectorAll('td+td+td');
    for (i=9;i<14;++i){
        resultado3+=parseFloat(total3[i].firstChild.data);
    }
    document.getElementById('vas2').innerHTML=resultado3
    /*----------------------------------------------------------------*/
    if(document.getElementById('org1').checked){
        document.getElementById("or1").innerHTML=opcion1
        document.getElementById("vor1").innerHTML=val5+val7
    }else{
        document.getElementById("or1").innerHTML=opcion2
        document.getElementById("vor1").innerHTML=val2
    }
    if(document.getElementById('pues1').checked){
        document.getElementById("def1").innerHTML=opcion1
        document.getElementById("vdef1").innerHTML=val1
    }else{
        document.getElementById("def1").innerHTML=opcion2
        document.getElementById("vdef1").innerHTML=val2
    }
    if(document.getElementById('proc1').checked){
        document.getElementById("pro1").innerHTML=opcion1
        document.getElementById("vpro1").innerHTML=val1
    }else{
        document.getElementById("pro1").innerHTML=opcion2
        document.getElementById("vpro1").innerHTML=val2
    }
    
    resultado4=0;
    total4=document.querySelectorAll('td+td+td');
    for (i=14;i<17;++i){
        resultado4+=parseFloat(total4[i].firstChild.data);
    }
    document.getElementById('vas3').innerHTML=resultado4
    /*----------------------------------------------------------------*/
}


function next(){
    document.getElementById('bloque1').style.display="block";
    document.getElementById('inicio').style.display="none";

}
function next2(){
    document.getElementById('bloque1').style.display="none";
    document.getElementById('bloque2').style.display="block";

}
function next3(){
    document.getElementById('bloque2').style.display="none";
    document.getElementById('bloque3').style.display="block";

}
function next4(){
    document.getElementById('bloque3').style.display="none";
    document.getElementById('bloque4').style.display="block";

}
