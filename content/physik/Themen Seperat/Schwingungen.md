## Einstieg Schwingungen

### Wichtige Begriffe

- **Die Ruhelage**: Die Gleichgewichtsposition des Oszillators.  
- **Die Amplitude ($A$)**: Die maximale Auslenkung (obere oder untere) von der Ruhelage.  
- **Die Elongation ($y$)**: Alle Positionen außer der maximalen Auslenkung, bzw. der Abstand von der Ruhelage.  
- **Die Periodendauer ($T$)**:  
  - Die Zeit für eine vollständige Hin- und Herbewegung.  
  - Sie ist konstant bei einem harmonischen Oszillator.  
  - Sie wird kleiner bei einem gedämpften Oszillator.  
- **Die Masse ($m$)**: Die Masse in Kilogramm ($kg$).  
- **Die Richtgröße ($D$)**: $D=m\cdot\omega^2$ ist eine Proportionalitätskonstante wie Federkonstante 
- **Die Frequenz ($f$)**:  
  - Definiert als $f = \frac{1}{T}$.  
  - Die Anzahl der Schwingungen pro Sekunde in Hertz ($Hz$).  
- **Phasenwinkel:**
   - Definiert als $ϕ=ω⋅t$
   - Wie weit eine Schwingung *zeitlich verschoben* ist. Winkel zur einer Zeit in Radiant $rad$
- **Die Winkelgeschwindigkeit ($\omega$)**:  
  - Definiert als $\omega = \frac{2\pi}{T} = 2 \cdot \pi \cdot f =\frac{ϕ}{t}​​$ 
  - Die Einheit: Radiant pro Sekunde ($rad/s$).  
- **Die Länge des Fadenpendels ($l$)**: Die Länge des Pendels in Metern ($m$)  
- **Der Ortsfaktor ($g$)**:  
  - Die Beschleunigung aufgrund der Schwerkraft.  
  - Auf der Erde: $g = 9,81 \, m/s^2$ 
  - **Zusammenhang zwischen Dämpfung, Abklingen (nachlassen) & Periodendauer**
	  - *Stärkere Dämpfung* → *schnelleres Abklingen* der Amplitude → größere *Periodendauer*
	  - *Schwächere Dämpfung* → *langsameres Abklingen* der Amplitude → nahezu gleicher *Periodendauer*
  - **Erzwungene Schwingung**:
	  - Kontinuierliche Energiezufuhr von außen, um Energieverluste (z. B. durch Dämpfung) auszugleichen.
	  - wird als *Sinuskurve* dargestellt, da die Amplitude konstant bleibt.
	  - und als *harmonische Schwingung* bezeichnet, wenn die äußere Kraft sinusförmig ist.

- ![Image](./Materiellen/Harmonische%20Schwingung.png)
	- Warum eine Sinuskurve ?
	Die Bewegung eines harmonischen Oszillators kann als **Sinuskurve** dargestellt werden, weil sie die **Projektion einer seitlich betrachteten Kreisbewegung** entspricht.
	- *Versuch dazu:* Wird eine rotierende Masse von einer Lampe von der Seite aus angestrahlt, so gleicht die dann die eindimensionale Bewegung der Bewegung des harmonischen Oszillators. Somit ist es auch zulässig, dass der harmonische Oszillator (schwingungsfähiges System) als rotierender Zeiger oder als eine Sinus kurve betrachtet wird.  
	 ![Image](./Materiellen/Skizze%20zur%20Begründung%20der%20Sinuskruve%20bei%20harmonischen%20Oszillator.png)

### Die Drei-Regel zur harmonischen Schwingung

![Image](./Materiellen/t-(s,v,a)%20Diagramme%20und%20Winkelgeschwindigkeit.png)

