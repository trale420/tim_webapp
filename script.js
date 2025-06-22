function mostraScelta(categoria) {
	document.getElementById("scelta_in").classList.add("hidden");
	if (categoria == "resine") {
		document.getElementById("resine-options").classList.remove("hidden");
	} else if (categoria == "servizi") {
		document.getElementById("categorie-servizi").classList.remove("hidden");
	} else if (categoria == "3d") {
		document.getElementById("print3d-options").classList.remove("hidden");
	} else if (categoria == "stampa-per") {
		document.getElementById("stampa-options").classList.remove("hidden");
	}
}
function mostraOfferteServizio(gestore) {
	document.getElementById("categorie-servizi").classList.add("hidden");
	if (gestore == "tim") {
		document.getElementById("categorie-tim").classList.remove("hidden");
	} else if (gestore == "sky") {
		document.getElementById("categorie-sky").classList.remove("hidden");
	}
}
function mostraPromo(categoria) {
	document.getElementById("categorie-tim").classList.add("hidden");
	if (categoria === "mobile") {
		document.getElementById("mobile-options").classList.remove("hidden");
	} else if (categoria == "internet") {
		document.getElementById("internet-options").classList.remove("hidden");
	} else if (categoria == "vision") {
		document.getElementById("vision-options").classList.remove("hidden");
	}
}

function tornaIndietro() {
	document.getElementById("scelta_in").classList.remove("hidden");
	document.getElementById("categorie-tim").classList.add("hidden");
	document.getElementById("mobile-options").classList.add("hidden");
	document.getElementById("portabilita").classList.add("hidden");
	document.getElementById("newsim-or-not").classList.add("hidden");
	document.getElementById("new-sim").classList.add("hidden");
	document.getElementById("internet-options").classList.add("hidden");
	document.getElementById("new-internet").classList.add("hidden");
	document.getElementById("contenuto-internet").classList.add("hidden");
	document.getElementById("unica-cont").classList.add("hidden");
	document.getElementById("contenuto-unica").classList.add("hidden");
	document.getElementById("resine-options").classList.add("hidden");
	document.getElementById("contenuto-resine").classList.add("hidden");
	document.getElementById("categorie-servizi").classList.add("hidden");
	document.getElementById("print3d-options").classList.add("hidden");
	document.getElementById("stampa-options").classList.add("hidden");
	document.getElementById("contenuto-3d").classList.add("hidden");
	document.getElementById("categorie-sky").classList.add("hidden");
	document.getElementById("contenuto-sky").classList.add("hidden");
	document.getElementById("vision-options").classList.add("hidden");
}
function tornaIndietroTim() {
	document.getElementById("categorie-servizi").classList.remove("hidden");
	document.getElementById("categorie-tim").classList.add("hidden");
}
function tornaIndietroTimMob() {
	document.getElementById("categorie-tim").classList.remove("hidden");
	document.getElementById("mobile-options").classList.add("hidden");
}
function tornaIndietroTimNew() {
	document.getElementById("mobile-options").classList.remove("hidden");
	document.getElementById("newsim-or-not").classList.add("hidden");
}
function tornaIndietroTimNewSim() {
	document.getElementById("newsim-or-not").classList.remove("hidden");
	document.getElementById("new-sim").classList.add("hidden");
}
function tornaIndietroTimPort() {
	document.getElementById("newsim-or-not").classList.remove("hidden");
	document.getElementById("portabilita").classList.add("hidden");
}
function tornaIndietroTimFisso() {
	document.getElementById("categorie-tim").classList.remove("hidden");
	document.getElementById("internet-options").classList.add("hidden");
}
function tornaIndietroTimUnica() {
	document.getElementById("internet-options").classList.remove("hidden");
	document.getElementById("unica-cont").classList.add("hidden");
}
function tornaIndietroTimNewFisso() {
	document.getElementById("internet-options").classList.remove("hidden");
	document.getElementById("new-internet").classList.add("hidden");
}
function tornaIndietroSky() {
	document.getElementById("categorie-servizi").classList.remove("hidden");
	document.getElementById("categorie-sky").classList.add("hidden");
	document.getElementById("contenuto-sky").classList.add("hidden");
}
function tornaIndietroTimGiaSim() {
	document.getElementById("mobile-options").classList.remove("hidden");
	document.getElementById("gia-sim").classList.add("hidden");
}
function tornaIndietroTimVision() {
	document.getElementById("categorie-tim").classList.remove("hidden");
	document.getElementById("vision-options").classList.add("hidden");
}

