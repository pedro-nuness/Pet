let products = [];

// Informações dos produtos (imagem, nome, descrição e preço)
let productInfo = [
    //CACHORRO
    [
        //ração
        [
            {
                imageNumber: 1,
                name: "Ração Seca Nutrilus Pro+ Frango & Carne para Cães Adultos",
                description: "Nutrilus Pro+ Cães Adultos é uma ração premium especial, desenvolvida por médicos veterinários, com ingredientes selecionados, sem corantes e sem aromatizantes artificiais, garantindo uma alimentação balanceada mais saborosa e nutritiva. Mais sabor, mais proteína e mais nutrição.<br><br>Garantia de Satisfação: Nutrilus acredita que a satisfação é um comprometimento com a vida do pet, e garantimos você e seu pet satisfeitos ou seu dinheiro de volta..*<br><br>- Proteínas de alta qualidade: favorece o ótimo aproveitamento dos nutrientes para a manutenção da musculatura e condição corporal ideal;<br>- Intestino saudável: com fibras que favorecem uma função intestinal regular;<br>- Redução do odor das fezes: com extrato de yucca, ideal para ambientes internos;<br>- Pelagem macia e brilhante: aporte equilibrado de ácidos graxos essenciais, ômegas 3 e 6, vitaminas e minerais;<br>- Defesa do organismo: enriquecido com DHA que contribui para a redução de inflamações e saúde do coração.<br><br>- Sabor: Frango & Carne<br>- Embalagem: disponível nas versões de 15kg e 20kg<br>- Tamanho médio do grão: 13,5mm<br>- Indicado para: cães adultos de raças médias e grandes",
                price: "204.90"
            },
            {
                imageNumber: 2,
                name: "Ração Seca True para Cães Adultos Raças Médias e Grandes",
                description: "Inspirada no amor que sentimos por eles, a True foi desenvolvida para oferecer a melhor alimentação para os nossos pets.<br><br>- Ração natural feita com ingredientes deliciosos: frango, batata-doce, brócolis, cenoura e arroz integral;<br>- Feita com carne de verdade, sem farinha de vísceras;<br>- Sem transgênicos, sem corantes e sem conservantes artificiais;<br>- Saudável e nutritiva, enriquecida com Natural Complex: composto natural rico em extratos herbais, algas, fibras e prebióticos para reforçar as defesas do organismo;<br><br>- Ingredientes funcionais:<br>- Hexametamosfato de sódio para prevenção de tártaro;<br>- Extrato de yucca para redução do odor das fezes;<br>- Condroitina e glicosamina para saúde das articulações;<br>- Com fibras e prebióticos para a saúde intestinal;<br><br>True Amor de Verdade, Ingredientes de Verdade.<br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição",
                price: "284.90"
            },
            {
                imageNumber: 3,
                name: "Ração Seca Liva Super Premium para Cães Adultos de Raças Pequenas",
                description: "A Liva é uma ração Super Premium que promove uma vida mais saudável para os nossos pets. Existimos para proporcionar nutrição e bem-estar para que eles vivam cada vez mais e melhor.<br><br>- Ração Super Premium para cães adultos de porte pequeno;<br>- Sabor Frango, Arroz, Cenoura e Espinafre;<br>- Alimento rico em nutrientes e proteínas de alta qualidade;<br>- Com ômega 3 e 6, Liva ajuda a manter a pele saudável e uma pelagem brilhante e macia;<br>- A inclusão de fibras e prebióticos selecionados contribui para o bom funcionamento do intestino;<br>- Presença de aminoácidos essenciais que promovem a manutenção das funções vitais;<br>- Com extrato de yucca, zeolita, fibras e prebióticos reduz o odor e volume das fezes;<br>- Alimento rico em vitaminas e minerais que ajudam a fortalecer o sistema imunológico;<br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "309.90"
            },
            {
                imageNumber: 4,
                name: "Ração Seca Magnus Todo Dia Carne para Cães Adultos",
                description: "- Vitamina E e Selênio Quelato: antioxidantes que atuam no combate aos radicais livres;<br>- Ômegas 3 e 6, biotina, zinco quelato: promovem a beleza e saúde da pele e pelagem;<br>- Receita composta por ingredientes que auxiliam no fluxo e equilíbrio da flora intestinal;<br>- Proteína de alto valor agregado com maior absorção e aproveitamento pelo organismo.",
                price: "144.90"
            },
            {
                imageNumber: 5,
                name: "Ração Premier Pet Formula Cães Adultos Raças Pequenas",
                description: "- Alimento rico em nutrientes, promove a pelagem bonita e pele saudável;<br>- Combinação de ingredientes de alta digestibilidade, fibras especiais e prebiótico;<br>- Rico em proteínas de alta qualidade, equilíbrio ideal de ácidos graxos essenciais;<br>- Saúde e vitalidade com sabor excepcional: ingredientes ricos em vitaminas e minerais que promovem a saúde associada a um sabor irresistível.<br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "329.90"
            },
            {
                imageNumber: 6,
                name: "Ração GranPlus Choice Frango e Carne para Cães Adultos",
                description: "- Manutenção da massa muscular, com fontes nobres de proteína;<br>- Este produto possui satisfação garantida. Saiba mais abaixo na descrição;<br>- Nutrição equilibrada, nível ideal de nutrientes para auxiliar na manutenção da saúde e na formação de fezes firmes;<br>- Ossos e dentes saudáveis, com vitaminas e minerais que auxiliam na manutenção de ossos e dentes saudáveis.",
                price: "194.90"
            },
            {
                imageNumber: 7,
                name: "Ração Premier Golden Formula Cães Filhotes Carne e Arroz",
                description: "- Saúde oral: auxilia na redução da formação de placa bacteriana (tártaro);<br>- Crescimento saudável: feito com DHA e proteína de qualidade elevada;<br>- Intestino saudável: combinação de nutrientes de alta digestibilidade e fibras naturais;<br>- Redução do odor das fezes: seleção de ingredientes especiais que auxiliam na redução do odor das fezes.<br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "175.90"
            },
            {
                imageNumber: 8,
                name: "Ração Premier Pet Formula Cães Adultos Raças Grandes e Gigantes Frango",
                description: "Contém altos níveis de taurina que auxiliam na preservação da função cardíaca;<br>- Possui condroitina e glicosamina que auxiliam na manutenção da saúde das articulações;<br>- Saúde intestinal: através da combinação de ingredientes de alta digestibilidade, fibras especiais e prebiótico.<br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "329.90"
            },
            {
                imageNumber: 9,
                name: "Ração Special Dog Gold Premium Especial Frango e Carne para Cães Adultos",
                description: "- Sabor: Carne e Frango com Batata-Doce;<br>- Não contém corantes;<br>- Com BCAA: fortalecimento e recuperação muscular;<br>- Condroitina: reforço articular;<br>- Ômegas 3 e 6 + Zinco Orgânico: contribui para a proteção da pele e pelos mais bonitos.<br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "211.90"
            },
            {
                imageNumber: 10,
                name: "Ração GranPlus Menu Carne e Arroz para Cães Filhotes",
                description: "- Desenvolvimento da visão e sistema nervoso do filhote, com fonte rica em ômega 3 (DHA);<br>- Proteção para um crescimento saudável, com níveis adequados de nutrientes essenciais para a saúde do filhote;<br>- Ótimo equilíbrio intestinal, com polpa de beterraba e pré-biótico MOS;<br>- Desenvolvimento da massa muscular, com fontes nobres de proteína.<br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "224.90"
            },
            {
                imageNumber: 11,
                name: "Ração Fórmula Natural Life Super Premium para Cães Adultos Raças Mini e Pequena",
                description: "- Ômega 3 e 6: Garantia de pele, pelos e articulações saudáveis;<br>- Auxilia no crescimento, nas defesas, equilíbrio da flora intestinal;<br>- Maior palatabilidade, alimento completo, equilibrado e nutritivo;<br>- Livre da adição de componentes químicos como: corantes e transgênicos;<br>- Melhora significativa no pelo e pelagem, muito mais brilhantes e sedosos;<br>- Indicado para cães que vivem em ambiente interno (apartamento ou casa);<br>- DHA: Essencial no desenvolvimento do cérebro e do sistema nervoso central;<br>- Condroitina e glucosamina: Substâncias fundamentais para tratamento das articulações;<br>- Vitamina E, vitamina C, selênio e antioxidantes naturais (chá verde, hortelã e alecrim), combatem os radicais livres;<br>- As fibras especiais, prebióticos, probióticos e extrato de yucca, ajudam na formação de fezes mais firmes e com menos odor;<br>- Não possui embalagem fracionada.",
                price: "359.90"
            },
            {
                imageNumber: 12,
                name: "Ração Special Dog Premium Carne para Cães Adultos",
                description: "- Sabor: Carne;<br>- Não contém corantes;<br>- Ômegas 3 e 6 + Zinco Orgânico: combinação contribui para a proteção da pele e pelos mais bonitos;<br>- Enriquecido com vitaminas: o equilíbrio entre os nutrientes é fator determinante para a vitalidade e o bem-estar diário do seu pet;<br>- Extrato de Yucca: redução do odor das fezes. <br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "124.90"
            },
            {
                imageNumber: 13,
                name: "Ração Premier Pet Formula Frango Cães Adultos Raças Médias",
                description: "- Saúde intestinal: através da combinação de ingredientes de alta digestibilidade, fibras especiais e prebiótico;<br>- Pelagem bonita e pele saudável – Rico em proteínas de alta qualidade, equilíbrio ideal de ácidos graxos essenciais - ômegas 3 e 6;<br>- Saúde e vitalidade com sabor excepcional: ingredientes ricos em vitaminas e minerais que promovem a saúde associada a um sabor irresistível. <br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "329.90"
            },
            {
                imageNumber: 14,
                name: "Ração Seca PremieR Pet Golden Seleção Natural para Cães Adultos Mini Bits",
                description: "- Auxilia a redução da formação do tártaro, favorece a pele nutrida e pelagem sedosa;<br>- Intestino saudável: combinação de nutrientes de alta digestibilidade e fibras naturais;<br>- Redução do odor das fezes: seleção de ingredientes especiais que auxiliam na redução do odor das fezes. <br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "144.90"
            },
            {
                imageNumber: 15,
                name: "Ração Royal Canin para Cães Adultos da Raça Shih Tzu",
                description: "- Indicada para cães da raça Shih Tzu adultos (com mais de 10 meses de idade);<br>- Combinação de nutrientes para ótima digestão e bom equilíbrio da flora intestinal;<br>- Estimula a mastigação, favorece a saúde dental e evita o acúmulo de placa bacteriana;<br>- Cuida da saúde da pele e pelagem a partir do ômega 6 e reduz o volume e o odor das fezes.",
                price: "395.90"
            },
            {
                imageNumber: 16,
                name: "Ração Royal Canin Mini Indoor Junior para Cães Filhotes",
                description: "- Palatabilidade reforçada: agrada até o apetites mais exigentes;<br>- Auxilia nas defesas naturais do filhote, graças a um complexo de antioxidantes;<br>- Proporciona ótima digestão e contribui para reduzir o volume e odor das fezes;<br>- Ração super premium indicada para cães de pequeno porte (peso de 1 a 10 kg em idade adulta) que vivem em ambientes internos. <br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "392.90"
            },
            {
                imageNumber: 17,
                name: "Ração Seca Quatree Supreme Frango e Batata Doce Cães Filhotes Raças Médias e Grandes",
                description: "- Alimento balanceado, fórmula livre de corantes e aromatizantes artificiais;<br>- Biotina, zinco e ômega 3 e 6: favorece a pele saudável e pelagem brilhante;<br>- DHA: importante para o desenvolvimento da atividade cognitiva e visão;<br>- Alta palatabilidade: proteínas de valor biológico para a formação da massa muscular;<br>- Rica em antioxidantes, vitaminas C e E, polifenóis de maçã, chá verde, tocoferol e selênio;<br>- Auxilia na saúde intestinal e diminuição do odor das fezes: fibras funcionais naturais, polpa de beterraba, prebióticos (MOS e FOS) e extrato de Yucca.<br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.<br>- Importante: Embalagem antiga possui transgênicos e a embalagem nova não possui.",
                price: "272.90"
            },
            {
                imageNumber: 18,
                name: "Ração Seca PremieR Pet Golden Seleção Natural para Cães Filhotes",
                description: "- Auxilia a redução da formação do tártaro, favorece a pele nutrida e pelagem sedosa;<br>- Intestino saudável: combinação de nutrientes de alta digestibilidade e fibras naturais;<br>- Redução do odor das fezes: seleção de ingredientes especiais que auxiliam na redução do odor das fezes.<br><br>- Este produto possui Satisfação Garantida. Saiba mais abaixo na descrição.",
                price: "184.90"
            },
            {
                imageNumber: 19,
                name: "Ração Royal Canin Medium Adult para Cães Adultos de Raças Médias a partir de 12 Meses de Idade",
                description: "- Defesas Naturais: Ajuda a reforçar as defesas naturais, combatendo o envelhecimento natural do cão graças a um complexo patenteado de antioxidantes.<br>- Peso ótimo: Contribui para manter o peso ideal graças a um teor de energia adaptado.<br>- Alta digestibilidade: Proporciona uma ótima digestão graças a sua formulação exclusiva com proteínas de altíssima qualidade e aporte equilibrado de fibras.<br>- Palatabilidade reforçada: Satisfaz os apetites exigentes graças à sua formulação e uma seleção de aromas exclusivos.",
                price: "479.90"
            },
            {
                imageNumber: 20,
                name: "Ração Seca Pedigree para Cães Filhotes Raças Médias e Grandes",
                description: "- Ração Premium 100% completa e balanceada, feita especialmente para cães filhotes;<br>- Composição livre de corantes artificiais, com fibras naturais para uma ótima digestão;<br>- Receita especial para que seu cachorro cresça seguro com desenvolvimento saudável;<br>- 23 vitaminas e minerais que ajudam o cachorro filhote a se manter forte e saudável;<br>- Com proteína para músculos fortes e ômega 6 para pele e pelo saudáveis do filhote.",
                price: "229.90"
            }
        ],
        //antipulgas
        [
            {
                imageNumber: 1,
                name: "Ração Seca Nutrilus Pro+ Frango & Carne para Cães Adultos",
                description: "Nutrilus Pro+ Cães Adultos é uma ração premium especial, desenvolvida por médicos veterinários, com ingredientes selecionados, sem corantes e sem aromatizantes artificiais, garantindo uma alimentação balanceada mais saborosa e nutritiva. Mais sabor, mais proteína e mais nutrição.<br><br>Garantia de Satisfação: Nutrilus acredita que a satisfação é um comprometimento com a vida do pet, e garantimos você e seu pet satisfeitos ou seu dinheiro de volta..*<br><br>- Proteínas de alta qualidade: favorece o ótimo aproveitamento dos nutrientes para a manutenção da musculatura e condição corporal ideal;<br>- Intestino saudável: com fibras que favorecem uma função intestinal regular;<br>- Redução do odor das fezes: com extrato de yucca, ideal para ambientes internos;<br>- Pelagem macia e brilhante: aporte equilibrado de ácidos graxos essenciais, ômegas 3 e 6, vitaminas e minerais;<br>- Defesa do organismo: enriquecido com DHA que contribui para a redução de inflamações e saúde do coração.<br><br>- Sabor: Frango & Carne<br>- Embalagem: disponível nas versões de 15kg e 20kg<br>- Tamanho médio do grão: 13,5mm<br>- Indicado para: cães adultos de raças médias e grandes",
                price: "204.90"
            },
        ],
        //tapetes 
        [
            {
                imageNumber: 1,
                name: "Tapete Higiênico Baby Pads para Cães",
                price: "99.90"
            },
        
            {
                imageNumber: 2,
                name: "Super Secão Tapete Higiênico para Cachorro",
                price: "79.90"
            },
        
            {
                imageNumber: 3,
                name: "Tapete Higiênico Super Secão Max Citrus Slim para Cães",
                price: "89.90"
            },
        
            {
                imageNumber: 4,
                name: "Tapete Higiênico Super Secão Max para Cães 30 unidades",
                price: "69.90"
            },
        
            {
                imageNumber: 5,
                name: "Tapete Higiênico Super Secão Baby Petix para Cães",
                price: "59.90"
            },
            
            {
                imageNumber: 6,
                name: "Tapete Higiênico Chalesco Premium para Cães",
                price: "39,47"
            },
        
            {
                imageNumber: 7,
                name: "Tapete Higiênico Super Secão Black Slim para Cães",
                price: "49.90"
            },
        
            {
                imageNumber: 8,
                name: "Tapete Higiênico Chalesco Premium Blue para Cães",
                price: "29.90"
            },
        
            {
                imageNumber: 9,
                name: "Tapete Higiênico Petix Super Premium para Cães - 30 Unidades",
                price: "19.90"
            },
        
            {
                imageNumber: 10,
                name: "Tapete Higiênico Zee.Pad Preto para Cães Zee Dog",
                price: "9.90"
            },
        
            {
                imageNumber: 1,
                name: "Ração Seca Nutrilus Pro+ Frango & Carne para Cães Adultos",
                description: "Nutrilus Pro+ Cães Adultos é uma ração premium especial, desenvolvida por médicos veterinários, com ingredientes selecionados, sem corantes e sem aromatizantes artificiais, garantindo uma alimentação balanceada mais saborosa e nutritiva. Mais sabor, mais proteína e mais nutrição.<br><br>Garantia de Satisfação: Nutrilus acredita que a satisfação é um comprometimento com a vida do pet, e garantimos você e seu pet satisfeitos ou seu dinheiro de volta..*<br><br>- Proteínas de alta qualidade: favorece o ótimo aproveitamento dos nutrientes para a manutenção da musculatura e condição corporal ideal;<br>- Intestino saudável: com fibras que favorecem uma função intestinal regular;<br>- Redução do odor das fezes: com extrato de yucca, ideal para ambientes internos;<br>- Pelagem macia e brilhante: aporte equilibrado de ácidos graxos essenciais, ômegas 3 e 6, vitaminas e minerais;<br>- Defesa do organismo: enriquecido com DHA que contribui para a redução de inflamações e saúde do coração.<br><br>- Sabor: Frango & Carne<br>- Embalagem: disponível nas versões de 15kg e 20kg<br>- Tamanho médio do grão: 13,5mm<br>- Indicado para: cães adultos de raças médias e grandes",
                price: "204.90"
            }
        ],
        //medicamentos
        [
        ],
        //casinhas
        [
            {
                imageNumber: 1,
                name: "Casinha Iglu Ecológica Recriar Pet Natural",
                price: "99.90"
            },
        
            {
                imageNumber: 2,
                name: "Casinha Mokoi Pinus",
                price: "99.90"
            },
        
            {
                imageNumber: 3,
                name: "Casinha Barcelona Branco e Vermelho para Cães e Gatos",
                price: "99.90"
            },
        
            {
                imageNumber: 4,
                name: "Casinha Barcelona Preto e Cinza para Cães e Gatos",
                price: "99.90"
            },
        
            {
                imageNumber: 5,
                name: "Casinha Barcelona Preto para Cães e Gatos",
                price: "99.90"
            },
        
            {
                imageNumber: 6,
                name: "Nicho Casinha Branco para Gatos",
                price: "99.90"
            },
        
            {
                imageNumber: 7,
                name: "Casinha Mokoi Criadora Pinus",
                price: "99.90"
            },
        
            {
                imageNumber: 8,
                name: "Toca Home Cat Cinza para Gatos",
                price: "99.90"
            },
            {
                imageNumber: 9,
                name: "Brinquedo Arranhador Casa e Rede Marrom e Bege",
                price: "99.90"
            },
        
            {
                imageNumber: 10,
                name: "Cama Luppet Conforto Iglu 2 em 1 Flamingo",
                price: "99.90"
            },
        
            {
                imageNumber: 11,
                name: "Colchonete Rustic de Lona Camuflado",
                price: "99.90"
            },
        
            {
                imageNumber: 12,
                name: "Cama Luppet Iglu Marinho Acquablock com Estampa Cachorrinho",
                price: "99.90"
            },
        
            {
                imageNumber: 13,
                name: "Casa Furacão Pet de Plástico",
                price: "99.90"
            },
        
            {
                imageNumber: 14,
                name: "Casinha Ecológica Recriar Pet Natural para gato",
                price: "99.90"
            },
        
            {
                imageNumber: 15,
                name: "Nicho Carinha Preto para Gatos",
                price: "99.90"
            },
        
            {
                imageNumber: 16,
                name: "Cama Luppet Conforto Iglu 2 em 1 Super Luxo Impermeável Preta",
                price: "99.90"
            },
        
            {
                imageNumber: 17,
                name: "Cama Luppet Iglu 2 em 1 Vermelha",
                price: "99.90"
            },
        
            {
                imageNumber: 18,
                name: "Capa para Cama Pickorruchos King Gigante",
                price: "99.90"
            },
        
            {
                imageNumber: 19,
                name: "Casa de Madeira Triangular para Cães e Gatos",
                price: "99.90"
            },
        
            {
                imageNumber: 20,
                name: "Casa Durahouse Vermelha para Cães",
                price: "99.90"
            },
        
        ],
        //petiscos
        [
        ]
    ],
    //GATO
    [
        //RAÇÃO SECA
        [
            {
                imageNumber: 1,
                name: "Ração Naturalis Lifebites Gatos Adultos Peru, Frango e Frutas 1,5kg",
                description: "A Ração Naturalis Lifebites Gatos Adultos Peru, Frango e Frutas é um alimento Super Premium feito exclusivamente para os gatos adultos, contém grãos integrais e mix de frutas, vegetais, vitaminas e minerais, dando todo o aporte necessário para uma alimentação saudável e balanceada.<br><br>A Naturalis possui a inovadora partícula de superfoods Lifebites, um blend exclusivo e sustentável de ingredientes que promovem benefícios vitais baseados na nutrição precisa e sustentável, prevenção e fortalecimento da imunidade..*<br><br>- Além da Ração Naturalis Lifebites Gatos Adultos ter o preço especial, ela não contém transgênicos, corantes ou conservantes artificiais. Ajuda a manter um trato urinário saudável e fezes mais firmes, como menor odor e volume.<br>- Embalagem com selo reciclo do bem possui uma tecnologia exclusiva que as torna totalmente recicláveis. É mais qualidade, segurança e respeito ao meio ambiente.<br>- Ingredientes: Farinha de carne de aves (peru), farinha de vísceras de aves, farinha de peixe, óleo de aves, óleo de peixes, grão de sorgo, farinha de mandioca, quirera de arroz, grão de linhaça, glúten de trigo, espinafre desidratado, cenoura, polpa desidratada de beterraba, mamão, maçã, acerola, extrato de mirtilo (Vaccinium myrtillus), arando (cranberry), farinha de ervilha, levedura de cervejaria inativada desidratada, levedura de cana-de-açúcar inativada e desidratada, celulose, biomassa de microalgas (Schizochytrium sp.), cloreto de sódio, cloreto de potássio, extrato de yucca (0,025%), DL-metionina, taurina, cloreto de colina, ácido propiônico, bissulfato de sódio (0,4%), aditivo prebiotico (0,024%), aditivo probiótico (0,1%), cúrcuma, extrato de cenoura preta, hidrolisado de fígado de aves, antioxidante (concentrado de tocoferóis, extrato de alecrim), retinol, tiamina, cianocobalamina, riboflavina, piridoxina, ácido fólico, ácido pantotênico, colecalciferol, biotina, menadiona bissulfito de nicotinamida, niacina (ácido nicotínico), tocoferol, ácido ascórbico, complexo ferro aminoácido, complexo cobre aminoácido, complexo manganês aminoácido, complexo zinco aminoácido, proteinato de selênio, iodato de cálcio. Eventuais Substitutos: Hidrolisado de fígado de suíno, propionato de cálcio, propionato de amônio.<br>- Enriquecimento mínimo por kg:Vitamina A 25.000 U.I., Vitamina B1 35 mg, Vitamina B12 300 mcg, Vitamina B2 35 mg, Vitamina B6 22 mg, Ácido Fólico 10 mg, Ácido Pantotênico 43 mg, Vitamina D3 2.500 U.I., Biotina 0,8 mg, Vitamina K3 1,7 mg, Niacina 110 mg, Vitamina E 600 U.I., Vitamina C 200 mg, Colina 1.360 mg, Metionina 4.000 mg, Taurina 2.000 mg, Cobre 35 mg, Ferro 100 mg, Selênio 0,45 mg, Manganês 50 mg, Zinco 210 mg, Iodo 4 mg. <br>- Sabor: Peru, Frango e Frutas<br>- Embalagem: disponível nas versões de 1.5kg e 7.5kg<br>- Tamanho médio do grão: 13,5mm<br>- Indicado para: gatos adultos",
                price: "107.90"
            },
        ],
        //ANTIPULGAS
        [

        ],
        //AREIA
        [

        ],
        //MEDICAMENTOS
        [

        ],
        //CAIXA DE TRANSPORTE
        [

        ],
        //ARRANHADORES
        [

        ]
    ]
];

