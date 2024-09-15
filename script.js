document.addEventListener('DOMContentLoaded', function () {
    // Referências para botões e menus
    const fundamentalItSkillsButton = document.getElementById('fundamental-it-skills-btn');
    const fundamentalItSkillsMenu = document.getElementById('fundamental-it-skills-menu');

    const computerNetworksButton = document.getElementById('computer-networks-btn');
    const computerNetworksMenu = document.getElementById('computer-networks-menu');

    const operatingSystemsButton = document.getElementById('operating-systems-btn');
    const operatingSystemsMenu = document.getElementById('operating-systems-menu');

    const VirtualizationButton = document.getElementById('Virtualização-btn');
    const VirtualizationMenu = document.getElementById('Virtualization-menu');

    const SecurityKnowledgeButton = document.getElementById('security-knowledge-btn');
    const SecurityKnowledgeMenu = document.getElementById('Security_knowledge-menu');

    const CloudSkillsButton = document.getElementById('cloud-skills-btn');
    const CloudSkillsMenu = document.getElementById('cloud-skills-menu');

    const ProgrammingSkillsButton = document.getElementById('programming-skills-btn');
    const ProgrammingSkillsMenu = document.getElementById('programming-skills-menu');

    const DistrosToolsButton = document.getElementById('distros-tools-btn');
    const DistrosToolsMenu = document.getElementById('distros-tools-menu');


    let menuFixo = false; // Indica se algum menu está fixo após o clique duplo

    // Função para mostrar/ocultar menu
    function toggleMenu(menu) {
        // Esconde todos os menus antes de exibir o novo
        document.querySelectorAll('.menu').forEach(m => m.classList.remove('visible'));

        // Exibe o menu clicado
        menu.classList.toggle('visible');
    }

    // Função para fixar menu ao clicar duas vezes
    function fixarMenu(menu) {
        menu.classList.add('visible');
        menuFixo = true; // Define o menu como fixo
    }

    // Eventos para os botões de tópicos - mostrar/ocultar menu ao clicar
    fundamentalItSkillsButton.addEventListener('click', function () {
        if (!menuFixo) toggleMenu(fundamentalItSkillsMenu);
    });

    computerNetworksButton.addEventListener('click', function () {
        if (!menuFixo) toggleMenu(computerNetworksMenu);
    });

    operatingSystemsButton.addEventListener('click', function () {
        if (!menuFixo) toggleMenu(operatingSystemsMenu);
    });

    VirtualizationButton.addEventListener('click', function () {
        if (!menuFixo) toggleMenu(VirtualizationMenu);
    });

    SecurityKnowledgeButton.addEventListener('click', function () {
        if (!menuFixo) toggleMenu(SecurityKnowledgeMenu);
    });

    CloudSkillsButton.addEventListener('click', function () {
        if (!menuFixo) toggleMenu(CloudSkillsMenu);
    });

    ProgrammingSkillsButton.addEventListener('click', function () {
        if (!menuFixo) toggleMenu(ProgrammingSkillsMenu);
    });

    DistrosToolsButton.addEventListener('click', function () {
        if (!menuFixo) toggleMenu(DistrosToolsMenu);
    });


    // Eventos globais para esconder menus ao clicar fora deles
    document.addEventListener('click', function (event) {
        const isMenu = event.target.closest('.menu') !== null;
        const isButton = event.target.classList.contains('topic-button');

        // Se não for um clique em menu ou botão e nenhum menu estiver fixo, esconder menus
        if (!isMenu && !isButton && !menuFixo) {
            document.querySelectorAll('.menu').forEach(menu => menu.classList.remove('visible'));
        }
    });
});
