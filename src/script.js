const estados = {
    "SP": ["São Paulo", "Campinas", "Santos"],
    "RJ": ["Rio de Janeiro", "Niterói", "Cabo Frio"],
    "MG": ["Belo Horizonte", "Uberlândia", "Juiz de Fora"]
};


function preencherMunicipios() {
    const estadoSelect = document.getElementById("estado");
    const municipioSelect = document.getElementById("municipio");

    
    municipioSelect.innerHTML = "<option>Selecione um município</option>";

    
    const municipios = estados[estadoSelect.value] || [];

   
    municipios.forEach(municipio => {
        const option = document.createElement("option");
        option.value = municipio;
        option.textContent = municipio;
        municipioSelect.appendChild(option);
    });
}