// Função para criar objetos a partir de pares de chave-valor
function createProductObject(imageNumber, name, description, price, tipo, categoria) {
    let newName = categoria.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return {
        imagem: `assets/img/produtos/${tipo}/${newName}/${imageNumber}.jpg`,
        //                  produtos\cachorro\caixasdetransporte/
        nome: name,
        descrição: description,
        preço: price
    };
}

function AddToCart(produto) {
    let Cart = JSON.parse(localStorage.getItem('carrinho')) || [];
    const index = Cart.findIndex(item => item.nome === produto.nome);
    if (index > -1) {
        Cart[index].quantidade += 1;
    } else {
        produto.quantidade = 1;
        Cart.push(produto);
    }
    localStorage.setItem('carrinho', JSON.stringify(Cart));
}

function SetCurrentItem(product){
    let item = JSON.parse(localStorage.getItem('item')) || [];
    item = [];
    item.push(product);
    localStorage.setItem('item', JSON.stringify(item));
    window.location.href = 'produto.html'; 
}

function createProductElement(produtos, target) {

    produtos.forEach(produto => {
        // Criando o elemento principal <div class="product">
        var productDiv = document.createElement("div");
        productDiv.classList.add("product");
        

        // Criando o elemento <div class="product_img_button">
        var imgButtonDiv = document.createElement("div");
        imgButtonDiv.classList.add("product_img_button");
       

        var addIcon = document.createElement("span");
        addIcon.classList.add("material-symbols-outlined");
        addIcon.textContent = "add_shopping_cart";

        // Criando o botão <button class="product_add_cart_button">
        var addButton = document.createElement("button");
        addButton.classList.add("product_add_cart_button");
        addButton.addEventListener("click", () => {
            
            AddToCart(produto);
            addIcon.innerHTML = "check";
        
        
        });
    
        // Criando o ícone <span class="material-symbols-outlined">add_shopping_cart</span>
     

        // Adicionando o ícone ao botão
        addButton.appendChild(addIcon);

        // Adicionando o botão à div .product_img_button
        imgButtonDiv.appendChild(addButton);

        // Adicionando a div .product_img_button ao elemento principal
        productDiv.appendChild(imgButtonDiv);

        // Criando o elemento <div class="product_img_div">
        var imgDiv = document.createElement("div");
        imgDiv.classList.add("product_img_div");
        imgDiv.addEventListener("click", () => SetCurrentItem(produto));

        // Criando a imagem <img src="assets/img/bahno&tosa.jpg" class="product_img" alt="Produto 3">
        var img = document.createElement("img");
        img.src = produto.imagem;
        img.classList.add("product_img");
        img.alt = "Produto";

        // Adicionando a imagem à div .product_img_div
        imgDiv.appendChild(img);

        // Adicionando a div .product_img_div ao elemento principal
        productDiv.appendChild(imgDiv);

        // Criando o elemento <div class="product_info">
        var infoDiv = document.createElement("div");
        infoDiv.classList.add("product_info");

        // Criando a descrição do produto <span class="product_description">Brinquedo para Gato</span>
        var descriptionSpan = document.createElement("span");
        descriptionSpan.classList.add("product_description");
        descriptionSpan.textContent = produto.nome;

        // Criando o preço do produto <span class="product_price">R$50</span>
        var priceSpan = document.createElement("span");
        priceSpan.classList.add("product_price");
        priceSpan.textContent = produto.preço;

        // Criando o botão de comprar <button class="product_button">Comprar</button>
        var buyButton = document.createElement("button");
        
        buyButton.classList.add("product_button");
        buyButton.textContent = "Comprar";

        // Criando o ícone do carrinho <span class="material-symbols-outlined">shopping_cart</span>
        var cartIcon = document.createElement("span");
        cartIcon.classList.add("material-symbols-outlined");
        cartIcon.textContent = "shopping_cart";

        // Adicionando o ícone do carrinho ao botão de comprar
        buyButton.insertBefore(cartIcon, buyButton.firstChild);

        // Adicionando a descrição, preço e botão de comprar à div .product_info
        infoDiv.appendChild(descriptionSpan);
        infoDiv.appendChild(priceSpan);
        infoDiv.appendChild(buyButton);

        // Adicionando a div .product_info ao elemento principal
        productDiv.appendChild(infoDiv);

        // Retornando o elemento principal completamente criado
        target.appendChild(productDiv);
    });
}

