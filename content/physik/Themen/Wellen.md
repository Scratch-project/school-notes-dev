# Wellen

## Einführung in die Wellenlehre

Die einzigen Oszillatoren sind die Träger der Wellen und nur durch Kopplung kann Energie übertragen werden und somit entstehen Wellen.

![Image](../Materiellen/Kopplung.jpg)

### Grundlegende Begriffe

- **Wellenlänge (λ)**: Der Abstand zwischen zwei aufeinanderfolgenden Bergen oder Tälern einer Welle; entspricht der Strecke, die eine Welle während einer vollständigen Schwingung zurücklegt.
- **Periodendauer (T)**: Die Zeit, die für eine vollständige Schwingung eines Oszillators benötigt wird.
- **Frequenz (f)**: Anzahl der Schwingungen pro Zeiteinheit; umgekehrt proportional zur Wellenlänge (λ ~ 1/f).
- **Ausbreitungsgeschwindigkeit (c)**: Geschwindigkeit, mit der sich die Wellenform im Medium fortbewegt; hängt von der Kopplung bzw. Härte des Mediums ab.
- **Schnelle (v)**: Beschreibt die Geschwindigkeit der einzelnen Oszillatoren innerhalb einer Welle (nicht zu verwechseln mit der Ausbreitungsgeschwindigkeit).
- **Beugung**: Die Ablenkung einer Welle an einem Hindernis.
- **Phase**: Wie weit ein Punkt auf der Welle in seinem Muster fortgeschritten ist. Sie wird in Winkel angegeben.

### Phasendifferenz und Interferenz

**Phasendifferenz (Δφ)**: Unterschied der Phasen zweier Punkte. Wenn zwei Wellen gleicher Frequenz unterschiedliche Phasen haben, dann ist die Phasendifferenz der Winkel, um den eine Welle gegenüber der anderen verschoben ist.

$$\boxed{\Delta \phi = \phi_2 - \phi_1}$$

**Interferenz**: Überlagerung von Wellen, wobei sich ihre Amplituden addieren (konstruktive Interferenz) oder subtrahieren (destruktive Interferenz).

- **Konstruktive Interferenz**: Tritt auf, wenn die Phasendifferenz ein ganzzahliges Vielfaches von 2π ist (0°, 360°, 720°, usw.). Die Amplituden der Wellen addieren sich.
- **Destruktive Interferenz**: Tritt auf, wenn die Phasendifferenz ein ungerades Vielfaches von π ist (180°, 540°, usw.). Die Amplituden der Wellen subtrahieren sich und können sich gegenseitig aufheben.

### Stehende Wellen

**Stehende Wellen**: Entstehen durch Interferenz zweier Wellen gleicher Frequenz und Amplitude, die in entgegengesetzte Richtung laufen. Charakteristisch sind feste Punkte ohne Auslenkung (Knoten) und Punkte maximaler Auslenkung (Bäuche).

> **Wichtiger Zusammenhang**
> Die Anzahl der Bäuche und Knoten steht in direktem Zusammenhang mit der Frequenz der Welle.

### Wellenarten

- **Longitudinalwelle**: Oszillation erfolgt in Ausbreitungsrichtung der Welle (z.B. Schallwellen).
- **Transversalwelle**: Oszillation erfolgt senkrecht zur Ausbreitungsrichtung der Welle (z.B. Wasserwellen, elektromagnetische Wellen).
- **Wellenfront**: Eine Fläche, auf der alle Oszillatoren den gleichen Schwingungszustand aufweisen.
- **Ebene Welle**: Wellenfront bildet eine Ebene.
- **Kreiswelle**: Wellenfront bildet konzentrische Kreise.

### Reflexion

- **Festes Ende**: Ein Wellenberg wird als Wellental reflektiert und umgekehrt; es kommt zu einer Phasenverschiebung um 180° (Phasensprung).
- **Freies Ende**: Ein Wellenberg wird als Wellenberg reflektiert; die Auslenkung wird ohne Phasenverschiebung reflektiert.

### Beugung und Huygens-Prinzip

- **Beugung**: Ablenkung einer Welle an einem Hindernis, wodurch die Welle in den geometrischen Schattenraum gelangt.
- **Elementarwelle**: Kreiswelle, die von einer schmalen Öffnung erzeugt wird.
- **Huygens-Prinzip**: Jeder Punkt einer Wellenfront kann als Ausgangspunkt einer neuen Elementarwelle betrachtet werden. Die Einhüllende aller Elementarwellen bildet die neue Wellenfront.

### Praktische Hinweise

