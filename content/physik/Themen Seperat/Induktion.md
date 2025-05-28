## Induktion

wie in Zahnbürste, Ampellanlagen, Kochherd, Fahrrad Dynamo
### Allgemeine Beobachtungen

Ändert sich ein Magnetfeld in einer Spule z.B. durch Bewegung eines Stabmagneten, so wird in der Spule eine Induktionsspannung $U_{ind}$ induziert.
- Je schneller die Änderung (höhere Geschw.) desto größer die Induktionsspannung.
- Wird die Bewegungsrichtung oder die Polung des Magneten umgekehrt, so ändert sich das Vorzeichen der Induktionsspannung.
- Bei zeitlich konstantem Magnetfeld (keine Änderung) wird keine Spannung induziert.




### Induktionsphänomen

![Induktionsphänomen](./Materiellen/shared-image.jpeg)


Wenn ein *gerades Leiterstück* senkrecht zu den magnetischen Feldlinien bewegt wird, wirkt eine Lorentzkraft auf die Elektronen im Leiter. Die Lorentzkraft verschiebt die Elektronen im Leiter auf eine Seite des Leiters durch die Drei-Finger-Regel der linken Hand. Es kommt zur Ladungstrennung und somit entsteht ein elektrisches Feld. Eine Induktionsspannung ist dann an den enden des Leiters messbar.  In diesem E-Feld wirkt eine Kraft auf die Elektronen entgegengesetzt zu der Lorentzkraft bis die Ladungsverschiebung durch die Kräftegleichgewicht beendet wird. 

Durch $F_el = F_l$ und $U_{ind} = E \cdot d$ ergibt sich: $$U_{ind}=B\cdot v_{s}\cdot d$$
wobei:
- $U_{ind}$ : Induktionsspannung in  $V$
- $B$ : Magnetische Flussdichte in $T=\frac{\text{V} \cdot \text{s}}{\text{m}^2}$
- $v_s$  Geschwindigkeit des Leiters senkrecht zu den Feldlinien in $m/s$
- d  Länge des Leiters im Magnetfeld (effektive Länge) in $m$

### Formeln 

Allgemeine Induktionsgesetz: Induktion tritt auf, wenn sich der magnetische Fluss ändert (Anzahl der Feldlinien, die durch die wirkende Fläche fließen). Der magnetische Fluss ist das Produkt aus B und A. Eine Änderung des magnetischen Flusses kann entweder durch eine Veränderung der Flussdichte **B**, einer Änderung der Fläche **A** oder durch eine Änderung der Orientierung der Fläche relativ zum Magnetfeld verursacht werden. $$U=-n\cdot\frac{\Delta\Phi}{\Delta t}=-n\cdot(\frac{\Delta A}{\Delta t}\cdot B+\frac{\Delta B}{\Delta t}\cdot A)$$
	Durch Flächenänderung ändert sich die Zahl der Feldlinien, die durch die Leiterschleife "fließen": $$U=-n\cdot\frac{\Delta A}{\Delta t}\cdot B$$ 
	Durch Magnetfeldänderung ändert man die Dichte der Feldlinien und somit auch die Zahl der Feldlinien durch die Leiterschleife: (TIPP: Magnetfeld wechselt meist sinusförmig! -> von sinusförmigen Wechselstrom erzeugt) $$U=-n\cdot\frac{\Delta B}{\Delta t}\cdot A$$

Durch Änderung des Stroms in der Feldspule verändert sich die magnetische Feldstärke. Dies führt zu einer Änderung des magnetischen Flusses in der Induktionsspule, wodurch gemäß Faraday eine messbare Induktionsspannung entsteht. (Siehe Skizzen zu unterschiedlichen Versuchen)


