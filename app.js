(function(){
    let linguaAtiva='ckw';

    const expressoesValidadas={
        ola:{pt:'Olá / Bom dia', ckw:'Moyo wenu', knd:'Dizanga', mbu:'Moyo u wa'},
        como_estas:{pt:'Como estás?', ckw:'Kanawa?', knd:'Uejinga uê?', mbu:'Oku li ndati?'},
        estou_bem:{pt:'Estou bem', ckw:'Ngulhi kanawa', knd:'Nga ri kilembu', mbu:'Ndi li pala'},
        obrigado:{pt:'Obrigado(a)', ckw:'Naçakwila', knd:'Kutulenda', mbu:'Pandula'},
        eu_te_amo:{pt:'Eu te amo', ckw:'Na ku zanga', knd:'Ngi ku zola', mbu:'Ndi ku sole'},
        quero_comer:{pt:'Quero comer', ckw:'Nguna zangue kulhia', knd:'Ngi zanda kulia', mbu:'Ndiongola liã'}
    };

    function mudarLingua(lang){
        linguaAtiva=lang;
        window.KizobaCore.setLanguage(lang);
    }

    function selecionarExp(chave){
        const exp=expressoesValidadas[chave];
        if(!exp) return;
        window.KizobaUI.displayExpression(exp);
    }

    async function handleInputTranslation(texto){
        if(!texto){
            const inputEl=document.getElementById('text-input');
            texto=inputEl?.value.trim();
            if(!texto) return;
        }
        // Aqui você poderia chamar a IA Gemini
        const expTraduzida={pt:texto,ckw:texto,knd:texto,mbu:texto};
        window.KizobaUI.displayExpression(expTraduzida);
    }

    window.AppKizoba={selecionarExp,handleInputTranslation,mudarLingua};
})();