- **Harmonische Wellen** zeichnen sich durch harmonische Schwingung der einzelnen Oszillatoren sowie durch konstante Amplitude und Frequenz aus; ihre Oszillatoren schwingen meistens sinusförmig.
- Die Messgenauigkeit der Wellenlänge erhöht sich mit der Anzahl der gemessenen Wellen. Eine präzise Messung erfolgt durch Zählen der Maxima und anschließende Division durch deren Anzahl.

## Ausbreitungsgeschwindigkeit und Auslenkung

### Fundamentale Wellenformeln

**Ausbreitungsgeschwindigkeit und Wellenlänge:**

$$\boxed{c = \frac{\lambda}{T} = \lambda \cdot f}$$

**Auslenkung einer harmonischen Welle:**

$$\boxed{s(X,t) = A \cdot \sin\left[2\pi\left(\frac{t}{T} - \frac{X}{\lambda}\right)\right]}$$

wobei:

- $c$ → Ausbreitungsgeschwindigkeit
- $λ$ → Wellenlänge
- $T$ → Schwingungsdauer
- $s(X,t)$ → Auslenkung
- $A$ → Amplitude der Welle
- $t$ → Zeit
- $X$ → Ort bzw. Position

![Image](../Materiellen/Wellengleichung.png)

> **Hinweis zur Phasenverschiebung**
> Ein Vergleich zweier Oszillatoren kann durch die Bestimmung der Phasenverschiebung durchgeführt werden. Dazu wählt man einen Punkt auf einem Graph und schaut, wie viel der andere Graph vom ersten zeitlich verschoben ist, teilt diesen Wert durch die Schwingungsdauer und multipliziert mit $2 \cdot \pi$.

## Polarisation

Polarisation bedeutet, eine Welle **auf eine Ebene zu beschränken**.

<style>
.responsive-table {
    width: 100%;
    overflow-x: auto;
    margin: 1em 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.responsive-table table {
    width: 100%;
    min-width: 800px;
    border-collapse: collapse;
    background: white;
}

.responsive-table th,
.responsive-table td {
    padding: 12px 16px;
    text-align: left;
    border: 1px solid #e0e0e0;
    word-wrap: break-word;
    max-width: 300px;
}

.responsive-table th {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 10;
}

.responsive-table tr:nth-child(even) {
    background-color: #f8f9fa;
}

.responsive-table tr:hover {
    background-color: #e3f2fd;
    transition: background-color 0.2s ease;
}

@media (max-width: 768px) {
    .responsive-table {
        font-size: 14px;
    }
    
    .responsive-table th,
    .responsive-table td {
        padding: 8px 12px;
        max-width: 200px;
    }
}

.responsive-table::-webkit-scrollbar {
    height: 8px;
}

.responsive-table::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.responsive-table::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
}

.responsive-table::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
</style>

<div class="responsive-table">

| **Eigenschaft** | **Longitudinale Wellen** | **Transversale Wellen** |
|-----------------|--------------------------|--------------------------|
| **Schwingungsrichtung** | Parallel zur Ausbreitungsrichtung | Senkrecht zur Ausbreitungsrichtung |
| **Beispiele** | Schallwellen, Druckwellen in Flüssigkeiten und Gasen | Lichtwellen, elektromagnetische Wellen, Wasserwellen |
| **Polarisierbarkeit** | Nicht möglich | Möglich, da Schwingungen in verschiedenen Ebenen erfolgen |
| **Intensitätsänderung bei Polarisationswinkeln** | - | Hängt vom Winkel zwischen zwei Polarisatoren ab: $I = I_0 \cos^2(\theta)$ |
| **Winkelabhängigkeit der Intensität** | - | $0°$: Maximale Intensität $I = I_0$<br>$30°$: $I = I_0 \cos^2(30°) \approx 0.75 I_0$<br>$45°$: $I = I_0 \cos^2(45°) \approx 0.5 I_0$<br>$60°$: $I = I_0 \cos^2(60°) \approx 0.25 I_0$<br>$90°$: Keine Intensität $(I = 0)$ |
| **Mathematische Interpretation** | - | $I \propto A^2$ → Intensität ist das Quadrat der Amplitude der Welle |
| **Physikalische Erklärung** | Energie breitet sich durch Druckunterschiede aus | Polarisationsfilter reduzieren die Amplitude je nach Winkel |

</div>

## Stehende Wellen

Wenn eine Welle auf ein festes Ende trifft, wird sie reflektiert. Dabei kehrt die Welle ihre Ausrichtung um. Das bedeutet, dass ein Berg (ein Punkt der Welle mit maximaler positiver Amplitude) als Tal (ein Punkt der Welle mit maximaler negativer Amplitude) reflektiert wird und umgekehrt.

Wenn die ursprüngliche Welle und die reflektierte Welle aufeinandertreffen, überlagern sie sich. Dieser Prozess wird als **Interferenz** bezeichnet. Die Interferenz von zwei Wellen gleicher Frequenz und Amplitude, die in entgegengesetzte Richtungen laufen, führt zur Bildung von **stehenden Wellen**.

