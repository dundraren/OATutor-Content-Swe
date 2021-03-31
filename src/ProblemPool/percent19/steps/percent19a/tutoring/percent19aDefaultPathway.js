var hints = [{id: "percent19a-h1", type: "hint", dependencies: [], title: "Simple Interest Formula", text: "The formula for simple interest is $$I=Prt$$, with I being interest, P being the initial amount of money invested (also called principal), r being the rate, and t being the time."}, {id: "percent19a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["P"], dependencies: ["percent19a-h1"], title: "Variable in question", text: "What do we want to find? In other words, what variable are we solving for?", choices: ["P", "r", "t", "I"]}, {id: "percent19a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.075"], dependencies: ["percent19a-h2"], title: "Finding the value for r", text: "What is the interest rate? Write as a decimal"}, {id: "percent19a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["percent19a-h3"], title: "Finding the value for t", text: "How many years are we considering?"}, {id: "percent19a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6596.25"], dependencies: ["percent19a-h4"], title: "Finding the value for I", text: "How much interest did Eduardo pay? Write without the dollar sign."}, {id: "percent19a-h6", type: "hint", dependencies: ["percent19a-h5"], title: "Solving for P", text: "The equation for P is $$P=\\frac{I}{r t}$$"}, ]; export {hints};