var Command = {}; //literal object
var output = [];
var cmdStory = [];
var i = 0;

// fix cdata issue
Command.cdata = function(string)
{
    slim = string.replace(/\s/g,'')
    amp = slim.replace(/&amp;/g, '&');
    lt = amp.replace(/&lt;/g, '<');
    gt = lt.replace(/&gt;/g, '>');
    quot = gt.replace(/&quot;/g, '"');
    esp = quot.replace(/&esp;/g, ' '); //fix temporary the php str_replace() issue

    return esp;
}

/*
* Method using ajax which allowed us to post our commands
*/
Command.request = function(command)
{
    $.ajax({
        type : 'POST',
        url : '_ajax/command.php',
        data: {
            isOn: true,
            command: command
        },
        success : function(response)
        {
            entry = Command.entry.val();
            Command.entry.val('');

            var cmd = entry.split(' ');

            //switch to debug console output
            if(cmd[0] == "debug"){
                output.push(`
                <div class="card-body" id="padding">
                    <p class="card-text float-left">
                        ${command}
                    </p>
                `);

                $('.debug').html(response);
                $('.msg-group').html(output);
                $('.msg-group').animate({ scrollTop: 9999*9999 /* Temporary Solution */ }, 'fast');
            }
            else //standard command 
            {
                output.push(response);

                $('.msg-group').html(output);
                $('.msg-group').animate({ scrollTop: 9999*9999 /* Temporary Solution */ }, 'fast');
            }
        }
    })
};

/*
* Prepare command with textarea content
*/
Command.vim = function(content, refKey, refValue) {
    $.ajax({
        type : 'POST',
        url : '_ajax/command.php',
        data: {
            isTxt: true,
            command: "vim" + " " + content + " " + refKey + " " + refValue
        },
        success : function(response){
            $('.msg-group').replaceWith('<div class="msg-group"></div>');
            $('.input-group .form-control').focus();
            output.push(response);

            $('.msg-group').html(output);
            $('.msg-group').animate({ scrollTop: 9999*9999 /* Temporary Solution */ }, 'fast');
        }
    });
}

// event listers and executions
Command.entry = $('.input-group .form-control');
Command.entry.bind('keydown',function(e){
    thisValue = $(this).val();
    splitValue = thisValue.split(' ');

    // up/down story commands
    if(e.keyCode == 38){
        e.preventDefault();
        if( 1 <= i ){
            i--;
            Command.entry.val(cmdStory[i]);
        }
    }
    else if(e.keyCode == 40){
        e.preventDefault();
        if(cmdStory[i]){
            i++;
            Command.entry.val(cmdStory[i]);
        }
    }

    if(e.keyCode == 13 && thisValue != ''){
        e.preventDefault();
        cmdStory.push(thisValue);
        i = cmdStory.length;

        if(splitValue[0] == 'clear'){
            output = [];
            $('.msg-group').html(output);
            Command.entry.val('');
            // Command.request(); //Leave the welcome message when clear
        }
        
        // switch to textarea mode
        else if(splitValue[0] == 'vim') {
            $('.msg-group').replaceWith('<textarea id="vim" class="msg-group" placeholder="<Shift + Enter> to save OR <Ctrl + Enter> to cancel." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>');
            $('#vim').focus();
            $("#vim").css("background-color", "#152238");
            $("#vim").css('color', 'white');
            $("#vim").css("resize",'none');
            $("#vim").val('');
            Command.entry.val('');

            // fetch content using a key/value reference
            $.ajax({
                type : 'POST',
                url : '_ajax/command.php',
                data: {
                    isFetch: true,
                    command: "fetch content files " + splitValue[1] + " " + splitValue[2]
                },
                success : function(response)
                {
                    $("#vim").val(Command.cdata(response));  
                    console.log(response);
                }
            });

            // listen to our textarea
            $('.msg-group').bind('keydown',function(e){
                // save the content
                if(e.keyCode == 13 && e.shiftKey == true){
                    var content = $(this).val();

                    Command.vim(content.replace(/\s/g,'&esp;'), splitValue[1], splitValue[2]);
                    Command.entry.val('');
                    $('.msg-group').html(output);
                }
                // cancel textarea
                else if(e.keyCode == 13 && e.ctrlKey == true){
                    $('.msg-group').replaceWith('<div class="msg-group"></div>');
                    $('.input-group .form-control').focus();

                    $('.msg-group').html(output);
                    $('.msg-group').animate({ scrollTop: 9999*9999 /* Temporary Solution */ }, 'fast');
                }
            });

        } else {
            // Standard command
            Command.request(thisValue);
        }
    }
});
//init
Command.request();
