const texto = `Conste por el presente documento el CONTRATO DE CRÉDITO que celebran de una parte, el BANCO INTERAMERICANO DE FINANZAS (BANBIF), identificado con RUC No. 20101036813, con domicilio para efectos del presente contrato en Av. Ricardo Rivera Navarrete No 600, distrito de San Isidro, provincia y departamento de Lima, que actúa debidamente representado por los funcionarios autorizados que suscriben el presente documento según poder inscrito en la Partida N°11026203 del Registro de Personas Jurídicas de Lima, a quien en adelante se denominará EL BANCO; y de la otra parte, EL CLIENTE, cuyos datos y demás información constan en el Anexo 1 del presente documento; en las condiciones y términos siguientes:`; 

const ruc = texto.match(/\d{11}/);
const partida = texto.match(/Partida\s+N°\s*(\d+)/i);

console.log("RUC:", ruc ? ruc[0] : "No encontrado");
console.log("Partida:", partida ? partida[1] : "No encontrada");
