  var resultAPI = document.getElementById("resultAPI");
  let inputs = document.querySelectorAll('input');
  // Sur clic sur le bouton
    document.getElementById("myBtn").addEventListener("click", function(e) 
    {
        // Message d'attente
        resultAPI.innerHTML = "Calculs en cours...";
        // Récupération des élèment et suppression des espaces
        item = document.getElementById("item").value.replace(/\s+/g, "");
        
        // Définition du endPoint
        if(item != 0)
        {
        endPoint = "https://eldenring.fanapis.com/api/items?name=" + encodeURI(item);
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
            if ( Object.values(objet)[i] !== null ) {
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