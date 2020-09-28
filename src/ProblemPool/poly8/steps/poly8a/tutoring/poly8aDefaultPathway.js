var hints = [{id: "poly8a-h1", type: "hint", dependencies: [], title: "First Terms", text: "First, find the product of the two first terms."}, {id: "poly8a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3x^2"], dependencies: ["poly8a-h1"], title: "First Terms", text: "What is $$3x x$$?"}, {id: "poly8a-h3", type: "hint", dependencies: ["poly8a-h2"], title: "Outside Terms", text: "Now, find the product of the two outside terms."}, {id: "poly8a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5x"], dependencies: ["poly8a-h3"], title: "Outside Terms", text: "What is $$-5x$$?"}, {id: "poly8a-h5", type: "hint", dependencies: ["poly8a-h4"], title: "Inside Terms", text: "Next, find the product of the two inside terms."}, {id: "poly8a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["21x"], dependencies: ["poly8a-h5"], title: "Inside Terms", text: "What is $$7\\times3 x$$?"}, {id: "poly8a-h7", type: "hint", dependencies: ["poly8a-h6"], title: "Last Terms", text: "Finally, find the product of the two last terms."}, {id: "poly8a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-35"], dependencies: ["poly8a-h7"], title: "Last Terms", text: "What is $$7\\times-5$$?"}, {id: "poly8a-h9", type: "hint", dependencies: ["poly8a-h8"], title: "Combine Like Terms", text: "Now that we have the terms foiled out, we can combine like terms. The $$x^2$$ and constant terms cannot be simplified futher, but the coeffecients of the x terms can be added together to simplify the x value."}, {id: "poly8a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16x"], dependencies: ["poly8a-h9"], title: "Combine Like Terms", text: "What is $$-5x+21x$$?"}, {id: "poly8a-h11", type: "hint", dependencies: ["poly8a-h10"], title: "Simplified Expression", text: "The last step is to write out the expression as a sum of all of the values: $$3x^2+16x-35$$."}, ]; export {hints};