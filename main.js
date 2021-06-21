var guest_array = [];

function submit(){
    var guest_name = document.getElementById("guestname").value;
  
    guest_array.push(guest_name);

    document.getElementById("sort").style.display="inline-block";


}

function sort(){
    guest_array.sort();

    document.getElementById("sort").style.display="inline-block";

    document.getElementById("sorted_div").innerHTML=guest_array;

}

function show(){
    document.getElementById("result").innerHTML=guest_array;

    document.getElementById("show").style.display="inline-block";
}