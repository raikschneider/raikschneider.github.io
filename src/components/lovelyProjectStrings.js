const lovelyProjectStrings = {
    en: {
        lovelyH1: `Project Brief`,
        lovelyP1: 'Lovely Manager is a cross-platform desktop application for Berlin frame manufacturing collective Lovely Projects. The app automates cost as well as frame and crate measurement calculations and outputs documents for clients and working instructions for workers.',
        lovelyH2: 'Where is the data coming from?',
        lovelyP2: 'Hundreds of different materials and their respective values necessary for cost and measurement calculations are being stored locally in categorized JSON files. Lovely Manager reads the files and displays materials in dropdown menus in the frontend.',
        lovelyH3: 'What if the data changes?',
        lovelyP3: `The app has a built-in interface to modify individual materials and their data, in case prices or dimensions change in the future. With the help of Node.js on the backend, the user is able to modify, add or delete materials and their respective values.`,
        lovelyH4: 'How does data traverse the app?',
        lovelyP4: `Each selection is stored with the help of React's useContext hook, which allows changes in selection made by the user to be displayed and recalculated live. UseContext allows for easy transfer of data between components within the app.`,
        lovelyH5: 'What if a customer orders multiple frames?',
        lovelyP5: `If an order consists of multiple parts and requires selection of frames and crates of various sizes, the user is able to split their selections into multiple parts with the app being able to separate all calculations and selections made correctly.`,
        lovelyH6: 'What happens when all selections have been made?',
        lovelyP6: `When all selections have been made, documents are created and the order including all its files are being stored locally and can be re-opened at a later time. Orders are categorized by customer and date and are thus easy to find.`,
        lovelyH7: 'Summary',
        lovelyP7: `I was working on this project on and off for over two years. It was a great tool for growing my skills and learning about app design. Working closely with the client and adapting to their feedback and needs was both challenging and rewarding. The app is estimated to save about 15 weekly working hours and thus has a major impact on streamlining working processes and the business as a whole.`,
        lovelyPremiseH3: `Premise`,
        lovelyPremise: `Lovely Projects is a frame manufacturing collective working with artworks that require professional archival framing. Due to the large variety of materials and the pen-and-paper nature of estimating costs in the past, there was a need for digitalization and estimation accuracy, which Lovely Manager is set out to meet.`
    },
    de: {
        lovelyH1: 'Projektbeschreibung',
        lovelyP1: 'Lovely Manager ist eine plattformübergreifende Desktop-Anwendung für die Berliner Rahmenmanufaktur Lovely Projects. Die App automatisiert die Kosten-, sowie die Rahmen- und Kistenmaßberechnungen und gibt Kundendokumente und Laufzettel für die Arbeiter aus.',
        lovelyH2: 'Woher kommen die Daten?',
        lovelyP2: `Hunderte Materialien und die für Berechnungen notwendigen Werte werden lokal in JSON-Dateien kategorisiert und gespeichert. Die Dateien werden vom Lovely Manager ausgelesen und Materialien werden im Frontend via Ausklappmenüs angezeigt.`,
        lovelyH3: 'Was ist, wenn die Daten sich ändern?',
        lovelyP3: 'In der App findet sich außerdem eine Oberfläche, die es dem Nutzer ermöglicht, Materialien und die dazugehörigen Werte zu modifizieren, falls sich Preise und Dimensionen in der Zukunft ändern sollten. Mit der Hilfe von Node.js kann der Benutzer ganz leicht Materialien und die respektiven Werte bearbeiten, hinzufügen oder löschen.',
        lovelyH4: 'Wie gelangen die Daten dorthin, wo sie benötigt werden?',
        lovelyP4: 'Jede Auswahl wird mit der Hilfe von Reacts useContext-Hook innerhalb der App gespeichert und kann somit einfach zwischen Komponenten hin- und hergereicht werden, sollten diese die Daten benötigen. Sämtliche Änderungen können dadurch sofort live ausgewertet und angezeigt werden.',
        lovelyH5: 'Und wenn der Kunde mehrere Rahmen bestellen möchte?',
        lovelyP5: 'Sollte ein Auftrag aus mehreren Teilen bestehen, weil Rahmen und/oder Kisten in unterschiedlichen Größen angefordert werden, kann der Nutzer den Auftrag in mehrere Teile separieren. Alle Kalkulationen und Auswahlen werden von der App korrekt und getrennt voneinander - Teil für Teil - ausgewertet.',
        lovelyH6: 'Was passiert, wenn alle Auswahlen getroffen wurden?',
        lovelyP6: 'Wenn alle Auswahlen getroffen wurden, werden die Dokumente erstellt und der Auftrag inklusive allen Dateien lokal abgespeichert. Da jeder Auftrag nach Kunde und Datum kategorisiert wird, ist er später leicht zu finden und kann erneut aufgerufen werden, um eventuelle Änderungen vorzunehmen.',
        lovelyH7: 'Zusammenfassung',
        lovelyP7: 'In diesem Projekt stecken mehr als 2 Jahre Arbeit, die sowohl herausforderend als auch genugtuend waren. Die Erfahrung, nah mit einem Kunden zu arbeiten und auf Feedback und Wünsche reagieren zu können, war eine großartige Möglichkeit, mich sowohl als Programmierer und auch als Mensch weiterzuentwickeln. Die App ermöglicht ein wöchentliches Zeitersparnis von etwa 15 Stunden und bereichert und optimiert somit Arbeitsabläufe innerhalb des Unternehmens immens.',
        lovelyPremiseH3: `Prämisse`,
        lovelyPremise: `Lovely Projects ist eine Rahmenmanufaktur, die professionelle Berahmung für Kunstwerke aller Art anbietet. Aufgrund der enormen Vielfalt an Materialien und der bisherigen Kostenschätzung mit Stift und Papier, entwickelte sich eine Notwendigkeit für Digitalisierung und genaue Kostenermittlung - genau das bietet der Lovely Manager.`
    }
}

export default lovelyProjectStrings;