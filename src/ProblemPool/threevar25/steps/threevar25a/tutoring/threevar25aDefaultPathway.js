var hints = [{id: "threevar25a-h1", type: "hint", dependencies: [], title: "Setting Up", text: "Set up three equatinos in variable form to represent the situation $$(c=children$$ tickets, $$s=student$$ tickets, and $$a=adult$$ tickets). We have $$c+s+a=1175$$, $$\\left(22.5\\right) c+\\left(20\\right) s+\\left(29\\right) a=28112.5$$, and $$2c=a$$.", variabilization: {}}, {id: "threevar25a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3c+s=1175"], dependencies: ["threevar25a-h1"], title: "Rearrange Equation", text: "Plug in $$a=2c$$ into $$c+s+a=1175$$.", variabilization: {}}, {id: "threevar25a-h3", type: "hint", dependencies: ["threevar25a-h2"], title: "Simplifying to 1 Variable", text: "Rearrange $$\\left(3\\right) c+s=1175$$ to isolate s and plug in the expresion for s into the equation containing the total price of tickets. Plug in $$a=2c$$ into the total price of tickets equation so that the final equation only has one variable c.", variabilization: {}}, {id: "threevar25a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["500"], dependencies: ["threevar25a-h3"], title: "Solve for c", text: "Using algebra solve for c, the number of childrens tickets sold", variabilization: {}}, {id: "threevar25a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["225"], dependencies: ["threevar25a-h4"], title: "Solve for s", text: "Plug in the value of c into $$\\left(3\\right) c+s=1175$$ and solve for s, number of student tickets sold", variabilization: {}}, {id: "threevar25a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["250"], dependencies: ["threevar25a-h5"], title: "Solve for p", text: "Plug in the value of c and s into any equatino containing p to solve for the number of parent tickets sold", variabilization: {}}, ]; export {hints};