function mostraClienteInternet(tipo) {
	if (tipo == "gia") {
	} else if (tipo == "nuovo") {
		document.getElementById("internet-options").classList.add("hidden");
		document.getElementById("new-internet").classList.remove("hidden");
	}
}
function mostraUnica() {
	document.getElementById("internet-options").classList.add("hidden");
	document.getElementById("unica-cont").classList.remove("hidden");
}
function mostraOpzioniGiaSim(tipo) {
	contenitore = document.getElementById("contenuto-gia-sim");
	contenitore.classList.remove("hidden");
	if (tipo == "estero") {
		contenitore.innerHTML = `
			<div class="tim-viaggio-pass">
  <div class="tim-viaggio-header">Resta connesso con TIM anche quando sei all’estero!</div>
  
  <div class="tim-viaggio-box">
    <div class="tim-viaggio-tags">
      <span class="tag">15 GIGA</span>
      <span class="tag">500 MINUTI E 500 SMS</span>
    </div>

    <h2 class="pass-title">TIM in Viaggio PASS</h2>
    <p class="pass-desc">
      Più Giga, minuti e SMS per i tuoi viaggi in Europa, Regno Unito, USA, Canada e Brasile
    </p>

    <div class="pass-price">
      <span class="price-big">19</span><span class="price-dec">,99€</span>
      <div class="price-sub">per 30 giorni</div>
    </div>

    <div class="price-note">i.i. addebitati al momento dell’attivazione</div>
  </div>
</div>

		`;
	}
}
function mostraCliente(tipo) {
	if (tipo === "nuovo") {
		document.getElementById("newsim-or-not").classList.remove("hidden");
		document.getElementById("mobile-options").classList.add("hidden");
	} else if (tipo == "gia") {
		document.getElementById("gia-sim").classList.remove("hidden");
		document.getElementById("mobile-options").classList.add("hidden");
	}
}

