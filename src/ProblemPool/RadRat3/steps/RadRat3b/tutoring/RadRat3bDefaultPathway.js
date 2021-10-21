var hints = [{id: "RadRat3b-h1", type: "hint", dependencies: [], title: "Perfect Square", text: "Factor a perfect square from the radicand to simplify the expression: $$\\sqrt{\\operatorname{162}\\left(a^5\\right) b^4}=\\sqrt{\\operatorname{81}\\left(a^4\\right) b^4 \\left(2\\right) a}$$", variabilization: {}}, {id: "RadRat3b-h2", type: "hint", dependencies: ["RadRat3b-h1"], title: "The Product Rule for Simplifying Square Roots", text: "If a and b are nonnegative, the square root of the product ab is equal to the product of the square roots of a and b: $$\\sqrt{ab}=\\sqrt{a} \\sqrt{b}$$", variabilization: {}}, {id: "RadRat3b-h3", type: "hint", dependencies: ["RadRat3b-h2"], title: "The Product Rule for Simplifying Square Roots", text: "Use the product rule to simplify the expression: $$\\sqrt{\\operatorname{81}\\left(a^4\\right) b^4 \\left(2\\right) a}=\\sqrt{\\operatorname{81}\\left(a^4\\right) b^4} \\sqrt{\\left(2\\right) a}$$", variabilization: {}}, {id: "RadRat3b-h4", type: "hint", dependencies: ["RadRat3b-h3"], title: "Principal Square Root", text: "Simplify the expression: $$\\sqrt{\\left(81\\right) a^4 b^4} \\sqrt{\\left(2\\right) a}=\\left(9\\right) a^2 b^2 \\sqrt{\\left(2\\right) a}$$", variabilization: {}}, ]; export {hints};