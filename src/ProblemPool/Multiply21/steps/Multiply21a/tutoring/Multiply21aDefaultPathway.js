var hints = [{id: "Multiply21a-h1", type: "hint", dependencies: [], title: "Parentheses", text: "We need to subtract in parentheses first."}, {id: "Multiply21a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5"], dependencies: ["Multiply21a-h1"], title: "Subtract", text: "What do we get for 2-7?"}, {id: "Multiply21a-h3", type: "hint", dependencies: ["Multiply21a-h2"], title: "Multiply", text: "We then need to multiply 3 with -5."}, {id: "Multiply21a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-15"], dependencies: ["Multiply21a-h3"], title: "Multiply", text: "What do we get after the multiplication?"}, {id: "Multiply21a-h5", type: "hint", dependencies: ["Multiply21a-h4"], title: "Subtract", text: "We then need to subtract -15 from 26."}, {id: "Multiply21a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["41"], dependencies: ["Multiply21a-h5"], title: "Subtract", text: "What do we get after the subtraction?"}, ]; export {hints};