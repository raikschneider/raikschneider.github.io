const lovelyProjectStrings = {
    en: {
        lovelyH1: `What's Lovely Manager?`,
        lovelyP1: 'Lovely Manager is a cross-platform desktop application for Berlin frame manufacturing collective Lovely Projects. The app is estimated to save around 15 hours of work weekly by automating cost and frame measurement calculations and outputting documents for clients and work sheets. Lovely Manager was built in Electron using Node.js and the React framework.',
        lovelyH2: 'Where is the data coming from?',
        lovelyP2: 'Hundreds of different materials and their respective values necessary for cost and measurement calculations are being stored locally in categorized JSON files. Lovely Manager reads the files and displays the materials in dropdown menus in the frontend.',
        lovelyH3: 'What if the data changes?',
        lovelyP3: `The app has a built-in interface to modify individual materials and their data, in case prices or dimensions change in the future. With the help of Node.js on the backend, the user is able to modify, add or delete materials and their respective values.`,
        lovelyH4: 'How does data traverse the app?',
        lovelyP4: `Each selection is stored with the help of React's useContext hook, which allows changes in selection made by the user to be displayed and recalculated live. UseContext allows for easy transfer of data between components within the app.`,
        lovelyH5: 'What if a customer orders multiple frames?',
        lovelyP5: `If an order consists of multiple parts and requires selection of frames and crates of various sizes, the user is able to split their selections into multiple parts with the app being able to separate all calculations and selections made correctly.`,
        lovelyH6: 'What happens when all selections have been made?',
        lovelyP6: `When all selections have been made, documents are created and the order including all its files are being stored locally and can be re-opened at a later time. Orders are categorized by customer and date and are thus easy to find.`,
        lovelyH7: 'Resumé',
        lovelyP7: `I was working on this project on and off for over two years. It was a great tool for growing my skills and learning about app design. Working closely with the client and adapting to their feedback and needs was both challenging and rewarding.`
    },
    de: {
        lovelyH1: 'Was ist Lovely Manager?',
        lovelyP1: 'Lovely Manager ist eine plattformübergreifende Desktop-Anwendung für die Berliner Rahmenmanufaktur Lovely Projects. Die App ermöglicht ein geschätztes wöchentliches Zeitersparnis von 15 Arbeitsstunden durch automatisierte Kosten- und Rahmenmaßberechnungen, sowie das Ausgeben von Kundendokumenten und Laufzetteln für die Arbeiter. Lovely Manager läuft in Electron und wurde mit React und Node.js gebaut.',
        lovelyH2: 'Woher kommen die Daten?',
        lovelyP2: `Hunderte Materialien und die für Berechnungen notwendigen Werte werden lokal in JSON-Dateien kategorisiert und gespeichert. Die Dateien werden vom Lovely Manager ausgelesen und die Materialien werden im Frontend via Ausklappmenüs angezeigt.`,
        lovelyH3: 'Was ist, wenn die Daten sich ändern?',
        lovelyP3: 'In der App findet sich außerdem eine Oberfläche, die es dem Nutzer ermöglicht, die Materialien und die dazugehörigen Werte zu modifizieren, falls sich Preise und Dimensionen in der Zukunft ändern sollten. Mit der Hilfe von Node.js kann der Benutzer ganz leicht Materialien und die respektiven Werte bearbeiten, hinzufügen oder löschen.',
        lovelyH4: 'Wie gelangen die Daten dorthin, wo sie benötigt werden?',
        lovelyP4: 'Jede Auswahl wird mit der Hilfe von Reacts useContext-Hook innerhalb der App gespeichert und kann somit einfach zwischen Komponenten hin- und hergereicht werden, sollten diese die Daten benötigen. Sämtliche Änderungen können dadurch sofort live ausgewertet und angezeigt werden.',
        lovelyH5: 'Und wenn der Kunde mehrere Rahmen bestellen möchte?',
        lovelyP5: 'Sollte ein Auftrag aus mehreren Teilen bestehen, weil Rahmen und/oder Kisten in unterschiedlichen Größen angefordert werden, kann der Nutzer den Auftrag in mehrere Teile separieren. Alle Kalkulationen und Auswahlen werden von der App korrekt und getrennt voneinander - Teil für Teil - ausgewertet.',
        lovelyH6: 'Was passiert, wenn alle Auswahlen getroffen wurden?',
        lovelyP6: 'Wenn alle Auswahlen getroffen wurden, werden die Dokumente erstellt und der Auftrag inklusive allen Dateien lokal abgespeichert. Da jeder Auftrag nach Kunde und Datum kategorisiert wird, ist er später leicht zu finden und kann erneut aufgerufen werden, um eventuelle Änderungen vorzunehmen.',
        lovelyH7: 'Zusammenfassung',
        lovelyP7: 'In diesem Projekt stecken mehr als 2 Jahre Arbeit, die sowohl herausforderend als auch genugtuend waren. Die Erfahrung, nah mit einem Kunden zu arbeiten und auf Feedback und Wünsche reagieren zu können, war eine großartige Möglichkeit, mich sowohl als Programmierer als auch als Mensch weiterzuentwickeln.'
    }
}

export default lovelyProjectStrings;