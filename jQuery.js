$(document).ready(function(){           
    $("#sb").click(function(){       
 var contentTypeRequest = $.ajax({  
      url: 'http://localhost:3000/proxy/?url=http://130.206.83.193:1026/NGSI10/updateContext',  
      data: '<?xml version="1.0" encoding="UTF-8"?><updateContextRequest><contextElementList><contextElement><entityId type="Room" isPattern="false"><id>Room1</id></entityId><contextAttributeList><contextAttribute><name>temperature</name><type>centigrade</type><contextValue>23</contextValue></contextAttribute><contextAttribute><name>pressure</name><type>mmHg</type><contextValue>720</contextValue></contextAttribute></contextAttributeList></contextElement></contextElementList><updateAction>APPEND</updateAction></updateContextRequest>',  
      type: 'POST',  
      dataType: 'text',  
      contentType: 'application/xml',
      crossDomain: true,  
      headers: {'Content-Type':'application/xml','Accept':'application/xml','X-Requested-With': 'XMLHttpRequest', 'X-Test-Header' : 'test-value','X-Auth-Token' : 'UnZUgDDEFmd4jwaktwdesspINrBfgWwQaMn7PahtQNh8AreikRkH346XIeCMxB-IJ8FJBRD4UUUyXkRz0qVWWA'}  
      }).done(function(xml, textStatus, XHR){
          
           console.log(xml);
   
           var temperature = new Array();  
           var pressure = new Array();  
           var i = 0;       
           var len = $(xml).find("contextAttribute").children().size();  
           $(xml).find('contextAttribute').each(function(){  
                     if ($(this).find('name').text() == "temperature")  
                     {   
                          temperature[i] = $(this).find('type').text();   
                     }  
                     if ($(this).find('name').text() == "pressure")  
                     {   
                          pressure[i] = $(this).find('type').text();   
                     }  
                     i=i+1;
                                                                  });  
           for (var j=0; j<i; j++){                 
                $("#message_ajax").html("<div class='successMessage'>" + "Temperature: :" + temperature[j] + ", Pressure:" + pressure[j] +"</div>");
           }
                      
      }



);                 
      contentTypeRequest.fail(function(XHR, textStatus){     
           $("#message_ajax").html("<div class='successMessage'>DEBUG :  Ajax request failed... (" + textStatus + ' - ' + XHR.responseText + ").</div>" );  
      });  
      contentTypeRequest.always(function(XHR, textStatus){       });  
    });
    });

