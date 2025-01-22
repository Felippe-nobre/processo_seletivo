const apiEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const apiMunicipios = (uf) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

async function carregarEstados() {
    const estadoSelect = document.getElementById("estado");
    try {
        const response = await fetch(apiEstados);
        const estados = await response.json();
        estados.sort((a,b) => a.nome.localeCompare(b.nome));
        estados.forEach(estado => {
            const option = document.createElement("option");
          option.value = estado.sigla;
          option.textContent = `${estado.nome} (${estado.sigla})`;
          estadoSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao carregar estados:", error);
    }
}

async function preencherMunicipios() {
    const estadoSelect = document.getElementById("estado");
    const municipioSelect = document.getElementById("municipio");

    municipioSelect.innerHTML = "<option value='' disabled selected>Selecione um município</option>";

    const uf = estadoSelect.value;
    if (!uf) return;

    try {
      const response = await fetch(apiMunicipios(uf));
      const municipios = await response.json();

      municipios.forEach((municipio) => {
        const option = document.createElement("option");
        option.value = municipio.nome;
        option.textContent = municipio.nome;
        municipioSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Erro ao carregar municípios:", error);
    }
  }

  carregarEstados();