function mostraOfferteSIM(tipo) {
	if (tipo === "port") {
		document.getElementById("portabilita").classList.remove("hidden");
		document.getElementById("newsim-or-not").classList.add("hidden");
	} else {
		document.getElementById("new-sim").classList.remove("hidden");
		document.getElementById("newsim-or-not").classList.add("hidden");
	}
}
function mostraOfferteInternet(tipo) {
	const contenitore = document.getElementById("contenuto-internet");
	//const temp = document.getElementById("unica-cont");
	//temp.innerHTML= ``;
	contenitore.classList.remove("hidden");
	if (tipo == "fibra") {
		contenitore.innerHTML = `
        <div class="offerte-container">
              <div class="promo-card tim-ultra-card">
  <div class="promo-header">TIM Fisso</div>
  <h2>TIM Premium Base</h2>
  <div class="price-badge">
    <span class="price-main">25,90€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Fibra fino ad <span style="color: red;">2.5Gb/s</span> (FTTH-FTTC-ADSL)</strong></li>
    <li><strong>Chiamate a Consumo</strong> vs Fissi e Mobili</li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>0€</strong></div>
</div>
<div class="promo-card tim-ultra-card">
  <div class="promo-header">Esclusiva KMD</div>
  <h2>TIM WIFI Casa</h2>
  <br>
  <div class="price-badge">
    <span class="price-main">26,90€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Fibra</strong> fino ad <span style="color: red;">2.5Gb/s</span> <strong>(FTTC- FTTH anche OPEN FIBER Aree Bianche e Aree Nere)</strong></li>
    <li><strong>Chiamate Illimitate</strong> vs Fissi e Mobili Nazionali</li>
    <li><strong>Modem <span style="color:red;">TIM Hub Pro WiFi 7</span> a 0€/mese per 24 mesi</strong> poi a + 5€/mese per i restanti 24 mesi</li>
    <li><strong>Contributo attivazione rateizzato a 5€/mese per 24 mesi</strong></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>39,90€</strong></div>
</div>

<div class="offerte-container">
<div class="promo-card tim-ultra-card">
  <div class="promo-header">TIM WIFI Casa Family</div>
  <h2>TimVision Family S</h2>
  <div class="price-badge">
    <span class="price-main">29,90€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Fibra</strong> fino ad <span style="color:red;">2.5Gb/s</span> <strong>(FTTC- FTTH anche OPEN FIBER Aree Bianche e Aree Nere)</strong></li>
    <li><strong>Chiamate Illimitate</strong> vs Fissi e Mobili Nazionali</li>
    <li><strong>Modem <span style="color:red;">TIM Hub Pro WiFi 7</span> a 0€/mese per 24 mesi</strong> poi a + 5€/mese per i restanti 24 mesi</li>
    <li><strong style="color:red;">TIMVISION Family S</strong> incluso</li>
    <li>Contributo attivazione rateizzato a 5€/mese per 24 mesi</li>
  </ul>
	  <div class="servizi-logo">
    <img src="img/timvision.png" alt="TimVision" height=25>
    <img src="img/netflix.png" alt="Netflix" height=25>
    <img src="img/dazn.png" alt="DAZN" height=25>
    <img src="img/infinity.png" alt="Infinity+" height=25>
  </div>
  <div class="activation-cost">Costo di attivazione: <strong>39,90€</strong></div>
	<br>
  <div class="condizione-red">a 27,90€/mese attivando contestualmente una mobile Tim (AL/MNP)</div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">TIM WIFI Casa Family</div>
  <h2>TimVision Family M</h2>
  <div class="price-badge">
    <span class="price-main">32,90€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Fibra</strong> fino ad <span style="color:red;">2.5Gb/s</span> <strong>(FTTC- FTTH anche OPEN FIBER Aree Bianche e Aree Nere)</strong></li>
    <li><strong>Chiamate Illimitate</strong> vs Fissi e Mobili Nazionali</li>
    <li><strong>Modem <span style="color:red;">TIM Hub Pro WiFi 7</span> a 0€/mese per 24 mesi</strong> poi a + 5€/mese per i restanti 24 mesi</li>
    <li><strong style="color:red;">TIMVISION Family M</strong> incluso</li>
    <li>Contributo attivazione rateizzato a 5€/mese per 24 mesi</li>
  </ul>
	<div class="servizi-logo">
    <img src="img/timvision.png" alt="TimVision" height=25>
    <img src="img/netflix.png" alt="Netflix" height=25>
    <img src="img/disney.png" alt="Disney+" height=25>
    <img src="img/dazn.png" alt="DAZN" height=25>
    <img src="img/infinity.png" alt="Infinity+" height=25>
  </div>
  <div class="activation-cost">Costo di attivazione: <strong>39,90€</strong></div>
	<br>
  <div class="condizione-red">a 30,90€/mese attivando contestualmente una mobile Tim (AL/MNP)</div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">TIM WIFI Casa Family</div>
  <h2>TimVision Family L</h2>
  <div class="price-badge">
    <span class="price-main">34,90€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Fibra</strong> fino ad <span style="color:red;">2.5Gb/s</span> <strong>(FTTC- FTTH anche OPEN FIBER Aree Bianche e Aree Nere)</strong></li>
    <li><strong>Chiamate Illimitate</strong> vs Fissi e Mobili Nazionali</li>
    <li><strong>Modem <span style="color:red;">TIM Hub Pro WiFi 7</span> a 0€/mese per 24 mesi</strong> poi a + 5€/mese per i restanti 24 mesi</li>
    <li><strong style="color:red;">TIMVISION Family L</strong> incluso</li>
    <li>Contributo attivazione rateizzato a 5€/mese per 24 mesi</li>
  </ul>
	<div class="servizi-logo">
    <img src="img/timvision.png" alt="TimVision" height=25>
    <img src="img/netflix.png" alt="Netflix" height=25>
    <img src="img/disney.png" alt="Disney+" height=25>
    <img src="img/primevideo.png" alt="Prime Video" height=25>
    <img src="img/dazn.png" alt="DAZN" height=25>
    <img src="img/infinity.png" alt="Infinity+" height=25>
  </div>
  <div class="activation-cost">Costo di attivazione: <strong>39,90€</strong></div>
	<br>
  <div class="condizione-red">a 32,90€/mese attivando contestualmente una mobile Tim (AL/MNP)</div>
</div>
</div>
        </div>
        `;
	} else if (tipo == "fwa") {
		contenitore.innerHTML = `
        <div class="offerte-container">
              <div class="promo-card tim-ultra-card">
  <div class="promo-header">INDOOR</div>
  <h2>TIM WIFI Casa FWA 4G</h2>
  <div class="price-badge">
    <span class="price-main">26,90€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Internet illimitato</strong> in 4G+ fino ad <span style="color: red;">100/50 Mb/s</span></li>
    <li>Chiamate vs Fissi e Mobili a consumo*</li>
    <li>Modem <strong>Tim Hub +</strong> incluso</li>
    <li>Antenna <strong>FWA inclusa</strong></li>
    <li><strong>Installazione gratuita</strong></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>0€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">INDOOR-SECONDA CASA</div>
  <h2>TIM WIFI Casa FWA 4G</h2>
  <div class="price-badge">
    <span class="price-main">14,90€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Internet illimitato</strong> in 4G+ fino ad <span style="color: red;">100/50 Mb/s</span></li>
    <li>Chiamate vs Fissi e Mobili a consumo*</li>
    <li>Modem <strong>Tim Hub +</strong> incluso</li>
    <li>Antenna <strong>FWA inclusa</strong></li>
    <li><strong>Installazione gratuita</strong></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>0€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">OUTDOOR</div>
  <h2>TIM WIFI Casa FWA 4G</h2>
  <div class="price-badge">
    <span class="price-main">26,90€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Internet illimitato</strong> in 4G+ fino ad <span style="color: red;">100/50 Mb/s</span></li>
    <li>Chiamate vs Fissi e Mobili illimitate a <strong>0€ per 48 mesi</strong>, poi a +5€/mese</li>
    <li><strong>Modem Tim Hub +</strong> a 0€/mese per 24 mesi poi a +5€/mese per i restanti 24 mesi</li>
    <li>Antenna <strong>FWA inclusa</strong></li>
    <li>Contributo attivazione rateizzato a 5€/mese per 24 mesi</li>
    <li><strong>Installazione gratuita</strong></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>0€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">OUTDOOR</div>
  <h2>TIM WIFI Casa FWA 5G</h2>
  <div class="price-badge">
    <span class="price-main">26,90€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Internet illimitato</strong> in 5G fino ad <span style="color: red;">300 Mbps</span></li>
    <li>Chiamate vs Fissi e Mobili illimitate a <strong>0€ per 48 mesi</strong>, poi a +5€/mese</li>
    <li><strong>Modem Tim Hub +</strong> a 0€/mese per 24 mesi poi a +5€/mese per i restanti 24 mesi</li>
    <li>Antenna <strong>FWA inclusa</strong></li>
    <li>Contributo attivazione rateizzato a 5€/mese per 24 mesi</li>
    <li><strong>Installazione gratuita</strong></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>0€</strong></div>
</div>

        </div>
        `;
	}
}