### Eigenschaften stehender Wellen

Bei stehenden Wellen wechseln sich Bereiche minimaler Amplitude (**Knoten**) und maximaler Amplitude (**Bäuche**) ab:

- Wenn beide Wellen zur gleichen Zeit dieselbe Ausrichtung haben, entsteht an dieser Stelle ein Extrempunkt der Gesamtwelle (**Bauch**).
- Wenn beide Wellen zur gleichen Zeit entgegengesetzte Ausrichtungen haben, liegt an dieser Stelle eine **Nullstelle der Gesamtwelle (Knoten)** vor.

> **Energietransport**
> Stehende Wellen transportieren **keine Nettoenergie durch das Medium**, da sich die Energie zwischen Knoten und Bäuchen lokal speichert und hin- und herpendelt.

### Reflexion am festen Ende

Bei Reflexion am festen Ende bilden sich stehende Wellen aus, wenn die Länge l des Mediums ein Vielfaches der halben Wellenlänge ist:

$$\boxed{l = n \cdot \frac{\lambda}{2}}$$

Der Abstand zweier Knoten beträgt immer:

$$\boxed{\frac{\lambda}{2}}$$

![Image](../Materiellen/Bestimmung%20der%20Schallgeschwendigkeit.jpeg)

### Reflexion am losen Ende

Bei Reflexion am losen Ende bilden sich stehende Wellen aus, wenn die Länge l des Mediums ein ungerades Vielfaches der viertel Wellenlänge aufweist:

$$\boxed{l = (2n-1) \cdot \frac{\lambda}{4}}$$

Der Abstand zweier Knoten beträgt immer:

$$\boxed{\frac{\lambda}{2}}$$

### Grundschwingung und Oberfrequenzen

> **Schwingungsformen**
> - **Grundschwingung**: Die einfachste Schwingungsform einer stehenden Welle
> - **Grundfrequenz**: Die Frequenz der Grundschwingung
> - **Oberfrequenzen**: Alle höheren Frequenzen, die ganzzahlige Vielfache der Grundfrequenz sind
> - **Eigenfrequenzen**: Sowohl die Grundfrequenz als auch die Oberfrequenzen

## Interferenzphänomene

### Grundprinzipien

Mechanische Wellen breiten sich aus, ohne einander zu beeinflussen. An Überlagerungspunkten kommt es zu:

- **Konstruktive Interferenz**: Wellen verstärken sich
- **Destruktive Interferenz**: Wellen löschen sich aus

### Huygens-Prinzip

- Jeder Punkt einer Wellenfront ist Ausgangspunkt einer kreis- oder kugelförmigen Elementarwelle
- Die Überlagerung (Einhüllende) aller Elementarwellen ergibt die neue Wellenfront

### Allgemeine Bedingungen für Interferenz

Für zwei phasengleiche Sender gilt:

**Maximum**: Wegunterschied ist Vielfaches der Wellenlänge:
$$\boxed{\Delta s = n \cdot \lambda}$$

**Minimum**: Wegunterschied ist ungerades Vielfaches der halben Wellenlänge:
$$\boxed{\Delta s = \frac{(2n-1) \cdot \lambda}{2}}$$

**Hauptmaximum** (0. Ordnung):
$$\boxed{\Delta s = 0}$$

wobei $n$ = Ordnungszahl [1, 2, 3, ...] und $\lambda$ = Wellenlänge [m]

### Interferenz am Doppelspalt

#### Beobachtungen

- Abwechselnde helle und dunkle Streifen auf dem Schirm
- Hauptmaximum (0. Ordnung) in der Mitte
- Symmetrische Anordnung der Maxima und Minima

**Bei Licht**: Drei rote Streifen sind am Schirm zu sehen. Zwischen den Streifen ist eine schwarze Fläche. Der mittlere Streifen ist länger und heller als die beiden äußeren Streifen.

**Bei weißem Licht**: Das Maximum 0. Ordnung erscheint als heller weißer Streifen. Das Maximum 1. Ordnung zeigt ein Spektrum, das nach Wellenlängen geordnet ist: Blau liegt näher am Maximum 0. Ordnung, während Rot weiter entfernt ist.

#### Funktionsweise

- Die Spalte wirken wie zwei reale Sender
- Elementarwellen werden in der Mitte jedes Spalts erzeugt und schwingen in Phase
- Interferenzmuster entsteht durch Überlagerung der Wellen

#### Übergang vom Doppelspalt zum Gitter

Die Hauptunterschiede zwischen Doppelspalt und Gitter sind:

