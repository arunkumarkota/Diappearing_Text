var last;
var output = $('#output');
$('#comment').on('input', function() {
    var n = new Date()
    if (n-last > 5000){
        var element = document.getElementById('comment')
        element.value = ""
    }
    output.text((n - last)/1000 + ' sec');
    last = n;
});