function mostraOfferteResine(tipo) {
	const contenitore = document.getElementById("contenuto-resine");
	contenitore.classList.remove("hidden");
	if (tipo == "eco") {
		contenitore.innerHTML = `
		 	<div class="resine-container">
			<div class="resine-name"><h1>Original</h1></div>
			<div class="resine-price"><h1>15€</h1></div>
				<div class="resine-foto">
    			<img src="img/mobilax.png" alt="Mobilax" height=250>
					<img src="img/mobilax.jpg" alt="Mobilax1" height=250>
  			</div>
				<div class="resine-desc"><h3>Proteggi il tuo smartphone con la resina protettiva ultra resistente: una soluzione trasparente, discreta ed efficace contro graffi e segni quotidiani.
🛡️ Tecnologia liquida avanzata che si adatta perfettamente a qualsiasi display, senza alterarne la sensibilità o la luminosità.
⏱️ Applicazione facile in soli 5 minuti, senza bolle e senza stress.

Per soli 15€, trasformi il tuo schermo in un'armatura invisibile.</h3></div>
			</div>
		`;
	} else if (tipo == "base") {
		contenitore.innerHTML = `
		 	<div class="resine-container">
			<div class="resine-name"><h1>Clear Protect</h1></div>
			<div class="resine-price"><h1>20€</h1></div>
				<div class="resine-foto">
    			<img src="img/clear1.jpg" alt="Clear" height=250>
					<img src="img/clear.jpg" alt="Clear" height=250>
  			</div>
				<div class="resine-desc"><h3>Non solo protegge, ma ripara!
Con la resina rigenerante premium, il tuo smartphone torna come nuovo:
✨ Rigenera i micrograffi esistenti e crea una pellicola ultraresistente contro futuri danni.
🧪 Formula liquida intelligente che si adatta a ogni schermo, invisibile e 100% touch-friendly.
⏱️ Applicazione rapida in 5 minuti, senza aloni né bolle.

✅ Protegge, lucida e rinnova lo schermo del tuo smartphone – il tutto per solo 20€.
Perfetta per chi vuole il massimo della protezione con un tocco di magia rigenerante.</h3></div>
			</div>
		`;
	} else if (tipo == "ultra") {
		contenitore.innerHTML = `
		 	<div class="resine-container">
			<div class="resine-name"><h1>Ultra Clear</h1></div>
			<div class="resine-price"><h1>25€</h1></div>
				<div class="resine-foto">
    			<img src="img/elite.png" alt="Elite" height=250>
					<img src="img/elite1.png" alt="Elite" height=250>
  			</div>
				<div class="resine-desc"><h3>📱 Protezione totale, tecnologia intelligente.
Questa resina di ultima generazione non si limita a proteggere: si autorigenera.
🛡️ Difende lo schermo da graffi, cadute e urti accidentali, grazie a una formula rinforzata che assorbe l’impatto.
✨ I micrograffi si riparano da soli in poche ore, mantenendo il tuo display sempre come nuovo.
💎 Invisibile, ultraresistente e 100% compatibile con ogni modello.
⏱️ Applicazione facile in 5 minuti, senza bolle né residui.

💪 Per chi cerca il massimo della tecnologia e della resistenza, tutto in un solo prodotto.
👉 Solo 25€ per una protezione intelligente, che si cura da sola.</h3></div>
			</div>
			<div class="resine-container">
			<div class="resine-name"><h1>Ultra Matte</h1></div>
			<div class="resine-price"><h1>25€</h1></div>
				<div class="resine-foto">
					<img src="img/matte.jpg" alt="Matte" height=250>
					<img src="img/matte1.jpg" alt="Matte" height=250>
  			</div>
				<div class="resine-desc"><h3>🌫️ Finitura opaca, protezione totale.
La resina opaca di nuova generazione è pensata per chi vuole uno schermo sempre pulito, elegante e ultra resistente.
🛡️ Protegge da graffi, urti e cadute, con una formula rinforzata che assorbe gli impatti.
🔄 Autorigenerante: i micrograffi spariscono da soli, mantenendo il display come nuovo.
👆 Effetto anti-impronta e zero riflessi, perfetta per l’uso sotto il sole e per chi cerca un look più discreto.
⏱️ Si applica in 5 minuti, senza bolle e compatibile con tutti i modelli.

🎯 Solo 25€ per uno schermo protetto, opaco e intelligente.
Lo stile incontra la tecnologia.</h3></div>
			</div>
		`;
	} else if (tipo == "max") {
		contenitore.innerHTML = `
		 	<div class="resine-container">
			<div class="resine-name"><h1>Privacy</h1></div>
			<div class="resine-price"><h1>30€</h1></div>
				<div class="resine-foto">
    			<img src="img/privacy.jpg" alt="Privacy" height=250>
					<img src="img/privacy1.jpg" alt="Privacy" height=250>	
  			</div>
				<div class="resine-desc"><h3>🔒 Proteggi lo schermo. Proteggi la tua privacy.
La resina premium da €30 è la scelta ideale per chi cerca massima resistenza e protezione visiva da occhi indiscreti.
🛡️ Più spessa e robusta, offre una barriera potenziata contro urti, graffi e cadute.
🙈 Effetto privacy: lo schermo è visibile solo frontalmente, perfetto per messaggi, documenti e contenuti sensibili.
🔄 Autorigenerante, ripara da sola i micrograffi per uno schermo sempre perfetto.
⏱️ Applicazione semplice in 5 minuti, senza aloni né bolle.

💼 Ideale per chi lavora con dati riservati o semplicemente non vuole sguardi curiosi.
✅ 30€ per la miglior combinazione tra sicurezza, privacy e tecnologia.</h3></div>
			</div>
			<div class="resine-container">
			<div class="resine-name"><h1>Opaca Privacy</h1></div>
			<div class="resine-price"><h1>30€</h1></div>
				<div class="resine-foto">
					<img src="img/privacy-matte1.jpg" alt="Privacy Matte" height=250>
					<img src="img/privacy-matte.jpg" alt="Privacy Matte" height=250>
  			</div>
				<div class="resine-desc"><h3>🌫️🔒 Massima privacy, finitura opaca, protezione estrema.
La resina definitiva per chi non vuole compromessi:
🛡️ Protegge da urti, graffi e cadute con uno strato ultra resistente.
🙈 Effetto privacy integrato: lo schermo è visibile solo frontalmente, invisibile da angolazioni laterali.
✨ Finitura opaca anti-riflesso e anti-impronta: visibilità perfetta anche sotto la luce diretta.
🔄 Autorigenerante, ripara autonomamente micrograffi e imperfezioni.
⏱️ Si applica in 5 minuti, compatibile con ogni smartphone.

💼 Ideale per chi cerca riservatezza, stile e robustezza in un solo gesto.
✅ Tutto questo a 30€. Il top della protezione, con un tocco di classe.

</h3></div>
			</div>
			<div class="resine-container">
			<div class="resine-name"><h1>XTREME PRO</h1></div>
			<div class="resine-price"><h1>30€</h1></div>
				<div class="resine-foto">
					<img src="img/xtreme1.jpeg" alt="Xtreme Pro" height=250>
					<img src="img/xtreme.png" alt="Xtreme Pro" height=250>				
  			</div>
				<div class="resine-desc"><h3>🛡️ Estrema resistenza, protezione totale: Extreme Pro di Cellularline è la nuova frontiera per lo schermo del tuo smartphone.
🔗 Realizzata in vetro temperato ultra-resistente con durezza 9H, garantisce una barriera solida contro graffi, urti e cadute accidentali.
💥 Anti-urto e anti-graffio, protegge anche nelle situazioni più estreme senza compromettere estetica e sensibilità.
✨ Trattamento oleorepellente per uno schermo sempre limpido, senza impronte né aloni.
👆 Massima reattività al tocco: risposta immediata e scorrimento fluido come sul vetro originale.
📐 Design edge-to-edge con bordi arrotondati, zero bolle all'applicazione e piena compatibilità con le cover.
💎 La scelta perfetta per chi cerca una protezione robusta, elegante e invisibile.
✅ Solo 30€ per una protezione professionale firmata Cellularline.</h3></div>
			</div>
			
			<div class="resine-container">
			<div class="resine-name"><h1>Fortify Hybrid</h1></div>
			<div class="resine-price"><h1>35€</h1></div>
				<div class="resine-foto">
					<img src="img/hybrid1.jpeg" alt="Hybrid" height=250>
					<img src="img/hybrid.png" alt="Hybrid" height=250>				
  			</div>
				<div class="resine-desc"><h3>🛡️ Il meglio di due mondi: resina + vetro.
Fortify di Cellularline è la rivoluzione nella protezione dello schermo:
🔗 Unisce la resistenza di un vetro temperato alla flessibilità e adattabilità della resina liquida, per una barriera invisibile e super performante.
💥 Anti-urto e anti-graffio, protegge lo schermo anche dalle cadute più dure.
✨ Autorigenerante, elimina da sola i micrograffi nel tempo.
👆 Touch perfetto, zero bolle, applicazione semplice e veloce.
🔄 Compatibile con tutti i modelli e senza interferenze con le cover.

💎 La soluzione ibrida più evoluta per chi vuole una protezione da vero top di gamma.
✅ Solo 35€ per lo scudo definitivo firmato Cellularline.</h3></div>
			</div>
		`;
	}
}
function mostraOpzioniNewSim(tipo) {
	const contenitore = document.getElementById("contenuto-new-sim");
	contenitore.classList.remove("hidden");
	if (tipo == "voce") {
		contenitore.innerHTML = `
				<div class="offerte-container">
          <div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP/AL</div>
  <h2>Senza Limiti Voce MNP/AL</h2>
  <div class="price-badge">
    <span class="price-main">10€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>
</div>
        `;
	} else if (tipo == "dati") {
		contenitore.innerHTML = `
				<div class="offerte-container">
          <div class="promo-card tim-ultra-card">
    <div class="promo-header">CASH AL</div>
    <h2>Junior Pack AL</h2>
    <div class="price-badge">
      <span class="price-main">79€</span><span class="price-sub">U.T. PER 12 MESI</span>
    </div>
    <ul class="promo-details">
      <li><strong>Minuti illimitati</strong></li>
      <li><strong>200 SMS</strong></li>
      <li style="color: red;"><strong>100 GB in 5G</strong> <span style="color:#000;">(9 GB in roaming UE)</span></li>
      <li>TIM Navigazione Sicura</li>
      <li>TIM Navigazione Sicura App</li>
    </ul>
    <div class="activation-cost">Costo di attivazione: <strong>0€</strong></div>
  </div>

  <div class="promo-card tim-ultra-card">
    <div class="promo-header">CREDITO RESIDUO AL</div>
    <h2>TIM Mobile Giga 500 AL</h2>
    <div class="price-badge">
      <span class="price-main">99,99€</span><span class="price-sub">U.T.</span>
    </div>
    <ul class="promo-details">
      <li style="color: red;"><strong>500 GB in 5G</strong> <span style="color:#000;">per 12 mesi</span></li>
    </ul>
    <div class="activation-cost">Costo di attivazione: <strong>0€</strong></div>
  </div>

  <div class="promo-card tim-ultra-card">
    <div class="promo-header">RIC AUTO AL / CREDITO RESIDUO AL</div>
    <h2>TIM Mobile Giga 50 AL</h2>
    <div class="price-badge">
      <span class="price-main">9,99€</span><span class="price-sub">/mese</span>
    </div>
    <ul class="promo-details">
      <li style="color: red;"><strong>50 GB in 5G</strong></li>
    </ul>
    <div class="activation-cost">Costo di attivazione: <strong>5€</strong></div>
  </div>

  <div class="promo-card tim-ultra-card">
    <div class="promo-header">RIC AUTO AL / CREDITO RESIDUO AL</div>
    <h2>TIM MOBILE GIGA 100 AL</h2>
    <div class="price-badge">
      <span class="price-main">13,99€</span><span class="price-sub">/mese</span>
    </div>
    <ul class="promo-details">
      <li style="color: red;"><strong>100 GB IN 5G ULTRA</strong></li>
    </ul>
    <div class="activation-cost">Costo di attivazione: <strong>5€</strong></div>
  </div>
	</div>
        `;
	} else if (tipo == "all") {
		contenitore.innerHTML = `
				<div class="offerte-container">
          <div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA AL</div>
  <h2>Junior</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(11 GB in roaming UE)</span></li>
    <li>TIM Navigazione Sicura</li>
    <li>TIM Navigazione Sicura App</li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>5€</strong></div><br>
  <div class="condizione">4,99€ /mese AL CON TIM UNICA POWER</div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO AL</div>
  <br><h2>Junior</h2><br>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>50 GB IN 5G</strong> <span style="color:#000;">(11 GB in roaming UE)</span></li>
    <li>TIM Navigazione Sicura</li>
    <li>TIM Navigazione Sicura App</li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>5€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA AL/MNP</div>
  <h2>Young</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">9,99€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati e 200 Minuti vs UE</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>200 GB in 5G ULTRA</strong> <span style="color:#000;">(20 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>9,99€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO AL/MNP</div>
  <br><h2>Young</h2><br>
  <div class="price-badge">
    <span class="price-main">9,99€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati e 200 Minuti vs UE</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>100 GB in 5G ULTRA</strong> <span style="color:#000;">(20 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>9,99€</strong></div>
</div>





<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA AL</div>
  <h2>GIGA Power Famiglia</h2>
  <h2>AL</h2>
  <div class="price-badge">
    <span class="price-main">5,99€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>5 GB in 5G</strong> (anche in roaming UE)</li>
    <li><strong style="color:red">GB ILLIMITATI in 5G ULTRA CON TIM UNICA POWER</strong></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>5€</strong></div>
</div>



<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA AL</div>
  <h2>Jet</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">11,99€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>100 GB</strong> <span style="color:#000;">(13 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO AL</div>
  <br><h2>Jet</h2><br>
  <div class="price-badge">
    <span class="price-main">11,99€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>50 GB</strong> <span style="color:#000;">(13 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

				</div>
				`;
	} else if (tipo == "etnica") {
		contenitore.innerHTML = `
				<div class="offerte-container">
          <div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA AL/MNP</div>
  <h2>International</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">8,99€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>1000 SMS</strong></li>
    <li style="color: red;"><strong>130 GB IN 5G</strong> <span style="color:#000;">(13 GB in roaming UE)</span></li>
    <li>888 minuti vs la Cina</li>
    <li>300 minuti vs l'Estero*</li>
    <li>60 minuti vs Egitto, Filippine, Moldavia, Nigeria, Ucraina</li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>0€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO AL/MNP</div>
  <br><h2>International</h2><br>
  <div class="price-badge">
    <span class="price-main">8,99€</span><span class="price-sub">/mese</span>
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>1000 SMS</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(13 GB in roaming UE)</span></li>
    <li>888 minuti vs la Cina</li>
    <li>300 minuti vs l'Estero*</li>
    <li>60 minuti vs Egitto, Filippine, Moldavia, Nigeria, Ucraina</li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>0€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO AL</div>
  <h2>Tourist New</h2>
  <h2>AL</h2>
  <div class="price-badge">
    <span class="price-main">14,99€</span><span class="price-sub"> PER 30 GIORNI</span>
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati vs fissi e mobili nazionali</strong></li>
    <li><strong>100 minuti vs Estero*</strong></li>
    <li style="color: red;"><strong>200 GB in 5G</strong> <span style="color:#000;">(19 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>0€</strong></div>
</div>
				</div>
        `;
	}
}

