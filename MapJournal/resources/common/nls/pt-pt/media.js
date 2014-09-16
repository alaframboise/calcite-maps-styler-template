﻿define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Media",
				lblSelect2: "Conteúdo",
				lblMap: "Mapa",
				lblImage: "Imagem",
				lblVideo: "Vídeo",
				lblExternal: "Página web",
				disabled: "Esta funcionalidade foi desativada pelo Admnistrador",
				url: "Para inserir manualmente o endereço web de uma imagem",
				userLookup: "Carregar álbuns",
				notImplemented: "Ainda não implementado.",
				noData: "Não há vídeos públicos encontrados"
			},
			imageSelector: {
				lblStep1: "Escolha o serviço",
				lblStep2: "Escolha os seus media",
				lblStep3: "Configurar"
			},
			imageSelectorHome: {
				explain: "Carregar imagens de rede social, <br /> ou diretamente de um URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Nome de utilizador",
				signInMsg2: "Utilizador não encontrado",
				loadingFailed: "Carregamento falhou"
			},
			imageSelectorFacebook: {
				leftHeader: "Utilizador do Facebook",
				rightHeader: "Página do Facebook",
				pageExplain: "Uma página do Facebook é uma celebridade ou marca/produto público, como <b>esrigis</b>. Pode obter o nome da página após a primeira barra ( / ) no URL da página.",
				pageInputLbl: "Nome da página",
				lookupMsgError: "Página não encontrada"
			},
			imageSelectorPicasa: {
				userInputLbl: "Email ou ID do Picasa/Google+",
				signInMsg2: "Conta não encontrada",
				howToFind: "Como encontrar o ID de uma conta de Picasa ou Google+",
				howToFind2: "Copiar os dígitos que estão entre a primeira e a segunda barra ( / ) de qualquer página Picasa ou G+"
			},
			videoSelectorCommon: {
				check: "Verificar",
				notFound: "Vídeo não encontrado",
				found: "Vídeo encontrado",
				select: "Selecionar este vídeo"
			},
			videoSelectorHome: {
				other: "Outros"
			},
			videoSelectorYoutube: {
				url: "URL de um vídeo do Youtube",
				pageInputLbl: "Nome de utilizador",
				lookupMsgError: "Utilizador não encontrado",
				howToFind: "Como encontrar um nome de utilizador do YouTube",
				howToFind2: "Nome de utilizador é exibido nos vídeos",
				found: "Encontrado",
				noData: "Não há vídeos públicos encontrados"
			},
			videoSelectorVimeo: {
				url: "URL de um vídeo do Vimeo"
			},
			videoSelectorOther: {
				explain1: "O Jornal de Mapa não pode reproduzir vídeos em formato raw (ex: avi, mpeg), mas pode reproduzir ficheiro de vídeo alojados que tenham  but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo).",
				explain2: "A maior parte dos serviços online de alojamento de video oferecem essa possibilidade, tem de encontrar a opção para incorporar vídeo, copiar o código e utilizar %WEBPAGE%.",
				explain3: "Em alternativa, se pretender alojar o vídeo, pode criar uma página HTML que utilize um leitor de vídeo como %EXAMPLE%, alojar essa página e também utilizar o %WEBPAGE%.",
				webpage: "Elemento de página web"
			},
			webpageSelectorHome: {
				lblUrl: "URL de página web",
				lblEmbed: "Incorporar código",
				lblOR: "OU",
				lblError1: "Erro, limpe um dos dois campos de entrada.",
				lblError2: "O código de incorporação pode conter apenas um %IFRAMETAG%",
				configure: "Configurar"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Um URL de imagem deve começar com http:// e terminar com .jpg ou .png",
				lblURLError: "Esta imagem não aparenta ser válida. Por favor especifique uma ligação direta para um ficheiro de imagem (o seu URL geralmente termina em .jpg ou .png). Ligações para uma página web que contenha a imagem não irão funcionar.",
				lblURLCheck: "A verificar imagem...",
				lblLabel: "Legenda de Imagem",
				lblLabel1: "Legenda",
				lblLabel2: "Passe sobre o texto",
				lblLabel3: "Nenhum",
				lblLabelPH: "Introduza algum texto...",
				lblMaximize: "Incluir um botão de maximizar no canto da imagem",
				lblMaximizeHelp: "Recomendado apenas para fotografias de alta qualidade",
				lblPosition: "Posição",
				lblPosition1: "Centrar",
				lblPosition2: "Preencher",
				lblPosition3: "Adaptar",
				lblPosition4: "Esticar",
				lblPosition5: "Personalizar",
				tooltipDimension: "O valor pode ser especificado em pixéis ou percentagem",
				tooltipDimension2: "ã_The value has to be specified in 'px'_Ç",
				lblPosition2Explain: "(pode recortar)",
				lblPosition3Explain: "(não é possível recortar)",
				lblPosition3Explain2: "(a largura será sempre ajustada ao painel)",
				lblPosition4Explain: "(pode distorcer)",
				unloadLbl: "ã_Unload when reader navigates away to different section_Ç",
				unloadHelp: "ã_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away to a different section. Uncheck it for example to keep a soundtrack playing as the reader advances through the journal.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to that section._Ç"
			},
			editorActionGeocode: {
				lblTitle: "Localizar um endereço ou lugar",
				mapMarkerExplain: "O utilizador verá um marcador de mapa ao clicar na ligação"
			},
			editorActionMedia: {
				lblTitle: "Alterar o conteúdo do Ecrã Principal"
			},
			editorInlineMedia: {
				lblTitle: "Inserir uma imagem, vídeo ou página web"
			}
		}
	})

);