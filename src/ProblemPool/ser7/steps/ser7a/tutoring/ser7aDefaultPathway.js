var hints = [{id: "ser7a-h1", type: "hint", dependencies: [], title: "Find $$a_1$$ and $$a_n$$", text: "We are given $$a_1=-1.7$$ and $$a_n=4.8$$", variabilization: {}}, {id: "ser7a-h2", type: "hint", dependencies: ["ser7a-h1"], title: "Find n", text: "Count the number of terms in the sequence to find $$n=6$$.", variabilization: {}}, {id: "ser7a-h3", type: "hint", dependencies: ["ser7a-h2"], title: "Formula for Sum of the first n terms of Arithmetic Sequence", text: "Substitute values for $$a_1$$, $$a_n$$ , and n into the formula: $$S_n=\\frac{n \\left(a_1+a_n\\right)}{2}$$", variabilization: {}}, {id: "ser7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9.3"], dependencies: ["ser7a-h3"], title: "Solve for $$S_6$$", text: "What is S_6=6*(-1.7+4.8)/2?", variabilization: {}}, {id: "ser7a-h5", type: "hint", dependencies: ["ser7a-h4"], title: "Sum of the first 6 terms of Arithmetic Sequence", text: "The Sum of the first 6 terms of Arithmetic Series is 9.3", variabilization: {}}, ]; export {hints};