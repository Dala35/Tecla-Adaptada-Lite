window.KizobaCore = (function(){
    let language = 'ckw';

    function setLanguage(lang){ language = lang; }

    function sendToEngine(text){
        // TTS
        if('speechSynthesis' in window){
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = 'pt-AO';
            utter.rate = 0.9;
            window.speechSynthesis.speak(utter);
        }
    }

    // Microfone
    let recognition, isListening = false;
    if(window.SpeechRecognition || window.webkitSpeechRecognition){
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SR();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'pt-PT';
        recognition.onstart = ()=>{ isListening=true; };
        recognition.onend = ()=>{ isListening=false; };
        recognition.onresult = e=>{
            const transcript = e.results[0][0].transcript;
            window.AppKizoba.handleInputTranslation(transcript);
        };
    }

    function toggleMic(){
        if(!recognition) return;
        if(isListening) recognition.stop();
        else recognition.start();
    }

    return { setLanguage, sendToEngine, toggleMic };
})();