Die **Rückstellkraft** $F(t)=−D⋅s(t)$ beschreibt die Kraft, die ein schwingungsfähiges System zurück in die Ruhelage bringt ($D=m\cdot\omega^2$ ist Richtgröße bzw. معيار wie Federkonstante). Sie ist **proportional** zur Auslenkung. Die Kraft muss immer zur Ruhelage zurückführen. (Bedingung einer mechanischen harmonischen Schwingung.) Diese Kraft führt zu einer **Beschleunigung** des Körpers, die durch das  $F=m⋅a$ beschrieben wird. Somit kann man beide Kräfte gleichsetzten und man erhält die **Differentialgleichung der harmonischen Schwingung:**
- Zeit-Weg-Gesetz: $$s(t)=A \cdot sin(\omega\cdot t)$$
- Zeit-Geschwindigkeit-Gesetz: $$v(t)=A \cdot \omega \cdot cos(\omega\cdot t)$$
- Zeit-Beschleunigung-Gesetz: $$a(t)=-\omega^2\cdot A\cdot\sin(\omega\cdot t)=-\omega^2\cdot s\left(t\right)$$



## Harmonische Schwingung am Federpendel

![[Vertical-mass-on-spring.svg | 500]]

Hier gibt es nicht viel zu machen, außer diesen Größen auszuwerten mit den 5 Schritten. Die Proportionalitätskonstante kann mann durch linearisierung bestimmen. Also durch $t$-$\sqrt{\frac{m}{D}}$ Graph und dann die Steigung bestimmen. Oder durch einsetzten in die Formel und mit verschiedenen $T$ vergleichen und den durchschnitt bilden.

- Die Amplitude hat keinen Einfluss auf die Periodendauer
- **$T \propto \sqrt{m}$**: Je größer die Masse, desto länger die Periodendauer.  
- **$T \propto \frac{1}{\sqrt{D}}$**: Je größer die Federkonstante, desto kürzer die Periodendauer.  
- **Formel**: $$T = 2\pi \sqrt{\frac{m}{D}}$$
- Der Ortsfaktor $g$  spielt beim Federpendel keine Rolle, weil sich die Gravitationskraft $F_g = m \cdot g$  und die Federkraft $F_F = D \cdot s_0$  im Gleichgewicht *ausgleichen*

## Harmonische Schwingung am Fadenpendel

![Image](./Materiellen/Fadenpendel.jpg)

Kräfte beim Fadenpendel
- **Gewichtskraft** $F_G = m\cdot g$ (zeigt nach unten und sorgt für Bewegung, aber nur zum Teil)
- **Seilspannung** $F_s$ (Parallel zum Faden und sorgt für Spannung des Seil)
- **Rückstellkraft** $F_r = -m\cdot g\cdot \sin(\theta)$ (verantwortlich für die Schwingung, zeigt immer zur Ruhelage hin und zeigt tangential zum Kreisbogen hin)



- Die Amplitude hat keinen Einfluss auf die Periodendauer
- **$T \propto \sqrt{l}$**: Je größer die Pendellänge, desto länger die Periodendauer.  
- **$T \propto \frac{1}{\sqrt{g}}$**: Je größer die Erdbeschleunigung, desto kürzer die Periodendauer.  

--> Für kleine Auslenkungen folgt eine harmonische Schwingung mit der Näherung: $$T = 2\pi \sqrt{\frac{l}{g}}$$
wobei:
- $T$ : Periodendauer in $s$
- $l$ : Pendellänge in $m$
- $g$ : Erdbeschleunigung in $9,81 m/s²$
- Bedingungen:
	- Die Schwingungsdauer hängt nicht von der Masse des Pendels.
	- Bei größerem $l$ ist $T$ größer.
	-  Die Formel gilt nur für kleine Winkel ($\theta < 10^\circ$) da sonst keine harmonische Schwingung mehr vorliegt, da die Strecke bei der Herleitung der Rückstellkraft nicht den Kreisbogen gut annähert (Siehe S.96).


## Resonanz, Energie & Gedämpfte Schwingung 

### Energie