function mostraOpzioniOperatore(operatore) {
	const contenitore = document.getElementById("contenuto-operatore");
	contenitore.classList.remove("hidden");
	if (operatore == "vodafone") {
		contenitore.innerHTML = `
          <div class="offerte-container">
            <div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>Power Supreme Limited MNP</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>100 GB in 5G</strong> <span style="color:#000;">(9 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>Power Supreme Limited MNP</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>100 GB in 5G</strong> <span style="color:#000;">(9 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>One Go MNP</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">9,99€</span><span class="price-sub">/mese</span>
    <img src="5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(10 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>One Go MNP</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">9,99€</span><span class="price-sub">/mese</span>
    <img src="5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(10 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

          </div>
        `;
	} else if (operatore == "wind") {
		contenitore.innerHTML = `
          <div class="offerte-container">
          <div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>Power Pro MNP</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">8,99€</span><span class="price-sub">/mese</span>
    <img src="5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(20 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

          
            <div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>Power Pro MNP</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">8,99€</span><span class="price-sub">/mese</span>
    <img src="5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(20 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2 style="color: #ff2a00;">Steel New GPro MNP</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="4G Icon" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 4G</strong> <span style="color:#000;">(20 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2 style="color: #ff2a00;">Steel New GPro MNP</h2>
  <h2 style="color: #ff2a00;">Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="4G Icon" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 4G</strong> <span style="color:#000;">(20 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

          </div>
        `;
	} else if (operatore == "homobile") {
		contenitore.innerHTML = `
          <div class="offerte-container">
            <div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>Power Supreme Limited MNP</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>100 GB in 5G</strong> <span style="color:#000;">(9 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>Power Supreme Limited MNP</h2>
 <br><br>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>100 GB in 5G</strong> <span style="color:#000;">(9 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>One Go MNP</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">9,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(10 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>One Go MNP</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">9,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(10 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>
          </div>
        `;
	} else if (operatore == "very") {
		contenitore.innerHTML = `
          <div class="offerte-container">
            <div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>Power Pro MNP</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">8,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(20 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

          
            <div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>Power Pro MNP</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">8,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(20 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>


<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2 style="color: #ff2a00;">Steel New GPro MNP</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="4G Icon" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 4G</strong> <span style="color:#000;">(20 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2 style="color: #ff2a00;">Steel New GPro MNP</h2>
  <h2 style="color: #ff2a00;">Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="4G Icon" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>SMS illimitati</strong></li>
    <li style="color: red;"><strong>100 GB IN 4G</strong> <span style="color:#000;">(20 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

          </div>
        `;
	} else if (operatore == "op-vir") {
		contenitore.innerHTML = `
          <div class="offerte-container">
            <div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>Special Per Te New MNP</h2><br><br>
  <div class="price-badge">
    <span class="price-main">9,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(11 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>Special Per Te New MNP</h2>
  <h2>Ricarica automatica</h2>
  <div class="price-badge">
    <span class="price-main">9,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Ultra" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(11 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>Young Full</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G ULTRA" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>200 GB in 5G ULTRA</strong> <span style="color:#000;">(9 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>5€</strong></div>
  <br><div class="condizione">Solo se hai meno di 30 anni.</div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>Young Full</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G ULTRA" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>200 GB in 5G ULTRA</strong> <span style="color:#000;">(9 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>5€</strong></div>
  <br><div class="condizione">Solo se hai meno di 30 anni.</div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>Supreme GPro MVNO</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">5,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Icon" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li style="color: red;"><strong>50 GB IN 5G</strong> <span style="color:#000;">(7 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>Supreme GPro MVNO</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">5,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Icon" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li style="color: red;"><strong>50 GB IN 5G</strong> <span style="color:#000;">(7 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>Power Iron MVNO</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">12€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Icon" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>150 GB IN 5G</strong> <span style="color:#000;">(8 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>Power Iron MVNO</h2>
  <h2>Ricarica Automatica</h2>
  <div class="price-badge">
    <span class="price-main">12€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Icon" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>150 GB IN 5G</strong> <span style="color:#000;">(8 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">CREDITO RESIDUO MNP</div>
  <h2>Power Supreme MVNO</h2>
  <br><br>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Icon" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>100 GB IN 5G</strong> <span style="color:#000;">(8 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>

<div class="promo-card tim-ultra-card">
  <div class="promo-header">RICARICA AUTOMATICA MNP</div>
  <h2>Power Supreme MVNO</h2>
  <h2>Ricarica automatica</h2>
  <div class="price-badge">
    <span class="price-main">7,99€</span><span class="price-sub">/mese</span>
    <img src="img/5g-logo.png" alt="5G Icon" class="icon-5g">
  </div>
  <ul class="promo-details">
    <li><strong>Minuti illimitati</strong></li>
    <li><strong>200 SMS</strong></li>
    <li style="color: red;"><strong>200 GB IN 5G</strong> <span style="color:#000;">(8 GB in roaming UE)</span></li>
  </ul>
  <div class="activation-cost">Costo di attivazione: <strong>12€</strong></div>
</div>
          </div>
        `;
	}
}
function mostraOpzioni3D(tipo) {
	const contenitore = document.getElementById("contenuto-3d");
	contenitore.classList.remove("hidden");
	if (tipo == "souvenir") {
		contenitore.innerHTML = `
			<h1>ciao</h1>
		`;
	}
}