wobei:
- $U$ : Induktionsspannung in $V$ 
- $n$ : Anzahl der Windungen 
- $\Delta \Phi$: Änderung des magnetischen Flusses in $\text{Wb}$ (Weber), wobei $\Phi = B \cdot A$ ist.
- $\Delta t$ : Zeitänderung in $s$ (Sekunden)
- $A$ : Fläche der Leiterschleife in $m^2$ 
- $B$ : Magnetische Flussdichte in $T = \frac{V \cdot s}{m^2}$ 
- $\frac{\Delta A}{\Delta t}$ : Änderung der Fläche pro Zeiteinheit in $m^2/s$ 
- $\frac{\Delta B}{\Delta t}$ : Änderung der magnetischen Flussdichte pro Zeiteinheit in $T/s$ 




### Skizzen zu unterschiedlichen Versuchen

![Funktionsgenerator](./Materiellen/Skizze-Funktionsgenerator.png)
![Feldspule](./Materiellen/I-und-Feldspule.png)

![Helmholz Induktion](./Materiellen/Helmholz-Induktion.png)

![Screenshot](./Materiellen/Screenshot-2025-03-08-at-17.06.17.png)
	(Die Spule soll in einem Magnetfeld sein)
	Schallwellen treffen auf die Membran des Mikrofons, wodurch sie in Schwingung versetzt wird. Die Membran ist mit einer Spule verbunden, die sich innerhalb eines Magnetfelds bewegt. Durch diese Bewegung ändert sich der magnetische Fluss durch die Spule, wodurch gemäß dem Induktionsgesetz eine elektrische Spannung erzeugt wird. Das erzeugte elektrische Signal entspricht der ursprünglichen Schallwelle und kann verstärkt werden.


## Induktion durch Wechselspannung
### Unterschied zwischen Gleich- und Wechselstrom

(nur der letzte Teil ist **wichtig**)

1. *Unterschied zwischen Gleich- und Wechselstrom*: Gleichstrom hat eine konstante Polarität und Spannung, während Wechselstrom eine sinusförmige Spannung hat, die zwischen einem Maximal- und einem Minimalwert hin und her schwingt. Als Beispiel für eine Wechselspannungsquelle ist das übliche Stromnetz hernehmen. Hierbei gilt in Deutschland eine Frequenz von 50 Hertz und eine Maximal- und Minimalspannung von 325 Volt bzw. -325Volt.
	-  Die Unterschiede zwischen Gleichstrom und Wechselstrom lassen sich am Beispiel einer Autobatterie verdeutlichen. Hier hat man eine Polarität und eine Gleichspannung von 12 Volt. Im Gegensatz dazu ändert sich bei Wechselstrom die Polarität an den beiden Anschlüssen - im Fall des deutschen Stromnetzes - 50 mal pro Sekunde.

2. *Warum wir Wechselstrom brauchen*: Wechselstrom kann effizienter über weite Entfernungen transportiert werden, ist transformierbar und kostengünstiger zu transportieren als Gleichstrom. Dies liegt an dem Widerstand der Leitungen. Wenn man eine höhere Spannung hat, ist der Verlust weniger und gleichzeitig ist es einfach die Spannung hoch- oder runterzusetzen. 

3. **Erzeugung von Wechselstrom**: Wechselstrom wird durch die konstante Drehung einer Leiterschleife oder Spule in einem Magnetfeld erzeugt. Wenn sich die Spule dreht, ändert sich die wirkende Fläche und dadurch auch der Anzahl der Magnetfeldlinien, die durch die Spule durchgehen. Dies führt zu einer Änderung des magnetischen Flusses durch die Spule. Die Geschwindigkeit, mit der sich der magnetische Fluss ändert, hängt von der Frequenz des Wechselstroms ab. Je höher die Frequenz des Wechselstroms ist, desto schneller ändert sich der magnetische Fluss und desto höher liegt die induzierte Spannung. 

### Deutung des Diagramms von $I$ & $U$

Eigentlich müsste die Spule im Magnetfeld gedreht werden. Dies ist schwierig umzusetzen und darum ändern wir das B-Feld der Feldspule periodisch mit einer Kosinus Funktion. Die Induktionsspannung der Induktionsspule kann dann gemessen werden. 

![Image](./Materiellen/Screenshot%202025-03-08%20at%2015.31.26.png)

