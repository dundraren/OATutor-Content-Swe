var hints = [{id: "general12a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["no"], dependencies: [], title: "Is there a greatest common factor?", text: "", choices: ["Yes", "No"], variabilization: {}}, {id: "general12a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["binomial"], dependencies: ["general12a-h1"], title: "Is the polynomial a binomial, trinomial, or are there more than three terms?", text: "", choices: ["binomial", "trinomial", "other"], variabilization: {}}, {id: "general12a-h3", type: "hint", dependencies: ["general12a-h2"], title: "Binomial", text: "Since it's a binomial, check to see whether the expression is a sum or difference.", variabilization: {}}, {id: "general12a-h4", type: "hint", dependencies: ["general12a-h3"], title: "Difference of squares", text: "$$a^2-b^2=\\left(a-b\\right) \\left(a+b\\right)$$", variabilization: {}}, {id: "general12a-h5", type: "hint", dependencies: ["general12a-h4"], title: "Check", text: "If you are left with $$\\left(m^2+\\left(9\\right)\\right) \\left(m^2-\\left(9\\right)\\right)$$, look at the expression to see if you can further factor the expression. $$m^2-\\left(9\\right)$$ can be further factored!", variabilization: {}}, {id: "general12a-h6", type: "hint", dependencies: ["general12a-h5"], title: "Difference of squares again", text: "$$m^2-\\left(9\\right)$$ is a difference of squares and can be furthered factored into $$\\left(m+\\left(3\\right)\\right) \\left(m-\\left(3\\right)\\right)$$.", variabilization: {}}, ]; export {hints};