Die Energie einer harmonischen Schwingung ist bei Vernachlässigung von Reibungskräften konstant und besteht aus potenzieller und kinetischer Energie zusammen:
$$E=E_{pot}+E_{kin}=m\cdot g\cdot h+\frac{1}{2}m\cdot v^2$$

Sie lässt sich anhand $t$-$s$ & $t$ - $v$ Diagramm ableiten. 

*Hints:*
- bei gedämpfte Schwingung geht bei jeder Umwandlung zwischen $E_{kin}$ und $E_{pot}$ Energie in Form von Wärme verloren.


### Gedämpfte Schwingung
(hier auch gibt es nicht viel zu machen. Die folgenden Erklärungen sind eigentlich einfach voneinander abzuleiten;) )

Bei gedämpften Schwingungen nimmt die Amplitude exponentiell ab, wobei das Verhältnis zweier aufeinanderfolgender Amplituden konstant ist. Die Abnahme der Amplitude lässt sich durch $A(t) = A_0 e^{-\gamma \cdot t}$. Wobei $\gamma$ die Dämpfungskonstante in $\frac{1}{s}$ ist.


![Image](./Materiellen/Screenshot%202025-03-09%20at%2016.43.34.png)
Die blaue Kurve zeigt den Verlauf der Auslenkung $s(t)$ einer gedämpften Schwingung in Abhängigkeit von der Zeit. Anfangs hat das System eine maximale Amplitude, aber aufgrund der Dämpfung nimmt die Amplitude mit der Zeit exponentiell ab. 


![Image](./Materiellen/Screenshot%202025-03-09%20at%2016.43.48.png)
Die rote Kurve zeigt die Geschwindigkeit $v(t)$ der Schwingung in Abhängigkeit von der Zeit. Da die Geschwindigkeit die Ableitung des Weges ist, erreicht sie ihr Maximum immer dann, wenn die Auslenkung die Nullstelle passiert. Auch hier sieht man, dass die Amplitude der Geschwindigkeit mit der Zeit exponentiell abnimmt, was zeigt, dass die kinetische Energie durch Dämpfung (z. B. Reibung) verloren geht.


### Resonanz

- Die *Eigenfrequenz* eines Systems ist die Frequenz, mit der es natürlich schwingt, wenn es angestoßen wird. 
- Die *Resonanzfrequenz* hingegen ist die Frequenz, bei der ein externer Antrieb die größte Amplitude in einem schwingenden System erzeugt. 


Schwingende Körper können durch eine *äußere Kraft* zu *erzwungenen Schwingungen* angeregt werden. Wenn die *Frequenz* dieser äußeren *Erregerkraft* mit der *Eigenfrequenz* des Schwingers *übereinstimmt*, erreicht die *Amplitude* der Schwingung ihr *Maximum* – dieser Zustand wird als **Resonanz** bezeichnet. In diesem Moment ist die *Energieübertragung maximal*, und das System nimmt die zugeführte Energie auf und wandelt diese in Schwingungsenergie um. Je *geringer die Dämpfung*, desto *größer ist die Amplitude*, da *weniger Energie* durch *Reibung* oder andere Widerstände *verloren* geht.
- Bei Resonanzfrequenz ist die erregende *äußere Kraft* und die *Geschwindigkeit des Pendels* in *Phase*. Somit folgt eine *maximale Energieübertragung*.
- Wenn die Anregungsfrequenz kleiner oder größer als die Eigenfrequenz ist, dann ist  die erregende äußere Kraft und die Geschwindigkeit des Pendels nicht in Phase. Somit ist die Energieübertragung nicht maximal. 
- Dämpfung ist antiproportional zur Amplitude
- Wenn die Amplitude durch Resonanz so stark ansteigt, dass das System zerstört wird, spricht man von einer *Resonanzkatastrophe*.
- Resonanz kann durch Dämpfung oder Änderung der Erregerfrequenz erreicht.
- Bei $f$-$\Delta ϕ$ (Frequenz-Phasendifferenz) Graph ist Resonanz bei einer Phasendifferenz von $\frac{\pi}{2}$ (ein Viertel-Periode) zu erkennen. Dies liegt daran, dass die Energieübertragung genau bei dieser Verschiebung maximal ist. (Beispiel einer Schaukel: mann schubst wenn der am Schaukeln die maximale Auslenkung erreicht, also die Geschwindigkeit null ist, und das ist genau eine Viertel-Periode).
![Image](./Materiellen/Screenshot%202025-03-09%20at%2017.17.31.png)

