function myconverter() {
    var num = document.getElementById("num").value;
    var btn = (num * 0.6213727272727272);

    document.getElementById("p1").innerHTML = + num + " kilometers is approximately " + btn + " miles.";
}