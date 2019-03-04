/**
 *
 * Fonction JavaScript pour interagir avec le panier
 */

	function majPanier(idArticle, quantiteArticle, action) {
		var xhr;
		xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {

			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					//alert('callback');
					var monObjetJSON = JSON.parse(xhr.responseText);
					
					if(monObjetJSON.idArticle != 0) {
						//alert('update');
						
					var idArticle = monObjetJSON.idArticle;
					var quantiteArticle = monObjetJSON.quantiteArticle;
					var prixUnitaireArticle = monObjetJSON.prixUnitaireArticle;

					majLigne(idArticle, quantiteArticle, prixUnitaireArticle);
					}
					
					var quantitePanier = monObjetJSON.quantitePanier;
					var montantPanier = monObjetJSON.montantPanier;
					
//					alert(" Etat du panier"+quantitePanier + " " + montantPanier);
					
					if(quantitePanier  == 0) {
					var text = "Votre panier est vide";
					
					var ligne = document.getElementById(idArticle);
					ligne.parentNode.removeChild(ligne);
					} else {
					var text = "Votre panier contient "+quantitePanier + " article(s) pour " + montantPanier + "€";
				}
					
					document.getElementById("panier").innerHTML =text; 
				}
			}
		};
		//alert("id=" +idArticle + " quantite " + quantiteArticle + " action " + action, true);
		xhr.open("GET", "panierControllerAjax?id=" + idArticle + "&quantite="
				+ quantiteArticle + "&action=" + action, true);
		xhr.send(null);
	}

	function supprimerUn(idArticle) {
		majPanier(idArticle, -1, "modifier");
	}

	function ajouterUn(idArticle) {
		majPanier(idArticle, 1, "modifier");
	}

	function majLigne(idArticle, quantiteArticle) {
		var tdQuantite = document.getElementById("quantite" + idArticle);
		var tdPrixUnitaire = document
				.getElementById("prixUnitaire" + idArticle);
		var tdPrixTotal = document.getElementById("prixTotal" + idArticle);

		tdQuantite.innerHTML = quantiteArticle;
		tdPrixTotal.innerHTML = new Intl.NumberFormat("fr-FR").format(quantiteArticle * tdPrixUnitaire.innerHTML);
		//new Intl.NumberFormat("fr-FR, {style: "currency", currency: "EUR"}).format(
	}
	
	function supprimerLigne(idArticle) {
		var ligne = document.getElementById(idArticle);
		
		majPanier(idArticle, 0, "supprimer");
		ligne.parentNode.removeChild(ligne)
	}
	
