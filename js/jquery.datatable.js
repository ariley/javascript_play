var dataSet = [
    ['bsoto','50','56','40','30','28','35','44','90','55','35','29','15' ],
    ['ariley','50','56','40','30','50','50','50','50','50','50','50','50'],
    ['jthomas','50','56','40','30','50','50','50','50','50','50','50','50'],
    ['jeff','50','56','40','30','50','50','50','50','50','50','50','50'],
    ['kiera','50','56','40','30','50','50','50','50','50','50','50','50'],
    ['whomever','50','56','40','30','50','50','50','50','50','50','50','50'],
];
 
$(document).ready(function() {
    $('#demo').html( '<table cellpadding="0" cellspacing="0" border="0" class="display dataTable" id="example"></table>' );
 
    $('#example').dataTable( {
        "data": dataSet,
        "columns": [
            { "title": "Name" },
            { "title": "01" },
            { "title": "02" },
            { "title": "03" },
            { "title": "04" },
            { "title": "05" },
            { "title": "06" },
            { "title": "07" },
            { "title": "08" },
            { "title": "09" },
            { "title": "10" },
            { "title": "11" },
            { "title": "12" }
        ]
    } );   
} );
