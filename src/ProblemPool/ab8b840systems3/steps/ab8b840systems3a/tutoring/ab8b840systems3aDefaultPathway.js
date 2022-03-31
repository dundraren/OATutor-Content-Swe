var hints = [{id: "ab8b840systems3a-h1", type: "hint", dependencies: [], title: "Isolating Variables", text: "Solve the first equation for y.", variabilization: {}}, {id: "ab8b840systems3a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x-5"], dependencies: ["ab8b840systems3a-h1"], title: "Isolating Variables", text: "What does y equal? Write y in terms of x.", variabilization: {}}, {id: "ab8b840systems3a-h3", type: "hint", dependencies: ["ab8b840systems3a-h2"], title: "Substitution", text: "Substitute the expression x-5 for y in the second equation.", variabilization: {}}, {id: "ab8b840systems3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["ab8b840systems3a-h3"], title: "Isolating Variables", text: "What does x equal in $$2x-5(x-5)=1$$?", variabilization: {}}, {id: "ab8b840systems3a-h5", type: "hint", dependencies: ["ab8b840systems3a-h4"], title: "Substitution", text: "Substitute $$x=8$$ into the first equation and solve for y.", variabilization: {}}, {id: "ab8b840systems3a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["ab8b840systems3a-h5"], title: "Substitution", text: "What does y equal in $$-8+y=-5$$?", variabilization: {}}, {id: "ab8b840systems3a-h7", type: "hint", dependencies: ["ab8b840systems3a-h6"], title: "Checking the Solution", text: "Check the solution by substituting (8,3) into both equations.", variabilization: {}}, {id: "ab8b840systems3a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["ab8b840systems3a-h7"], title: "Checking the Solution", text: "Does $$-8+3=-5$$?", choices: ["TRUE", "FALSE"], variabilization: {}}, {id: "ab8b840systems3a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["ab8b840systems3a-h8"], title: "Checking the Solution", text: "Does $$2(8)-5(3)=1$$", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};