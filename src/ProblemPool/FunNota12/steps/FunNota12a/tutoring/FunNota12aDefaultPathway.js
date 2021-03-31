var hints = [{id: "FunNota12a-h1", type: "hint", dependencies: [], title: "Algebraic form", text: "To express the relationship in this form, we need to be able to write the relationship where y is a fucntion of x, which means wirting it as y $$=$$ [expression involving x]."}, {id: "FunNota12a-h2", type: "hint", dependencies: ["FunNota12a-h1"], title: "Subtraction", text: "Subtract $$x^2$$ from both sides, and we get $$y^2=\\left(1\\right)-x^2$$."}, {id: "FunNota12a-h3", type: "hint", dependencies: ["FunNota12a-h2"], title: "Sqrt", text: "Solve y in this equation, and we get $$y=\\sqrt{\\left(1\\right)-x^2}$$ and $$-\\sqrt{\\left(1\\right)-x^2}$$."}, {id: "FunNota12a-h4", type: "hint", dependencies: ["FunNota12a-h3"], title: "Explanation of the result", text: "We get two outputs corresponding to the same input, so this relationship cannot be represented as a single function."}, ]; export {hints};