1. **Schärfe der Maxima**: Beim Gitter werden die Hauptmaxima sehr viel schärfer und heller als beim Doppelspalt.
2. **Nebenstrukturen**: Ein Gitter mit N Spalten erzeugt zwischen zwei Hauptmaxima (N-2) Nebenmaxima und (N-1) Minima.

### Geometrische Beziehungen

![Image](../Materiellen/Doppelspalt%20und%20winkeln.png)

Für kleine Winkel gilt: $\tan(\alpha) \approx \sin(\alpha)$

**Zusammenhang zwischen Winkel und Position:**
$$\boxed{\tan(\alpha) = \frac{a}{L}}$$

**Zusammenhang zwischen Winkel und Gangunterschied:**
$$\boxed{\sin(\alpha) = \frac{\Delta s}{g}}$$

wobei:
- $a$ = Abstand des Maximums/Minimums zum Hauptmaximum [m]
- $L$ = Abstand zum Schirm [m]
- $\Delta s$ = Gangunterschied [m]
- $g$ = Spaltabstand, (für Gitter ist es die Gitterkonstante) [m]

### Interferenzformeln

**Maxima** (n. Ordnung):
$$\boxed{n \cdot \lambda = g \cdot \sin(\alpha) = g \cdot \frac{a_n}{L}}$$

**Minima** (n. Ordnung):
$$\boxed{\frac{(2n-1) \cdot \lambda}{2} = g \cdot \sin(\alpha) = g \cdot \frac{a_n}{L}}$$

wobei:
- $n$ = Ordnungszahl [1, 2, 3, ...]
- $\lambda$ = Wellenlänge [m]
- $g$ = Spaltabstand [m]
- $a_n$ = Abstand des n-ten Minimums zum Hauptmaximum [m]
- $L$ = Abstand zum Schirm [m]

### Allgemeine Formel

Für Spaltabstand $g$ viel kleiner als Abstand zum Schirm $L$ gilt:

**Maxima:**
$$\boxed{n \cdot \frac{\lambda}{g} = \sin\left[\arctan\left(\frac{a_n}{L}\right)\right]}$$

**Minima:**
$$\boxed{\frac{2n-1}{2} \cdot \frac{\lambda}{g} = \sin\left[\arctan\left(\frac{a_n}{L}\right)\right]}$$

### Herleitung

![Image](../Materiellen/IMG_0259.png)
![Image](../Materiellen/IMG_0261.png)

### Bragg-Reflexion

![Image](../Materiellen/IMG_0260%201.png)

Reflexion von Wellen an Netzebenen eines Kristalls.

**Bragg-Bedingung:**
$$\boxed{2 \cdot d \cdot \sin(\theta) = k \cdot \lambda}$$

wobei:
- $d$ = Netzebenenabstand [m]
- $\theta$ = Glanzwinkel [rad]
- $k$ = Ordnung der Reflexion [1, 2, 3, ...]
- $\lambda$ = Wellenlänge [m]

### Brechungsprinzip und Brechungsgesetz

Richtungsänderung von Wellen beim Übergang zwischen Medien mit unterschiedlichen Ausbreitungsgeschwindigkeiten.

Beim Übergang ändern sich:
- Wellenlänge ($\lambda$)
- Phasengeschwindigkeit ($c$)

Konstant bleiben:
- Frequenz ($f$)
- Periodendauer ($T$)

**Brechungsgesetz:**
$$\boxed{\frac{\sin(\alpha)}{\sin(\beta)} = \frac{c_{ph,1}}{c_{ph,2}}}$$

wobei:
- $\alpha$ = Einfallswinkel [rad]
- $\beta$ = Brechungswinkel [rad]
- $c_{ph,1}$ = Phasengeschwindigkeit im Medium 1 [m/s]
- $c_{ph,2}$ = Phasengeschwindigkeit im Medium 2 [m/s]

## Praktische Hinweise und Messungen

### Messgenauigkeit

- Der **Laser** ist genauer als eine LED, da die Maxima schmaler und die Grenzen zu den Minima deutlicher sind.
- Experimentelle Maßnahmen zur Reduzierung der Messunsicherheit:
  - Abstand zwischen Schirm und Doppelspalt erhöhen
  - Ablesen von Maxima höherer Ordnung

### Intensitätsverhalten

Wenn der Abstand zwischen dem Schirm und dem Spalt vergrößert wird, dann:
- Sinkt die Intensität bzw. die Amplitude (Licht verteilt sich über größere Fläche)
- Wird der Abstand zwischen den Maxima größer

## Aufgaben

[Übungsaufgaben zur Ausbreitung von Wellen2020.pdf](../Materiellen/Übungsaufgaben%20zur%20Ausbreitung%20von%20Wellen2020.pdf)

[Ultraschall.pdf](../Materiellen/Ultraschall.pdf)
