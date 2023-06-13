var arr=new Array();
arr[0]="Yaakov";
arr[1]="John";
arr[2]="Jen";
arr[3]="Jason";
arr[4]="Paul";
arr[5]="Frank";
arr[6]="Larry";
arr[7]="Paula";
arr[8]="Laura";
arr[9]="Jim";

for (var i=0; i< arr.length; i++){
    if(arr[i].charAt(0)=="J")
        console.log("Goodbye "+ arr[i]);
    else 
        console.log("Hello "+arr[i]);
}