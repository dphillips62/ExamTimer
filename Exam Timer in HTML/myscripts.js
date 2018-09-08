$(document).ready(function(e) { 

$(function() {
        var scntDiv = $('#p_Exam');
        var i = $('#p_Exam p').size() + 1;
        
        $('#addExam').live('click', function() {
                $('<p><label for="p_scnts">\
                        <input type="text" id="p_Exam" size="20" name="p_Exam_' + i +'" value="" placeholder="Input Value" />\
                        </label> <a href="#" id="remScnt">Remove</a></p>').appendTo(scntDiv);
                i++;
                return false;
        });
        
        $('#remScnt').live('click', function() { 
                if( i > 2 ) {
                        $(this).parents('p').remove();
                        i--;
                }
                return false;
        });
});

});