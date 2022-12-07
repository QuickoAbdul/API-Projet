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

    function reponseExplore(objet) 
    {
        let contenu;
        contenu = '<ul>';
        for (let i = 0 ; i < Object.keys(objet).length ; i++ ) 
        {
            if ( Object.values(objet)[i] !== null ) 
            {
                contenu += '<li>' + Object.keys(objet)[i] + ' : ';
                if ( typeof Object.values(objet)[i] === 'object' ) 
                {
                    contenu += reponseExplore(Object.values(objet)[i]);
                } 
                else 
                {
                    contenu += Object.values(objet)[i];
                }
                contenu += '</li>';
            }
        }
                contenu += '</ul>';
                return contenu;
    }
// Il faut réparer cette fonction la en s'inspirant des autres, 