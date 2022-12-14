  var resultAPI = document.getElementById("resultAPI");
  let inputs = document.querySelectorAll('input');
  // Sur clic sur le bouton
    document.getElementById("myBtn").addEventListener("click", function(e) 
    {
        // Message d'attente
        resultAPI.innerHTML = "Calculs en cours...";
        // Récupération des élèment et suppression des espaces
        // Définition du endPoint
        if(document.getElementById("item"))
        {
            item = document.getElementById("item").value.replace(/\s+/g, "");
            if(item != 0)
            {
            endPoint = "https://eldenring.fanapis.com/api/items?name=" + encodeURI(item);
            }
        }
        
        if(document.getElementById("ammos"))
        {
            ammos = document.getElementById("ammos").value.replace(/\s+/g, "");
            if(ammos != 0)
            {
            endPoint = "https://eldenring.fanapis.com/api/ammos?name=" + encodeURI(ammos);
            }
        }
        if(document.getElementById("armors"))
        {
            armors = document.getElementById("armors").value.replace(/\s+/g, "");
            if(armors != 0)
            {
            endPoint = "https://eldenring.fanapis.com/api/armors?name=" + encodeURI(armors);
            }
        }
        if(document.getElementById("bosses"))
        {
            bosses = document.getElementById("bosses").value.replace(/\s+/g, "");
            if(bosses != 0)
            {
            endPoint = "https://eldenring.fanapis.com/api/bosses?name=" + encodeURI(bosses);
            }
        }
        if(document.getElementById("creatures"))
        {
            creatures = document.getElementById("creatures").value.replace(/\s+/g, "");
            if(creatures != 0)
            {
            endPoint = "https://eldenring.fanapis.com/api/creatures?name=" + encodeURI(creatures);
            }
        }
        if(document.getElementById("locations"))
        {
            locations = document.getElementById("locations").value.replace(/\s+/g, "");
            if(locations != 0)
            {
            endPoint = "https://eldenring.fanapis.com/api/locations?name=" + encodeURI(locations);
            }
        }
        if(document.getElementById("weapons"))
        {
            weapons = document.getElementById("weapons").value.replace(/\s+/g, "");
            if(weapons != 0)
            {
            endPoint = "https://eldenring.fanapis.com/api/weapons?name=" + encodeURI(weapons);
            }
        }
        

        // Appel AJAX de l’API
        ajaxAPI(endPoint, "GET", function (reponse) 
        {
        resultAPI.innerHTML = reponseExplore(reponse);
        });
        inputs.forEach(input => input.value = '');
    });


    function ajaxAPI(url, methode, callback) 
    {
        let promise = fetch(url, {
        method: methode,
        }).then((resp) => resp.json()).then(function(data) {callback(data);
        }).catch(function(error) {console.error(error + " " + url);
        });
    }

    function reponseExplore(objet) {
        let contenu;
        contenu = '<div class="tbcontent"><table class="table table-dark">';
      
        // Récupérer les ce qui se trouve dans le DATA['...']
        let data = objet.data;
      
        // Récupération sous forme de tableau (colonnes qu'on veut avoir)
        contenu += '<tr>';
        contenu += '<th>Nom</th>';
        contenu += '<th>Image</th>';
        contenu += '<th>Description</th>';
        contenu += '</tr >' ;
      
        // Loop entre les datas et création de table entre chaque item
        for (let i = 0; i < data.length; i++) {
          let name = data[i].name;
          let image = data[i].image;
          let description = data[i].description;
          contenu += '<tr>';
          contenu += '<td >' + name + '</td>';
          contenu += '<td class="text-center"><img src="' + image + '" class="img-fluid"></td>';
          contenu += '<td>' + description + '</td>';
          contenu += '</tr>';
        }

        contenu += '</table></div>';
        return contenu;
      }
      
// Il faut réparer cette fonction la en s'inspirant des autres, 