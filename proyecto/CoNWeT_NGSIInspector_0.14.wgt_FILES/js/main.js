
(function () {
    var getEntityInfo = function getEntityInfo(connection) {
        var entityList = [
            {type: 'Sensor', id: $("#test-inp").val()},
        ]
        connection.query(entityList, null, {

           onSuccess: function(response) {
               $("#entity-info").text(JSON.stringify(response));
           }

        });
    }


    $(document).ready(function () {
        console.log("----stating----")
        var connection = new NGSI.Connection('http://orion.lab.fi-ware.eu:10026');
        $("#test-btn").click(function () {
            getEntityInfo(connection);
        });
    });
})();