Deutung des Diagramms: 
Die Induktionsspannung ist immer dann maximal, wenn die Änderung des B-Feldes der Feldspule maximal ist. 
 - Siehe:  $$U=-n\cdot\frac{\Delta B}{\Delta t}\cdot A$$
 
Bei $t=0$ ist die Änderung der Stromstärke Null und somit $ΔB$ = $0 T/s$. An diesem Punkt ist somit auch die Induktionsspannung $U_{ind} = 0V$. Die Stromstärke steigt dann schneller und somit steigt auch $ΔB$ und dadurch die Induktionsspannung. Beim Nulldurchgang der Stromstärke ist die Änderung des Stromes maximal ebenso die Änderung vom B. Daraus folgt, dass die Induktionsspannung maximal an diesem Punkt ist.

Magnetischer Fluss ist ein Maß für die "Anzahl der magnetischen Feldlinien pro Flächeneinheit." Wenn sich die Spule dreht und somit die Fläche, die von den magnetischen Feldlinien durchdrungen wird, sich ändert, ändert sich auch der magnetische Fluss durch die Spule:
$$\Phi=B\cdot A^{}\cdot\cos\left(\alpha\right)$$
Induktionsspannung:
$$U_{ind}=-n\cdot\left(\frac{d\left(B\cdot A\cdot\cos\alpha\right)}{dt}\right)$$
- Wenn man die drei ableitet, fallen immer die anderen beiden weg, man erhält also drei Formeln, in denen sich jeweils nur eine Große sich ändert und die anderen beiden gleich bleiben.




![Image](./Materiellen/Magnetischer Fluss.pdf)
## Die Lenzsche Regel
### Beobachtung

Wird ein Hufeisenmagnet mit der Nordseite nach Oben in einen am Faden hängenden Aluminium Ring eingeführt, so bewegt sich der Ring in die Richtung in die sich der Magnet bewegt mit. Beim herausziehen geschieht das selbe. Bei umpolung des Magneten passiert das selbe. Je schneller der Magnet sich bewegt desto stärker wird der Ring bewegt. Wenn der Ring nicht geschlossen ist, ist keine Bewegung an ihm zu erkennen.

### Erklärung

Bewegt man einen Magneten auf einen Ring zu, entsteht eine Relativbewegung zwischen dem Magnetfeld und den Elektronen im Ring. Dadurch werden im Ring gemäß der Drei-Finger-Regel der linken Hand durch die Lorentzkraft Elektronen in Bewegung gesetzt, sodass ein Induktionsstrom entsteht. Am unteren Teil des Rings (wo das Magnetfeld von oben nach unten zeigt) wirkt die Lorentzkraft auf die Elektronen aus der Bildebene hinaus. Dies führt zu einem Kreisstromfluss im Ring. Der induzierte Strom erzeugt seinerseits ein Magnetfeld. Nach der **Lenz’schen Regel** wirkt dieses Magnetfeld der Ursache seiner Entstehung entgegen: In diesem Fall wird der Ring vom Magneten weggestoßen.
Wenn man den Magneten **umpolt**, kehrt sich die Richtung des Induktionsstroms um. Dadurch kehrt sich auch das Magnetfeld des Rings um, und es tritt derselbe Effekt auf: Der Ring wird wieder abgestoßen. Zieht man den Magneten aus dem Ring heraus, dann kehrt sich erneut die Richtung des Induktionsstroms um. Das erzeugte Magnetfeld des Rings ist nun entgegengesetzt zum Magnetfeld des Magneten, sodass der Ring **angezogen** wird.

*Der Induktionsstrom ist stets so gerichtet, dass sein Magnetfeld der Induktionsursache entgegen wirkt.*

## Selbstinduktion

Spulen und Kondensatoren sind beide Energiespeicher in elektrischen Schaltungen, speichern jedoch Energie auf unterschiedliche Weise. Eine **Spule speichert Energie in einem magnetischen Feld**, während ein **Kondensator Energie in einem elektrischen Feld** speichert. 

Spule:
$E_L = \frac{1}{2} L I^2$          

Kondensator
$E_C = \frac{1}{2} C U^2$

