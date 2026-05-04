const $ = (id) => document.getElementById(id);
const state = { history: JSON.parse(localStorage.getItem('lang_history') || '[]') };

const dictionary = {
  "hola": {en:"hello", hi:"नमस्ते"}, "namaste": {en:"hello", hi:"नमस्ते"}, "hello": {en:"hello", hi:"नमस्ते"},
  "cómo": {en:"how", hi:"कैसे"}, "are": {en:"are", hi:"हैं"}, "आप": {en:"you", hi:"आप"}
};

function detectLanguage(text) {
  if(/[\u0900-\u097F]/.test(text)) return 'Hindi';
  if(/[¿¡]|\b(hola|gracias|cómo)\b/i.test(text)) return 'Spanish';
  return 'English';
}

function translate(text, lang){
  const words = text.toLowerCase().split(/\s+/);
  if (lang === 'Hindi') return { en: '[Basic] ' + text, hi: text };
  const en = words.map(w => dictionary[w]?.en || w).join(' ');
  const hi = words.map(w => dictionary[w]?.hi || w).join(' ');
  return { en, hi };
}

function saveHistory(item){
  state.history.unshift(item); state.history = state.history.slice(0,5);
  localStorage.setItem('lang_history', JSON.stringify(state.history)); renderHistory();
}

function renderHistory(){
  const list = $('historyList'); if(!list) return;
  list.innerHTML = state.history.map(h=>`<li><strong>${h.lang}</strong>: ${h.text.slice(0,70)}</li>`).join('');
}

async function processText(text){
  $('loading')?.classList.remove('hidden');
  await new Promise(r=>setTimeout(r,250));
  const lang = detectLanguage(text); const t = translate(text, lang);
  $('detectedLanguage').textContent = lang; $('englishTranslation').textContent = t.en; $('hindiTranslation').textContent = t.hi;
  saveHistory({lang,text}); $('loading')?.classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', ()=>{
  renderHistory();
  $('detectBtn')?.addEventListener('click', ()=>processText($('inputText').value.trim()));
  document.querySelectorAll('.sample').forEach(b=>b.addEventListener('click',()=>{$('inputText').value=b.dataset.text;processText(b.dataset.text)}));
  $('copyBtn')?.addEventListener('click', async ()=>{
    const out = `Detected: ${$('detectedLanguage').textContent}\nEN: ${$('englishTranslation').textContent}\nHI: ${$('hindiTranslation').textContent}`;
    await navigator.clipboard.writeText(out);
  });
  $('downloadBtn')?.addEventListener('click', ()=>{
    const out = `Detected: ${$('detectedLanguage').textContent}\nEN: ${$('englishTranslation').textContent}\nHI: ${$('hindiTranslation').textContent}`;
    const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([out],{type:'text/plain'})); a.download='translation-result.txt'; a.click();
  });

  $('themeToggle')?.addEventListener('click', ()=>{document.body.classList.toggle('dark'); localStorage.setItem('theme', document.body.classList.contains('dark')?'dark':'light');});
  if(localStorage.getItem('theme')==='dark') document.body.classList.add('dark');

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  $('voiceBtn')?.addEventListener('click', ()=>{
    if(!SR) return alert('Speech recognition not supported in this browser.');
    const r = new SR(); r.lang='en-US'; r.onresult=(e)=>{$('inputText').value=e.results[0][0].transcript; processText($('inputText').value)}; r.start();
  });

  $('imageInput')?.addEventListener('change', async (e)=>{
    const f=e.target.files[0]; if(!f || !window.Tesseract) return;
    $('loading').classList.remove('hidden');
    const {data:{text}} = await Tesseract.recognize(f,'eng+hin'); $('inputText').value=text; await processText(text);
  });
});
