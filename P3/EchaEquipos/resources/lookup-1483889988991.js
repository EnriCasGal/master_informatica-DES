(function(window, undefined) {
  var dictionary = {
    "529eeadb-2880-45f7-bc54-e7d9adf75557": "Logros",
    "f10250e8-3764-4f9b-9f4a-a28a0b829aca": "NuevaVotacion",
    "34c24f03-0f22-48c6-973f-782952e5f9a6": "NuevaVotacionDesdeListaHora",
    "b62817a0-2cd9-466b-ac71-1a28bec94dd1": "NuevaVotacionDesdeLista",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home-noID",
    "b56199d7-191b-42ec-baac-6c60069ad4c9": "PartidoSinEquiposAsistentes",
    "af7f0993-878d-4891-a9cf-0b3a0bce74d0": "VotacionTerminada",
    "7f7e7312-d45a-4f59-91c3-1b254be802bd": "PartidoApuntarseInfo",
    "fd16302d-25f8-47d9-9e36-3ce99c0000a5": "AnadirResultado",
    "d4d541b3-b2e0-4779-98d2-7faf8972f1ca": "Avisos",
    "1d95e212-f9bb-4e93-a844-4e1ec7f1a2c2": "PartidoDesapuntarseAsistentes",
    "3e027060-dfa5-4d91-b617-8a4bf48a51c7": "CrearPartido",
    "44b9da13-4ce3-414a-a16e-77697efa776c": "CrearPartidoDesdeLista",
    "ee16b0ad-bfcf-4271-ac12-50f2ac30ae3b": "AdminPeña",
    "20fc2f51-0fbf-46ec-a7dc-ea8ac983b92b": "PartidoConEquiposInfo",
    "f95af797-3e30-4623-b282-80429f3d3061": "VotacionPendienteVotar",
    "12d75f1d-4481-4b0c-9b99-f594e63a7d6c": "Invitaciones",
    "beeb015d-6902-47dd-8496-b38e83db9937": "PartidoConEquiposEquipos",
    "42fb98f4-0f90-40fe-b2a7-3bd3a6f9088f": "PartidoApuntarseAsistentes",
    "395ca0b7-f4af-4e91-baf7-c3ca42c7693d": "PartidoTerminadoConResultado",
    "c85db3ab-7d29-4536-a24e-e1ba6f9a2749": "NuevaVotacionHora",
    "913e207d-ada6-4e74-929d-e84a56e04d46": "InvitarUsuario",
    "920d78c3-02a0-43c7-ab52-f4b8f8faf4d6": "PartidosProximos",
    "f7eeaad8-9aef-4570-960d-33d3f7d2fce6": "IniciarSesion",
    "5fcd9cfc-5170-4764-85fc-eb1b9f5d66dd": "NuevaVotacionFecha",
    "7c23f529-d487-42b3-926a-dd3502aa38f6": "AnadirDeuda",
    "18aa3415-845f-4ded-a861-88050e0b1a88": "AnadirResultadoJugador",
    "07162d54-4e05-44be-9063-98af1219cc0c": "ListaVotacionesTerminadas",
    "c8e7c4a7-dd50-4411-8809-44918e600bda": "NuevaVotacionDesdeListaFecha",
    "e8c6ec4a-c94e-43b9-8b0d-bd0ad243ea51": "Navbar",
    "d10f1752-5364-4f53-8409-0f4d2641f2b7": "CrearPartidoDesdeListaFecha",
    "3e020979-b995-404e-900c-8d606ee98a0d": "CrearPartidoDesdeListaHora",
    "c2222065-6538-4687-a134-7f85fecdffd8": "PartidoSinEquiposInfo",
    "7966c833-e41f-40c6-acf8-ef87aef601e7": "ModificarUsuario",
    "cd4e462a-24c9-4e8c-830c-71e82a9d38d6": "EliminarUsuario",
    "975434eb-d61c-4413-a7d9-9d0ddf531d51": "CrearPeñaCalendar",
    "c19affa0-be43-4833-892a-61b27a9fbdce": "CrearPartidoFecha",
    "2b55bc7e-9402-436a-9a36-10756d1b2360": "CrearPartidoHora",
    "d6624a30-8287-4ea7-a4a3-57e299a4349b": "EliminarDeuda",
    "dd7b47e5-e1da-4989-b8cc-cb1f2e97ca84": "PartidoDesapuntarseInfo",
    "21e438b9-5fd3-4df6-8239-bebf1d6f5cbe": "CrearPeña",
    "fb07c004-1da1-46d9-afee-b217b2d9ddcb": "Estadísticas",
    "5088445f-8f17-4dda-ac68-b5935b6f47d8": "Registrarse",
    "77448af5-fdc4-4e1c-9564-158f8eba8dd4": "AnadirUsuario",
    "80197ee6-e63c-49c5-8c79-23483d779c2b": "ListaVotacionesPendientes",
    "fc628b76-06cc-4b9f-b26f-bc3833e81f4c": "PartidosTerminados",
    "5bbfce6c-ddf9-449f-b8cf-04a51005c791": "PartidosPendientes",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);