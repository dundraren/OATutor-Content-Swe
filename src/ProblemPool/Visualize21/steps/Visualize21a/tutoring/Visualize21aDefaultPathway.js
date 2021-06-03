var hints = [{id: "Visualize21a-h1", type: "hint", dependencies: [], title: "Interpreting the Problem", text: "We are looking for the quotient of the difference of m and n, and p. This means we want to divide the difference of m and n by p.", variabilization: {}}, {id: "Visualize21a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["m-n"], dependencies: ["Visualize21a-h1"], title: "Difference", text: "What is the algebraic expression for the difference of m and n?", choices: ["m-n", "n-m", "$$\\frac{m}{n}$$", "$$\\frac{n}{m}$$"], variabilization: {}}, {id: "Visualize21a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{m-n}{p}$$"], dependencies: ["Visualize21a-h2"], title: "Quotient", text: "What is the algebraic expression for the quotient of m-n and p?", choices: ["(m-n)-p", "p-(m-n)", "$$\\frac{m-n}{p}$$", "$$\\frac{p}{m-n}$$"], variabilization: {}}, ]; export {hints};