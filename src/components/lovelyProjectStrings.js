const lovelyProjectStrings = {
    en: {
        lovelyP1: 'Lovely Manager is a cross-platform desktop application for Berlin frame manufacturing collective Lovely Projects. The app is estimated to save around 15 hours of work weekly by automating cost and frame measurement calculations and outputting documents for clients and work sheets.',
        lovelyP2: 'All materials and their respective values necessary for cost and measurement calculations are being stored locally in categorized JSON files. The app reads those files and displays the materials in dropdown menus in the frontend of the app.',
        lovelyP3: `The app has a built-in interface to make changes to individual materials, in case prices or dimensions change in the future. With the help of Node.js on the backend, the user is able to modify, add or delete materials and their respective values.`,
        lovelyP4: `Each selection is stored with the help of React's useContext hook, which allows changes in selection made by the user to be displayed and recalculated live. UseContext allows for easy transfer of data between components within the app.`,
        lovelyP5: `If an order consists of multiple parts and requires selection of frames and crates of various sizes, the user is able to split their selections into multiple parts with the app being able to separate all calculations and selections made correctly.`,
        lovelyP6: `When all selections have been made, documents are created and the order including all its files are stored locally and can be re-opened at a later time.`
    },
    de: {
        lovelyP1: 'Lovely Manager ist eine plattformübergreifende Desktop-Anwendung für die Berliner Rahmenmanufaktur Lovely Projects. Die App ermöglicht ein geschätztes wöchentliches Zeitersparnis von 15 Arbeitsstunden durch automatisierte Kosten- und Rahmenmaßberechnungen, sowie das Ausgeben von Kundendokumenten und Laufzetteln für die Arbeiter.'
    }
}

export default lovelyProjectStrings;