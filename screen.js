$( document ).ready(function() {
 
    // $("button.buttonyes").click(function(event){
    //     alert("Aí sim meu parceiro...");
    // });

    // $("button.buttonno").click(function(event){
    //     alert("Aí não meu guerreiro...")
    // });

    $("button.buttonyes").click(function(event){
        var model = $("span.getModel").val();
        var newName = $("input.modelName").val();
        var newPorpose = $("input.purposeInput").val();
        var newComments = $("textarea").val();
        var body = {
            "metadata":{
                "name": newName,
                "purpose": newPorpose,
                "comments": newComments
            }
        };

        $.ajax({
            type: 'put',
            url: "/models/" + model,
            data: JSON.stringify(body),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                console.log(response);
            }
        });
    });
    
 
});