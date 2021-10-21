var hints = [{id: "a381217systemeq3a-h1", type: "hint", dependencies: [], title: "Convert amounts into first equation", text: "Let's use \"n\" as the amount in pounds of nuts and \"c\" as the amount in pounds of chocolate chips. The total weight combined is 20 pounds, therefore we can determine that the first equation is $$n+c=20$$", variabilization: {}}, {id: "a381217systemeq3a-h2", type: "hint", dependencies: ["a381217systemeq3a-h1"], title: "Convert amoutn into second equation", text: "Because the total amount of money was 20*$7.60 $$=$$ $152 and nuts are $9.00 per pound and chocolate chips $2 per pound, we can determine that the second equation is $$\\left(9\\right) n+\\left(2\\right) c=152$$", variabilization: {}}, {id: "a381217systemeq3a-h3", type: "hint", dependencies: ["a381217systemeq3a-h2"], title: "Isolate Variable", text: "Let's use the first equation to isolate c. With the equation, we can subtract a from both sides to get $$c=20-n$$", variabilization: {}}, {id: "a381217systemeq3a-h4", type: "hint", dependencies: ["a381217systemeq3a-h3"], title: "Plug in", text: "We can plug in $$c=20-n$$ using the second equation to get $$\\left(9\\right) n+\\operatorname{2}\\left(\\left(20\\right)-n\\right)=152$$", variabilization: {}}, {id: "a381217systemeq3a-h5", type: "hint", dependencies: ["a381217systemeq3a-h4"], title: "Solve for a", text: "We can determine that the second equation after plugging in \"c\" would be $$\\left(7\\right) n+\\left(40\\right)=152$$. We now isolate the variable \"n\" and get $$7n=112$$. Then, we can divide both sides by 7 to get $$n=16$$. There are 16 pounds of nuts.", variabilization: {}}, {id: "a381217systemeq3a-h6", type: "hint", dependencies: ["a381217systemeq3a-h5"], title: "Solve for c", text: "After solving for \"n\", we can plug that value into the first equation to get $$\\left(16\\right)+c=20$$ which we can determine c to be 4.", variabilization: {}}, ]; export {hints};