*Ein alltägliches Beispiel* 
- **Schaukel**: Wenn Sie in der richtigen Frequenz (der Eigenfrequenz der Schaukel) schwingen, erreichen Sie die größte Höhe. Das ist die Resonanz. Schwingen Sie jedoch in einer anderen Frequenz, erreichen Sie nicht die maximale Höhe.
- **Zerbrechen eines Glases durch einen Ton**: Wenn der Ton die Eigenfrequenz des Glases trifft (die Resonanzfrequenz), kann das Glas zerbrechen, weil die Schwingungen so stark sind.

## Elektromagnetische Schwingung

### Skizze & Erklärung

![Image](./Materiellen/elektrischen%20Schwingkreis%20Schaltbild.jpg)
 
 
Ein *Stromkreis*, der aus einem *Kondensator* und einer *Spule* besteht, wird als *elektrischer Schwingkreis* bezeichnet. In ihm kommt es *während der Entladung* zu *Schwingungen* der *Spannung am Kondensator* sowie der *Stromstärke in der Spule*. Beide Schwingungen sind um 90° gegeneinander versetzt. 
![Image](./Materiellen/Spannung%20und%20Stromverlauf%20beim%20Schwingkreis.png)

- Warum die 90° Versetzung ?
	- Nachdem der **Kondensator vollständig geladen** wurde, beginnt die Schwingung. In diesem Moment ist die **Spannung am Kondensator maximal**, da er die gesamte elektrische Energie gespeichert hat. Da kaum Ladung fließt, ist die **Stromstärke nahezu null**. Die gesamte Energie des Systems liegt im **elektrischen Feld des Kondensators**. Sobald der Kondensator beginnt, sich zu entladen, bewegt sich Ladung durch den Schaltkreis. Dadurch steigt die **Stromstärke**, während die Spannung am Kondensator abnimmt. Gleichzeitig entsteht in der **Spule ein Magnetfeld**, da durch sie nun ein wachsender Strom fließt. Da sich das Magnetfeld aufbaut, tritt eine **Selbstinduktion** auf: Ein sich änderndes Magnetfeld erzeugt eine Gegenkraft, die den Stromfluss verzögert. Diese Verzögerung bewirkt, dass die **Stromstärke nicht gleichzeitig mit der Spannung ihr Maximum** erreichen kann. Wenn die **Spannung am Kondensator null ist**, ist zu diesem Zeitpunkt das **Magnetfeld der Spule maximal** und die gesamte Energie liegt in Form eines **magnetischen Feldes** in der Spule vor. Hier erreicht die Stromstärke ihrer Maximum und das Magnetfeld ist konstant. Danach beginnt das Magnetfeld der Spule sich abzubauen, wodurch der Stromfluss aufrechterhalten wird. Dies führt dazu, dass der **Kondensator nun in umgekehrter Polarität aufgeladen wird**. Während dieser Phase nimmt die Stromstärke wieder ab, da die Energie aus dem Magnetfeld der Spule in den Kondensator zurückgespeist wird. Sobald der Kondensator erneut vollständig geladen ist (aber mit umgekehrter Ladungsverteilung), erreicht die **Spannung wieder ihr Maximum, während die Stromstärke erneut null wird**.





