// Name : Harsh Patel
// Student ID : 100849927
// Date : 25 - Feb -2023

console.log("JS script wired up");


let withoutErrors;

function validationData(id,value)
{
    if((id == 'form3Example1cg') && value.length <=1)
    {}
    else if((id = "form3Example13cg"))
    {}
    else if((id = "form3Example14cg"))
    {}
    else if((id = "form3Example4cdg"))
    {}

}

// Validation for Name
$('#form3Example1cg').on('input', function()
{
    if( $(this).val().length <= 1)
    {
        $("#errorMessage").show();
        $('#errorMessage').text("First Name should be minimum 2 characters length ");
        $("#submit-register").attr("disabled",true);
        $("#submit-register").addClass( "submit-register" );
    } 
    else
    {
        $("#submit-register").removeAttr("disabled");
        $("#submit-register").removeClass( "disabled-btn");
        $("#errorMessage").hide();
    }   
});

// Validation for Email
$('#form3Example13cg').on('input', function()
{
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])/;

    if( $(this).val().length >= 8)
    {
          $("#errorMessage").hide();
          if(mailformat.test($(this).val()))
          {
             $("#errorMessage").hide();
             $('#errorMessage').text(" ");    
          }
          else
          {
             $("#errorMessage").show();
             $('#errorMessage').text("Email address is invalid,Please try agin!!!");   
          }    
    }  
    else
    {
        $("#errorMessage").show();
        $('#errorMessage').text("Email should be minimum 8 characters ");
    }    
});

//Validation for Password
$('#form3Example14cg').on('input', function()
{
    if( $(this).val().length <= 6)
    {
      $("#errorMessage").show();
      $('#errorMessage').text("Password should be minimum 6 characters");
      $("#submit-register").attr("disabled", true);
      $("#submit-register" ).addClass( "disabled-btn" );
    }
    else
    {
      $("#submit-register").removeAttr("disabled");
      $("#submit-register").removeClass( "disabled-btn");
      $("#errorMessage").hide();
    }
});

// Validation for confirm Password
$('#form3Example14cg').on('input', function()
{
    if( $(this).val() != $('#form3Example14cg').val() )
    {
      $("#errorMessage").show();
      $('#errorMessage').text("Confirm Passwords isn't match");
      $("#submit-register").attr("disabled", true);
      $("#submit-register" ).addClass( "disabled-btn" );
    }
    else
    {
      $("#submit-register").removeAttr("disabled");
      $("#submit-register").removeClass( "disabled-btn");
      $("#errorMessage").hide();
    }
});

$('#submit-register').click((e) => {
    e.preventDefault();
    
    let user = new User($('#form3Example1cg').val(),$('#form3Example13cg').val(),$('form3Example14cg').val());
    console.log(user);
 });
