let musicas = [
    {titulo:'Hey You', artista:'Bachman Turner Overdrive ',src:'music/Bachman_Turner_Overdrive - Hey You.mp3', img:'img/Bachman_Turner_Overdrive - Hey You.jpg'},
    {titulo:'O Enxofre e a Cachaça', artista:'Hillbilly Rawhide',src:'music/Hillbilly_Rawhide - O_Enxofre_e_a_Cachaça.mp3', img:'img/Hillbilly_Rawhide - O_Enxofre_e_a_Cachaça.jpg'},
    {titulo:'Estrelas Testemunhas Inválidas', artista:'ANO LUZ ',src:'music/ANO_LUZ - Estrelas Testemunhas Inválidas.mp3', img:'img/mqdefault.jpg'},
    {titulo:'The bard`s song', artista:'Blind guardian ',src:'music/Blind guardian - The bard`s song.mp3', img:'img/Blind guardian - The bard`s song.jpg'},
    {titulo:'Tempo de Pipa', artista:'Cícero',src:'music/Cícero - Tempo de Pipa.mp3', img:'Cícero - Tempo de Pipa.jpg'},
    {titulo:'Agora o Meu Coração é Um Lixeiro azul escroto', artista:'Cidade Dormitório',src:'music/Cidade_Dormitório - Agora_o_Meu_Coração_é_Um_Lixei.mp3', img:'img/Cidade_Dormitório - Agora_o_Meu_Coração_é_Um_Lixei.jpg'},
    {titulo:'as ovelhas sao iguais', artista:'Confraria da costa',src:'music/Confraria_da_Costa - As_Ovelhas_São_Iguais.mp3', img:'img/Confraria da costa - as ovelhas sao iguais.jpg'},
    {titulo:'Caldeirão', artista:'Eldhrimnir',src:'music/Eldhrimnir-Caldeirão.mp3', img:'img/Eldhrimnir-Caldeirão.jpg'},
    {titulo:'A Herança', artista:'Fabulous Bandits',src:'music/Fabulous Bandits - A Herança.mp3', img:'img/Fabulous Bandits - A Herança.jpg'},
    {titulo:'Magia Negra', artista:'Harppia',src:'music/Harppia_Magia_Negra.mp3', img:'img/Harppia_Magia_Negra.jpg'},
    {titulo:'Na Calada da Noite', artista:'Harppia',src:'music/Harppia_Na_Calada_da_Noite.mp3', img:'img/Harppia_Na_Calada_da_Noite.jpg'},
    {titulo:'Ennen', artista:'Korpiklaani',src:'music/Korpiklaani - Ennen.mp3', img:'img/Korpiklaani - Ennen.jpg'},
    {titulo:'Dance', artista:'Milky Chance Stolen',src:'music/Milky_Chance_Stolen_Dance.mp3', img:'img/Milky_Chance_Stolen_Dance.jpg'},
    {titulo:'Herói do Futuro', artista:'O Grilo',src:'music/O_Grilo_Herói_do_Futuro.mp3', img:'img/O_Grilo_Herói_do_Futuro.jpg'},
    {titulo:'Sambinha', artista:'O Grilo',src:'music/O_Grilo_Sambinha.mp3', img:'img/O_Grilo_Sambinha.jpg'},
    {titulo:'I don t Speak Human', artista:'Omnia',src:'music/Omnia - I_don_t_Speak_Human.mp3', img:'img/Omnia_I_don_t_Speak_Human.jpg'},
    {titulo:'O Inferno Vai Ter Que Esperar', artista:'Rosa Tattooada',src:'music/Rosa Tattooada - O Inferno Vai Ter Que Esperar.mp3', img:'img/Rosa Tattooada - O Inferno Vai Ter Que Esperar.jpg'},
    {titulo:'Delirio estelar', artista:'Salario Minimo',src:'music/Salario_Minimo_Delirio_estelar.mp3', img:'img/Salario_Minimo_Delirio_estelar.jpg'},
    {titulo:'Deja Vu', artista:'Selvagens à Procura de Lei',src:'music/Selvagens_à_Procura_de_Lei_Deja_Vu.mp3', img:'img/Selvagens_à_Procura_de_Lei_Deja_Vu.jpg'},
    {titulo:'Dois_de_Fevereiro', artista:'Selvagens à Procura de Lei',src:'music/Selvagens_à_Procura_de_Lei_Dois_de_Fevereiro_Áu.mp3', img:'img/Selvagens_à_Procura_de_Lei_Dois_de_Fevereiro_Áu.jpg'},
    {titulo:'Tarde Livre', artista:'Selvagens à Procura de Lei',src:'music/Selvagens_à_Procura_de_Lei_Tarde_Livre', img:'img/Selvagens_à_Procura_de_Lei_Tarde.jpg'},
    {titulo:'Sujeito de Sorte', artista:'Terra Celta',src:'music/Sujeito de Sorte - Terra Celta.mp3', img:'img/Sujeito de Sorte - Terra Celta.jpg'},
    {titulo:'Eu Vou Até Tokyo', artista:'Supla',src:'music/Supla - Eu Vou Até Tokyo.mp3', img:'img/Supla - Eu Vou Até Tokyo.jpg'},
    {titulo:'93', artista:'Terno Rei',src:'music/Terno_Rei_93.mp3', img:'img/Terno_Rei_93.jpg'},
    {titulo:'Dia Lindo', artista:'Terno Rei',src:'music/Terno_Rei_Dia_Lindo.mp3', img:'img/Terno_Rei_Dia_Lindo.jpg'},
    {titulo:'Solidão de Volta', artista:'Terno Rei',src:'music/Terno_Rei_Solidão_de_Volta.mp3', img:'img/Terno_Rei_Solidão_de_Volta.jpg'},
    {titulo:'"DIA DE CAO"', artista:'Terra Celta',src:'music/Terra Celta - DIA DE CAO.mp3', img:'img/Terra Celta - DIA DE CAO.jpg'},
    {titulo:'Irmã do Doctor Robert AO VIVO', artista:'TNT',src:'music/TNT_A_Irmã_do_Doctor_Robert AO VIVO.mp3', img:'img/TNT_A_Irmã_do_Doctor_Robert.jpg'},
    {titulo:'', artista:'',src:'music/', img:'img/'},
    {titulo:'Cobra de Vidro', artista:'Vespas Mandarinas',src:'music/Vespas_Mandarinas_Cobra_de_Vidro.mp3', img:'img/Vespas_Mandarinas_Cobra_de_Vidro.jpg'},
    {titulo:'Santa Sampa', artista:'Vespas Mandarinas',src:'music/Vespas_Mandarinas_Santa_Sampa.mp3', img:'img/Vespas_Mandarinas_Santa_Sampa.jpg'},
    {titulo:'Sasha Grey', artista:'Vespas Mandarinas',src:'Vespas_Mandarinas_Sasha_Grey.mp3', img:'img/Vespas_Mandarinas_Sasha_Grey.jpg'},
];

let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}