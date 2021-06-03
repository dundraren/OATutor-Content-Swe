var hints = [{id: "c561a1systems8a-h1", type: "hint", dependencies: [], title: "Eliminating Variables", text: "When both equations in the system have like variables of the second degree, solving them using elimination by addition is often easier than substitution. Generally, elimination is a far simpler method when the system involves only two equations in two variables (a two-by-two system), rather than a three-by-three system, as there are fewer steps.", variabilization: {}}, {id: "c561a1systems8a-h2", type: "hint", dependencies: ["c561a1systems8a-h1"], title: "Common Terms between Equations", text: "We observe that we can multiply 20 to the first equation, so that $$\\left(20\\right) x^2$$ becomes a common term in both equations. This would allow us to solve the system by elimination.", variabilization: {}}, {id: "c561a1systems8a-h3", type: "hint", dependencies: ["c561a1systems8a-h2"], title: "Shifting Terms", text: "We can shift all the terms in the equations to the left hand side to make the equations tidier and to make future steps easier.", variabilization: {}}, {id: "c561a1systems8a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(20\\right) y^2+y-\\left(19\\right)=0$$"], dependencies: ["c561a1systems8a-h3"], title: "Adding Equations", text: "We observe that by adding the two equations together, we can remove the $$x^2$$ term. What is the equation obtained after adding the two equations?", choices: ["$$\\left(20\\right) y^2+y-\\left(19\\right)=0$$", "$$\\left(20\\right) y^2-y+\\left(21\\right)=0$$", "$$y^2+\\left(20\\right) y-\\left(19\\right)=0$$"], variabilization: {}}, {id: "c561a1systems8a-h5", type: "hint", dependencies: ["c561a1systems8a-h4"], title: "Solving for y", text: "With the equation $$\\left(20\\right) y^2+y-\\left(19\\right)=0$$, we can solve for y. The y-coordinate found indicates a possible solution where an intersection may occur if the system of equations yield a feasible solution later on.", variabilization: {}}, {id: "c561a1systems8a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["-1,19/20"], dependencies: ["c561a1systems8a-h5"], title: "Solving for y", text: "We can use the quadratic formula $$y=\\frac{\\left(-b\\right)+-\\sqrt{b^2-\\left(4\\right) a c}}{\\left(2\\right) a}$$ to obtain the solutions. What are the y coordinates?", choices: ["$$-\\left(1\\right)-\\frac{19}{20}$$", "-1,19/20", "$$\\left(1\\right)-\\frac{19}{20}$$", "1,19/20"], variabilization: {}}, {id: "c561a1systems8a-h7", type: "hint", dependencies: ["c561a1systems8a-h6"], title: "Subsituting Possible Values", text: "We substitute all possible y coordinates back into one of the two equations to find the corresponding x coordinate to each y coordinate. Using any of the two equations work because the y coordinate found is a solution to the system of equations. We usually use the equation that is easier to calculate the other coordinate with.", variabilization: {}}, {id: "c561a1systems8a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["c561a1systems8a-h7"], title: "Substitution #1", text: "Substituting $$y=-1$$ into $$x^2+y^2=1$$. What is the corresponding x coordinate?", variabilization: {}}, {id: "c561a1systems8a-h9", type: "hint", dependencies: [], title: "Substitution #2", text: "Substituting $$y=\\frac{19}{20}$$ into $$y=\\left(20\\right) x^2-\\left(1\\right)$$. Find all possible corresponding x coordinates.", variabilization: {}}, {id: "c561a1systems8a-h10", type: "hint", dependencies: ["c561a1systems8a-h9"], title: "Substitution #2", text: "Add 1 to both sides.", variabilization: {}}, {id: "c561a1systems8a-h11", type: "hint", dependencies: ["c561a1systems8a-h10"], title: "Substitution #2", text: "Divide by 20 to both sides.", variabilization: {}}, {id: "c561a1systems8a-h12", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["-sqrt(39)/20,sqrt(39)/20"], dependencies: ["c561a1systems8a-h11"], title: "Substitution #2", text: "Take square root on both sides. What are the corresponding x coordinates?", choices: ["-sqrt(39)/20,sqrt(39)/20", "-sqrt(39)/40,sqrt(39)/40"], variabilization: {}}, {id: "c561a1systems8a-h13", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["c561a1systems8a-h12"], title: "Verifying the Number Of Intersections", text: "We have found the coordinates of all intersections. How many are there?", variabilization: {}}, ]; export {hints};