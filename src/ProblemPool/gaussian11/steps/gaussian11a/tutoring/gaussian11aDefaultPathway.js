var hints = [{id: "gaussian11a-h1", type: "hint", dependencies: [], title: "Augumented Matrix", text: "First, write the system of equations as an augumented matrix.", variabilization: {}}, {id: "gaussian11a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\begin{bmatrix} 5 & 3 & 9 & -1 & -2 & 3 & -1 & -2 & -1 & -4 & 5 & -1 \\end{bmatrix}$$"], dependencies: ["gaussian11a-h1"], title: "Augumented Matrix", text: "How do you write the system as an augumented matrix?", choices: ["$$\\begin{bmatrix} 5 & 3 & 9 & -1 & -2 & 3 & -1 & -2 & 1 & 4 & 5 & 1 \\end{bmatrix}$$", "$$\\begin{bmatrix} 5 & 3 & 9 & -1 & -2 & 3 & -1 & -2 & -1 & -4 & 5 & -1 \\end{bmatrix}$$", "$$\\begin{bmatrix} 1 & 9 & 3 & -1 & -2 & 3 & -1 & -2 & -1 & -4 & 5 & -1 \\end{bmatrix}$$", "None of the Above"], variabilization: {}}, {id: "gaussian11a-h3", type: "hint", dependencies: ["gaussian11a-h2"], title: "Use a calculator", text: "On the matrix page of the calculator, enter the augmented matrix above as the matrix variable [A].", variabilization: {}}, {id: "gaussian11a-h4", type: "hint", dependencies: ["gaussian11a-h3"], title: "Use a calculator", text: "Use the ref( function in the calculator, calling up the matrix variable [A]. ref([A])", variabilization: {}}, {id: "gaussian11a-h5", type: "hint", dependencies: ["gaussian11a-h4"], title: "Translate", text: "Using the matrix the calculator outputed, transform the matrix to a system, using spaces to seperate the equations.", subHints: [{id: "gaussian11a-h5-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$x+\\frac{3}{5} y+\\frac{9}{5} z=\\frac{1}{5}$$ $$y+\\frac{13}{21} z=-\\left(\\frac{4}{7}\\right)$$ $$z=-\\left(\\frac{24}{187}\\right)$$.", variabilization: {}}, ], variabilization: {}}, {id: "gaussian11a-h6", type: "hint", dependencies: ["gaussian11a-h5"], title: "Back-substitute", text: "Use back substituition to solve the system.", variabilization: {}}, {id: "gaussian11a-h7", type: "hint", dependencies: ["gaussian11a-h6"], title: "Answer", text: "Therefore, the answer to the system of equations is $$(\\frac{61}{187}-\\frac{92}{187},\\frac{-\\left(92\\right)}{187}-\\frac{24}{187})$$.", variabilization: {}}, ]; export {hints};