*Hint:* Ein Widerstand sorgt für Dämpfung der Schwingung durch Energieverlust, indem er die elektrische Energie in Wärmeenergie umwandelt. Somit sinkt die gesamte Energie des Systems, wodurch die Spannung abnimmt. Durch die Energie im Kondensator und Spule (Siehe Formel), bewirkt eine Energieabnahme zu einer Spannungsabfall.
#### Erklärung des Spannungs- und Stromverlaufs
(Für Analogie Betrachtung mit Feder-Masse-Pendel siehe Buch S.107)

![Image](./Materiellen/Screenshot%202025-03-09%20at%2017.51.27.png)
In einem elektromagnetischen Schwingkreis beginnt der Prozess mit einem vollständig geladenen Kondensator. Zu diesem Zeitpunkt ist die **Spannung am Kondensator maximal**, da er die gesamte elektrische Energie gespeichert hat. Da jedoch noch kaum Ladung durch den Stromkreis geflossen ist, ist die **Stromstärke nahezu null**.

![Image](./Materiellen/Screenshot%202025-03-09%20at%2017.51.48.png)
Sobald sich Ladung zu bewegen beginnt, nimmt die Stromstärke zu, während die Spannung am Kondensator abfällt. Ein Magnetfeld wird in der Spule erzeugt und durch Stromfluss Änderung ändert sich auch das Magnetfeld. Die Änderung des Magnetfeldes führt zur Induzierung einer Spannung, die die Änderung des Stromflusses hemmt. Je weiter sich der Kondensator entlädt, desto mehr elektrische Energie wird in magnetische Energie im B-Feld der Spule umgewandelt.

![Image](./Materiellen/Screenshot%202025-03-09%20at%2017.52.08.png)
Wenn der Kondensator vollständig entladen ist, erreicht der Stromfluss sein Maximum. Zu diesem Zeitpunkt ist die Spannung am Kondensator gleich null, da keine Ladung mehr gespeichert ist. Gleichzeitig ist das Magnetfeld am stärksten und die gesamte Energie ist in Form einer magnetische Energie. Das Magnetfeld ist aber konstant und somit gibt es keine Spannung in der Spule die den Stromfluss verzögert.



![Image](./Materiellen/Screenshot%202025-03-09%20at%2017.52.22.png)
 Der Kondensator wird nun mit umgekehrter Polarität aufgeladen. Während dieser Phase nimmt die Stromstärke wieder ab, da das Magnetfeld sich abbaut (Magnetfeldänderung führt zu Selbstinduktion, was den Stromfluss verzögert) und seine Energie wieder in den Kondensator zurückfließt.

 ![Image](./Materiellen/Screenshot%202025-03-09%20at%2017.52.47.png)
Schließlich stoppt der Stromfluss vollständig, wenn der Kondensator erneut seine maximale Ladung erreicht hat – allerdings mit umgekehrter Polarität. Hier befindet sich dann die gesamte Energie im elektrischen Feld des Kondensators. 


![Image](./Materiellen/Screenshot%202025-03-09%20at%2017.53.31.png)
Der Zyklus beginnt von Neuem, wobei der Stromfluss nun in die entgegengesetzte Richtung erfolgt. Der Vorgang wiederholt sich, solange keine äußere Dämpfung oder Widerstände die Schwingung abschwächen.



### Frequenz, Kapazität und Induktivität in Schwingkreis (Formel)

Zusammenhang zwischen der Frequenz $f$ und die Größen $L$ & $C$
![Image](./Materiellen/C%20zu%20f%20und%20L%20zu%20f.png)

Daraus folgt:$$f\varpropto\frac{1}{\sqrt{L}}$$$$f\varpropto\frac{1}{\sqrt{C}}$$Also lautet die thomsonsche Gleichung:
$$f=\frac{1}{2\pi}\cdot\frac{1}{\sqrt{L\cdot C}}$$
$$T=2\cdot\pi\cdot\sqrt{L\cdot C}$$








