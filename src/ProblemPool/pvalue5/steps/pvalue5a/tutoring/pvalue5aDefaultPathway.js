var hints = [{id: "pvalue5a-h1", type: "hint", dependencies: [], title: "p-value Definition", text: "The p-value is the probability that, if the null hypothesis is true, the results from another randomly selected sample will be as extreme or more extreme as the results obtained from the given sample. A large p-value calculated from the data indicates that we should not reject the null hypothesis. The smaller the p-value, the more unlikely the outcome, and the stronger the evidence is against the null hypothesis. We would reject the null hypothesis if the evidence is strongly against it.", variabilization: {}}, {id: "pvalue5a-h2", type: "hint", dependencies: ["pvalue5a-h1"], title: "Significance Level Definition", text: "A preset $$αa$$(also$$ $$called$$ $$the$$ $$\"significance$$ $$level\")$$ $$is$$ $$the$$ $$probability$$ $$of$$ $$a$$ $$Type$$ $$I$$ $$error$$ $$(rejecting$$ $$the$$ $$null$$ $$hypothesis$$ $$when$$ $$the$$ $$null$$ $$hypothesis$$ $$is$$ $$true)$$. $$It$$ $$may$$ $$or$$ $$may$$ $$not$$ $$be$$ $$given$$ $$to$$ $$you$$ $$at$$ $$the$$ $$beginning$$ $$of$$ $$the$$ $$problem$$.", variabilization: {}}, {id: "pvalue5a-h3", type: "hint", dependencies: ["pvalue5a-h2"], title: "Drawing Conclusions", text: "The shaded image of the distribution has a description that says \"p-value is approximately 0,\" and we know from the problem that the significance level is 1%, which is 0.001. Since the p-value is approximately 0, it is probably even smaller than 0.001, so we can say that it is low compared to the significance level.", variabilization: {}}, ]; export {hints};