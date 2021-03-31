var hints = [{id: "probsolve5a-h1", type: "hint", dependencies: [], title: "Translate the problem into an equation", text: "The first step is to translate the question into a mathematical equation."}, {id: "probsolve5a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["n, $$n+\\left(1\\right)$$, $$n+\\left(2\\right)$$"], dependencies: ["probsolve5a-h1"], title: "Writing consecutive numbers", text: "Which of the following represent consecutive numbers in terms of n?", choices: ["n, $$n+\\left(2\\right)$$, $$n+\\left(5\\right)$$", "n, 2n, 3n", "n, $$n+\\left(1\\right)$$, $$n+\\left(2\\right)$$"]}, {id: "probsolve5a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-36"], dependencies: ["probsolve5a-h2"], title: "Total sum", text: "What should the numbers add up to?"}, {id: "probsolve5a-h4", type: "hint", dependencies: ["probsolve5a-h3"], title: "Solving the equation", text: "The next step is to solve for n"}, {id: "probsolve5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-13"], dependencies: ["probsolve5a-h4"], title: "Solving for n", text: "What is the value of n in the equation $$\\left(3\\right) n+\\left(3\\right)=-36$$?"}, {id: "probsolve5a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-12"], dependencies: ["probsolve5a-h5"], title: "Finding the consecutive numbers", text: "What is $$n+\\left(1\\right)$$?"}, {id: "probsolve5a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-11"], dependencies: ["probsolve5a-h6"], title: "Finding the consecutive numbers", text: "What is $$n+\\left(2\\right)$$?"}, ]; export {hints};