// Central de Estudos: servidor de progresso (Google Apps Script)
// Guarda as aulas marcadas, parcelas pagas e o nome do certificado,
// para o site mostrar o mesmo progresso em qualquer aparelho.
const CHAVE = '7vtBrofNxG3JHd6_LCCxN41Z';

function doGet(e) {
  if (!e || !e.parameter || e.parameter.k !== CHAVE) return saida({ erro: 'chave' });
  const v = PropertiesService.getScriptProperties().getProperty('progresso');
  return saida(v ? JSON.parse(v) : { ts: 0 });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const b = JSON.parse(e.postData.contents);
    if (b.k !== CHAVE) return saida({ erro: 'chave' });
    const p = PropertiesService.getScriptProperties();
    const atual = JSON.parse(p.getProperty('progresso') || '{"ts":0}');
    if (!atual.ts || b.ts >= atual.ts) {
      p.setProperty('progresso', JSON.stringify({ ts: b.ts, st: b.st }));
      return saida({ ok: true, ts: b.ts });
    }
    return saida({ ok: false, ts: atual.ts });
  } finally {
    lock.releaseLock();
  }
}

function saida(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