function mostraPromoSky(tipo) {
	const contenitore = document.getElementById("contenuto-sky");
	contenitore.classList.remove("hidden");
	if (tipo == "mobile") {
		contenitore.innerHTML = `
					<div class="sky-wrapper">
  <div class="sky-card">
    <div class="sky-header">Sky Mobile</div>
    <div class="sky-price-badge">
      <span class="sky-price-main">8,95€</span><span class="sky-price-sub">/mese</span>
      <div class="sky-5g-badge">5G<br>nelle aree<br>coperte</div>
    </div>
    <ul class="sky-features">
      <li><strong>Minuti illimitati</strong></li>
      <li><strong>100 SMS</strong></li>
      <li><span class="sky-gb">150 GB</span></li>
      <li><strong>14 GB In Roaming UK, UE, Ucraina, Svizzera</strong></li>
    </ul>
    <div class="sky-footer">Addebito iniziale in fattura: <strong>18,95€*</strong></div>
  </div>

  <div class="sky-card">
    <div class="sky-header">Sky Mobile Full</div>
    <div class="sky-price-badge">
      <span class="sky-price-main">10,95€</span><span class="sky-price-sub">/mese</span>
      <div class="sky-5g-badge">5G<br>nelle aree<br>coperte</div>
    </div>
    <ul class="sky-features">
      <li><strong>Minuti illimitati</strong></li>
      <li><strong>100 SMS</strong></li>
      <li><span class="sky-gb">200 GB</span></li>
      <li><strong>17 GB In Roaming UK, UE, Ucraina, Svizzera</strong></li>
    </ul>
    <div class="sky-footer">Addebito iniziale in fattura: <strong>20,95€*</strong></div>
  </div>

  <div class="sky-card">
    <div class="sky-header">Sky Mobile Maxi</div>
    <div class="sky-price-badge">
      <span class="sky-price-main">12,95€</span><span class="sky-price-sub">/mese</span>
      <div class="sky-5g-badge">5G<br>nelle aree<br>coperte</div>
    </div>
    <ul class="sky-features">
      <li><strong>Minuti illimitati</strong></li>
      <li><strong>100 SMS</strong></li>
      <li><span class="sky-gb">300 GB</span></li>
      <li><strong>20 GB In Roaming UK, UE, Ucraina, Svizzera</strong></li>
    </ul>
    <div class="sky-footer">Addebito iniziale in fattura: <strong>22,95€*</strong></div>
  </div>
	<div class="sky-wrapper">
		<!-- Sky Mobile -->
		<div class="sky-card">
			<div class="sky-header">Sky Mobile</div>
			<div class="sky-price-badge"> <span class="sky-price-main">8,95€</span><span class="sky-price-sub">/mese</span>
				<div class="sky-5g-badge">5G<br>nelle aree<br>coperte</div>
			</div>
			<ul class="sky-features">
				<li><strong>Minuti illimitati</strong></li>
				<li><strong>100 SMS</strong></li>
				<li><span class="sky-gb">150 GB</span></li>
				<li><strong>14 GB In Roaming UK, UE, Ucraina, Svizzera</strong></li>
			</ul>
			<div class="sky-footer">Ricarica iniziale: <strong>20€*</strong></div>
		</div> <!-- Sky Mobile Full -->
		<div class="sky-card">
			<div class="sky-header">Sky Mobile Full</div>
			<div class="sky-price-badge"> <span class="sky-price-main">10,95€</span><span class="sky-price-sub">/mese</span>
				<div class="sky-5g-badge">5G<br>nelle aree<br>coperte</div>
			</div>
			<ul class="sky-features">
				<li><strong>Minuti illimitati</strong></li>
				<li><strong>100 SMS</strong></li>
				<li><span class="sky-gb">200 GB</span></li>
				<li><strong>17 GB In Roaming UK, UE, Ucraina, Svizzera</strong></li>
			</ul>
			<div class="sky-footer">Ricarica iniziale: <strong>25€*</strong></div>
		</div> <!-- Sky Mobile Maxi -->
		<div class="sky-card">
			<div class="sky-header">Sky Mobile Maxi</div>
			<div class="sky-price-badge"> <span class="sky-price-main">12,95€</span><span class="sky-price-sub">/mese</span>
				<div class="sky-5g-badge">5G<br>nelle aree<br>coperte</div>
			</div>
			<ul class="sky-features">
				<li><strong>Minuti illimitati</strong></li>
				<li><strong>100 SMS</strong></li>
				<li><span class="sky-gb">300 GB</span></li>
				<li><strong>20 GB In Roaming UK, UE, Ucraina, Svizzera</strong></li>
			</ul>
			<div class="sky-footer">Ricarica iniziale: <strong>25€*</strong></div>
		</div>

		<div class="internazionale-banner">
  <img src="img/chiamate-internazionali-icon.png" alt="Chiamate internazionali" class="internazionale-icon">
  <div class="internazionale-text">
    <strong>Chiamate internazionali incluse<br>verso 60 destinazioni internazionali.</strong>
  </div>
</div>
	</div>


		`;
	}
}
