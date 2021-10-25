const lyricsArray = [
  `Tengo que confesar que a veces
no me gusta tu forma de ser`,
  `Pero a todo lo demás
le gana lo bueno que me das`,
  `Solo tenerte cerca,
siento que vuelvo a empezar`,
  `Yo te quiero con limón y sal`,
  `Yo te quiero tal y como estás
no hace falta cambiarte nada`,
  `Yo te quiero si vienes o si vas
si subes, si bajas, si no estás
seguro de lo que sientes`,
  `Te pones de un humor extraño
con cada luna llena al mes`,
  `Nunca creí en la felicidad`,
  `Tengo que confesarte ahora
nunca creí en la felicidad
a veces algo se le parece
pero es pura casualidad`,
  `Luego me vengo a encontrar
con tus ojos me dan algo más`,
  `Solo tenerte cerca
siento que vuelvo a empezar`,
  `Luego te me desapareces
y no entiendo muy bien por qué`,
  `Me sorprende mis ganas de llorar
si nunca fuiste mio`,
  `Un deseo que no sucederá
un suspiro transparente`,
  `No entiendo lo que había esperado
me confundió tu voz`,
  `Cuando hablamos te sentí tan cerca`,
  `Nunca sospeché 
lo que me esperaba
cuando- lo que me esperaba
cuando te vi`,
  `Te vi
besando una mujer en el campo`,
  `Te vi besándola cerca del mar
también en la ciudad`,
  `Ya entiendo como esto seguirá
seremos tan amigos`,
  `Desde lejos los veré pasar
desde atrás de un cristal`,
  `Y mi cuerpo no te recordara
seras un anhelo
una puerta que nunca abrirá
eso ya lo entiendo`,
  `seras un anhelo`,
  `Tu nombre traigo este día
para darme felicidad, redecorate en vida `,
  `Risas y complicidad, charlas compartidas, susurros y cocinar `,
  `Necesito ahora 
mi secreto a ti revelar`,
  `Mis muertos me acompañarán
me darán tranquilidad `,
  `Mis muertos me acompañarán
me darán tranquilidad
convierten tristeza en canción
habitan el aire con su voz`,
  `Quiero decirles siento fuerza y serenidad `,
  `Por mí estén felices, mis días seguirán
estaremos juntos aquí o en el más allá `,
  `Estaremos juntos aquí o en el más allá `,
  `Querer a veces duele, aunque él te quiere a ti`,
  `Un día nublado, cuando no está aquí`,
  `La vida se vistió de maravillas con su voz`,
  `Y tal vez
su ausencia marque el día, de nostalgia lo pintó`,
  `La existencia suya
ya tu vida la cambio`,
  `Olvidas que
algún día estuviste triste, suspirabas por algo más`,
  `Se acabo un vacio cuando nos encontramos
y se abrió una puerta cuando nos acercamos`,
  `Se acabo un vacio cuando nos encontramos`,
  `Se abrió una puerta cuando nos acercamos`,
  `Dos soledades o ninguna`,
  `Por algo pasan las desgracias que puedes contar
Te enseñan a vivir y apreciar a los demás`,
  `"Ves
Sigues vivo y hasta este dolor se olvidara"`,
  `Sabes que a su lado puedes ser mucho mejor
empiezas otra vida, aunque nada se olvido`,
  `Juntos van
tejiendo alegrías a su alrededor`,
  `Llenamos al mundo de felicidad`,
  `A mi no me importa el dinero, 
tengo lo que yo más quiero a mi lado`,
  `Vamos a decirnos adiós como se debe `,
  `Vamos a brindar
esta despedida
con la certeza de
haber vivido algo que nos cambió `,
  `Aquí va esta por los dos y lo que tuvimos `,
  `Una bella historia de amor que terminó`,
  `Me diste tanto y yo me entregué `,
  `Hubo algo que no supimos ver`,
  `Es tan bueno despedirnos
como habernos conocido `,
  `Es tan bueno aceptar la derrota como fue luchar `,
  `Por lo que tuvimos tu y yo
y se acabo`,
  `Te pido no intentes más, la puerta se ha cerrado`,
  `Busca tu felicidad en otro lado`,
  `Llueve hoy mismo y no te olvidaré`,
  `Siempre serás alguien
que quise de verdad`,
  `Si pudiera recuperar
lo que no me tocó porque ya no hay
porque llegué muy tarde`,
  `Tiempo suficiente
me falla otra vez`,
  `Vida suficiente
me falla otra vez`,
  `Si solo tuviera un lugar
Para expresar mi necesidad
Y alguien escuchará lo que tengo aquí `,
  `Si tuviera respeto de quienes
No me toman en cuenta`,
  `Si solo vieran de lo que soy capaz`,
  `Seguro así sería feliz`,
  `Si pudiera recuperar`,
  `Si solo tuviera un lugar`,
  `Si pudiera recuperar
Si solo tuviera un lugar`,
  `Lo que me gusta de ti
Es que me vuelvo a contar
Todo está en blanco y tú
Nada conoces aún`,
  `Lo que me gusta es
Verte a mi lado y saber
Que estás tranquilo y sé
Sientes lo mismo que yo`,
  `Lo que más quisiera pedirte
Es que te quedes conmigo`,
  `Niño te daré lo que pidas
Sólo no te vayas nunca`,
  `Lo que me gusta es
Lo que me dice tu piel`,
  `Lo que más quiero es
Dar un descanso a mis anhelos `,
  `Y te cuento y me cuentas
No tenemos nada que ocultar`,
  `Y me quedo y te quedas es así como queremos estar`,
  `Te daré todo lo que pidas`,
];

const getRandomLyrics = () => {
  const randomIndex = Math.round(Math.random() * lyricsArray.length - 1);
  return lyricsArray[randomIndex];
};

module.exports = {
  getRandomLyrics,
};
