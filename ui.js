window.KizobaUI = (function(){
    const linguas = { ckw:'ckw-color', knd:'knd-color', mbu:'mbu-color' };

    function displayExpression(exp){
        const output = document.getElementById('resposta');
        if(!output) return;
        output.innerHTML = `
            <div class="flex flex-col space-y-2">
                <p class="text-sm text-gray-400">Português</p>
                <strong>${exp.pt}</strong>
                <p>Cokwe: ${exp.ckw}</p>
                <p>Kimbundo: ${exp.knd}</p>
                <p>Umbundu: ${exp.mbu}</p>
            </div>
        `;
        // TTS da língua ativa
        window.KizobaCore.sendToEngine(exp.pt);
    }

    return { displayExpression };
})();
