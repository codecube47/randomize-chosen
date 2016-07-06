
# randomize-chosen
Randomize selector for chosen.js plugin

### Usage

#####Html select

     <select id="brands"  data-placeholder="Choose a brand..." style="width:350px;" multiple class="chosen-select">
       <option value="volvo">Volvo</option>
       <option value="saab">Saab</option>
       <option value="mercedes">Mercedes</option>
       <option value="audi">Audi</option>
     </select>
     
#####Initialize choosen 

     $(".chosen-select").chosen(); 
     
#####Randomize by 2

     <button id="randomize" > Randomize by 2 </button>

     $("#randomize").click( function(){
     
          $("#brands").randomize({
            item_count:2
          })
          
     }) 
     

### Full example

    <!doctype html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>Randomize Chosen: A jQuery Plugin by Nilanga saluwadana</title>
            <link rel="stylesheet" href="chosen.css">
          </head>
        <body>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" type="text/javascript"></script>
          <script src="chosen.jquery.js" type="text/javascript"></script>
          <script src="randomize_chosen.js" type="text/javascript"></script>
            
          <select id="brands"  data-placeholder="Choose a brand..." style="width:350px;" multiple class="chosen-select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          
          <button id="randomize" > Randomize by 2 </button>
          
          <script type="text/javascript">
          
           $(document).ready(function(){
          
            $(".chosen-select").chosen(); 
          
            $("#randomize").click( function(){
                $("#brands").randomize({
                      item_count:2
                })
            }) 
          
           })
          
          </script>

      </body>
     </html>

# About chosen plugin

 Chosen is a library for making long, unwieldy select boxes more user friendly.
 
- jQuery support: 1.4+

  For **documentation**, usage, and examples, see:
  http://harvesthq.github.io/chosen/
  
  For **downloads**, see:
  https://github.com/harvesthq/chosen/releases/