function InsertProducts( tipo, idx, tipo_nome, categoria){
    for(let j =0; j < productInfo[tipo][idx].length; j++){
        let product = productInfo[tipo][idx][j];
        products.push(createProductObject(product.imageNumber, product.name, product.description, product.price, tipo_nome, categoria));
    }
}

function CreateProducts(item){

    let TipoIDX = -1;
    let ProdutoIDX = -1;

    if(item.tipo != null){
        if(item.tipo == "gato"){
            TipoIDX = 1;
            switch(item.categoria){
                case "raçãoseca":
                    ProdutoIDX = 0;
                break;

                case "antipulgas":
                    ProdutoIDX = 1;
                break;

                case "areia":
                    ProdutoIDX = 2;
                break;

                case "medicamentos":
                    ProdutoIDX = 3;
                break;

                case "caixasdetransporte":
                    ProdutoIDX = 4;
                break;

                case "arranhadores":
                    ProdutoIDX = 5;
                break;
            }
        }
        else{
            TipoIDX = 0;
            switch(item.categoria){
                case "ração":
                    ProdutoIDX = 0;
                    break;
                case "antipulgas":
                    ProdutoIDX = 1;
                break;
                case "tapetes":
                    ProdutoIDX = 2;
                break;
                case "medicamentos":
                    ProdutoIDX = 3;
                break;

                case "casinhas":
                    ProdutoIDX = 4;
                break;

                case "petiscos":
                    ProdutoIDX =5;
                break;
            }
        }
    }

    if(TipoIDX != -1 && ProdutoIDX != -1){
        InsertProducts(TipoIDX, ProdutoIDX, item.tipo, item.categoria);
        let Area = document.getElementsByClassName("product_area")

        
        createProductElement(products,  Area[0]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let request = JSON.parse(localStorage.getItem('currentRequest')) || [];

    if (request.length > 0) {
        request.forEach(item => {
            console.log(`Tipo: ${item.tipo}, Categoria: ${item.categoria}`);
            CreateProducts(item);
        });
    } else {
     
    }
});


