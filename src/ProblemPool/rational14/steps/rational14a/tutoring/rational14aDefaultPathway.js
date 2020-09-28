var hints = [{id: "rational14a-h1", type: "hint", dependencies: [], title: "Factoring Expressions", text: "Factor the numerator and denominator of the first expression."}, {id: "rational14a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(c+6)(c-4)"], dependencies: ["rational14a-h1"], title: "Factoring Trinomials", text: "What are the factors of the first numerator?"}, {id: "rational14a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(c+6)(c+6)"], dependencies: ["rational14a-h2"], title: "Factoring Trinomials", text: "What are the factors of the first denominator?"}, {id: "rational14a-h4", type: "hint", dependencies: ["rational14a-h3"], title: "Factoring Expressions", text: "Factor the numerator and denominator of the second expression."}, {id: "rational14a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(c-4)(c-6)"], dependencies: ["rational14a-h4"], title: "Factoring Trinomials", text: "What are the factors of the second numerator?"}, {id: "rational14a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(c-4)(c-4)"], dependencies: ["rational14a-h5"], title: "Factoring Trinomials", text: "What are the factors of the second denominator?"}, {id: "rational14a-h7", type: "hint", dependencies: ["rational14a-h6"], title: "Multiplying Expressions", text: "Multilply numerators and denominators."}, {id: "rational14a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(c+6)(c-4)(c-4)(-6)"], dependencies: ["rational14a-h7"], title: "Simplifying Expressions", text: "After multiplying the factors, what is the numerator?"}, {id: "rational14a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(c+6)(c+6)(c-4)(c-4)"], dependencies: ["rational14a-h8"], title: "Simplifying Expressions", text: "After multiplying the factors, what is the denominator?"}, {id: "rational14a-h10", type: "hint", dependencies: ["rational14a-h9"], title: "Common Factor", text: "Cancel the common factors from the numerator and denominator."}, {id: "rational14a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(c-6)(c+6)"], dependencies: ["rational14a-h10"], title: "Common Factor", text: "What is the simplified expression?"}, ]; export {hints};