Strom in der Spule ↔ Spannung am Kondensator
Spannung an der Spule ↔ Strom im Kondensator
Induktivität L ↔ Kapazität C


### Experimente

![Image](./Materiellen/Selbstinduktion-Experiment%201.png)
Also mit dem Widerstand sind die Vorgänge schneller. Und mit Eisenkern sind die Vorgänge auch langsamer.

![Image](./Materiellen/Selbstinduktion-Experiment%202.png)

![Image](./Materiellen/Induktionsspannung%20und%20Widerstand%20Graph.png)
### Erklärung

Beim Ein- und Ausschalten eines Stromkreises mit einer Spule kommt es zu schnellen Änderungen der Stromstärke $\Delta I / \Delta t$. Nach dem Induktionsgesetz
$$U_{\text{ind}} = - L \frac{\Delta I}{\Delta t}$$führt eine schnelle Änderung des Stroms zu einer hohen Induktionsspannung.

  
- **Einschalten des Stromkreises:**
	Beim Einschalten eines Stromkreises mit einer Spule steigt die Stromstärke nicht sofort auf ihr Endniveau an, da die Selbstinduktion der Spule eine Induktionsspannung erzeugt, die der Änderung des Stroms entgegenwirkt. Dies folgt aus der Lenzschen Regel, nach der die Induktionsspannung stets so gerichtet ist, dass sie ihre Ursache entgegenwirkt. Dadurch wird der Stromanstieg verzögert, und die Stromstärke wächst langsamer, bis sie ihren maximalen Wert erreicht. Während dieser Phase wird magnetische Energie in der Spule gespeichert.

- **Ausschalten des Stromkreises:**
	Beim Abschalten des Stromkreises fällt $U_0$ weg und diese gespeicherte Energie wird schnell freigesetzt, was zu einer schnellen Änderung des Stroms und somit zu einer erhöhten Induktionsspannung führt. Diese Spannung wirkt dann seine Ursache (Ausschalten) entgegen und verzögert die Abnahme der Stromstärke. Hier ist dann die Spannung so groß, dass eine Glühlampe leuchtet.

- **Einfluss des Widerstands:**
	$U = I \cdot R$
	Ein großer Widerstand führt zu einer höheren Induktionsspannung und einer schnelleren Stromabnahme, während ein kleiner Widerstand die Stromabnahme verzögert und die Induktionsspannung begrenzt.

- **Einfluss eines Eisenkerns in der Spule:**
	Ein Eisenkern erhöht die Induktivität L, da er das Magnetfeld konzentriert. Dadurch wird die durch die Spule gespeicherte Energie größer und beim Abschalten entsprechend eine höhere Induktionsspannung erzeugt.

---


#### Induktivität

Die **Induktivität** $L$ ist eine Bauteileigenschaft einer Spule, die beschreibt, wie stark sie ein magnetisches Feld aufbauen kann, wenn ein Strom hindurchfließt. Sie gibt an, *wie viel magnetische Flussänderung pro Stromänderung entsteht* und hat die Einheit **Henry (H)**.
$$L=\frac{\mu_0\cdot\mu_{r}\cdot N^2\cdot A}{l}$$
Aus einer **Energiebetrachtung** ergibt sich die Induktivität aus der in der Spule gespeicherten magnetischen Feldenergie. Die Energie $E_{mag}$ eines magnetischen Feldes in einer Spule mit Induktivität L und Strom I ist gegeben durch $$E_{mag} = \frac{1}{2} L I^2$$
Die Induktivität kann also als das *Verhältnis* zwischen der *gespeicherten Energie im Magnetfeld* der Spule und dem *Quadrat des Stroms* definiert werden $L = \frac{2\cdot E_{mag}}{I^2}$


Energie Richtung
![Image](./Materiellen/Selbstinduktion-Energie-Richtung.jpg)

### Herleitung

Beispiel für die Herleitung beiden Formeln:
![Image](./Materiellen/Selbstinduktion-Windungszahl%20und%20L%20Herleitung.jpeg)

Hier muss der Wert für Ivont der gleiche X-wert wie Ipunkt haben. 












